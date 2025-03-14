'use client';

import {useState} from "react";

type Props = {
  greetingObj: {
    _id: string;
    greeting: string;
  }
}

const EditGreeting = ({greetingObj}: Props) => {
  const [greeting, setGreeting] = useState("");
  const changeGreeting = () => {
    fetch('/api', {
      method: 'PUT',
      body: JSON.stringify({greeting, id: greetingObj._id}),
    })
  }

  const deleteGreeting = () => {
    fetch('/api', {
      method: 'DELETE',
      body: JSON.stringify({greeting, id: greetingObj._id}),
    })
  }


  return (
    <div className='flex gap-2 mx-10 my-5' key={greetingObj._id.toString()}>
      <h1>{greetingObj.greeting}</h1>
      <input
        className='border'
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
      <button className='border' onClick={changeGreeting}>change this greeting</button>
      <button className='border' onClick={deleteGreeting}>Delete</button>
    </div>
    // <h1 key={greetingObj._id.toString()}>
    //   {greetingObj.greeting}
    // </h1>
  )
}

export default EditGreeting;