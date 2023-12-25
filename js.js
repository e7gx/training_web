/*let abdullahAge = 23
const yaerOfBirth = 2001


console.log(yaerOfBirth);
console.log(abdullahAge);

let result = 6 == 3;
console.log(result);


let notRaining = true;
let notFoggy = true;
let isSunny = notRaining && notFoggy;
console.log(isSunny);


let number = 2;
let result1 = ++number + 4; // prefix
console.log(result1);
console.log(number);


console.log('A\tB\tC\tD\tE');
console.log('A\nB\nC\nD\nE');
console.log('A\tB\tC\tD\tE');
console.log('A\nB\nC\nD\nE');
console.log('A\tB\tC\tD\tE');
let language = 'JavaScript';
console.log(language[2]);

let value = null;
console.log( value);

let a = 0;
let b = false;
console.log(a == b)
console.log(100 % 5)

let name = 'Nasser';
console.log(name.length);

let password = '_@2#b?';
if(password.length >= 8){
   console.log("The password is accepted") ;
}else { console.log("badd")}

let colors = ["red", "green", "blue"];

colors[1] = 'black';
console.log(colors[0]);

console.log(colors.length);
console.log(colors.includes('green'));
console.log(colors.includes('black'));
let result = colors.includes('black');
console.log(result);

colors.push('black');
console.log(colors);
colors.pop();
console.log(colors); 

let blueColor = colors.pop();
console.log(blueColor); 


colors.unshift('black');
console.log(colors);

colors.unshift('black');
colors.unshift('white');
console.log(colors);

colors.shift();
console.log(colors);
colors.shift();
colors.shift();
console.log(colors);

let color = 'black';

console.log(Array.isArray(color))
console.log(Array.isArray(colors))


const alghamdi =  [ [true] ,  [ 1,2,3,4], ['hi' , 'i am ', 'abdullah']];
console.log(alghamdi[2])

const alghamdi =  [
[1,2,3,],  
[4,5,6,], 
[7,8,9,],
];
console.log(alghamdi[2][2]);

let message =['abdullah','abdullah','is','good','man'];

let result = message.join('@');
console.log(result)

let sizeType = ["Small", "Medium", "Large"];
sizeType[sizeType.length - 1] = "Extra Large";
console.log(sizeType.length);

let arr = [1,2,3,4,5];



let number = 1;
if (number > 0) {
console.log('+');
}else if (number < 0) {
console.log('-');
}else {
console.log('Zero');
}


const names = ["abdullah ", "ibrahim ", "alghamdi"];

let hi = 4;

switch (hi) {
  case 1:
    console.log(names[0]);
    break;
  case 2:
    console.log(names[1]);
    break;
  case 3:
    console.log(names[2]);
  case 4:
  case 5:
    console.log("black");
    break;

  default:
    console.log("chose number from 1 to 5");
    break;
}

for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log("------------------------------");

let number = 5;
while (number >0) {
    console.log(number);
     number--;
}
console.log("------------------------------");

for (let index = 1; index <= 10; index++) {
    if(index % 2 == 0){
        console.log("Next");
        continue;
    }
    console.log(index);
}


for(let ddd = 10; ddd >= 0 ;ddd--){
    console.log(ddd)
    
}


// !array print and search

 const names = ["abdullah ", "ibrahim ", "alghamdi","abdullah ", "ibrahim ", "alghamdi"];



for(let i = 0;i < names.length ;i++){
  console.log(names[i])
}

for(abdullah of names){
  console.log(abdullah);
}*/



const message = 'abdullah is the GOAT';

for(let char of message ){
  console.log(char)
}