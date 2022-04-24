# Object, Classes & Data Containers.

  ## Classes & Polymorphism
  
  Polymorphism is ability of an object to take many forms.
  
        type Purchase = any;

      let Logistics: any;

      interface Delivery {
        deliverProduct();
        trackProduct();
      }

      class DeliveryImplementation {
        protected purchase: Purchase;

        constructor(purchase: Purchase) {
          this.purchase = purchase;
        }
      }

      class ExpressDelivery extends DeliveryImplementation implements Delivery {
        deliverProduct() {
          Logistics.issueExpressDelivery(this.purchase.product);
        }

        trackProduct() {
          Logistics.trackExpressDelivery(this.purchase.product);
        }
      }

      class InsuredDelivery extends DeliveryImplementation implements Delivery {
        deliverProduct() {
          Logistics.issueInsuredDelivery(this.purchase.product);
        }

        trackProduct() {
          Logistics.trackInsuredDelivery(this.purchase.product);
        }
      }

      class StandardDelivery extends DeliveryImplementation implements Delivery {
        deliverProduct() {
          Logistics.issueStandardDelivery(this.purchase.product);
        }

        trackProduct() {
          Logistics.trackStandardDelivery(this.purchase.product);
        }
      }

      function createDelivery(purchase) {
        if (purchase.deliveryType === 'express') {
          delivery = new ExpressDelivery(purchase);
        } else if (purchase.deliveryType === 'insured') {
          delivery = new InsuredDelivery(purchase);
        } else {
          delivery = new StandardDelivery(purchase);
        }
        return delivery;
      }

      let delivery: Delivery = createDelivery({});

      delivery.deliverProduct();
      
      
  ## Classes should be small -prefer multiple small classes over one large class.

          class Order {
          public refund() {}
        }

        class Customer {
          private orders: Order[];

          constructor(email: string, password: string) {}

          public login(email: string, password: string) {}

          public updateProfile(name: string) {}

          public makePurchase(productId: string) {}
        }

        class Product {
          constructor(title: string, price: number) {}

          public update(Id: string, title: string, price: number) {}

          public remove(Id: string) {}
        }

        class Inventory {
          private products: Product;

          public getAvailableItems(productId: string) {}

          public restockProduct(productId: string) {}
        }
        
 
  ## Cohesion :
  
    How much class methods are using the class properties ?
    Try to achieve maximum cohesion.

    class OnlineShop {
      private orders: any;
      private offeredProducts: any;
      private customers: any;

      public addProduct(title: string, price: number) {} // offeredProducts

      public updateProduct(productId: string, title: string, price: number) {} // offeredProducts

      public removeProduct(productId: string) {} // offeredProducts

      public getAvailableItems(productId: string) {} // offeredProducts

      public restockProduct(productId: string) {} // offeredProducts

      public createCustomer(email: string, password: string) {} // customers

      public loginCustomer(email: string, password: string) {} // customers

      public makePurchase(customerId: string, productId: string) {} // customers, orders, offeredProducts --> Maximum cohesion

      public addOrder(customerId: string, productId: string, quantity: number) {} // customers, orders, offeredProducts --> Maximum Cohesion

      public refund(orderId: string) {} // customers, orders

      public updateCustomerProfile(customerId: string, name: string) {} // customers

      // ...
    }
    
    
## Law of dementer

     class Customer {
      lastPurchase: any;

      getLastPurchaseDate() {
        return this.lastPurchase.date;
      }
    }

    class DeliveryJob {
      customer: any;
      warehouse: any;

      constructor(customer, warehouse) {
        this.customer = customer;
        this.warehouse = warehouse;
      }

      deliverLastPurchase() {
        // const date = this.customer.lastPurchase.date;
        // const date = this.customer.getLastPurchaseDate();
        // this.warehouse.deliverPurchasesByDate(this.customer, date);
        this.warehouse.deliverPurchase(this.customer.lastPurchase);
      }
    }
  
  
  ## Single Responsibility Priniciple - classes should have a single responsibility
  
        // NOT violating SRP
      class User {
        login(email: string, password: string) {}

        signup(email: string, password: string) {}

        assignRole(role: any) {}
      }

      // Violating SRP
      class ReportDocument {
        generateReport(data: any) {}

        createPDF(report: any) {}
      }
      
  ## Open-Closed Principle - a class should be open for extension however closed for modification.
  
      // class Printer {
    //   printPDF(data: any) {
    //     // ...
    //   }

    //   printWebDocument(data: any) {
    //     // ...
    //   }

    //   printPage(data: any) {
    //     // ...
    //   }

    //   verifyData(data: any) {
    //     // ...
    //   }
    // }


    interface Printer {
      print(data: any);
    }

    class PrinterImplementation {
      verifyData(data: any) {}
    }

    class WebPrinter extends PrinterImplementation implements Printer {
      print(data: any) {
        // print web document
      }
    }

    class PDFPrinter extends PrinterImplementation implements Printer {
      print(data: any) {
        // print PDF document
      }
    }

    class PagePrinter extends PrinterImplementation implements Printer {
      print(data: any) {
        // print real page
      }
    }
    
## Liskov substition principle.

Objects should be replaceble with the instances of their sub classes without altering the behaviour.

      class Bird {}

      class FlyingBird extends Bird {
        fly() {
          console.log('Fyling...');
        }
      }

      class Eagle extends FlyingBird {
        dive() {
          console.log('Diving...');
        }
      }

      const eagle = new Eagle();
      eagle.fly();
      eagle.dive();

      class Penguin extends Bird {
        // Problem: Can't fly!
      }

## Interface segregation principle



      interface Database {
      storeData(data: any);
    }

    interface RemoteDatabase {
      connect(uri: string);
    }

    class SQLDatabase implements Database, RemoteDatabase {
      connect(uri: string) {
        // connecting...
      }

      storeData(data: any) {
        // Storing data...
      }
    }

    class InMemoryDatabase implements Database {
      storeData(data: any) {
        // Storing data...
      }
    }
    
## Dependency Inversion principle
  You should depend upon abstractions not concretions.

    interface Database {
      storeData(data: any);
    }

    interface RemoteDatabase {
      connect(uri: string);
    }

    class SQLDatabase implements Database, RemoteDatabase {
      connect(uri: string) {
        console.log('Connecting to SQL database!');
      }

      storeData(data: any) {
        console.log('Storing data...');
      }
    }

    class InMemoryDatabase implements Database {
      storeData(data: any) {
        console.log('Storing data...');
      }
    }

    class App {
      private database: Database;

      constructor(database: Database) {
        this.database = database; 
      }

      saveSettings() {
        this.database.storeData('Some data');
      }
    }


    const sqlDatabase = new SQLDatabase();
    sqlDatabase.connect('my-url');
    const app = new App(sqlDatabase);
