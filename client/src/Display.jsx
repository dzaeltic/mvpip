import React from "react";

function Display ({ display }) {
  
  if (!display) return (<pre>:]    ^Search an Ip^    [:</pre>)
  
  let hostingProse = '';
  let concerns = '\n\nThese are some concerns about this IP that were gathered from trusted sources around the neighborhood:';

  if (display.hosting) {
    hostingProse = `This IP is hosting from the domain: ${display.hosting.domain}\nHosting network: ${display.hosting.network}`
  }

  for (let key in display.privacy) {
    if(display.privacy[key]) {
      concerns += ` \nThis IP is ${key.slice(3)}`
    }
  }
  
  return (
    <div>
      <h1>{display.ip}</h1>
      <h2>{display.country}</h2>
      <h2>{display.city}, {display.subdivision}</h2>
      <p style={{ whiteSpace: 'pre-wrap' }}>
        {hostingProse}
        {concerns}
      </p>
    </div>
  )
}

export default Display;