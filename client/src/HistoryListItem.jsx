import React from "react";

function HistoryListItem ({ search, addNote }) {

  const handleClick = () => {
    const note = prompt(
      `Add note to ${search.ip}`
    );
    if (note === null) return;
    addNote(note, search._id);
  }

  return (
    <li>
      <p>
        {search.ip}
        {search.note && <p>{search.note}</p>}
      </p>
      <button onClick={handleClick}>ADD NOTE</button>
    </li>
  )
}

export default HistoryListItem;