// recursive functions add to the call stack
// it returns last in, first out

function recSum(n) {
  return n === 1 ? n : recSum(n - 1) + n
}

// console.log(recSum(3)) // 6

function palindrome(string) {
	if(string.length < 1) {
    return true
  }
	if(string.length === 2) {
    return string[0] === string[1] ? true : false
  }
  if(string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1))
  } else {
    return false
  }
}

// console.log(palindrome('racecar')) // true

function isPrime(num, factor = Math.floor(Math.sqrt(num))) {
  if(factor < 2) {
    return true
  } else {
    return num % factor === 0 ? false : isPrime(num, factor - 1)
  }
}

// console.log(isPrime(2)) // true
// console.log(isPrime(3)) // true
// console.log(isPrime(4)) // false
// console.log(isPrime(5)) // true
// console.log(isPrime(6)) // false
// console.log(isPrime(7)) // true
// console.log(isPrime(9)) // false
// console.log(isPrime(11)) // true
// console.log(isPrime(13)) // true

function pathFinder(obj, arr) {
  if(!obj[arr[0]]) {
    return 'no path'
  }
  if(!arr[1]) {
    if(typeof obj[arr[0]] === 'object') {
      return 'path remaining'
    } else {
      return obj[arr[0]]
    }
  }
  return pathFinder(obj[arr[0]], arr.slice(1))
}

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
let arr
// arr = ["first", "second", "third"]; // "finish"
// arr = ["hello", "second", "finish"]; // "no path"
// arr = ["second", "third"]; // "wrong"
arr = ["second"]; // "path remaining"


// console.log(pathFinder(obj, arr))

function flattenRecursively(arr, resArr = []) {
  if(Array.isArray(arr[0])) {
    return flattenRecursively([...arr[0], ...arr.slice(1)], resArr)
  } else {
    // base case
    if(arr.length === 1) {
      resArr.push(arr[0])
      return resArr
    } else {
      resArr.push(arr[0])
      return flattenRecursively(arr.slice(1), resArr)
    }
  }
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
// console.log(flattenRecursively([[1, 2], [3, 4], [5, 6, [7, [8, 9, [10]]]]])); //-> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function findInOrderedSet(arr, target) {
  if(arr[0] > target) {
    return false
  }
  if(arr[0] === target) {
    return true
  }
  return findInOrderedSet(arr.slice(1), target)
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false
