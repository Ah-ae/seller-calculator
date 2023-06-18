import { useState } from "react";
import PageTemplate from "@/components/template/PageTemplate";
import useInputs from "@/hooks/useInputs";
import { calculateDiscountRate } from "@/util/calc";
import { deleteComma } from "@/util/decimalHelpers";
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

  const inputList = [
    {
      label: "기존 판매가",
      unit: "원",
      id: "originalPrice",
      value: originalPrice,
      onChange,
    },
    {
      label: "행사 판매가",
      unit: "원",
      id: "discountedPrice",
      value: discountedPrice,
      onChange,
    },
  ];

  const outputList = [
    {
      label: "할인율",
      unit: "%",
      value: discountRate,
      formula: formula.discountRate,
      hidden: isHidden,
    },
  ];

  return (
    <PageTemplate
      title="할인율 계산기"
      onSubmit={onSubmit}
      reset={resetAll}
      isHidden={isHidden}
      handleHidden={handleHidden}
      inputList={inputList}
      outputList={outputList}
    />
  );
}
