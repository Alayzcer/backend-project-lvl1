function generateRandomInt(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

function isPrime(number) {
  if (number < 2) return false;
  const startNumber = 2;
  const middle = number / 2;
  for (let i = startNumber; i < middle; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const isEven = (x) => x % 2 === 0;

export { generateRandomInt, isPrime, isEven };
