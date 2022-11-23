
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
const suspectInfo = {
'James': ['Jacob', 'Bill', 'Lucas'],
'Johnny': ['David', 'Kyle', 'Lucas'],
'Peter': ['Lucy', 'Kyle']
};
const dead = ['Lucas', 'Bill']

function killer(suspectInfo, dead) {
  let arr = []
  for(let key in suspectInfo){ 
    let count = 0;
    for( let i = 0; i < dead.length; i++){
      if(suspectInfo[key].includes(dead[i])){
        count = count + 1;
      }
    }
    arr.push(count)
  }
  return Object.keys(suspectInfo)[arr.indexOf(Math.max(...arr))]
}

