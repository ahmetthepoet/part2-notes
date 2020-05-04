import React from 'react'

const ChosenCountry = ({countryInfo}) => {
  console.log(countryInfo)
  return (
    <div>
    <h1>{countryInfo.name}</h1>
    <div>
      <br/>
    Capital: {countryInfo.capital}
    <br/>
    Population: {countryInfo.population}
    </div>
    <br/>
    Languages:
    <ul>
      {countryInfo.languages.map((language, i) => <li key={i}>  {language.name} </li>)}
    </ul>
    <br/>
    Flag:
    <br/>
  <img src={countryInfo.flag} alt="flag" width="42" height="42"/>

    </div>
  )
}

export default ChosenCountry