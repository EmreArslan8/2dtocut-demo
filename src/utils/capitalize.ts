const capitalize = (str = "") => {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
};

export default capitalize;
