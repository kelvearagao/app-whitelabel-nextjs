export default (brand) => {
  return process.env.NODE_ENV === "production" ? "" : `/${brand}`;
};
