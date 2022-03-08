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
