let uri = "How's%20it%20going%3F";
let decoded = decodeURIComponent(uri);
console.log("Decoded = \"" + decoded + "\"");
let word = "How's it going?";
let encoded = encodeURIComponent(word);
console.log(encoded);
// http://www.basescripts.com?=Hello World";
let uriComponent = "http://www.basescripts.com?=Hello World";
console.log(encodeURI(uriComponent));