# Best Practices


 ## Tips
 1. Make sure to pass a function in setState if you are using the current state to modify next State to access the latest state value and also always use const to desructure useState hook.
 
      ```
      const [count,setCount] = useState(0);
      
      const incrementCount = ()=>{
      setCount(count +1)    // Bad Practice
      }
      
      const decrementCount = () =>{
      setCount(prevCount=> prevCount + 1 ) // Good Practice
      }
      
      ```
