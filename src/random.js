export default function getRandom(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}
