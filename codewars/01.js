//"123", "123", "July 9, 2015", "July 9, 2015"

function checkCoupon(a, b, currentDate, expirationDate) {
  if ((a === b) && (Date.parse(expirationDate) - Date.parse(currentDate) > -1)) {
    console.log(true)
  } else console.log(false)
}

checkCoupon('123a','123','September 5, 2014','October 1, 2014')
// const S = 'CodeWars'
// function sortMyString(S) {
// let even = S.split('').filter((elem, i) => i % 2 == 0).join('');
// let odd = S.split('').filter((elem, i) => i % 2 !== 0).join('');
//  return even + ' ' + odd;
// }


// function spread(func, args) {
//   return func(...args)

// }


//  function dataReverse(data) {

//   let a = [];
//   for( let i = 0; i < data.length; i = i + 8){
//    a.unshift(data.slice(i , i + 8))
//  }
//  let b = a.flat()
// return b
// }
// s = "aeiou, abc" 
// function vowelOne(s){
//   let b = []
//   let a = s.split('').filter(letter => {
//     if( ['a','e','i','o','u',].includes(letter.toLowerCase())){
//       b.push(1)
//     } else {
//       b.push(0)
//     }
//   })
//   return b.join('')

// }
// const suspectInfo = {
// 'James': ['Jacob', 'Bill', 'Lucas'],
// 'Johnny': ['David', 'Kyle', 'Lucas'],
// 'Peter': ['Lucy', 'Kyle']
// };
// const dead = ['Lucas', 'Bill']

// function killer(suspectInfo, dead) {
//   let arr = []
//   for(let key in suspectInfo){ 
//     let count = 0;
//     for( let i = 0; i < dead.length; i++){
//       if(suspectInfo[key].includes(dead[i])){
//         count = count + 1;
//       }
//     }
//     arr.push(count)
//   }
//   return Object.keys(suspectInfo)[arr.indexOf(Math.max(...arr))]
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

// var Sum = (arr) => arr.reduce((accum, value) => accum + value, 0)
// console.log( Sum(arr))
// function sum(arr) {
//   let a = arr.reduce((s, current) => s + current, 0)
//   return a;
// } 
// let list = [
//   {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
//  ]; 




//  function sentence(list) {
//  let arr = []

//  let a =  list.map((elem, i) => +Object.keys(elem)).sort( (a, b) => a - b);

//  for(let i = 0; i < a.length; i++){
//   for(let j = 0; j < a.length; j++){
//     if(+Object.keys(list[j]) == a[i]){
//       arr.push(list[j][a[i]])
//     }
//   }
//  }
//   return arr.join(' ')
// }
// //--------------------
// const sentence = list =>
//   list
//     .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
//     .map(item => Object.values(item)[0])
//     .join(' ')


// function isPowerOfTwo(n){
//   if( n == 1){
//     return true
//   }
// let count = 0;
// if( n % 2 !== 0){
//   return false
// } else {
//   do {
//     n = n / 2;
//     if( n == 1){
//       return true
//       }
//   } while( n > 1)
//  return false
// }

// }
// const nameUser = 'Rodkkk'
// function nicknameGenerator(name){
// let nameArr = name.toLowerCase().split('');
// console.log(nameArr)
// if(name.length < 4){
//  return "Error: Name too short"
// } else if(['a','e','i','u','o'].includes(nameArr[2])){
//   return name.slice(0,4)
//  } else return name.slice(0,3)
// }
// const first = {
//   'algebra': 6,
//   'history': 7,
//   'physics': 8,
//   'geography': 9,
//   'chemistry': 10
// };
// const second = {
//   'algebra': 8,
//   'history': 7,
//   'physics': 8,
//   'geography': 9,
//   'chemistry': 10
// };
// const third = {
//   'algebra': 6,
//   'history': 5,
//   'physics': 5,
//   'geography': 9,
//   'chemistry': 10
// };

// function whoseBicycle(diary1, diary2, diary3) {
//  let sum1 = 0;
//  let sum2 = 0;
//  let sum3 = 0;
//  for(let key in diary2){
//   sum2 = sum2 + diary2[key]
//  }
//  for(let key in diary1){
//   sum1 = sum1 + diary1[key]
//  }
//  for(let key in diary3){
//   sum3 = sum3 + diary3[key]
//  }
//  //console.log(sum1,sum2, sum3)
//  if( sum1 == sum2 && sum2 == sum3){
//   return 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
//  } else if(sum1 == sum2 && sum1 > sum3 && sum2 > sum3){
//   return 'I need to buy a bicycle for my second son.'
//  } else if(sum1 == sum3 && sum1 > sum2 && sum3 > sum2){
//   return 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
//  } else if(sum2 == sum3 && sum2 > sum1 && sum3 > sum1){
//   return 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
//  } else if(sum1 > sum2 && sum1 > sum3 ){
//   return 'I need to buy a bicycle for my first son.'
//  } else if(sum2 > sum1 && sum2 > sum3 ){
//   return 'I need to buy a bicycle for my second son.' 
//  } else if(sum3 > sum1 && sum3 > sum2 ){
//   return 'I need to buy a bicycle for my third son.'
//  } 
// }

// let a = [-13,-50,57,13,67,-13,57,108,67]
// function maxTriSum(numbers){
//   let b = []
//   let a = numbers.sort((a, b) => b - a)//.slice(0,3).reduce((acc, value) => acc + value, 0)
//   for(let i = 0; i < a.length; i++){
//     if( !b.includes(a[i])){
//       b.push(a[i])
//     } else continue
//   }
//   return b.slice(0,3).reduce((acc, value) => acc + value, 0)
// }

// let a = 4.5
// function getDecimal(n){
//   if( n !== null || n !== undefined|| n !== NaN || n !== "" || n !== Boolean){
//     if(String(n).includes('.')){
//       const b = String(n).indexOf('.')
//       return +('0' + String(n).slice(b))
//     } else return 0
//   }
// }

// let a = [4, -3, -3, 61, 8, 8]
// let b = [8, 4, 8, -3, 61]
// let c;
// function findMissing(arr1, arr2) {
//   for( let i = 0; i < arr1.length; i++){
//     for( let j = 0; j < arr2.length; j++){
//       if( arr1[i] == arr2[j]){
//         delete arr2[j] 
//         delete arr1[i]
//       } else continue
//     }
//   } 
//  return arr1.filter(() => true)[0]
// }


// const a = '312'
// function explode(s) {
//   let b = s.split('').map(Number);
//  let arr = []
// for( let i = 0; i < b.length; i++){
//   switch(b[i]) {
//     case 0:
//       for(let j = 0; j < 0; j++){
//         arr.push(b[i]);
//       }
//       break;

//       case 1:
//         for(let j = 0; j < 1; j++){
//           arr.push(b[i]);
//         }
//         break;

//         case 2:
//       for(let j = 0; j < 2; j++){
//         arr.push(b[i]);
//       }break;

//       case 3:
//       for(let j = 0; j < 3; j++){
//         arr.push(b[i]);
//       }
//       break;

//       case 4:
//       for(let j = 0; j < 4; j++){
//         arr.push(b[i]);
//       }
//       break;
//       case 5:
//       for(let j = 0; j < 5; j++){
//         arr.push(b[i]);
//       }
//       break;
//       case 6:
//       for(let j = 0; j < 6; j++){
//         arr.push(b[i]);
//       }
//       break;
//       case 7:
//       for(let j = 0; j < 7; j++){
//         arr.push(b[i]);
//       }
//       break;
//       case 8:
//       for(let j = 0; j < 8; j++){
//         arr.push(b[i]);
//       }
//       break;
//       case 9:
//       for(let j = 0; j < 9; j++){
//         arr.push(b[i]);
//       }
//       break;
//     }
//   }
//  return arr.join('')
// }

// function explode(s) {
//   return s.split("").map((e) => e.repeat(+e)).join("");
// }
// const a = [ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]
// console.log(Array.isArray(a))
//
// function getLengthOfMissingArray (arr) {
//   if(!Array.isArray(arr) || arr.length == 0){
//     return 0
//   } else {
//
//   let arrLength = []
//   arr.forEach( (elem) => {
//     if(elem.length == 0){
//       return 0
//     }
//   })
//   arr.forEach( (elem) => {
//     arrLength.push(elem.length)
//     })
//
//
//
//   }
// }
//
// console.log(getLengthOfMissingArray(a))
//
//
// arrLength.sort((a, b) => a - b)
// for(let i = 0; i < arrLength.length - 1; i ++){
//   if(arrLength[i + 1] - arrLength[i] > 1 ){
//
//   }
// }