# Data Normalization

Data normalization is a technique of organizing the data into multiple related tables, to minimize redundency.
[Data Normalization]("https://www.youtube.com/watch?v=xoTyrdT9SZI&list=PLLGlmW7jT-nTr1ory9o2MgsOmmx2w8FB3&index=1)

> Data Redundency : repetition of similar data at multiple places.

# Why we need data normalization

1. DB occupies more space .
2. Insertion Problem.
3. Deletion problem.
4. Updation problem.

<img width="1275" alt="Screenshot 2022-06-08 at 10 45 03 AM" src="https://user-images.githubusercontent.com/79152383/172537205-c638c021-f160-41fe-8fb9-cd17578868d2.png">

## 1st NF (atomicity)

### Rules

1.  Each column should contain atomic values (single values).

2.  In Each column value stored must be of same type.

3.  Each coulmn should have a unique name.

4.  Each row should be able to uniquely identified.

## 2nd NF (partial dependency)

### Rules

1. It should be in 1st NF.

2. All the non key attribute must be fully dependent on the primary key and there should be no partial dependency.

3. If there is composite key then non prime attribute must dpendend on both pieces of primary and not just one

## 3rd NF (transitive dependency)

### Rules

1. It should be in 2nd NF.

2. When there is a non-prime attribute in a table that depends on another non-prime attribute it is known as transitive depedency.

## Boyce codd normal form (BCNF)

### Rules

1. It is upgraded form 3NF.

2. BCNF does not allow any prime attribute depend on non prime attribute.

<img width="1182" alt="Screenshot 2022-06-08 at 11 36 48 AM" src="https://user-images.githubusercontent.com/79152383/172543706-e6592e11-4387-4246-9920-87ef73bba22a.png">

## 4th NF (multi-valued dependency)

### Rules

1. It should be in BCNF.

2. It should not have multi-valued dependency.

 <img width="1313" alt="Screenshot 2022-06-08 at 12 17 55 PM" src="https://user-images.githubusercontent.com/79152383/172550350-efb71514-fde5-4b81-9c53-e624d2c87364.png">

## 5th NF (Join dependency)

### Rules

1. It should be in BCNF.

2. It should not have Join dependency.

<img width="1307" alt="Screenshot 2022-06-08 at 12 25 18 PM" src="https://user-images.githubusercontent.com/79152383/172551861-072dc2c5-91d0-4174-a14a-01638e46b401.png">

<img width="1080" alt="Screenshot 2022-06-08 at 12 25 57 PM" src="https://user-images.githubusercontent.com/79152383/172551872-fbc2c386-4c60-41b6-843e-7a41a2c6eb61.png">

Indexing :- Clustered vs Non Clustered Indexing.

[Indexing]("https://stackoverflow.com/questions/1251636/what-do-clustered-and-non-clustered-index-actually-mean")

[Index Article]("https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/")
