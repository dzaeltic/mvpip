import React from "react";
import HistoryListItem from "./HistoryListItem"

function HistoryList ({ history, addNote, changeDisplay }) {
  

  return (
    <div>
      <ul>
        {history.map(search => <HistoryListItem key={search._id} search={search} addNote={addNote} changeDisplay={changeDisplay}/>)}
      </ul>
    </div>
  )
}

export default HistoryList;