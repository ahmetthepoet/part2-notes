import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const review ={
      good: good,
      bad: bad,
      neutral: neutral
  }
  const handleGoodClick =  () => {
    setGood(good+1)
  }
  const handleBadClick = () =>{
     setBad(bad+1)
  }
  const handleNeutralClick= () =>{
    setNeutral(neutral+1)
  }

return(
  <>
  <h1>Give Feedback</h1>
  <Button onClick ={handleGoodClick} text="good"/>
  <Button onClick ={handleBadClick} text="bad"/>
  <Button onClick ={handleNeutralClick} text="neutral"/>
  <h1>Statistics</h1>
  <Statistics review={review}/>
  </>
)
}

const Button = (props) => {
   return( <button onClick={props.onClick}> {props.text} </button> )
}

const Statistics = (props) => {
    return (
    <>
    <table>
    <tr>
    <Statistic name ='good' values = {props.review}/>
    </tr>
    <tr>
    <Statistic name ='bad' values = {props.review}/>
    </tr>
    <tr>
    <Statistic name ='neutral' values = {props.review}/>
    </tr>
    <tr>
    <Statistic name ='all' values = {props.review}/>
    </tr>
    <tr>
    <Statistic name ='average' values = {props.review}/>
    </tr>
    <tr>
    <Statistic name ='positive' values = {props.review}/>
    </tr>
    </table>
    </>
    )
}

const Statistic = (props) => {
   const good = props.values.good
   const bad = props.values.bad
   const neutral = props.values.neutral
   const all = good+bad+neutral
   const average = ((bad* -1) +(good*1))/all
   const positive = (good/all) *100

    if (props.name === 'good')
    return (
        <>
        <div>Good:{props.values.good}</div>
        </>
    )
    if (props.name === 'bad')
    return (
        <>
        <div>Bad:{props.values.bad}</div>
        </>
    )
    if (props.name === 'neutral')
    return (
        <>
        <div>Neutral:{props.values.neutral}</div>
        </>
    )
    if (props.name === 'all')
    return (
        <>
        <div>All:{all}</div>
        </>
    )
    if (props.name === 'average')
    return (
        <>
        <div>Average:{average}</div>
        </>
    )
    if (props.name === 'positive')
    return (
        <>
        <div>Positive:{positive}</div>
        </>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
