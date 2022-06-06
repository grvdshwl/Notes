# Database Design

> Data : Data is a collection of a Information that can be gathered by research,observation,collection or measurement. This information may be in the form of text ,documents, images, audio clips, software programs.

> Database : A database is an organized collection of data, typically stored electronically in a computer system.

> DBMS : Database management system is a software which is used to manage a database.DBMS helps in performing CRUD operations on the data stored in database along with performing other necessary operations like administration,security,import/export and backup.

Ex -> MySQL, PostgresSQL ,Oracle etc

> A relational database is a type of database that stores and provides access to data points that are related to one another. The RDBMS database uses tables to store data. A table is a collection of related data entries and contains rows and columns to store data.

> SQL Stands for Structured query language which is standard language for storing,manupulating and retreiving data in realtional database.

> SQL is a combination of two languages data defination language which is used to define data (CREATE TABLE , ALTER TABLE) and data manipulation language which is used to manipulate data (INSERT,DELETE,UPDATE,RETREIVE)

## Database Design

Database designs provide the blueprints of how the data is going to be stored in a system.

A properly designed database provides you with access to up-to-date, accurate information.

Properly designed database are easy to maintain, improves data consistency and are cost effective in terms of disk storage space.

A Good database design helps in avoiding data integrity anomolies.

There are three database design models :

1. Conceptual Model.
2. Logical Model.
3. Physical Model.

## Conceptual Model

Conceptual data model, describes the database at a very high level and is useful to understand the needs or requirements of the database.

## Logical Model

A logical data model describes the data in as much detail as possible, without regard to how they will be physical implemented in the database.

The steps for designing the logical data model are as follows:

1. Specify primary keys for all entities.
2. Find the relationships between different entities.
3. Find all attributes for each entity.
4. Resolve many-to-many relationships.

## Physical Model

A physical data model is a database-specific model that represents relational data objects (for example, tables, columns, primary and foreign keys) and their relationships. A physical data model can be used to generate DDL statements which can then be deployed to a database server.

The physical data model also helps in visualizing database structure by replicating database column keys, constraints, indexes, triggers, and other RDBMS features.

## Data Integrity

Data Integrity is the process of avoiding all the anomolies in a database.

There are basically three problems with storing data in a database :

1. Duplication of data ---> Entity Integrity ---> Primary Key

2. Useless or unrelated data --> Referentail Integrity ---> Foriegn key reference in child table along with constraits

3. Incorrect Information --> Domain Integrity ---> Data Types and constraits.

## Terms

Entity - An entity in the database can be defined as abstract data that we save in our database. For example, a customer, products.

Attributes - An attribute is a detailed form of data consisting of entities like length, name, price, etc.

Relationship - A relationship can be defined as the connection between two entities or figures. For example, a person can relate to multiple persons in a family.

Foreign key - It acts as a referral to the Primary Key of another table. A foreign key contains columns with values that exist only in the primary key column they refer to.

Primary key - A primary key is the pointer of records that is unique and not null and is used to uniquely identify attributes of a table.

Normalization - A flexible data model needs to follow certain rules. Applying these rules is called normalizing.

## Relationships

A relationship, in the context of databases, is a situation that exists between two relational database tables when one table has a foreign key that references the primary key of the other table.

Three types:

1. One to one

2. One to many

3. Many to many
