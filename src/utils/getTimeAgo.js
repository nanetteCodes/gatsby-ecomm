export default () => {
  const dateFirst = new Date("01/01/2016");
  const dateSecond = new Date();
  // time difference
  const timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
  // days difference
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const diffYears = diffDays / 360;

  // difference
  return diffYears.toFixed(2);
}