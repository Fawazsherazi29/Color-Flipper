const allColor = ['yellow', `white`,`blue`,`orange`, 'red', `pink`]



function flipper() {
    let changer = Math.floor(Math.random() * 5)
    console.log(changer)
let colorName = document.querySelector("#name");

colorName.textContent = allColor[changer]


    console.log("Function Chal GYa");
   document.body.style.backgroundColor = allColor[changer]; }