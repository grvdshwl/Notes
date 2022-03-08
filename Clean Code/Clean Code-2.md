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


## 
