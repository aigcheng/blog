//邮箱校验
const checkEmail = (email) => {
  if (!email || typeof email !== "string") {
    return false;
  }
  let reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+)+$/;
  return reg.test(email);
};

//手机号校验
const checkPhone = (phone) => {
  if (phone === undefined) {
    return false;
  }
  let reg =
    /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/;
  return reg.test(phone);
};

//身份证校验
const checkIdCard = (idCard) => {
  if (idCard === undefined) {
    return false;
  }
  let reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(idCard);
};

//url校验
const checkUrl = (urlStr) => {
  if (urlStr === undefined) {
    return false;
  }
  let reg =
    /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return reg.test(urlStr);
};

//密码校验
const checkPassword = password => {
  if (password === undefined) {
    return false;
  }
  let reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,20}$/;
  return reg.test(password);
};

//校验是否为空
const isEmpty = (key) => {
  if (typeof key === "string") {
    // key = key.replace(/(^\s*)|(\s*$)/g, '');
    if (
      key === "" ||
      key === null ||
      key === "null" ||
      key === undefined ||
      key === "undefined"
    ) {
      return true;
    } else {
      return false;
    }
  } else if (typeof key === "undefined") {
    return true;
  } else if (typeof key === "object") {
    for (let i in key) {
      return false;
    }
    return true;
  } else if (typeof key === "boolean") {
    return false;
  }
};


//数字格式化，1234567890 --> 1,234,567,890
const convertNum = number => {
  if (number === undefined) {
    return false;
  }
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

//去掉字符串左右两边的空格，" reg check " --> “reg check”
const trim = str => {
  if (str === undefined) {
    return false;
  }
  return str.replace(/(^\s*)|(\s*$)/g, "");
};

//判断一个数是否是质数 3 --> true
const checkIsPrime = num => {
  if (num === undefined) {
    return false;
  }
  return !/^1?$|^(11+?)\1+$/.test(Array(num+1).join('1'));
};

//字符串数组去重 ["a","b","c","a","b","c"] --> ["a","b","c"]

const unique = arr => {
  return arr.sort().join(",,").
  replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4").
  replace(/,,+/g, ",").
  replace(/,$/, "").
  split(",")
};

export {
  checkEmail,
  checkPhone,
  checkUrl,
  checkPassword,
  convertNum,
  checkIdCard,
  isEmpty,
  trim,
  checkIsPrime,
  unique
};
