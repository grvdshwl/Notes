db.users.bulkWrite([
  { insertOne: { document: { name: "gaurav", major: "science", gpa: 9.8 } } },
  {
    updateOne: {
      filter: { major: "humanities" },
      update: { $set: { major: "arts" } },
    },
  },
]);

db.purchase_orders.insertMany([
  { product: "toothbrush", total: 4.75, customer: "Mike" },
  { product: "guitar", total: 199.99, customer: "Tom" },
  { product: "milk", total: 11.33, customer: "Mike" },
  { product: "pizza", total: 8.5, customer: "Karen" },
  { product: "toothbrush", total: 4.75, customer: "Karen" },
  { product: "pizza", total: 4.75, customer: "Dave" },
  { product: "toothbrush", total: 4.75, customer: "Mike" },
]);

db.purchase_orders.aggregate([
  { $match: {} },
  { $group: { _id: "$product", total: { $sum: "$total" } } },
  { $sort: { total: -1 } },
]);

db.purchase_orders.aggregate([
  { $match: {} },
  { $group: { _id: "$product", total: { $sum: "$total" } } },
]);

db.students.insertMany([
  {
    name: "john",
    gpa: 7.5,
    major: "biology",
  },
  {
    name: "max",
    gpa: 6.3,
    major: "chemistry",
  },
  {
    name: "loren",
    gpa: 5.2,
    major: "history",
  },
  {
    name: "sarah",
    gpa: 7.9,
    major: "biology",
  },
  {
    name: "mike",
    gpa: 4.2,
    major: "history",
    grades: [76, 65, 34, 23],
  },
  {
    name: "susen",
    gpa: 8.8,
    major: "physics",
    contact: {
      phone: "9898989898",
    },
  },
  {
    name: "joey",
    gpa: 5.9,
    major: "bilogu",
  },
]);
