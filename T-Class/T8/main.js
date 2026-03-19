const btn = document.getElementById("btn");

// btn.onclick = function () {
//     console.log("Hello from DOM!");
// };

// [NOTE]: Best approach is to use eventListeners

// btn.addEventListener("click", function() {
//     console.log("Clicked...");
// });

// btn.addEventListener("click", function() {
//     console.log("Clicked 2...");
// });
// btn.addEventListener("click", function() {
//     console.log("Clicked 3...");
// });

// [NOTE]: These event listeners are not overwritten, instead they're all added as listeners

const parent = document.getElementById("parent")
const child = document.getElementById("child")
const body = document.body;

body.addEventListener("click", function () {
    console.log("Body clicked !");
});

child.addEventListener("click", function () {
    console.log("Child clicked !");
});

parent.addEventListener("click", function () {
    console.log("Parent clicked !");
});

// Event starts travelling from the document object. 
// Event phases:
// 1. Capturing (Top -> Down)
// 2. Targeting
// 3. Bubbling (Bottom -> Up)


// [NOTE]: By default, when the child is clicked, all the parents are clicked as well
