import React from 'react'

const Mainpage = ({data}) => {
    return (
        <div className="jobCard">
            <h1>Title: {data.title} </h1>
            <h2>Description: {data.description}</h2>
            <h3>Remote: {data.remote}</h3>
            <small>City: {data.city}</small>
        </div>
    )
}

export default Mainpage
