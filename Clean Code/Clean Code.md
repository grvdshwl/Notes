# Clean Code Notes

A vast majority of time of developers is spent for reading and understanding code.

Clean code is the code which is easy to read,understand & should be concise.

## Naming
   A good name should be meaning , as so , that reader should understanding what variable is storing or what function is tring to to do without even looking at the code.
   
   ### Rules
        1. Variables/Constants/Data Containers -> Noun or short adjective
        2. Functions -> Verbs 
        3. Classes -> Noun or shortAdjective
   
   ### Name Casing :-
       
       snake_case -> e.g. : is_valid  -> python (variables,functions)
       
       camelCase -> e.g. isValid -> java, javascript (varaibles,functions)
       
       PascalCase -> e.g. IsValid -> class or functional component in javascript
       
       kebab-case -> e.g. is-valid -> html, css
       
       
       
  ### Naming Variables,Constants and Properties (Data containers) :-
      
      Object/Array/Map -> use a  name which is specific and concise and describe the value -> e.g. authenticatedUser, customer,seller,user etc
      
      String/Number ->  use a  name which is specific and concise and describe the value -> e.g. firstName, age etc
      
      
      Boolean -> ask question a true/false question -> e.g. isValid,isUserAutheticated.
      
  ### Naming Function & Methods :- 
  
        Performs Operations ->describe the operation or what function is doing e.g. -> getUserById, saveUser,checkIsValid ,response.send() etc
        
        Return Boolean -> ask question a true/false question -> e.g. nameIsValid, Purchase.isPaid() etc.
        
        
  ### Classes 
  
         Describe the object  which is being instatiated with a clear name e.g. ---> User,Admin etc
         
         for getter and setter its ok to describe as data container and not as a function.
         
   
   Tips
   
   1. Don't include redundant information in name e.g. ---> userWithNameAndAge('gaurav',31) 
   2. Avoid slang,abbreviation & Disinformation e.g. --> product.diePlease(), user.heyHomies()
   3. Use distinctive name. Don't use similar name for slightly different things as it will help avoid confusion.
   4. Be constistent e.g. --> If you choose getUsers() ,sticks with it in entire program , don't use fetchUsers() or retrieveUsers().
   
## Comments & Code Formatting

Generally one should avoid comment excepts few acceptions.

   ### Bad Comments
   1. Redundant Comments 
   2. Misleading Comments
   3. Divider / Block Marker
   4. Commented-Out Code
   
   ### Good Comments
   1. Legal Information
   2. Explanations which can't be replaced by Good Naming. e.g. -> commenting a RegEx.
   3. Warning e.g. //! Only work in development environment.
   4. Todo : Note 

   ## Vertical Formatting
   1. If file has too many lines of code try spiltting the code  with multiple concepts in multiple files. e.g. --> One class per file
   2. Different concepts/methods should be spaced vertically.
   3. Similar concepts/methods should not be spaced vertically.
   4. Related concepts/methods should be placed close to each other.
   
   ## Horizontal Formatting
   1. Instead of one single line of code which has long arguments, assign the argument to a variable/constant and then use that constant name as argument to make code readable.
   2.  Don't use very long name to describe a variable,constant or function.
   
    

   

 # Functions and Methods
   
   ### What Makes Up a Function?
   
  1.   Invocation -> calling a function should be readable -> The number and order of arguments matter
          `add(5,7)` 
  2.   Declaration -> Working with function should be easy/readable ---> The length of function body matters
  
        ` 
        function add(n1,n2){
               return n1+n2
               } 
        `
       
       
    
  ## Calling the function
  
   ### Minimize the number of parameteres while calling a function.
   
   #### Number of parameters
   
        1. None -> easy to call -> Best possible option.
        2. 1 parameter -> easy to call -> very good possible option.
        3. 2 parameters -> Accepatable to call -> use with caution.
        4. 3 parameters -> Challenging to call -> Avoid if possible.
        5. >3 parameters -> Difficult to call -> Always Avoid.
   
   
   #### Concept - Examples
   
       
            function saveUser(email, password) {
              const user = {
               id: Math.random().toString(),
               email: email,
               password: password,
                };

                db.insert('users', user);
                  }

               saveUser('test@test.com', 'testers');

               function saveUser(user) {
                  db.insert('users', user);
                  }

                  saveUser(newUser);



               class User {
               constructor(email, password) {
              this.email = email;
              this.password = password;
              this.id = Math.random().toString();
               }

               save() {
              db.insert('users', this);
               }
               }

               const user = new User('test@test.com', 'testers');
               user.save(); 



   ### Tips
   
   1. If a function has two parameters and the order of function is understanable ,then its ok to use two parameters for function invocation.
      Sometime object oriented approach might be the possible solution.   

       

                       // Easier to understand 
                     function login(email, password) {
                       // Log a user in
                       // ...
                     }

                     login('max@test.com', 'testpassword');



                     class Point {
                       constructor(x, y) {
                         this.x = x;
                         this.y = y;
                       }
                     }

                     const point = new Point(10, 13);

                   // Does not makes sense.

                   function log(message, isError) {
                    if (isError) {
                      console.error(message);
                    } else {
                      console.log(message);
                    }
                  }

                  log('Hi there!', false);

                  //After Refactoring

                  function log(message) {
                    console.log(message);
                  }

                  function logError(errorMessage) {
                    console.error(errorMessage);
                  }

                  log('Hi there!');
                  logError('An error!');


   


   2. If you are trying to pass more than two parameters , try to pass a single parameter containing all the data as object.
   
                        // Alright     
                       class User {
                          constructor(name, age, email) {
                            this.name = name;
                            this.age = age;
                            this.email = email;
                          }
                        }

                        const user = new User('Max', 31, 'max@test.com');
                        
                        
                        //After Refactoring
                        class User {
                          constructor(userData) {
                            this.name = userData.name;
                            this.age = userData.age;
                            this.email = userData.email;
                          }
                        }

                        const user = new User({ name: 'Max', email: 'max@test.com', age: 31 });

   
   3. Functions with dynamic number of parameter can be destructed as an array.

               function sumUp(...numbers) {
                 let sum = 0;
                 for (const number of numbers) {
                   sum += number;
                 }
                 return sum;
               }

               const total = sumUp(10, 19, -3, 22, 5, 100);
               
   4.   Try to avoid output arguments  - especially if they are unexpected i.e. try that function in not manupulating some value outside and if its necessary than 
          do the naming which reflects the same. Sometimes object oriented approach might be the possible solution as nothing is manipulated outside however in the
          same insatance.
         
                         function addId(user) {
                             user.id = 'u1';
                           }

                           const user = { name: 'Max' };
                           addId(user);

                           console.log(user);


                           class User {
                             constructor(name) {
                               this.name = name;
                             }

                             addId() {
                               this.id = 'u1';
                             }
                           }

                           const customer = new User('Max');
                           customer.addId();
                           console.log(customer);
                           
                          
   5.  One arguments functions or methods  makes sense where you want to use same function at different places.               
                  
                      function log(message) {
                      
                      //Here the console log can changed to any other logging code and changes don't need to made individually.
                          console.log(message);
                        }

                        log('Hi there!');

   
   ## Function Body
   
         1. Function should be small and do one thing i.e Code Spiltting for functions.
         
         2. Function should do work that is one level of abstraction below their name.
         
         3. Try Not to Mix levels of abractions in a function.
         
         4. Extract the code that works on same functionility 
            
            // you can merge the below code 
         e.g. -> user.setName("Gaurav") , user.setAge(25) 
         
         5. Extract the code that requires more interpretation than surrounding code.
         e.g. -> 
         
         //before
         if(!email.includes(@)){...} 
         saveUser(email)
         
         //after extraction
         if(isEmailVaid(email)){...} 
         saveUser(email)
         
         
         

   
            
         
         
         
         
         
      
       



