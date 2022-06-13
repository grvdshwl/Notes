# Lecture in DBMS

## Indexing in Database

It is a technique which is used to quickly locate and access the data in a database.

Indexes are created using a few database columns :-

1. The first column is the Search key that contains a copy of the primary key or candidate key of the table. These values are stored in sorted order so that the corresponding data can be accessed quickly.

Note: The data may or may not be stored in sorted order.

2. The second column is the Data Reference or Pointer which contains a set of pointers holding the address of the disk block where that particular key value can be found.

<img width="569" alt="Screenshot 2022-06-10 at 1 24 43 PM" src="https://user-images.githubusercontent.com/79152383/173018540-8a654ccd-02eb-406e-9ce2-088f5f932047.png">

Example

Let’s say we have a table of employees with thousands of records, each of which is ten bytes large. If their IDs begin with 1, 2, 3,…, etc., and we are looking for the student with ID-543:

We must search the disk block from the beginning till it reaches 543 in the case of a DB without an index. After reading 543*10=5430 bytes, the DBMS will read the record.
We will perform the search using indices in the case of an index, and the DBMS would read the record after it reads 542*2 = 1084 bytes, which is significantly less than the prior example.

[Lecture](https://www.guru99.com/indexing-in-database.html)


