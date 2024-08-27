             // ⭐email pass java start⭐//

//  let email = "abcdef@gmail.com"
//  let password = "password"

// if (email === "abcdef@gmail.com") {
//     if (password === "pasword") {
        
//     } else {
//         document.write('your password is not valid')
//     }
// } else {
//     document.write('your email is not valid')
// }


               // ⭐email pass java end⭐//
              


              //⭐email pass java with function⭐//
             

// let email = "abcdef@gmail.com"
// let password = "password"


// function check(a,b){
//     if (email === a) {
//         if (password === b) {
            
//         } else {
//             document.write('your password is not valid')
//         }
//     } else {
//         document.write('your email is not valid')
//     }

// }

// check("abdef@gmail.com","password")

              //⭐email pass java with function⭐//
              


                   //⭐light portion start⭐//
            
let on = document.querySelector('.on')
let img = document.querySelector('.imgon')
let off = document.querySelector('.off')

on.addEventListener('click', function () {
     img.src = "https://www.w3schools.com/js/pic_bulbon.gif"
}) 
 
off.addEventListener('click', function () {
    img.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})


                   //⭐light portion end⭐//
                  
                  
       
                   
                  // ⭐count section start⭐ //
               

let inc = document.querySelector('.inc')
let input = document.querySelector('.incdec')
let dec = document.querySelector('.dec')


inc.addEventListener('click', function () {
     if (Number(input.value) < 5) {
          input.value = Number(input.value) + 1 
     } else {
          inc.style.cursor = 'not-allowed'
     }
})

dec.addEventListener('click', function(){
     if(Number(input.value) <= 5){

          if (Number(input.value) == 1) {
               dec.style.cursor = 'not-allowed'
          }else{
               let test = Number(input.value) 
               input.value = test - 1
          }
     }

})


                  // ⭐count section end⭐ //
                  


               //  ⭐ bg color section start ⭐ //
               
let btn = document.querySelector('.btn_clr')
let clrBg = document.querySelector('.clckhere')

btn.addEventListener('click', function () {
     let red = Math.floor(Math.random() * 255)
     let green = Math.floor(Math.random() * 255)
     let blue = Math.floor(Math.random() * 255)


     clrBg.style.background = `rgb(${red}, ${green}, ${blue})`
})


                //   ⭐ bg color section end⭐ //
                

let slideValue = document.querySelector(".per");
let inputSlider = document.querySelector(".in");

inputSlider.oninput = (() => {
     let value = inputSlider.value;
     slideValue.textContent = value;
     slideValue.style.left = (value / 2) + "%";
     slideValue.classList.add("show");
});