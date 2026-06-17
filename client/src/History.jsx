import React from "react";
import HistoryListItem from "./HistoryListItem"

function HistoryList ({ history, addNote }) {
  

  return (
    <div>
      <ul>
        {history.map(search => <HistoryListItem key={search._id} search={search} addNote={addNote} />)}
      </ul>
    </div>
  )
}

export default HistoryList;