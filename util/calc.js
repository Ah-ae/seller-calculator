export const calculateMallCommissionPrice = (sellingPrice, commission) => {
  if (!sellingPrice || !commission) return;
  return sellingPrice * (commission * 0.01);
};

export const calculateSettlementAmount = (sellingPrice, commissionPrice) => {
  if (!sellingPrice || !commissionPrice) return;
  return sellingPrice - commissionPrice;
};

export const calculateMarginPrice = (
  settlementAmount,
  purchaseCost,
  shipping,
  others
) => {
  if (!settlementAmount || !purchaseCost || !shipping || !others) return;
  return settlementAmount - purchaseCost - shipping - others;
};

export const calculateMarginRate = (
  purchaseCost,
  shipping,
  others,
  commissionPrice,
  sellingPrice
) => {
  if (!purchaseCost || !shipping || !others || !sellingPrice) return;

  // return (
  //   (1 - (purchaseCost + shipping + others) / sellingPrice) *
  //   100
  // ).toFixed(2);
  return (
    ((sellingPrice - purchaseCost - shipping - others - commissionPrice) /
      sellingPrice) *
    100
  ).toFixed(2);
};
