
import React, {useState, useEffect} from "react";
import './../styles/App.css';

const fruitsName= ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {

  const [fruits, setFruits] = useState();


  const [search, setsearch] = useState("");

  

console.log(fruits)
  useEffect(()=>{
    setFruits(fruitsName.filter((code) =>
    code.toLowerCase().includes(search.toLowerCase()))
    
  );

  // console.log(filtered)
  }, [search])


  return (
    <div>
      <h1>Search item</h1>
      <form>
        <input value={search}  onChange={(e)=>{setsearch(e.target.value)}} />
      </form>
      

      <ul>
        
        {
        fruits && fruits.map(item =><li>{item}</li>)

      }
      </ul>
        
      

    </div>
  )
}

export default App
