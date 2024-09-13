import numeral from "numeral";

const dollarFilter = function (value) {
  if (!value) {
    return "$ 0";
  }

  value = numeral(value).format("(0,0$)");
  return value.replace(/,/g, ".");
};

const dollarFilterIzquierda = function (value) {
  if (value === -1) {
    return "-";
  }

  if (value === -2) {
    return "N/A";
  }

  // return `${Number(value).toFixed(0)}`;
  value = numeral(value).format("($0,0)");
  return value.replace(/,/g, ".");
};

const numeroentero = function (value) {
  if (!value) {
    return "0";
  }
  value = numeral(value).format("(0,0)");
  return value.replace(/,/g, ".");
};

export { dollarFilter };
export { dollarFilterIzquierda };
export { numeroentero };
