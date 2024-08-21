// Create reference to buttons and copyDiv
let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");

// define golabal varibale
let rgb1 = "#000";
let rgb2 = "#fff";


// create function who generate random values.
const hexaValues = () => {
    let hexaColor = "#";
    let myHexa = "0123456789abcdef";

    for (let i = 0; i < 6; i++) {
        hexaColor = hexaColor + myHexa[Math.floor(Math.random() * 16)];     //here just join first and 2nd variable with +.
    }
    return hexaColor;
};

const handleButton1 = () => {                  //create function            
    rgb1 = hexaValues();                      // Update the global variable,if we use let rgb1 it becomes block scope and we will be never update the value of rgb1 
    // console.log(rgb1);                    //console rgb value
    btn1.style.backgroundColor = rgb1;      //update the button1 background color
    btn1.innerText = rgb1;                 //update button text according to the value of rgb1
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;        //update body color
    copyDiv.innerHTML = `Background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;        //update the value of linera gradient rgb1 and rgb2
};

const handleButton2 = () => {
    rgb2 = hexaValues();                     // Update the global variable
    // console.log(rgb2);
    btn2.style.backgroundColor = rgb2;      // //update the button1 background color
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `Background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleButton1);      //apply addeventlistner on btn1 and write type of event which is 'click',and give the refrence of function  handleButton1
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);           //here we use window object and in this we use navigator.writeText function and pass the value of text written in the copy div
});
