import React from 'react'

const Content = (props) => {
    const {parts} = props
    const initialValue = 0
    const sum=parts.reduce((accumulator, currentvalue)=> accumulator + currentvalue.exercises , initialValue)
    return(
        <>
        <div>Total: {sum}</div>
        </>
    )

}

export default Content