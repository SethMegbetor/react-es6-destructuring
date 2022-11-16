import animals, { useAnimals } from "./data";
// console.log(animals);
// destructing array
const [cat, dog] = animals;
// console.log(cat);

// destructing object
// const { name: catName, sound: catSound } = cat;
// console.log(catName);
// // giving the object a default value
// const { name = "Smart", sound = "Meeewww" } = cat;
// console.log(name);

// nested arrays
const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;
console.log(food);

console.log(useAnimals(cat));

const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
console.log(makeSound());

// // CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
