export const calculateMallCommissionPrice = (sellingPrice, commission) => {
  if (!sellingPrice || !commission) return;
  return Math.round(sellingPrice * (commission * 0.01));
};

export const calculateSettlementAmount = (sellingPrice, commissionPrice) => {
  if (!sellingPrice || !commissionPrice) return;
  return sellingPrice - commissionPrice;
};

export const calculateMarginPrice = (
  sellingPrice,
  purchaseCost,
  commissionPrice,
  shipping,
  others
) => {
  if (!sellingPrice || !purchaseCost) return;
  return Math.round(
    sellingPrice - purchaseCost - commissionPrice - shipping - others
  );
};

export const calculateMarginRate = (
  purchaseCost,
  shipping,
  others,
  commissionPrice,
  sellingPrice
) => {
  if (!purchaseCost || !sellingPrice) return;

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

export const calculateSellingPrice = (purchaseCost, commission, marginRate) => {
  if (!purchaseCost || !marginRate) return;

  return Math.round(
    purchaseCost / (1 - commission * 0.01) / (1 - marginRate * 0.01)
  );
};
