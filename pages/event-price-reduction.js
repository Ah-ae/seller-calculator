import { useState } from "react";
import Seo from "@/components/Seo";
import { SmallButton } from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Container from "@/components/ui/Container";
import InputBox from "@/components/ui/InputBox";
import useInputs from "@/hooks/useInputs";
import { calculateReductionPercentage } from "@/util/calc";
import { addComma, deleteComma } from "@/util/decimalHelpers";
import { formula } from "@/util/formula";

export default function EventPriceReduction() {
  const initialInputs = {
    originalPrice: "",
    discountRate: "",
  };
  const [inputs, onChange, reset] = useInputs(initialInputs);
  const { originalPrice, discountRate } = inputs;

  const [reductionPercentage, setReductionPercentage] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const convertedOriginalPrice = Number(deleteComma(originalPrice));
    const convertedDiscountRate = Number(deleteComma(discountRate));

    const convertedReductionPercentage = calculateReductionPercentage(
      convertedOriginalPrice,
      convertedDiscountRate
    );

    setReductionPercentage(convertedReductionPercentage);
  };

  const resetAll = () => {
    reset();
    setReductionPercentage(0);
  };

  const [isHidden, setIsHidden] = useState(true);
  const handleHidden = () => {
    setIsHidden((cur) => !cur);
  };

  return (
    <Container>
      <Seo title="행사가 환원 계산기" />
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
          label="할인율"
          unit="%"
          id="discountRate"
          value={discountRate}
          onChange={onChange}
        />
        <InputBox
          label="행사가 환원"
          unit="%"
          disabled
          value={addComma(reductionPercentage)}
          formula={formula.reductionPercentage}
          hidden={isHidden}
        />
        <ButtonGroup onClick={resetAll} />
      </form>
    </Container>
  );
}
