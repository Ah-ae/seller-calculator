export const addComma = (value) => {
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

export const deleteComma = (value) => {
  if (typeof value === "string") return value.replace(/,/g, "");
};
