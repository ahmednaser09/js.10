///////// 1 
const stringToArray = (str) => str.split(" ");
let input = "Orange Jordan";
let result = stringToArray(input);
console.log(result); 

///////////// 2
const hidePhoneNumber = (phoneNumber) => "*******" + phoneNumber.slice(-3);
let phone = "0776807777";
let hiddenPhone = hidePhoneNumber(phone);
console.log(hiddenPhone); 

/////////// 3
const hideEmail = (email) => {
    const [username, domain] = email.split("@");  
    return username.slice(0, 6) + "……@" + domain.split(".")[0] + ".jo";  
};
let email = "orange_academy@orange.jo";
let hiddenEmail = hideEmail(email);
console.log(hiddenEmail); 

/////////// 4
const capital = (input) =>
    input
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
let Input = "coding academy by orange";
const moh = capital(Input);
console.log(moh); 

//////////// 5
const flipNumber = (num) =>
    parseInt(num.toString().split("").reverse().join(""));
let inp = 92485;
let out = flipNumber(inp);
console.log(out); // 58429

/////////// 6
const swap = (a, b) => ({ a: b, b: a });
let result3 = swap(3, 4);
console.log(`a=${result3.a}, b=${result3.b}`); 

/////// 7. 
const removeCharacterAtIndex = (str, index) =>
    index < 0 || index >= str.length
        ? str
        : str.slice(0, index) + str.slice(index + 1);
let inputString = "Orange";
let indexToRemove = 3;
let delet = removeCharacterAtIndex(inputString, indexToRemove);
console.log(delet); 


///////////////////////9
const merg = (str1, str2) => {
    return str1.slice(1) + str2.slice(1);
  };
  const inpu = "lora";
  const inpu1 = "inge";
  console.log(mergeStrings(inpu, inpu1));
  ////10
  const Position = (char, str) => {
    return str.sWith(char) || str.endsWith(char);
  };
  console.log(Position1("z", "orange"));
  console.log(Position("o", "orange"));
  ///11/////
  const reorderString = (str) => str.split("").sort().join("");
const input11 = "Orange";
console.log(reorderString(input11));

