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

  useEffect(() => { fetchHistory() }, []);


  const addNote = async (note, _id) => {
    try {
      await axios({
        method: 'patch',
        url: 'http://localhost:8080/api/search',
        data: {"note": `${note}`, "_id": `${_id}`}
      })
      fetchHistory();
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

  const deleteHistory = async () => {
    try {
      axios({
        method: 'delete',
        url: 'http://localhost:8080/api/search'
      })
      fetchHistory();
    } catch (err) {
      console.error(err);
    }
  }

  const changeDisplay = (ip) => {
    setDisplay(ip);
  }


  return (
      <div>
        <button onClick={deleteHistory}>DELETE SEARCH HISTORY (NOT RECOVERABLE :D)</button>
        <aside>
          <HistoryList history={history} addNote={addNote} changeDisplay={changeDisplay} />
        </aside>
        <Search handleSearch={handleSearch} />
        <Display display={display}/>
      </div>
    )
};



export default App;