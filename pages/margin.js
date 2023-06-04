import Container from "@/components/ui/Container";
import InputBox from "@/components/ui/InputBox";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Margin() {
  const [inputs, setInputs] = useState({
    purchaseCost: "",
    sellingPrice: "",
    shipping: "",
    others: "",
    commission: "",
  });
  const { purchaseCost, sellingPrice, shipping, others, commission } = inputs;

  const addComma = (value) => {
    if (typeof value === "string") {
      let valueWithoutComma = deleteComma(value);

      // 소수점 처리
      if (
        typeof valueWithoutComma === "string" &&
        valueWithoutComma.includes(".")
      ) {
        const [integer, decimal] = valueWithoutComma.split(".");
        valueWithoutComma = Number(integer);
        return `${valueWithoutComma.toLocaleString("ko-KR")}.${decimal}`;
      }

      valueWithoutComma = Number(valueWithoutComma);
      return valueWithoutComma.toLocaleString("ko-KR");
    } else if (typeof value === "number") {
      return value.toLocaleString("ko-KR");
    }
  };

  const deleteComma = (value) => {
    if (typeof value === "string") return value.replace(/,/g, "");
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    const valueWithComma = addComma(value);
    setInputs({ ...inputs, [id]: valueWithComma });
  };

  const [commissionPrice, setCommissionPrice] = useState(0);
  const [settlement, setSettlement] = useState(0);
  const [marginPrice, setMarginPrice] = useState(0);
  const [marginRate, setMarginRate] = useState(0);

  const calculateMallCommissionPrice = (sellingPrice, commission) => {
    if (!sellingPrice || !commission) return;
    return sellingPrice * (commission * 0.01);
  };

  const calculateSettlementAmount = (
    sellingPrice,
    shipping,
    commissionPrice
  ) => {
    if (!sellingPrice || !shipping || !commissionPrice) return;
    return sellingPrice - shipping - commissionPrice;
  };

  const calculateMarginPrice = (settlementAmount, purchaseCost, others) => {
    if (!settlementAmount || !purchaseCost || !others) return;
    return settlementAmount - purchaseCost - others;
  };

  const calculateMarginRate = (
    purchaseCost,
    shipping,
    others,
    sellingPrice
  ) => {
    if (!purchaseCost || !shipping || !others || !sellingPrice) return;

    return (
      (1 - (purchaseCost + shipping + others) / sellingPrice) *
      100
    ).toFixed(2);
  };

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
      convertedShippingValue,
      convertedCommissionPrice
    );

    const convertedMarginPrice = calculateMarginPrice(
      convertedSettlementAmount,
      convertedPurchaseCost,
      convertedOthersValue
    );

    const convertedMarginRate = calculateMarginRate(
      convertedPurchaseCost,
      convertedShippingValue,
      convertedOthersValue,
      convertedSellingPrice
    );

    setCommissionPrice(convertedCommissionPrice);
    setSettlement(convertedSettlementAmount);
    setMarginPrice(convertedMarginPrice);
    setMarginRate(convertedMarginRate);
  };

  const reset = () => {
    setInputs({
      purchaseCost: "",
      sellingPrice: "",
      shipping: "",
      others: "",
      commission: "",
    });

    setCommissionPrice(0);
    setSettlement(0);
    setMarginPrice(0);
    setMarginRate(0);
  };

  return (
    <Container>
      <h2 className="mt-6 mb-4 text-4xl">판매가 마진 계산기</h2>
      <form className="p-4 max-w-md" onSubmit={onSubmit}>
        <InputBox
          label="매입가"
          unit="원"
          id="purchaseCost"
          value={purchaseCost}
          onChange={onChange}
        />
        <InputBox
          label="판매가"
          unit="원"
          id="sellingPrice"
          value={sellingPrice}
          onChange={onChange}
        />
        <InputBox
          label="배송비"
          unit="원"
          id="shipping"
          value={shipping}
          onChange={onChange}
        />
        <InputBox
          label="기타 비용"
          unit="원"
          id="others"
          value={others}
          onChange={onChange}
        />
        <InputBox
          label="마켓 수수료"
          unit="%"
          id="commission"
          value={commission}
          onChange={onChange}
        />
        <InputBox
          label="마켓 수수료"
          unit="원"
          disabled
          value={addComma(commissionPrice)}
        />
        <InputBox
          label="정산 금액"
          unit="원"
          disabled
          value={addComma(settlement)}
        />
        <InputBox
          label="마진"
          unit="원"
          disabled
          value={addComma(marginPrice)}
        />
        <InputBox
          label="마진율"
          unit="%"
          disabled
          value={addComma(marginRate)}
        />
        <div className="mt-6 flex justify-end">
          <Button type="submit" style="mr-3">
            계산하기
          </Button>
          <Button
            type="button"
            bgColor="bg-gray100"
            color="text-gray400"
            hoverBgColor="hover:bg-gray200"
            onClick={reset}
          >
            초기화하기
          </Button>
        </div>
      </form>
    </Container>
  );
}
