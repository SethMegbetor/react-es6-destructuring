// import animals, { useAnimals } from "./data";
// // console.log(animals);
// // destructing array
// const [cat, dog] = animals;
// // console.log(cat);

// // destructing object
// // const { name: catName, sound: catSound } = cat;
// // console.log(catName);
// // // giving the object a default value
// // const { name = "Smart", sound = "Meeewww" } = cat;
// // console.log(name);

// // nested arrays
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;
// console.log(food);

// console.log(useAnimals(cat));

// const [animal, makeSound] = useAnimals(cat);
// // console.log(animal);
// console.log(makeSound());

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

// console.log(honda);

const {
  coloursByPopularity: hondaColour,
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const hondaTopColour = hondaColour[0];
console.log(hondaTopColour);

const {
  coloursByPopularity: teslaColour,
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const teslaTopColour = teslaColour;
// // const [teslaTopSpeed, teslaTopColour] = speedStats;
// console.log(topSpeed);
// let hondaTopSpeed = topSpeed;
// console.log(hondaTopSpeed);

// console.log(tesla);
// console.log(tesla.speedStats);
// let teslaTopSpeed = tesla.speedStats;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
