var bear = "Grizzly";

let obj = {animal: "bear",
"age": 24}
console.log(obj.animal + obj.age);
obj.age = 25;
console.log(obj.animal + obj.age);
obj.color = "black";
console.log(obj);

//copy object

let obj2 = {...obj};
console.log(obj2);
obj2.age=100;
console.log(JSON.parse(JSON.stringify(obj2)));

let myarray =  ["Todd", 123];
console.log(myarray);
myarray.push("TRodd");
console.log(myarray);
myarray.splice(1,1);
console.log(myarray);






