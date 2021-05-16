
const  arr = [1, 2, 3, -1, -2, -3];

function btn () {
  let out = '';
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      out += arr[i] + ' ';
      
    }
  }
  document.querySelector('.input').value = out;
}
document.querySelector('.btn').onclick = btn;


// const  arr = [1, 2, 3, -1, -2, -3];

// function func (arr){
 
//     let newArr = [];
//     if(newArr.length == 0) {
//      return 'that is empty';
//     }
    
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] > 0){
//         return alert(newArr[newArr[i]] = arr[i]);
      
//       }
//     }
// }

// func(arr);