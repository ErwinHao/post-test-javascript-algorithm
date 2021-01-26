// Switch...case versi hardcoded

const determineNextDay = (input, arr) => {
  switch (input) {
    case 'Senin':
      return arr[arr.indexOf('Senin') + 1];
    case 'Selasa':
      return arr[arr.indexOf('Selasa') + 1];
    case 'Rabu':
      return arr[arr.indexOf('Rabu') + 1];
    case 'Kamis':
      return arr[arr.indexOf('Kamis') + 1];
    case 'Jumat':
      return arr[arr.indexOf('Jumat') + 1];
    case 'Sabtu':
      return arr[arr.indexOf('Sabtu') + 1];
    case 'Minggu':
      return arr[arr.indexOf('Senin')];
    default:
      break;
  }
};

console.log(
  determineNextDay('Selasa', [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu',
  ])
);
