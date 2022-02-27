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
      
  2. Try  useMemo or useCallback hook with dependencies of useEffect hook if the dependencies(especially objects) are recreated on every rerender ,causing entire component to render again and again.

  3.   use arrow function over normal function declaration.
  
  4.   distrubute react app into components.
  
  5.   Try to seperate logic and prestentational layer of a compoenent using custom hooks or presentation-container component paradigm.
  
  6.    
