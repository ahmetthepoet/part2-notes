import React, { useState } from 'react'
import FoundCountry from './components/FoundCountry'
import ChosenCountry from './components/ChosenCountry'
import axios from 'axios'

const App = () => {
  const [countryName, setCountryName] = useState('')
  const [countryAvailaible, setCountryAvailaible] = useState([])
  const [countryInfo, setCountryInfo] = useState([])
  console.log (countryName)
  console.log (countryAvailaible)

const updateCountryInfo = (event) => {
  event.preventDefault()
  const countryToPull = countryName
  getCountryInfo(countryToPull)

}

  const getCountryInfo = (countryToPull) => {
    axios.get("https://restcountries.eu/rest/v2/name/"+countryToPull+"?fullText=true").then(response=>{
      console.log(response.data)
      if (response.data.length === 0){
        window.alert(`${countryName} is not a country`)
        setCountryInfo([])
      }else{
        addCountyInfo(response.data)
      }
    }).catch(error=>{
        window.alert(`${countryName} is not a country`)
        setCountryInfo([])
      }
)

  }


  const addCountyInfo = (props) => {
    setCountryAvailaible([])
    setCountryInfo(props)
  }
 
  const countriesToShow = countryAvailaible.length <= 10 ? countryAvailaible : countryAvailaible.slice(0,10)
  console.log("countrytoshow",countriesToShow)
  const searchforCountry = (event) => {
    setCountryName (event.target.value)
    axios.get("https://restcountries.eu/rest/v2/name/"+ event.target.value).then(response=>{
      console.log(response.data)
      const availaible = response.data.map(country=>country.name)
    setCountryAvailaible(availaible)
  }).catch(error=>{
    console.log("You fucked up", error)
    setCountryAvailaible([])
  })}

  const onClickShowCountryInfo = (name) => {
    setCountryName(name)
    getCountryInfo(name)
  }

  return (
    <>
<div>
  <h1>Country Search engine</h1>
  <form onSubmit={updateCountryInfo}>
    <input value={countryName} onChange ={searchforCountry}/><br/><br/>
    <button type="submit"> search </button>
  </form>
  <div>
    <ul>
      {countriesToShow.map((country, i)=><li key={i}>
      <FoundCountry country={country} onclick={()=>{onClickShowCountryInfo(country)}}/>
      </li>)}
    </ul>
  </div>
  <div>
  <ul>
      {countryInfo.map((country, i)=><li key={i}>
      <ChosenCountry countryInfo={country}/>
      </li>)}
    </ul>
  </div>
</div>

</>
  )
}

export default App