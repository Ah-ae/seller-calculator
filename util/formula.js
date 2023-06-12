export const formula = {
  commissionPrice: "판매가 x 마켓수수료(%) x 0.01",
  settlementAmount: "판매가 - 마켓수수료(원)",
  // marginPrice: "정산 금액 - 매입가 - 배송비 - 기타 비용",
  marginPrice: "판매가 - 매입가 - 배송비 - 기타 비용 - 마켓수수료(원)",
  marginPriceForSellingPrice: "판매가 - 매입가 - 마켓수수료(원)",
  marginRate:
    "((판매가 - 매입가 - 배송비 - 기타비용 - 마켓수수료(원)) ÷ 판매가) × 100",
  // marginRate:
  //   "(1 - ((매입가 + 배송비 + 기타비용 + 마켓 수수료(원))) ÷ 판매가)) × 100",
  //    (1 - (purchaseCost + shipping + others) ÷ sellingPrice) * 100
  sellingPrice:
    "매입가 ÷ (1 - (마켓 수수료(%) x 0.01)) ÷ (1 - (마진율 x 0.01))",
  discountRate: "(1 - (행사 판매가 ÷ 기존 판매가)) × 100",
  reductionPercentage:
    "((기존 판매가 - (기존 판매가 × 행사 할인율)) / (기존 판매가 × 행사 할인율)) × 100",
};
