// const buttons = document.querySelectorAll('button');
// const cake = document.querySelectorAll('.cake')
// console.log(buttons, cake)

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log(event.target)

//     })
// })
const btnCake = document.querySelector('.btn-cake');
const btnSweet = document.querySelector('.btn-sweet');
const btnCupcake = document.querySelector('.btn-cupcake');
const btnDoughnut = document.querySelector('.btn-doughnut');
const btnAll = document.querySelector('.btn-all');
const cardCake = document.querySelector('.cake');
const cardSweet = document.querySelector('.sweet');
const cardCupcake = document.querySelector('.cupcake');
const cardDoughnut = document.querySelector('.doughnut');

btnCake.addEventListener('click', myFunc)

function myFunc() {
    $('.cupcake').css("display", "none");
    $('.sweet').css("display", "none");
    $('.doughnut').css("display", "none");
    $('.cake').css("display", "block");

}
btnSweet.addEventListener('click', myFunc2)

function myFunc2() {
    $('.sweet').css("display", "block");
    $('.cake').css("display", "none");
    $('.doughnut').css("display", "none");
    $('.cupcake').css("display", "none");
}
btnCupcake.addEventListener('click', myFunc3)

function myFunc3() {
    $('.sweet').css("display", "none");
    $('.cupcake').css("display", "block");
    $('.cake').css("display", "none");
    $('.doughnut').css("display", "none");


}
btnDoughnut.addEventListener('click', myFunc4)

function myFunc4() {
    $('.doughnut').css("display", "block");
    $('.cupcake').css("display", "none");
    $('.sweet').css("display", "none");
    $('.cake').css("display", "none");

}
btnAll.addEventListener('click', myFunc5)

function myFunc5() {
    $('.cupcake').css("display", "block");
    $('.sweet').css("display", "block");
    $('.doughnut').css("display", "block");
    $('.cake').css("display", "block");
}
