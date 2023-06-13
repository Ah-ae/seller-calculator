import { useState } from "react";
import Seo from "@/components/Seo";
import { SmallButton } from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Container from "@/components/ui/Container";
import InputBox from "@/components/ui/InputBox";
import useInputs from "@/hooks/useInputs";
import {
  calculateSellingPrice,
  calculateMallCommissionPrice,
  calculateMarginPrice,
} from "@/util/calc";
import { addComma, deleteComma } from "@/util/decimalHelpers";
import { formula } from "@/util/formula";

export default function SellingPrice() {
  const initialInputs = {
    purchaseCost: "",
    commission: "",
    marginRate: "",
  };
  const [inputs, onChange, reset] = useInputs(initialInputs);
  const { purchaseCost, commission, marginRate } = inputs;

  const [sellingPrice, setSellingPrice] = useState(0);
  const [commissionPrice, setCommissionPrice] = useState(0);
  const [marginPrice, setMarginPrice] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const convertedPurchaseCost = Number(deleteComma(purchaseCost));
    const convertedCommissionPercentage = Number(deleteComma(commission));
    const convertedMarinRate = Number(deleteComma(marginRate));

    const convertedSellingPrice = calculateSellingPrice(
      convertedPurchaseCost,
      convertedCommissionPercentage,
      convertedMarinRate
    );

    const convertedCommissionPrice = calculateMallCommissionPrice(
      convertedSellingPrice,
      convertedCommissionPercentage
    );

    const convertedMarginPrice = calculateMarginPrice(
      convertedSellingPrice,
      convertedPurchaseCost,
      convertedCommissionPrice,
      0,
      0
    );

    setSellingPrice(convertedSellingPrice);
    setCommissionPrice(convertedCommissionPrice);
    setMarginPrice(convertedMarginPrice);
  };

  const resetAll = () => {
    reset();
    setSellingPrice(0);
    setCommissionPrice(0);
    setMarginPrice(0);
  };

  const [isHidden, setIsHidden] = useState(true);
  const handleHidden = () => {
    setIsHidden((cur) => !cur);
  };

  return (
    <Container>
      <Seo title="판매가 계산기" />
      <form className="px-4 flex flex-col" onSubmit={onSubmit}>
        <SmallButton style="mb-4 self-end max-md:hidden" onClick={handleHidden}>
          {`엑셀 수식 ${isHidden ? "보기" : "가리기"}`}
        </SmallButton>
        <InputBox
          label="매입가"
          desc="(VAT 포함)"
          unit="원"
          id="purchaseCost"
          value={purchaseCost}
          onChange={onChange}
        />
        <InputBox
          label="판매가"
          unit="원"
          disabled
          value={addComma(sellingPrice)}
          formula={formula.sellingPrice}
          hidden={isHidden}
        />
        <InputBox label="배송비" unit="원" isNotUsed disabled />
        <InputBox
          label="기타 비용"
          desc="(포장, 부자재 등)"
          unit="원"
          isNotUsed
          disabled
        />
        <InputBox
          label="마켓 수수료"
          desc="(%)"
          unit="%"
          id="commission"
          value={commission}
          onChange={onChange}
        />
        <InputBox
          label="마켓 수수료"
          desc="(원)"
          unit="원"
          disabled
          value={addComma(commissionPrice)}
          formula={formula.commissionPrice}
          hidden={isHidden}
        />
        <InputBox label="쇼핑몰 정산 금액" unit="원" isNotUsed disabled />
        <InputBox
          label="마진"
          unit="원"
          disabled
          value={addComma(marginPrice)}
          formula={formula.marginPriceForSellingPrice}
          hidden={isHidden}
        />
        <InputBox
          label="마진율"
          unit="%"
          id="marginRate"
          value={marginRate}
          onChange={onChange}
        />
        <ButtonGroup reset={resetAll} />
      </form>
    </Container>
  );
}
