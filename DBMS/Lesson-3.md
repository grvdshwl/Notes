# What is a JOIN in SQL?

The JOIN operator lets you combine related information in various ways, as I explained briefly above. There are various types of joins, divided into two main categories – INNER joins and OUTER joins.

The biggest difference between an INNER JOIN and an OUTER JOIN is that the inner join will keep only the information from both tables that's related to each other (in the resulting table).

An Outer Join, on the other hand, will also keep information that is not related to the other table in the resulting table.

There are three types of Outer Join: LEFT JOIN, RIGHT JOIN, and FULL JOIN. The differences between them involve which unrelated data they keep – it can be from the first table, from the second, or from both of them. The cells without data to fill will have a value of NULL.

[Join Article]("https://www.freecodecamp.org/news/sql-join-types-inner-join-vs-outer-join-example/#:~:text=The%20biggest%20difference%20between%20an,table%20in%20the%20resulting%20table.")

## Self Join

> A self join is a join in which a table is joined with itself (which is also called Unary relationships), especially when the table has a FOREIGN KEY which references its own PRIMARY KEY. To join a table itself means that each row of the table is combined with itself and with every other row of the table.

```SELECT a.column_name, b.column_name...
FROM table1 a, table1 b
WHERE a.common_filed = b.common_field;
```

```
SELECT E.first_name as employee , M.first_name as manager FROM employee as E  JOIN employee as M WHERE E.super_id = M.emp_id;
```

## What is a transaction?

[Transaction](https://databricks.com/glossary/acid-transactions#:~:text=ACID%20is%20an%20acronym%20that,operations%20are%20called%20transactional%20systems.)

In the context of databases and data storage systems, a transaction is any operation that is treated as a single unit of work, which either completes fully or does not complete at all, and leaves the storage system in a consistent state. The classic example of a transaction is what occurs when you withdraw money from your bank account. Either the money has left your bank account, or it has not — there cannot be an in-between state.

## A.C.I.D. properties:

[Lecture](https://www.youtube.com/watch?v=-GS0OxFJsYQ)

Atomicity, Consistency, Isolation, and Durability

ACID is an acronym that refers to the set of 4 key properties that define a transaction: Atomicity, Consistency, Isolation, and Durability.

If a database operation has these ACID properties, it can be called an ACID transaction, and data storage systems that apply these operations are called transactional systems.

ACID transactions guarantee that each read, write, or modification of a table has the following properties:

### Atomicity - each statement in a transaction (to read, write, update or delete data) is treated as a single unit. Either the entire statement is executed, or none of it is executed. This property prevents data loss and corruption from occurring if, for example, if your streaming data source fails mid-stream.

### Consistency - ensures that transactions only make changes to tables in predefined, predictable ways. Transactional consistency ensures that corruption or errors in your data do not create unintended consequences for the integrity of your table.

### Isolation - when multiple users are reading and writing from the same table all at once, isolation of their transactions ensures that the concurrent transactions don’t interfere with or affect one another. Each request can occur as though they were occurring one by one, even though they're actually occurring simultaneously.

### Durability - ensures that changes to your data made by successfully executed transactions will be saved, even in the event of system failure.

### Why are ACID transactions a good thing to have?

> ACID transactions ensure the highest possible data reliability and integrity. They ensure that your data never falls into an inconsistent state because of an operation that only partially completes. For example, without ACID transactions, if you were writing some data to a database table, but the power went out unexpectedly, it's possible that only some of your data would have been saved, while some of it would not. Now your database is in an inconsistent state that is very difficult and time-consuming to recover from.

### What Is Scalability?

[Scaling](https://www.cloudzero.com/blog/horizontal-vs-vertical-scaling#:~:text=While%20horizontal%20scaling%20refers%20to,%2C%20storage%2C%20or%20network%20speed.)

Scalability describes a system’s elasticity. While we often use it to refer to a system’s ability to grow, it is not exclusive to this definition. We can scale down, scale up, and scale out accordingly.

If you are running a website, web service, or application, its success hinges on the amount of network traffic it receives. It is common to underestimate just how much traffic your system will incur, especially in the early stages. This could result in a crashed server and/or a decline in your service quality.

### What Is Horizontal Scaling?

Horizontal scaling (aka scaling out) refers to adding additional nodes or machines to your infrastructure to cope with new demands. If you are hosting an application on a server and find that it no longer has the capacity or capabilities to handle traffic, adding a server may be your solution.

### What Is Vertical Scaling?

Vertical scaling (aka scaling up) describes adding additional resources to a system so that it meets demand. How is this different from horizontal scaling?

While horizontal scaling refers to adding additional nodes, vertical scaling describes adding more power to your current machines. For instance, if your server requires more processing power, vertical scaling would mean upgrading the CPUs. You can also vertically scale the memory, storage, or network speed.

![Scaling](https://www.cloudzero.com/hubfs/blog/horizontal-vs-vertical-scaling.webp)
