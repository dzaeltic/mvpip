import React from "react";

function HistoryListItem ({ search, addNote, changeDisplay }) {

  const handleClick = () => {
    const note = prompt(
      `Add note to ${search.ip}`
    );
    if (note === null) return;
    addNote(note, search._id);
  }

  const updateDisplay = () => {
    changeDisplay(search);
  }

  return (
    <li>
      <div onClick={updateDisplay}>
        {search.ip} 
        {search.note && <p>{search.note}</p>}
      </div>
        <button onClick={handleClick}>ADD NOTE</button>
    </li>
  )
}

export default HistoryListItem;