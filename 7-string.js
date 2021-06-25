// variable declartion
let tempstr;
console.log(tempstr);

// variable declaration + initialization
let str1 = "Hello World"; // DOUBLE QUOTE
let str2 = "Mumbai"; // SINGLE QUOTE
let str3 = `Hello Delhi`;

let str4 = "You are'nt eligible";
let str5 = 'Your are"nt eligible';

// BACKTICK :: String Contactnation
let output = "String Contacation " + str1 + " " + str2 + " " + str3;

// to use variable ${}
let outpu1 = `String Concatnation ${str1} ${str2} ${str3}`;

console.log(output);
console.log(outpu1);

// Normal MULTILINE String
let mstr1 =
  "afdafds fdfa sdf dfasf asdfa sdadsf " +
  "asdfdasa adsf asdf adsf as" +
  "asdfdasa adsf asdf adsf as" +
  "asdfdasa adsf asdf adsf as";

let mstr2 = `As an asynchronous event-driven JavaScript runtime, 
                Node.js is designed to build scalable network applications. 
                In the following "hello world" example, many connections can 
                be handled concurrently. Upon each connection, 
                the callback is fired, but if there is no work to 
                be done, Node.js will sleep.`;
console.log(mstr2);
