import React from 'react'
import Header from './components/Header'
import Part from './components/Part'
import Content from './components/Content'

const Course = (props) => {
    const {course}=props
    return(
        <>
        <Header key= {course.id} course={course}/>
        <ul>
            {course.parts.map(part => <Part key = {part.id} part={part}/>)}
            <Content key= {course.id} parts={course.parts}/>
        </ul>
        </>
    )
}
export default Course