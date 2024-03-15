// 1))) Yechimni shunday yakunlangki, agar birinchi berilgan argument (satr) 2-argument (shuningdek, qator) bilan tugasa, u haqiqatni qaytaradi. JavaScript da


// function multiply(number) {
//     const numDigits = Math.abs(number).toString().length;
//     return number * Math.pow(5, numDigits);
// }

// console.log(multiply(5)); 
// console.log(multiply(25)); 
// console.log(multiply(-10));  
// console.log(multiply(123)); 


// 2))) Ikki oʻlchovli raqamli massivning CSV koʻrinishini qaytaruvchi funksiya yarating.

// function toCsvText(arr) {
//     return arr.map(row => row.join(',')).join('\n');
// }

// const numericArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(toCsvText(numericArray));


// 3))) Ushbu oddiy mashqda siz butun son qiymatini oladigan va uning ko'paytmalari ro'yxatini boshqa qiymatga, limitga qaytaradigan dastur tuzasiz. Agar chegara butun sonning karrali bo'lsa, u ham kiritilishi kerak. Funktsiyaga faqat 0 dan iborat bo'lmagan musbat butun sonlar beriladi. Chegara har doim bazadan yuqori bo'ladi.

// Misol uchun, agar o'tkazilgan parametrlar (2, 6) bo'lsa, funktsiya [2, 4, 6] ni qaytarishi kerak, chunki 2, 4 va 6 2 dan 6 gacha bo'lgan ko'paytmalardir.

// function findMultiples(num, limit) {
//     let multiples = [];

//     for (let i = num; i <= limit; i += num) {
//         multiples.push(i);
//     }

//     return multiples;
// }

// console.log(findMultiples(2, 6)); 
// console.log(findMultiples(3, 10)); 


// 4)))

// let str = "1992";

// const x = (a) => {
//     let newStr = "";
//     for (let i = 0; i < a.length; i++) {
//         let num = Number(a[i]);
//         if (num > 1) {
//             newStr += num - 1;
//         } else {
//             newStr += num;
//         }
//     }
//     return newStr;
// }

// console.log(x(str));


//  5)))

// let str = "tewst";

// const x = (a) => {
//     if (a.length % 2 == 0) {
//         let b = a.length / 2 - 1;
//         let c = b + 1;
//         return a[b] + a[c];
//     }

//     return a[Math.floor(a.length / 2)];
// };

// console.log(x(str));


// 6 )))

// let arr = ["salom", 1, 2, 3, 4, 5, true, () => {}, 478];

// const x = (a) => {
//     let newArr = [];
//     for (let i = 0; i < a.length; i++) {
//         if (typeof a[i] === "number") {
//             newArr.push(a[i]);
//         }
//     }
//     return newArr;
// }

// console.log(x(arr));

// 7 )))

// let str = `
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam autem harum commodi explicabo eum!
// `;

// const x = (a) => {
//     let newStr = "";
//     for (let i = 0; i < a.length; i++) {
//         if (a[i - 1] === " ") {
//             newStr += a[i].toUpperCase();
//         } else {
//             newStr += a[i];
//         }
//     }
//     return newStr;
// }

// console.log(x(str));


// 8 )))

// let str = "abcd";

// const x = (a) => {
//     let newStr = " ";
//     for (let i = 0; i < a.length; i++) {
//         newStr += a[i].repeat(i + 1) + "-";
//     }
//     let resault = newStr.slice(0, newStr.length - 1);
//     return resault;
// }

// console.log(x(str));

