import React, { useState } from "react";
import Search from "./Search";
import Display from "./Display";
import axios from "axios";

//   34.106.208.213

function App() {
  const [display, setDisplay] = useState(null);


  const handleSearch = async (ip) => {
    try {
      const searchedIp = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/search', 
        data: {"ip": `${ip}`} 
      })
      setDisplay(searchedIp.data);
    } catch (err) {
      console.error(err);
    }
  }



  return (
      <div>
        <Search handleSearch={handleSearch} />
        <Display display={display}/>
      </div>
    )
};



export default App;