//  let x = 1;
//    function f1()
//     {
//        let x = 2;
//         console.log(x);
//     }


//     console.log(x);
// ---------------------
// let x = 10

// function f1()
// {
//     console.log(x)
//     let y = 20
// }

// console.log(f1())
// console.log(y)
//--------------------
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);