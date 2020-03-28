import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts : [
  {
    name : 'Fundamentals of React',
    exercises : 10,
},
{
  name : 'Using props to pass data',
  exercises : 7
},
{
      name:'State of a component',
      exercises : 14,
},
],
  }
  return (
    <div>
        <Header course= {course.name}/>
        <Content parts={course.parts}/>
        <Course parts= {course.parts}/>
    </div>
  )
}

const Header = (props) => {
    return(
        <>
        <h1> {props.course}</h1>
        </>
    )
}

class Content extends React.Component{
    render(){
        return(
            <>
            <Part part= {this.props.parts[0].name} exercises= {this.props.parts[0].exercises}/>
            <Part part= {this.props.parts[1].name} exercises= {this.props.parts[1].exercises}/>
            <Part part= {this.props.parts[2].name} exercises= {this.props.parts[2].exercises}/>
            </>
        )
    }
}


class Part extends React.Component{
render(){
return(
    <>
            <p>part = {this.props.part} </p>
            <p>excercise = {this.props.exercises}</p>
    </>
)
}
}

function Course (props) {
        return(
            <>
            <p>
                part = {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
            </p>
            </>
        );
    }

ReactDOM.render(<App />, document.getElementById('root'))
