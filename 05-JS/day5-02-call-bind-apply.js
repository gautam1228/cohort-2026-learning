// call and apply ==> Basic cooks
// bind ==> returns a new function
//
function cookDish(ingredients, style) {
  return `${this.name} cooks ${ingredients} in ${style} style.`;
}

const sharmaKitchen = { name: "Sharma jis Kitchen" };
const guptaKitchen = { name: "Gupta jis Kitchen" };

console.log(cookDish.call(sharmaKitchen, "Paneer and spices", "Mughlai"));

const guptaOrder = ["Chole kulche", "Punjabi Dhaba"];

console.log(cookDish.apply(guptaKitchen, guptaOrder));

function reportDelivery(location, status) {
  return `${this.name} at ${location}: ${status}.`;
}

const deliveryBoy = { name: "Ranveer" };

console.log("Call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log(
  "Apply: ",
  reportDelivery.apply(deliveryBoy, ["Mars", "Picked Up"]),
);

const bindReport = reportDelivery.bind(deliveryBoy);

console.log("Bind: ", bindReport("Haridwar", "Delivered"));
