// Penentuan Hari Esok
// Functional ver dengan high-order functions (Messy)

const debounce = (func, delay = 1000) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const createElement = () => {
  document.querySelector('.container').innerHTML = `
    <label for='input'>Masukkan Hari</label>
    <input type='text' id='input' />
  `;
};

const getNextElement = (input) => {
  return (args) => {
    const normalizedArr = normalizeArr(args);
    const normalizedInput = normalizeInput(input);
    const index = normalizedArr.indexOf(normalizedInput) + 1;
    if (index === normalizedArr.length) {
      return capitalize(normalizedArr[0]);
    } else if (!input || normalizedArr.indexOf(normalizedInput) === -1) {
      return false;
    } else {
      return capitalize(
        normalizedArr[normalizedArr.indexOf(normalizedInput) + 1]
      );
    }
  };
};

const normalizeInput = (input) => {
  if (input) {
    return input.toString().toLowerCase();
  }
};

const normalizeArr = (arr) => {
  if (arr) {
    return arr.map((item) => {
      return item.toString().toLowerCase();
    });
  }
};

const capitalize = (result) => {
  const firstLetter = result.charAt(0).toUpperCase();
  return firstLetter + result.slice(1);
};

createElement();

const input = document.querySelector('#input');

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

input.addEventListener(
  'input',
  debounce((e) => {
    const inputDay = getNextElement(e.target.value);
    const getNextDay = inputDay(days);
    console.log(getNextDay);
  })
);
