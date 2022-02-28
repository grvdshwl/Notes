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
   
   6.  
         
   
   
         
         
         
         
         
         
         
      
       



