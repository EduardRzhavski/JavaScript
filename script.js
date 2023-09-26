// 1.1

function convertToYesOrNo(value) {
    return value ? "Yes" : "No";
  }
  
  console.log(convertToYesOrNo(true)); 
  console.log(convertToYesOrNo(false));

//   2.1

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    const [first, second] = numbers.slice(0, 2);
    return first + second;
  }
  
  const array1 = [19, 5, 42, 2, 77];
  const array2 = [10, 343445353, 3453445, 3453545353453];
    
  console.log(sumTwoSmallestNumbers(array1)); 
  console.log(sumTwoSmallestNumbers(array2)); 
  
//   2.3
  


function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq);
    if (Number.isInteger(sqrt)) {
      const nextSquare = Math.pow(sqrt + 1, 2);
      return nextSquare;
    } else {
      return -1;
    }
  }
  
  console.log(findNextSquare(121));
  console.log(findNextSquare(625));
  console.log(findNextSquare(114));

//   2.4

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    
    if (arr[0] !== arr[1]) {
      return arr[0];
    } else {
      return arr[arr.length - 1];
    }
  }
  
  console.log(findUniq([1, 1, 1, 2, 1, 1])); 
  console.log(findUniq([0, 0, 0.55, 0, 0])); 

//   2.5

function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(summation(2)); 
  console.log(summation(8)); 

//   2.6

function centuryFromYear(year) {
    return Math.ceil(year / 100);
  }
  
  console.log(centuryFromYear(1705)); 
  console.log(centuryFromYear(1900)); 
  console.log(centuryFromYear(1601)); 
  console.log(centuryFromYear(2000)); 

//   2.7

function basicOp(operation, value1, value2) {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        throw new Error('Invalid operation');
    }
  }
  
  console.log(basicOp('+', 4, 7));  
  console.log(basicOp('-', 15, 18)); 
  console.log(basicOp('*', 5, 5));  
  console.log(basicOp('/', 49, 7)); 

//   4.1

function fibonacci(n, startFromZero = true) {
    if (n <= 0) {
      return startFromZero ? 0 : 1;
    }
  
    let a = startFromZero ? 0 : 1;
    let b = 1;
  
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
  
    return b;
  }
  
  console.log(fibonacci(10)); 
  console.log(fibonacci(10, false)); 

//   5.1

function removeFirstAndLast(str) {
  if (str.length >= 2) {
    return str.slice(1, -1);
  } else {
    return str;
  }
}

console.log(removeFirstAndLast("JavaScript")); 

// 5.2

function repeatStr(count, src) {
  return src.repeat(count);
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));

// 5.3

function toCamelCase(str) {
  const words = str.split(/[-_]/);

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join('');
}

console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior")); 

// 5.5

function convertToInitials(name) {
  const words = name.split(' ');

  const initials = words.map(word => word.charAt(0).toUpperCase());

  return initials.join('.');
}

console.log(convertToInitials("Sam Harris"));
console.log(convertToInitials("Patrick Feeney"));

  
  