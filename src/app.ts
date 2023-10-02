let fullName: string = "nguyen van tu";
let age: number = 26;
let isMale: boolean = true;
let address: null = null;
let isLove: undefined = undefined;

// cach 1
const student: {
  fullName: string;
  age: number;
  isMale: boolean;
} = {
  fullName: "nguyen van tu",
  age: 26,
  isMale: true,
};

// cach 2

type Student = {
  fullName: string;
  age: number;
  isMale: boolean;
};
const student1: Student = {
  fullName: "nguyen van tu",
  age: 26,
  isMale: true,
};

// cach 3
interface Student2 {
  fullName: string;
  age: number;
  isMale: boolean;
}
const student2: Student2 = {
  fullName: "nguyen van tu",
  age: 26,
  isMale: true,
};

//   array

interface Student3 {
  fullName: string;
  age: number;
  isMale: boolean;
}
const listStudent: Student3[] = [
  { fullName: "nguyen van tu", age: 26, isMale: true },
  { fullName: "nguyen van tu1", age: 26, isMale: true },
  { fullName: "nguyen van tu2", age: 26, isMale: true },
  { fullName: "nguyen van tu3", age: 26, isMale: true },
];

// 1
// const nums = (numberlist: number[], target: number): number[] => {
//   for (let i = 0; i < numberlist.length; i++) {
//     for (let j = i + 1; j < numberlist.length; j++) {
//       if (numberlist[i] + numberlist[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

// console.log(nums([2, 7, 11, 15], 9));

//  2
// const isValid = (listString: string): boolean => {
//     const stack: string[] = [];
//     const bracketMap: { [key: string]: string } = {
//       '}': '{',
//       ']': '[',
//       ')': '(',
//     };

//     for (const char of listString) {
//       if (char === '{' || char === '[' || char === '(') {
//         stack.push(char);
//       } else if (char === '}' || char === ']' || char === ')') {
//         const top = stack.pop();
//         if (top !== bracketMap[char]) {
//           return false;
//         }
//       }
//     }

//     return stack.length === 0;
//   };

//   console.log(isValid("({[[]]})")); // true

// 3
// function isPalindrome(s: string): boolean {
//   // Chuyển chuỗi về dạng lowercase và loại bỏ ký tự không chữ và không số
//   const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   // So sánh chuỗi gốc với phiên bản đảo ngược của nó
//   const reversedString = cleanedString.split("").reverse().join("");
//   return cleanedString === reversedString;
// }
// // Kiểm tra ví dụ
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("race a car"));

//   ================================================================
// kiểu union type
// let id: number | string = "30";
// type Status = "success" | "error" | "loading";

// // kiểu intersection type
// type User = "user";
// type Admin = "admin";

// type Role = User & Admin;

// const role: Role = "admin" as Role;

// console.log("role:", role);

// type enum
// enum Statuss {
//   Cancel,
//   success,
//   Pending,
// }
// console.log("Statuss:", Statuss.Cancel);

// // enum string
// enum HTTP {
//   GET = "GET",
//   PUT = "PUT",
//   PATCH = "PATCH",
//   DELETE = "DELETE",
// }
