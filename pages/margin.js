import { useState } from "react";
import Seo from "@/components/Seo";
import { SmallButton } from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Container from "@/components/ui/Container";
import InputList from "@/components/ui/InputList";
import OutputList from "@/components/ui/OutputList";
import useInputs from "@/hooks/useInputs";
import {
  calculateMallCommissionPrice,
  calculateSettlementAmount,
  calculateMarginPrice,
  calculateMarginRate,
} from "@/util/calc";
import { deleteComma } from "@/util/decimalHelpers";
import { formula } from "@/util/formula";

export default function Margin() {
  const initialInputs = {
    purchaseCost: "",
    sellingPrice: "",
    shipping: "",
    others: "",
    commission: "",
  };
  const [inputs, onChange, reset] = useInputs(initialInputs);
  const { purchaseCost, sellingPrice, shipping, others, commission } = inputs;

  const [commissionPrice, setCommissionPrice] = useState(0);
  const [settlement, setSettlement] = useState(0);
  const [marginPrice, setMarginPrice] = useState(0);
  const [marginRate, setMarginRate] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const convertedPurchaseCost = Number(deleteComma(purchaseCost));
    const convertedSellingPrice = Number(deleteComma(sellingPrice));
    const convertedShippingValue = Number(deleteComma(shipping));
    const convertedOthersValue = Number(deleteComma(others));
    const convertedCommissionPercentage = Number(deleteComma(commission));

    const convertedCommissionPrice = calculateMallCommissionPrice(
      convertedSellingPrice,
      convertedCommissionPercentage
    );

    const convertedSettlementAmount = calculateSettlementAmount(
      convertedSellingPrice,
      convertedCommissionPrice
    );

    const convertedMarginPrice = calculateMarginPrice(
      convertedSettlementAmount,
      convertedPurchaseCost,
      convertedShippingValue,
      convertedOthersValue
    );

    const convertedMarginRate = calculateMarginRate(
      convertedPurchaseCost,
      convertedShippingValue,
      convertedOthersValue,
      convertedCommissionPrice,
      convertedSellingPrice
    );

    setCommissionPrice(convertedCommissionPrice);
    setSettlement(convertedSettlementAmount);
    setMarginPrice(convertedMarginPrice);
    setMarginRate(convertedMarginRate);
  };

  const resetAll = () => {
    reset();
    setCommissionPrice(0);
    setSettlement(0);
    setMarginPrice(0);
    setMarginRate(0);
  };

  const [isHidden, setIsHidden] = useState(true);
  const handleHidden = () => {
    setIsHidden((cur) => !cur);
  };

  const inputList = [
    {
      label: "매입가",
      desc: "(VAT 포함)",
      unit: "원",
      id: "purchaseCost",
      value: purchaseCost,
      onChange,
    },
    {
      label: "판매가",
      unit: "원",
      id: "sellingPrice",
      value: sellingPrice,
      onChange,
    },
    {
      label: "배송비",
      unit: "원",
      id: "shipping",
      value: shipping,
      onChange,
    },
    {
      label: "기타 비용",
      desc: "(포장, 부자재 등)",
      unit: "원",
      id: "others",
      value: others,
      onChange,
    },
    {
      label: "마켓 수수료",
      desc: "(%)",
      unit: "%",
      id: "commission",
      value: commission,
      onChange,
    },
  ];

  const outputList = [
    {
      label: "마켓 수수료",
      desc: "(%)",
      unit: "%",
      value: commissionPrice,
      formula: formula.commissionPrice,
      hidden: isHidden,
    },
    {
      label: "쇼핑몰 정산 금액",
      unit: "원",
      value: settlement,
      formula: formula.settlementAmount,
      hidden: isHidden,
    },
    {
      label: "마진",
      unit: "원",
      value: marginPrice,
      formula: formula.marginPrice,
      hidden: isHidden,
    },
    {
      label: "마진율",
      unit: "%",
      value: marginRate,
      formula: formula.marginRate,
      hidden: isHidden,
    },
  ];

  return (
    <Container>
      <Seo title="마진 계산기" />
      <form className="px-4 flex flex-col" onSubmit={onSubmit}>
        <SmallButton style="mb-4 self-end max-md:hidden" onClick={handleHidden}>
          {`엑셀 수식 ${isHidden ? "보기" : "가리기"}`}
        </SmallButton>
        <InputList list={inputList} />
        <OutputList list={outputList} />
        <ButtonGroup onClick={resetAll} />
      </form>
    </Container>
  );
}
