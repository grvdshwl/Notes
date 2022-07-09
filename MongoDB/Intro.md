> Defination : - MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables.

> The data stored in the MongoDB is in the format of BSON documents. Here, BSON stands for Binary representation of JSON documents. Or in other words, in the backend, the MongoDB server converts the JSON data into a binary form that is known as BSON and this BSON is stored and queried more efficiently.

> In MongoDB documents, you are allowed to store nested data. This nesting of data allows you to create complex relations between data and store them in the same document which makes the working and fetching of data extremely efficient as compared to SQL.

> The maximum size of the BSON document is 16MB.

## Features

- Schema-less Database: It is the great feature provided by the MongoDB. A Schema-less database means one collection can hold different types of documents in it. Or in other words, in the MongoDB database, a single collection can hold multiple documents and these documents may consist of the different numbers of fields, content, and size. It is not necessary that the one document is similar to another document like in the relational databases. Due to this cool feature, MongoDB provides great flexibility to databases.

- Document Oriented: In MongoDB, all the data stored in the documents instead of tables like in RDBMS. In these documents, the data is stored in fields(key-value pair) instead of rows and columns which make the data much more flexible in comparison to RDBMS. And each document contains its unique object id.

- Indexing: In MongoDB database, every field in the documents is indexed with primary and secondary indices this makes easier and takes less time to get or search data from the pool of the data. If the data is not indexed, then database search each document with the specified query which takes lots of time and not so efficient.

- Replication: MongoDB provides high availability and redundancy with the help of replication, it creates multiple copies of the data and sends these copies to a different server so that if one server fails, then the data is retrieved from another server.

- Aggregation: It allows to perform operations on the grouped data and get a single result or computed result. It is similar to the SQL GROUPBY clause. It provides three different aggregations i.e, aggregation pipeline, map-reduce function, and single-purpose aggregation methods

> You can provide \_id while inserting the document. If you don’t provide then MongoDB provides a unique id for every document. These 12 bytes first 4 bytes for the current timestamp, next 3 bytes for machine id, next 2 bytes for process id of MongoDB server and remaining 3 bytes are simple incremental VALUE.

## Disadvantages of MongoDB

### Joins not Supported

MongoDB doesn’t support joins like a relational database. Yet one can use joins functionality by adding by coding it manually. But it may slow execution and affect performance.

### High Memory Usage

MongoDB stores key names for each value pairs. Also, due to no functionality of joins, there is data redundancy. This results in increasing unnecessary usage of memory.

### Limited Data Size

You can have document size, not more than 16MB.

### Limited Nesting

You cannot perform nesting of documents for more than 100 levels.

## Replication

Replication is the process of synchronizing data across multiple servers. Replication provides redundancy and increases data availability with multiple copies of data on different database servers. Replication protects a database from the loss of a single server. Replication also allows you to recover from hardware failure and service interruptions.

#### How Replication Works in MongoDB

MongoDB achieves replication by the use of replica set. A replica set is a group of mongod instances that host the same data set. In a replica, one node is primary node that receives all write operations. All other instances, such as secondaries, apply operations from the primary so that they have the same data set. Replica set can have only one primary node.

Replica set is a group of two or more nodes (generally minimum 3 nodes are required).

In a replica set, one node is primary node and remaining nodes are secondary.

All data replicates from primary to secondary node.

At the time of automatic failover or maintenance, election establishes for primary and a new primary node is elected.

After the recovery of failed node, it again join the replica set and works as a secondary node.

![Replication](https://www.tutorialspoint.com/mongodb/images/replication.png)

## Set Up a Replica Set

```
mongod --port 27017 --dbpath "D:\set up\mongodb\data" --replSet rs0

```

### Sharding

Sharding is the process of storing data records across multiple machines and it is MongoDB's approach to meeting the demands of data growth. As the size of the data increases, a single machine may not be sufficient to store the data nor provide an acceptable read and write throughput. Sharding solves the problem with horizontal scaling. With sharding, you add more machines to support data growth and the demands of read and write operations.

#### Why Sharding?

In replication, all writes go to master node

Latency sensitive queries still go to master

Single replica set has limitation of 12 nodes

Memory can't be large enough when active dataset is big

Local disk is not big enough

Vertical scaling is too expensive

![Sharded Cluster](https://www.tutorialspoint.com/mongodb/images/sharding.png)

## [Mongo Create Backup LinK]("https://www.tutorialspoint.com/mongodb/mongodb_create_backup.htm")

## [Mongo Deployment]("https://www.tutorialspoint.com/mongodb/mongodb_deployment.htm")
