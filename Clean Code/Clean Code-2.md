# Control Structures

  ## Use Guards and Fail Fast.
  

    
               
    //without guards
    if (user.active) {
      if (user.hasPurchases()) {
        //do stuff
      }
    }

    //with Guards

    if (!user.active) {
      return //fail fast
    }

    if (user.hasPurchases()) {
      return // fail fast
    }

    //do stuff
   

  ## Extracting Control structures and positive pharsing
  

       // before

      if(!email.includes("@")){
        return
      }


      //Spliiting but negative phrasing

      function isEmailNotValid(email){
        return !email.inculdes("@")
      }

      if(isEmailNotValid(email)){
        return
      }



      //Spliiting and positive phrasing

      function isEmailValid(email){
        return email.inculdes("@")
      }

      if(!isEmailValid(email)){
        return
      }

## Extract Control structures into functions.



     // before

    function processTransaction(transaction) {
      if (transactions.status !== 'OPEN') {
        console.log('Invalid transaction type!');
        return;
      }
      if (transaction.type === 'PAYMENT') {
        if (transaction.method === 'CREDIT_CARD') {
          processCreditCardPayment(transaction);
        } else if (transaction.method === 'PAYPAL') {
          processPayPalPayment(transaction);
        } else if (transaction.method === 'PLAN') {
          processPlanPayment(transaction);
        }
      } else if (transaction.type === 'REFUND') {
        if (transaction.method === 'CREDIT_CARD') {
          processCreditCardRefund(transaction);
        } else if (transaction.method === 'PAYPAL') {
          processPayPalRefund(transaction);
        } else if (transaction.method === 'PLAN') {
          processPlanRefund(transaction);
        }
      } else {
        console.log('Invalid transaction type!', transaction);
      }
    }

    //after 

    function processTransaction(transaction) {
      if (!isOpen(transaction)) {
        showErrorMessage('Invalid transaction type!');
        return;
      }
      if (isPayment(transaction)) {
        processPayment(transaction);
      } else if (isRefund(transaction)) {
        processRefund(transaction);
      } else {
        showErrorMessage('Invalid transaction type!', transaction);
      }
    }

    function showErrorMessage(message, item) {
      console.log(message);
      if (item) {
        console.log(item);
      }
    }

    function isOpen(transaction) {
      return transaction.status === 'OPEN';
    }

    function isPayment(transaction) {
      return transaction.type === 'PAYMENT';
    }

    function isRefund(transaction) {
      return transaction.type === 'REFUND';
    }


## Inverting the conditional logic


## Embrace error and error handling

    //before

    if(!isEmail(email)){
     return{
       code:400,
       message:"Invalid Email"
     }
    }

    //after

    if(!isEmail(email)){
      const error = new Error("Invalid email")
      error.code = 400;
      throw error;
    }

## Extracting validation code && Error Handling is one thing.


      function processTransactions(transactions) {
        validateTransactions(transactions);

        for (const transaction of transactions) {
          try {
            processTransaction(transaction);
          } catch (error) {
            showErrorMessage(error.message, error.item);
          }
        }
      }

      function validateTransactions(transactions) {
        if (isEmpty(transactions)) {
          const error = new Error('No transactions provided!');
          error.code = 1;
          throw error;
        }
      }
      
      
## Use Factory Functions.

      function processTransaction(transaction) {
        try {
          validateTransaction(transaction);
          processWithProcessor(transaction);
        } catch (error) {
          showErrorMessage(error.message, error.item);
        }
      }

      function isOpen(transaction) {
        return transaction.status === 'OPEN';
      }

      function validateTransaction(transaction) {
        if (!isOpen(transaction)) {
          const error = new Error('Invalid transaction type.');
          throw error;
        }

        if (!isPayment(transaction) && !isRefund(transaction)) {
          const error = new Error('Invalid transaction type!');
          error.item = transaction;
          throw error;
        }
      }

      function processWithProcessor(transaction) {
        const processors = getTransactionProcessors(transaction);

        if (isPayment(transaction)) {
          processors.processPayment(transaction);
        } else {
          processors.processRefund(transaction);
        }
      }

      function getTransactionProcessors(transaction) {
        let processors = {
          processPayment: null,
          processRefund: null,
        };
        if (usesTransactionMethod(transaction, 'CREDIT_CARD')) {
          processors.processPayment = processCreditCardPayment;
          processors.processRefund = processCreditCardRefund;
        } else if (usesTransactionMethod(transaction, 'PAYPAL')) {
          processors.processPayment = processPayPalPayment;
          processors.processRefund = processPayPalRefund;
        } else if (usesTransactionMethod(transaction, 'PLAN')) {
          processors.processPayment = processPlanPayment;
          processors.processRefund = processPlanRefund;
        }
        return processors;
      }
