/** Q:
 * type MyPick<T, K> = any;
 */

/**
 * A：
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// function MyPick(todo, keys) {
//   const obj = {};

//   keys.array.forEach((key) => {
//     if (key in todo) {
//       obj[key] = todo[key];
//     }
//   });
//   return obj;
// }
