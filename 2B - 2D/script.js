class Nums {
  constructor(inputVal) {
    this.inputVal = inputVal;
    this.arr = [];
  }

  getEven = () => {
    const { arr, inputVal } = this;
    for (let i = 1; i <= inputVal; i++) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
    return arr;
  };

  getOdd = () => {
    const { arr, inputVal } = this;
    for (let i = 1; i <= inputVal; i++) {
      if (i % 2 !== 0) {
        arr.push(i);
      }
    }
    return arr;
  };

  getPrime = () => {
    const { arr, inputVal } = this;
    for (let i = 2; i < inputVal; i++) {
      arr.push(i);
    }

    // Self Note: Math.floor(Math.sqrt(item)) basically acts as a check for j, because factorization for item cannot be greater than or equal to item itself. We only want to check if there are any factors lesser than or equal to sqrt of item.
    const prime = arr.filter((item) => {
      for (let j = 2; j <= Math.floor(Math.sqrt(item)); j++) {
        // console.log(item, j);
        if (item % j === 0) {
          return false;
        }
      }
      return true;
    });
    return prime;
  };

  printResult = (func) => {
    console.log(func());
  };
}

const even = new Nums(15);
even.printResult(even.getEven);
const odd = new Nums(12);
odd.printResult(odd.getOdd);
const prime = new Nums(18);
prime.printResult(prime.getPrime);
