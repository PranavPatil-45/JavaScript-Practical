const one = document.getElementById("one")
const two = document.getElementById("two")
const btn1 = document.getElementById("btn1")
const h2 = document.getElementById("h2")





btn1.addEventListener("click" , () => {

   let one_number = parseInt(one.value)
    let two_number = parseInt(two.value)
    let sum = one_number + two_number; 

    h2.innerHTML = " Sum of " + one_number + " & " +  two_number + " is :-  " +  sum ;

})
 

btn2.addEventListener("click" , () => {

    let one_number = parseInt(one.value)
    let two_number = parseInt(two.value)
    let sub = one_number - two_number; 

    h2.innerHTML = " Subtraction of " + one_number + " & " +  two_number + " is :-  " +  sub ;

})
 


btn3.addEventListener("click" , () => {

    let one_number = parseInt(one.value)
    let two_number = parseInt(two.value)
    let mult = one_number * two_number; 

    h2.innerHTML = " Multiplication of " + one_number + " & " +  two_number + " is :-  " +  mult ;

})
 


btn4.addEventListener("click" , () => {

    let one_number = parseInt(one.value)
    let two_number = parseInt(two.value)
    let div = one_number / two_number; 

    h2.innerHTML = " Division of " + one_number + " & " +  two_number + " is :-  " +  div ;

})
 

btn5.addEventListener("click" , () => {

    let one_number = parseInt(one.value)
    let two_number = parseInt(two.value)
    let modal = one_number % two_number; 

    h2.innerHTML = " Mod of " + one_number + " & " +  two_number + " is :-  " +  modal ;

})
 