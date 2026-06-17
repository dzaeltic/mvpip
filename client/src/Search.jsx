import React, { useState } from "react";

function Search({ handleSearch }) {
  
  const [ip, setIp] = useState('');
  
  const ipTest = /^(((?!25?[6-9])[12]\d|[1-9])?\d\.?\b){4}$/

  const handleSubmit = () => {
    if(ipTest.test(ip)) {
      handleSearch(ip);
    } else {
      console.log('invalid IP')
    }
    setIp('')
  }

  return (
    <div>
      <input 
        type="text"
        value={ip}
        onChange={i => setIp(i.target.value)}/>
      <button onClick={handleSubmit}>SEARCH</button>
    </div>
  )
}



export default Search;