//function destructure
const user={name:'fahim ahmed',address:'gazipra', cell:'0175449958',house:54/3,age:21,friends:['abrar','abul','amirul','anisul','anwar','akhear']};
const{name,address,cell,salary}=user;
console.log(address,cell,name,salary);


// //array destructure
// const friends=['abrar','abul','amirul','anisul','anwar','akhear'];
// const[first,nextOne,...others]=friends;
// console.log(first,nextOne,others);


// //complex function destructure
// const jhamela ={
//     name:'fahim',
//     info:{
//         address:'gazipra',
//         cell:'0175449958'
//     }
// }
// const{address}=jhamela.info;
// console.log(address);