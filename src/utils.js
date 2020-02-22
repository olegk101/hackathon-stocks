import { scaleSqrt } from 'd3-scale';

const negativeScale = val =>
  scaleSqrt()
    .domain([0, 10])
    .range(['white', 'red'])(-val);

const positiveScale = scaleSqrt()
  .domain([0, 10])
  .range(['white', 'green']);

const regex = /\d{1,3}/g;

export const getColor = num => {
  if (num < 0) {
    const n = num < -10 ? -10 : num;

    return [...negativeScale(n).matchAll(regex)].map(arr => Number(arr[0]));
  }

  const n = num > 10 ? 10 : num;
  return [...positiveScale(n).matchAll(regex)].map(arr => Number(arr[0]));
};

export const getColorString = num => {
  if (num < 0) {
    const n = num < -10 ? -10 : num;

    return negativeScale(n);
  }

  const n = num > 10 ? 10 : num;
  return positiveScale(n);
};
