const people = [
  { id: "1", name: "Dan", age: 35 },
  { id: "2", name: "Jules", age: 60 },
  { id: "3", name: "Elon", age: 50 },
];

let result;

//count
result = people.reduce((acc, person) => acc + 1, 0);
//console.log(result);

//sum ages

result = people.reduce((acc, person) => acc + person.age, 0);
//console.log(result);

// array of names (map)
result = people.reduce((acc, person) => [...acc, person.name], []);
//console.log(result);

// convert to id => person lookup (dict)

result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});
//console.log(result);

// max age

result = people.reduce((acc, person) => {
  if (acc === null || person.age > acc) return person.age;
  return acc;
}, null);
//console.log(result);

// min age

result = people.reduce((acc, person) => {
  if (acc === null || person.age < acc) return person.age;
  return acc;
}, null);
//console.log(result);

// find by name
result = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "Dan") return person;
  return null;
}, null);
//console.log(result);

// all over 18
result = people.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 35;
}, true);
//console.log(result);

// any over 18

result = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 35;
}, false);
//console.log(result);

// count occurrences
const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];
result = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});
console.log(result);

// flatten

const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

function flatten(acc, item) {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
}

result = folders.reduce(flatten, []);

console.log(result);
