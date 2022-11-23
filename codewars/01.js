(("CodeWars"), "CdWr oeas");
const S = 'CodeWars'

function sortMyString(S) {
let even = S.split('').filter((elem, i) => i % 2 == 0).join('');
let odd = S.split('').filter((elem, i) => i % 2 !== 0).join('');
 return even + ' ' + odd;
}

console.log(sortMyString(S))