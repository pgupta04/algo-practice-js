var arr:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var num = 3;
var altRevFunc = (arr:number[],n:number):number[]=> {
  let flipIndex:number = n*2; 
  for(let index=n-1;index<arr.length;index=index+n){
    console.log('outer loop index',index);
    if(index===flipIndex-1){
      console.log('outer loop match',index);
      rotateSubArray(index,index-n+1, arr);
      flipIndex=flipIndex+n*2;
    }
  }
  return arr;
}

var rotateSubArray = (eIndex:number, bIndex:number, arr:number[]):void => {
  for(let i=bIndex, j=eIndex;i<j;i++,j--){
    console.log('inner loop index',i);
    var bValue = arr[i];
    arr[i] = arr[j];
    arr[j] = bValue;
  }
}

var result = altRevFunc(arr,num);
console.log(result);
