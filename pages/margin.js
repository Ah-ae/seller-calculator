import Container from "@/components/ui/Container";
import InputBox from "@/components/ui/InputBox";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Margin() {
  const [inputs, setInputs] = useState({
    purchaseCost: 0,
    sellingPrice: 0,
    shipping: 0,
    others: 0,
    commission: 0,
  });
  const { purchaseCost, sellingPrice, shipping, others, commission } = inputs;

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  };

  const [commissionPrice, setCommissionPrice] = useState();
  const [settlement, setSettlement] = useState();
  const [marginPrice, setMarginPrice] = useState();
  const [marginRate, setMarginRate] = useState();

  const calculateMallCommissionPrice = (sellingPrice, commission) =>
    sellingPrice * (commission * 0.01);

  const calculateSettlementAmount = (sellingPrice, shipping, commissionPrice) =>
    sellingPrice - shipping - commissionPrice;

  const calculateMarginPrice = (settlementAmount, purchaseCost, others) =>
    settlementAmount - purchaseCost - others;

  const calculateMarginRate = (marginPrice, sellingPrice) =>
    (1 - marginPrice / sellingPrice) * 100;

  const formatter = (num) => num.toLocaleString("ko-KR");

  const onSubmit = (e) => {
    e.preventDefault();

    const tempCommissionPrice = calculateMallCommissionPrice(
      sellingPrice,
      commission
    );

    const tempSettlementAmount = calculateSettlementAmount(
      sellingPrice,
      shipping,
      tempCommissionPrice
    );

    const tempMarginPrice = calculateMarginPrice(
      tempSettlementAmount,
      purchaseCost,
      others
    );

    const tempMarginRate = calculateMarginRate(tempMarginPrice, sellingPrice);

    setCommissionPrice(tempCommissionPrice);
    setSettlement(tempSettlementAmount);
    setMarginPrice(tempMarginPrice);
    setMarginRate(tempMarginRate);
  };

  const reset = () => {
    setInputs({
      purchaseCost: 0,
      sellingPrice: 0,
      shipping: 0,
      others: 0,
      commission: 0,
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
          value={commissionPrice}
        />
        <InputBox label="정산 금액" unit="원" disabled value={settlement} />
        <InputBox label="마진" unit="원" disabled value={marginPrice} />
        <InputBox label="마진율" unit="%" disabled value={marginRate} />
        <div className="mt-6 w-4/5 flex justify-between">
          <Button type="submit">계산하기</Button>
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
