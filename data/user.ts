type listUsers = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  age: number;
  salary: number;
};
const users: listUsers[] = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Female",
    age: 30,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Female",
    age: 99,
    salary: 13343,
  },
  {
    id: 4,
    first_name: "Madella",
    last_name: "Kliesl",
    email: "mkliesl3@ft.com",
    gender: "Female",
    age: 56,
    salary: 5248,
  },
  {
    id: 5,
    first_name: "Simona",
    last_name: "Knee",
    email: "sknee4@sciencedaily.com",
    gender: "Female",
    age: 61,
    salary: 14376,
  },
  {
    id: 6,
    first_name: "Cord",
    last_name: "McMurthy",
    email: "cmcmurthy5@wordpress.org",
    gender: "Male",
    age: 86,
    salary: 9514,
  },
  {
    id: 7,
    first_name: "Obed",
    last_name: "Beaven",
    email: "obeaven6@msn.com",
    gender: "Male",
    age: 91,
    salary: 18463,
  },
  {
    id: 8,
    first_name: "Elayne",
    last_name: "Smeuin",
    email: "esmeuin7@wsj.com",
    gender: "Female",
    age: 96,
    salary: 19907,
  },
  {
    id: 9,
    first_name: "Robin",
    last_name: "Picford",
    email: "rpicford8@typepad.com",
    gender: "Female",
    age: 55,
    salary: 14975,
  },
  {
    id: 10,
    first_name: "Patsy",
    last_name: "Ochterlonie",
    email: "pochterlonie9@latimes.com",
    gender: "Female",
    age: 93,
    salary: 9716,
  },
];

// YOUR CODE HERE
// bai1 :Sử dụng hàm forEach() của mảng để lấy ra
// first_name và last_name của toàn bộ user có trong mảng
// users và cho chúng vào một mảng mới
// function problem01(users: listUsers[]): string[] {
//   const result: string[] = [];

//   users.forEach((user) => {
//     const fullName = `${user.first_name} ${user.last_name}`;
//     result.push(fullName);
//   });

//   return result;
// }

// const userNames: string[] = problem01(users);
// console.log(problem01(users));

// bài 2: Viết một hàm trả về toàn bộ user trong mảng users thoả mãn điều kiện giới tính là nam và tuổi nhỏ hơn 40
function problem02(users: listUsers[]): listUsers[] {
  // return an array of user which is male and age is under 40

  return users.filter((user) => user.age < 40);
}
console.log(problem02(users));

// function problem03(users) {
//   // return an array of full name
//   return [];
// }
// function problem04(users) {
//   // return new array of user where the key of each record in new array is camelCase
// }

// bai5: Viết một hàm trả về trung bình tuổi của các user có trong mảng users
// function problem05(users) {
//   // return the average age in users
//   return -1;
// }

// bai6 : Viết một hàm trả về toàn bộ tên đầy đủ của các
//  user (first_name + last_name) trong mảng users,
//  yêu cầu phải sử dụng hàm Array.prototype.reduce
// function problem0601(users: listUsers[]): string[] {
//   // Sử dụng reduce để tích hợp tên đầy đủ của người dùng vào mảng kết quả
//   const result: string[] = users.reduce((accumulator: string[], user) => {
//     const tenDayDu = user.first_name + ' ' + user.last_name;
//     accumulator.push(tenDayDu);
//     return accumulator;
//   }, []);

//   return result;
// }

// console.log( problem0601(users));

// bai7: Viết một hàm trả về toàn bộ user trong mảng users
//  thoả mãn điều kiện giới tính là nam và tuổi nhỏ hơn 40
// , yêu cầu phải sử dụng hàm Array.prototype.reduce
function problem0602(users: listUsers[]): listUsers[] {
  // return an array of user which is male and age under 40 using Array.prototype.reduce
  return users.reduce((accumulator, user) => {
    if (user.gender === "male" && user.age < 40) {
      accumulator.push(user);
    }
    return accumulator;
  }, [] as listUsers[]);
}
console.log(problem0602(users));

// function problem0603(users) {
//   // return new array where each record is in camelCase using Array.prototype.reduce
// }
// function problem07(users) {
//   // return the sorted array of user (sort by field first_name in ascending order)
// }
// function faMap(array, fn) {
//   // implement faMap that works like Array.prototype.map
// }
// // console.log(faMap([1, 2, 3], (item, index) => item += 2));
// function faFilter(array, predicate) {
//   // implement faMap that works like Array.prototype.filter
// }
// function faReduce(array, fn, defaultValue) {}
// // console.log(faReduce([1, 2, 3], (p, c, i) => p += c));
// function problem1101(array, fn) {
//   // map array using faReduce
// }
// function problem1102(array, fn) {
//   // filter array using faReduce
// }
// function problem1201(array) {
//   // implement sum array with faReduce
// }
// function problem1202(array) {
//   // implement product array with faReduce
// }
// function problem1203(array) {
//   // implement reverse array with faReduce
// }
