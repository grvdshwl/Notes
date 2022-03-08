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
   
