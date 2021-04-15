export default function generateRandomInt(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}
