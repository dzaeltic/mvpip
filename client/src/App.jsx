import React, { useEffect, useState } from "react";
import Search from "./Search";
import Display from "./Display";
import History from "./History";
import axios from "axios";
import HistoryList from "./History";

//   34.106.208.213

function App() {
  const [display, setDisplay] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const hist = await axios({
          method: 'get',
          url: 'http://localhost:8080/api/search'
        });
        setHistory(hist.data[0].searchHistory);
      } catch (err) {
        console.error(err);
      } 
    };
    fetchHistory();
  }, []);


  const addNote = async (note, _id) => {
    try {
      axios({
        method: 'patch',
        url: 'http://localhost:8080/api/search',
        data: {"note": `${note}`, "_id": `${_id}`}
      })
    } catch (err) {
      console.error(err);
    }
  }

  const handleSearch = async (ip) => {
    try {
      const searchedIp = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/search', 
        data: {"ip": `${ip}`} 
      })
      setHistory([searchedIp.data].concat(history));
      setDisplay(searchedIp.data);
    } catch (err) {
      console.error(err);
    }
  }



  return (
      <div>
        <aside>
          <HistoryList history={history} addNote={addNote} />
        </aside>
        <Search handleSearch={handleSearch} />
        <Display display={display}/>
      </div>
    )
};



export default App;