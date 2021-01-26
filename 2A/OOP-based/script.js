// Penentuan Hari Esok
// OOP-based (Messy)

class Day {
  constructor(inputDay, daysArr, displayResult, displayError) {
    this.inputDay = inputDay;
    this.daysArr = daysArr;
    this.normalizeArr();
    this.displayResult = displayResult;
    this.displayError = displayError;

    this.inputDay.addEventListener('input', debounce(this.onInput, 500));
  }

  onInput = (e) => {
    if (e.target.value === '') {
      this.handleNormal();
    }
    const normalizedInput = this.normalizeInput(e.target.value);
    this.determineNextDay(normalizedInput, e.target);

    document.addEventListener('click', (e) => {
      if (!inputDay.contains(e.target)) {
        this.handleNormal();
      }
    });
  };

  determineNextDay = (input, targetedElement) => {
    if (this.daysArr.indexOf(input) === -1) {
      this.handleFalse(targetedElement, 'Input hari yang valid!');
      return;
    }
    const dayIndex = this.daysArr.indexOf(input) + 1;
    if (dayIndex === this.daysArr.length) {
      const nextDay = this.daysArr[0];
      this.handleSuccess(targetedElement, nextDay);
      // console.log(this.daysArr[0]);
    } else {
      const nextDay = this.daysArr[dayIndex];
      this.handleSuccess(targetedElement, nextDay);
      // console.log(this.daysArr[dayIndex]);
    }
  };

  handleFalse = (element, errorMsg) => {
    element.classList.add('error');
    this.displayResult.classList.remove('show');

    this.displayError.classList.add('show');
    this.displayError.innerText = errorMsg;
  };

  handleSuccess = (element, result) => {
    element.classList.remove('error');
    this.displayError.classList.remove('show');
    element.classList.add('success');

    this.displayResult.classList.add('show');
    this.displayResult.innerHTML = `
      <h3>Hari setelah ${this.capitalizeResult(
        this.inputDay.value
      )} adalah ${this.capitalizeResult(result)}</h3>
    `;
  };

  handleNormal = () => {
    this.inputDay.classList.remove('error');
    this.inputDay.classList.remove('success');
    this.displayError.classList.remove('show');
  };

  capitalizeResult = (input) => {
    const firstLetter = input.charAt(0).toUpperCase();
    return firstLetter + input.slice(1);
  };

  normalizeInput = (input) => {
    return input.toString().toLowerCase();
  };

  normalizeArr = () => {
    if (this.daysArr) {
      this.daysArr = this.daysArr.map((item) => {
        return item.toString().toLowerCase();
      });
    }
  };
}

const daysArr = [
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
  'Minggu',
];

// const daysArr = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

const inputDay = document.querySelector('#input');
const target = document.querySelector('#target');
const small = document.querySelector('small');

const day = new Day(inputDay, daysArr, target, small);
