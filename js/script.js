function stringTest(arg) {

    if(typeof arg != 'string') return console.log("це не строка");

    console.log(arg.split(" "));
    console.log(arg.length);
    console.log(arg.charAt(0));
    console.log(arg.charAt(arg.length-1));  
    console.log(arg.slice(5));
    console.log(arg.lastIndexOf('M'));
    console.log(arg.toLowerCase());
}


stringTest("SFSAFSAF ASFSAFSAFSAF ASFASFSAFM");

console.log("SFSAFSAF ASFSAFSAFSAF ASFASFSAFMSSSSS".split("S").length - 1)

console.log("SFSAFSAF ASFSAFSAFSAF ASFASFSAFM".length - 1)

var a = [1,2,3];
a.reverse().join();
console.log(a)

var a = new Array("Codeine", "Bones", "Anime");
a.sort();
var s = a.join(", "); 
console.log(a)

var stack = [];
stack.push("Anime","Anime2");
stack.pop("Anime");
console.log(stack)

var a = [1];
a.unshift(22);
console.log(a)

a = [1, 5, 10];
b = a.map(function(x) { return x*x; }); 
console.log(b)

a = [5, 0, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 2 }); 
everyother = a.filter(function(x,i) { return i%3==0 }); 
console.log(smallvalues,everyother)