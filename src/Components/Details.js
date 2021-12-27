import React from 'react'

function Details(props) {
    console.log(props)

    const found = props.users.find(el=> el.id== props.match.params.id )
    return (
        <div>
           
           <h1>{found.name}</h1>
           <h2> {found.age}  </h2>
           <button   onClick={()=>props.history.goBack()}   >go back</button>
           <button  onClick={()=>props.history.push('/')}  >  home  </button>
        </div>
    )
}

export default Details
