/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

// const someNumbers = [1,2,2,2,2,2,4];
// const someMoreNumbers = [2,2,2,2,2,4];
const isOdd = function(aValue) {
    return aValue % 2 !== 0;
  }
  const hasOddNumber = function(anArray) {
    return anArray.some(isOdd);
  }
  // console.log(hasOddNumber(someNumbers));
  
  /*
  Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
  
  Examples:
      hasAZero(3332123213101232321) // true
      hasAZero(1212121) // false
  */
  
  const someNumber = 3332123213101232321;
  const someOtherNumber = 1212121;
  const isAZero = function(aDigit) {
   return parseInt(aDigit) === 0;
  };
  
  const hasAZero = function(aNumber) {
   const anArray = Array.from(aNumber.toString());
    return anArray.some(isAZero);
  };
  // console.log(hasAZero(someNumber));
  // console.log(hasAZero(someOtherNumber));
  
  /*
  Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.
  
  Examples:
      hasOnlyOddNumbers([1,3,5,7]) // true
      hasOnlyOddNumbers([1,2,3,5,7]) // false
  */
  
  // const someNumbers = [1,3,5,7];
  // const someMoreNumbers = [1,2,3,5,7];
  const hasOnlyOddNumbers = function(anArray) {
      return anArray.every(isOdd);
  };
  // console.log(hasOnlyOddNumbers(someNumbers));
  // console.log(hasOnlyOddNumbers(someMoreNumbers));
  
  /*
  Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
  
  Examples:
      hasNoDuplicates([1,2,3,1]) // false
      hasNoDuplicates([1,2,3]) // true
  */
  
  const someNumbers = [1,2,3,1];
  const someMoreNumbers = [1,2,3];
  const isDup = function(x, y) {
    return x === y;
  }
  const isADup = function(x, i, anArray) {
      return isDup(x, anArray[i + 1])
  }
  const hasNoDuplicates = function(anArray) {
      return !anArray.sort().some(isADup);
  };
  // console.log(hasNoDuplicates(someNumbers));
  // console.log(hasNoDuplicates(someMoreNumbers));
  
  /*
  Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
  
  Examples:
      var arr = [
          {title: "Instructor", first: 'Elie', last:"Schoppik"},
          {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
          {title: "Instructor", first: 'Matt', last:"Lane"},
          {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
      ]
  
      hasCertainKey(arr,'first') // true
      hasCertainKey(arr,'isCatOwner') // false
  */
  const someObjectsArray = [
      {title: "Instructor", first: 'Elie', last:"Schoppik"},
      {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
      {title: "Instructor", first: 'Matt', last:"Lane"},
      {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ];
  const hasCertainKey = function(anArray, aKey) {
    for(let i = 0; i < anArray.length; i++) {
      if(anArray[i][aKey] == undefined) {
        return false;
      }
    }
    return true;
  };
  // console.log(hasCertainKey(someObjectsArray, 'first'));
  // console.log(hasCertainKey(someObjectsArray, 'isCatOwner'));
  
  
  /*
  Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
  
  Examples:
      var arr = [
          {title: "Instructor", first: 'Elie', last:"Schoppik"},
          {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
          {title: "Instructor", first: 'Matt', last:"Lane"},
          {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
      ]
  
      hasCertainValue(arr,'title','Instructor') // true
      hasCertainValue(arr,'first','Elie') // false
  
  */
  
  const hasCertainValue = function(anArray, aKey, aValue) {
    for(let i = 0; i < anArray.length; i++) {
      if(anArray[i][aKey] !== aValue) {
        return false;
      }
    }
    return true;
  };
  // console.log(hasCertainValue(someObjectsArray, 'title', 'Instructor'));
  // console.log(hasCertainValue(someObjectsArray, 'first', 'Elie'));
  