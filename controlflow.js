if (true) {
  console.log("controlflow file loaded");
}

// if (0 || (0 && 1)){

/*

result1 = true && true - T
result2 = true && false - F

result3 = false || true - T
result4 = false || false - F

result5 = 0 && 1 - F

*/

let shortCircuitExperiment = null ?? 2
console.log(shortCircuitExperiment);

let authResponse = null;
let errorResponse = {
    code: 401,
    message: "Auth went bad."
}
let someAuthExample = authResponse ?? errorResponse;
console.log(someAuthExample);
if (someAuthExample.code == 401){
    console.error("Login error occurred!");
}

if (0 || false) {
  console.log("controlflow short circuit condition");
} else {
  console.log("if was given a 'false' so it didn't run!");
}

let someValue = "true";

// truthy checking
if (someValue) {
  console.log("someValue has a mesage!! It is: \n" + someValue);
}

// equality checking
if (someValue == true) {
  console.log("the someVale strong equalled a true boolean value");
} else {
  console.log("the someValue string did NOT equal a true boolean value");
}

/*
syntax for our if
if someValue
    print("tada!")

if (someValue) {
    console.log("tada!")
}
*/
