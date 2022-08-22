export const addComma = (numArg) => {
  numArg = numArg.toString();
  let num;
  if (numArg && numArg.includes(",")) {
    num = parseInt(numArg.replaceAll(",", ""));
  } else {
    num = parseInt(numArg);
  }

  var str = num.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
};
