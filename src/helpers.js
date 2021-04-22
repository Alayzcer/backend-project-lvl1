export default function generateRandomInt(from, to) {
  const number = Math.random() * (to - from) + from;
  return Math.round(number);
}
