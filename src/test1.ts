const is_prime = (input:number):boolean => {
  if(input == 1 || input%2 == 0 || input%3 ==0 || input%5 == 0){
    return false;
  }
  return true;
}

const is_balanced = (input:string):boolean => {
  if(input.substr(0,1) == ')') return false;
  const arr =input.split('');
  const stackArr:string[] = [];
  console.log('1');
  arr.forEach(element => {
    element==='(' && stackArr?.push(element);
    element ===')' && stackArr?.pop();
  });
  return stackArr.length===0 
}

// const mapValues =  new Map<string,string>();
// mapValues.set('key1','value1'); 
// mapValues.set('key2','value2');

const inputArray = '(';
// console.log(is_prime(1));
console.log(is_balanced(inputArray));