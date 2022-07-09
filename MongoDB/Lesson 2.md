# Commands

1. Basic syntax to create or switch database :

` use DATABASE_NAME`

2. show all present databases in machine:

`show databases`

> Note : If your created database (mydb) is not present in list. To display database, you need to insert at least one document into it.

3. drop database

```
use DATABASE_NAME

db.dropDatabase()
```

4. create a collection

```
db.createCollection("COLLECTION_NAME",{options})
```

Options

- max : Specifies the maximum number of documents allowed in the capped collection.

- capped : If true, enables a capped collection. Capped collection is a fixed size collection that automatically overwrites its oldest entries when it reaches its maximum size. If you specify true, you need to specify size parameter also.

- size : Specifies a maximum size in bytes for a capped collection. If capped is true, then you need to specify this field also.

> Note - In MongoDB, you don't need to create collection. MongoDB creates collection automatically, when you insert some document.

5. drop collection

```
use DATABASE_NAME

db.COLLECTION_NAME.drop()
```

6. show all present collections :

`show collections`

7. Insert Documents into a collection:

```
// Insert One Document

db.COLLECTION_NAME.insertOne(document)

// Insert more than one Document in one query

db.COLLECTION_NAME.insertMany([documents])


```

8. Query for documents

```

// Find all students
db.students.find( {} )

// Find the first 3 students
db.stuents.find( {} ).limit(3)

// Find all students and sort by name in ascending order
db.students.find( {} ).sort( {name: 1} )

// Find all students and sort by name in ascending order
db.students.find( {} ).sort( {gpa: -1, name: 1} )

// Find all biology majors
db.students.find( {major: "Biology"} )

// Find all student's with a phone number 333-3333
db.students.find( {contact: {phone: "333-3333", email: "student@school.edu"} } )

// Find all biology majors named Jack
db.students.find( {name: "Jack", major: "Biology"} )

// Final all students who are chemistry majors or named Jack
db.students.find( { $or: [ {name: "Jack"}, {major: "Chemistry"} ] } )

// Final all students with a gpa above 3.5
db.students.find( {gpa: {$gt: 3.5} } )

// Find all students with a gpa less than or equal to 3.2
db.students.find( {gpa: {$lte: 3.2} } ).sort({gpa: -1})                  // $eq, $ne, $lt, $lte, $gt, $gte

// Find all students with names in the array
db.students.find( {name: {$in: ["Kate", "Claire"]} } )   // $in, $nin

// Find all students who have awards
db.students.find( {awards: {$exists: true} } )           // false

// Find all db entries where the name is a string
// Type list - https://docs.mongodb.com/manual/reference/bson-types/
db.students.find({name: {$type: 2} })

// Find all students who's first grade is a 90
db.students.find( {"grades.0": 90 } )

// Find all students who have a grade greater than 80
db.students.find( {grades: {$elemMatch: { $gte: 80} } } )

// Find all students who have 4 grades recorded
db.students.find( {grades: {$size: 4 } } )


```

9. Update or Delete document :

```
db.students.updateOne(<filter>, <update>, <options>)

// Do this twice so we can change it back with updateMany
db.students.updateOne(
     {major: "Biology"},
     {
       $set:
          {major: "Bio"}
     }
)

db.students.updateMany(
     {major: "Bio"},
     {
       $set:
          {major: "Biology"}
     }
)

// replaceOne()
db.students.replaceOne(
     {major: "Bio"},
     {name: "new name", major: "new major", gpa: 4.0}
)

// Delete all documents
db.students.deleteMany({})

db.students.deleteOne({major: "Biology"})

db.students.deleteMany({gpa: {$gte: 3.5}}

```

# Rename a field

`db.users.update({},{$rename:{"oldname":"newname"}},false,true)`

# Remove a field completely

```
db.users.update({}, {$unset: {address:1}}, false, true);

```
