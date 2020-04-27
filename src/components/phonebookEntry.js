import React from 'react'

const PhonebookEntry = ({ entry }) => {
  console.log(entry)
  return (
    <div>
    <li>{entry.name}</li>
    <ul>
      PhoneNumbers:
      {entry.phonenumber.map(phoneNumber => <li key={phoneNumber}>  {phoneNumber} </li>)}
    </ul>
    </div>
  )
}

export default PhonebookEntry