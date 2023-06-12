import { useState } from "react";
import PageTemplate from "@/components/template/PageTemplate";
import useInputs from "@/hooks/useInputs";
import { calculateReductionPercentage } from "@/util/calc";
import { deleteComma } from "@/util/decimalHelpers";
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

  const inputList = [
    {
      label: "기존 판매가",
      unit: "원",
      id: "originalPrice",
      value: originalPrice,
      onChange,
    },
    {
      label: "할인율",
      unit: "%",
      id: "discountRate",
      value: discountRate,
      onChange,
    },
  ];

  const outputList = [
    {
      label: "행사가 환원",
      unit: "%",
      value: reductionPercentage,
      formula: formula.reductionPercentage,
      hidden: isHidden,
    },
  ];

  return (
    <PageTemplate
      title="행사가 환원 계산기"
      onSubmit={onSubmit}
      reset={resetAll}
      isHidden={isHidden}
      handleHidden={handleHidden}
      inputList={inputList}
      outputList={outputList}
    />
  );
}
