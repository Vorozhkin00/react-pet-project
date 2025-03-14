// 'use client';
//
// import {useState} from "react";
//
// export default function Front() {
//   const [greeting, setGreeting] = useState('');
//   const saveGreeting = () => {
//     fetch('/api', {
//       method: "POST",
//       body: JSON.stringify({greeting})
//     })
//   }
//   return (
//     <div>
//       <input className='border' value={greeting} onChange={(e) => setGreeting(e.target.value)}/>
//       <button className='rounded border hover:bg-neutral-400' onClick={saveGreeting}>send to the server</button>
//     </div>
//   )
// }

// 'use client'
// import {useEffect} from "react"
//
// export default function Front() {
//   useEffect(() => {
//     fetch('/api', {method: "POST"})
//   })
//   return (<h1>Some content</h1>)
// }

'use client';

import {useState} from "react";

export default function Front() {
  const [greeting, setGreeting] = useState("");
  const saveGreeting = () => {
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({greeting})
    })
  }
  return (
    <div>
      <input className='border' value={greeting} onChange={(e) => setGreeting(e.target.value)}/>
      <button onClick={saveGreeting}>Send to Server</button>
    </div>
  )
}
