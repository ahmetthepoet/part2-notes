import React, { useState } from 'react'
import PhonebookEntry from './components/phonebookEntry'

const App = (props) => {
  const [phonebookEntries, setphonebookEntries] = useState(props.phonebookEntries)
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [newDate, setNewDate] = useState(new Date().toISOString())
  const [showAll, setShowAll] = useState(true)
  
  const AddPhonebookEntry = (event) => {
    event.preventDefault()
    const newPhoneentryObj = {
      name:newName,
      phonenumber: [newPhoneNumber],
      date:newDate,
      important:Math.random() > 0.5,
    }
    if (phonebookEntries.filter(phonebookEntry => phonebookEntry.name === newPhoneentryObj.name).length === 0){
      UpdatePhonebookEntry(newPhoneentryObj)
    }else{
      window.alert(`${newPhoneentryObj.name} is already added to phonebook`);
    }

  }


  const UpdatePhonebookEntry = (props) => {
    setphonebookEntries (phonebookEntries.concat(props))
    setNewName('')
    setNewDate(new Date().toISOString())
    setNewPhoneNumber('')
  }
 
  const phoneEntriesToShow = showAll ? phonebookEntries : phonebookEntries.filter(phonebookEntry=>phonebookEntry.important)

  const handleShowAll = () =>{
    setShowAll(!showAll)
  }

  const NewNameChange = (event) => {
    
    setNewName (event.target.value)

  }

  const NewPhoneNumberChange = (event) => {
    
    setNewPhoneNumber (event.target.value)

  }


  const NewDateChange = (event) => {
    
    setNewDate (event.target.value)

  }

  return (
    <>
<div>
  <h1>PhoneBook</h1>
  <button onClick = {handleShowAll}>
  {showAll ? "showImportant" : "showall"}
  </button>
  <ul>
  {phoneEntriesToShow.map((phonebookEntry, i) =>  <PhonebookEntry key = {i} entry = {phonebookEntry} />)}
  </ul>
  <form onSubmit={AddPhonebookEntry}>
    <label for="name">name:</label>
    <input value={newName} id="name" name="name" onChange = {NewNameChange}/><br/><br/>
    <label for="phonenumber">phonenumber:</label>
    <input value={newPhoneNumber} id="phonenumber" name="phonenumber" onChange ={NewPhoneNumberChange}/><br/><br/>
    <label for="date">date:</label>
    <input value={newDate} id="date" name="date" onChange = {NewDateChange}/><br/><br/>
      <button type="submit"> save </button>
  </form>
</div>

</>
  )
}

export default App