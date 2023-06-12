import { useState } from "react";
import Seo from "@/components/Seo";
import { SmallButton } from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Container from "@/components/ui/Container";
import InputBox from "@/components/ui/InputBox";
import useInputs from "@/hooks/useInputs";
import { calculateDiscountRate } from "@/util/calc";
import { addComma, deleteComma } from "@/util/decimalHelpers";
import { formula } from "@/util/formula";

export default function Discount() {
  const initialInputs = {
    originalPrice: "",
    discountedPrice: "",
  };
  const [inputs, onChange, reset] = useInputs(initialInputs);
  const { originalPrice, discountedPrice } = inputs;

  const [discountRate, setDiscountRate] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const convertedOriginalPrice = Number(deleteComma(originalPrice));
    const convertedDiscountedPrice = Number(deleteComma(discountedPrice));

    const convertedDiscountRate = calculateDiscountRate(
      convertedOriginalPrice,
      convertedDiscountedPrice
    );

    setDiscountRate(convertedDiscountRate);
  };

  const resetAll = () => {
    reset();
    setDiscountRate(0);
  };

  const [isHidden, setIsHidden] = useState(true);
  const handleHidden = () => {
    setIsHidden((cur) => !cur);
  };

  return (
    <Container>
      <Seo title="할인율 계산기" />
      <form className="px-4 flex flex-col" onSubmit={onSubmit}>
        <SmallButton style="mb-4 self-end max-md:hidden" onClick={handleHidden}>
          {`엑셀 수식 ${isHidden ? "보기" : "가리기"}`}
        </SmallButton>
        <InputBox
          label="기존 판매가"
          unit="원"
          id="originalPrice"
          value={originalPrice}
          onChange={onChange}
        />
        <InputBox
          label="행사 판매가"
          unit="원"
          id="discountedPrice"
          value={discountedPrice}
          onChange={onChange}
        />
        <InputBox
          label="할인율"
          unit="%"
          disabled
          value={addComma(discountRate)}
          formula={formula.discountRate}
          hidden={isHidden}
        />
        <ButtonGroup onClick={resetAll} />
      </form>
    </Container>
  );
}
