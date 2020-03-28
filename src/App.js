import React from 'react'
import Course from './Course'

const App = ({courses}) => {

  return (
    <div>
      <h1>Web dev ciriculum </h1>
      <ul>
      {courses.map(course => <Course key={course.id} course={course}/>)}
      </ul>
    </div>
  )
}
export default App