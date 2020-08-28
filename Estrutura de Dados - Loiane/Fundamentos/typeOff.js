var num = 0;

console.log('typeof num: ', typeof num);
console.log('typeof packet: ', typeof 'Packt');
console.log('typeof [1,2,3]: ', typeof [1, 2, 3]);
console.log('typeof Boolean: ', typeof true);
console.log('typeof {name: \'John\'}: ', typeof {name: 'John'});

var myObj = {name:'John', age:21}
delete myObj.age
console.log(myObj);