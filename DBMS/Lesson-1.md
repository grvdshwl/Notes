# Lesson 1

[Keys](https://www.youtube.com/watch?v=p3yJZH8_bsc)

> Primary Key : A primary key is the column or columns that contain values that uniquely identify each row in a table.

> Foreign Key : A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table. The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.

> Secondary Key : Alternate Key or Secondary Key is the key that has not been selected to be the primary key, but are candidate keys. However, it is considered a candidate key for the primary key.

> Super Key : Super keys are just attributes (or a single attribute) that can uniquely identify all rows in a relational database.

> Super Key is basically a super set of candiadte key and all other attributes. (2^n - 1)

> Candidate Key : Candidate key is a single key or a group of multiple keys that uniquely identify rows in a table. The value for the Candidate key is unique and non-null for all tuples. Candidate can alone be used to uniquely identify a row or tuple unlike super key which is a combination of candidate key + other attributes.

> Natural Key : It is the key which has real life reference or meaning in regards with datbase or table e.g. email,ssn,pan card number etc.

> Surrogate Key : It is the key which do not have any real life reference or meaning in regards with datbase or table e.g. comment_id,user_id etc.

> Simple Key : A attribute which stores one value at a time.

> Composite Key : It is a combination of two or more arritubutes. (Weak Entity)

> Compound Key : It is the combination of two or more foreign keys which are simple primary keys in referenced table. (M to N cardinality table.)

<img width="834" alt="Screenshot 2022-06-07 at 1 11 52 PM" src="https://user-images.githubusercontent.com/79152383/172324564-6b752bf6-820d-4642-9bba-bab30a5af8ba.png">

## Cardinality

In data modelling terms, cardinality is how one table relates to another.

It shows the maximum number of entities in one entity set, which can be associated with the number of entities of another entity set.

1. 1-1 (one row in table A relates to one row in tableB)

2. 1-Many (one row in table A relates to many rows in tableB)

3. Many-Many (Many rows in table A relate to many rows in tableB)

## Modality

Minimum number of instances of one entity set which can associate with each instance of other entity set is known as modality.

Minimum modality can be Zero (Optional) or One (Mandatory)

Optional: the Modality of Zero tells that no instance of an entity. Represented by small circle.
Mandatory: it indicates that single instance of an entity. Represented by vertical line |.

Also referred as participation.

Example -> Employee <--- Manages ----> Branch

<img width="740" alt="Screenshot 2022-06-07 at 1 48 03 PM" src="https://user-images.githubusercontent.com/79152383/172331633-ac10aa73-7b44-4a2b-8d26-864d62889b19.png">

<img width="714" alt="Screenshot 2022-06-07 at 1 49 36 PM" src="https://user-images.githubusercontent.com/79152383/172331947-56b9e6ae-1dfa-49d7-89e2-7a8f299124bc.png">

## Trigger

Trigger: A trigger is a stored procedure in database which automatically invokes whenever a special event in the database occurs. For example, a trigger can be invoked when a row is inserted into a specified table or when certain table columns are being updated.

```sql

DELIMITER $$

CREATE
    TRIGGER new_trigger BEFORE INSERT
    ON user
    FOR EACH ROW BEGIN
    INSERT INTO trigger_record VALUES("new user added");
    END$$

DELIMITER ;
```

<img width="1031" alt="Screenshot 2022-06-10 at 5 30 57 PM" src="https://user-images.githubusercontent.com/79152383/173060202-9b32d358-8e16-43b4-9af6-04ae21fb36f0.png">
