function generateRandomInt(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

function isPrime(no) {
  for (let i = 2; i < no; i += 1) {
    if (no % i === 0) {
      return false;
    }
  }
  return true;
}

const isEven = (x) => x % 2 === 0;

export { generateRandomInt, isPrime, isEven };
