
let colors = ['purple','orange','red','black','blue'] ;
let food = ['salad','pizza','taco'];

console.log(colors);
console.log(colors[2]);
console.log(colors[4]);

/*to add an item tothe array*/

colors.push('green');
console.log(colors);

/*to remove an item tothe array*/
colors.pop()
console.log(colors);

/*to sort item from the array*/
console.log(colors.sort());


//object

let perScholas={
    week1: 'html',
    week2: 'css',
    week3: 'javascript'
}
console.log(perScholas);

//functions
//ex1
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }

  function greeting(name) {
    alert('Hello ' + name);
  }
    
  processUserInput(greeting);

  //ex2
function greet(name){
 // console.log('hello'+name);
 alert(name);
}
function userName(callback){
    var name= prompt("enter your name:");
    callback(name);
}
userName(greet);
