import React from 'react'
import Button from './Button'

const FoundCountry = (props) => {
  console.log(props)
  return (
    <div>
      {props.country}
      <Button onclick={props.onclick}/>
    </div>
  )
}

export default FoundCountry