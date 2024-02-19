// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => console.log(i), i * 5000);
// }
// //name, age, address(street name, house no)

// [
//   {
//     name: "dibya",
//     age: "25",
//     address: {
//       street: "banki, cuttack",
//       houseno: 101,
//     },
//   },
//   {},
// ];

// //recursion
// {
//     name: "dibya",
//     age: "25",
//     "address.street":"banki, cuttack",
//     "address.houseno": 101
//   }

function flat(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      let temp = flat(obj[key]);
      for (let t in temp) {
        result[`${key}.${t}`] = temp[t];
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
let data = {
  name: "dibya",
  age: "25",
  address: {
    street: "banki, cuttack",
    houseno: 101,
  },
};
console.log(flat(data));

//Card
