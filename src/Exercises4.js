import React from "react";

// --- DATA ---
var people = [
  { name: "Jack", age: 50 },
  { name: "Michael", age: 9 },
  { name: "John", age: 40 },
  { name: "Ann", age: 19 },
  { name: "Elisabeth", age: 16 },
];
var array = [1, 2, 3, 4];
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const person = { name: "Costas", address: { street: "Lalaland 12" } };

const teen = (p) => p.age >= 13 && p.age <= 20;
const firstTeen = people.find(teen);
const allTeen = people.filter(teen);
const isEveryTeen = people.every(teen);
const isAnyTeen = people.some(teen);
console.log("First teen:", firstTeen);
console.log("All teens:", allTeen);
console.log("Is every teen:", isEveryTeen);
console.log("Is any teen:", isAnyTeen);

const sum = array.reduce(function (a, b) {
  return a + b;
}, 0);
const sumShort = array.reduce((a, b) => a + b, 0);
console.log("Sum:", sumShort);

companies.forEach((company) => console.log("Company:", company.name));
companies
  .filter((c) => c.start > 1987)
  .forEach((c) => console.log("Name company >1987:", c.name));
// Sort the companies based on their end date in ascending order
const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);
console.log("Sorted companies:", sortedCompanies);
// 	Sort the ages array in descending order
const sortedAges = [...ages].sort((a, b) => b - a);
console.log("Sorted ages:", sortedAges);
const sumAges = ages.reduce((total, age) => total + age, 0);
console.log("Sum of ages:", sumAges);
// •	Make a new object that has the properties of name and category same as the companies [0]
const newCompany = { name: companies[0].name, category: companies[0].category };
console.log("New company object:", newCompany);

const sumNumbers = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sumNumbers(1, 2, 3, 4, 5));
const collectValues = (...args) =>
  args.flatMap((item) => (Array.isArray(item) ? item : [item]));
console.log("Collected values:", collectValues(1, [2, 3], 4, [5, 6]));
const {
  address: { street },
} = person;
console.log("Street:", street);
const createCounter = () => {
  let count = 0;
  return () => count++;
};
const getNext = createCounter();
console.log("Next count:", getNext());
console.log("Next count:", getNext());

function Exercises4() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Hello
        <span style={{ color: "blue", fontSize: "40px" }}> React</span>
      </h1>
      <div style={{ textAlign: "center" }}>
        <img src="/logo512.png" alt="Logo" style={{ width: "200px" }} />
        <p style={{ color: "lightseagreen" }}>This is the React logo!</p>
        <p style={{ fontSize: "12px", color: "gray" }}>
          (I don't know why it is here either)
        </p>
        <p>The library for web and native user interfaces</p>
      </div>
      <div
        style={{
          background: "#555",
          padding: "10px",
          color: "white",
        }}>
        <span style={{ background: "green", padding: "5px" }}>Home</span>
        <span> Search </span>
        <span> Contact </span>
        <span style={{ background: "black", padding: "5px" }}>Login</span>
      </div>
      <h1 style={{ color: "blue" }}>This is JSX</h1>

      <h1>Course names</h1>
      <ul>
        <li>React</li>
        <li>ReactNative</li>
        <li>NodeJs</li>
      </ul>
      {companies
        .filter((c) => c.category === "Retail")
        .map((c) => (
          <div key={c.name}>
            <p>Name:{c.name}</p>
            <p>Category: {c.category}</p>
            <p>Start: {c.start + 1}</p>
            <p>End: {c.end}</p>
          </div>
        ))}
    </>
  );
}
export default Exercises4;
