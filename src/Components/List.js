import React from 'react'
import { Redirect } from 'react-router-dom'
import CardUser from './CardUser'

function List({users,login}) {
    return (
        <div  style={{display:"flex", justifyContent:"space-around", width:"100%"  }} >
            {   login ?  users.map(el=>   <CardUser el={el}  key={el.id}   ></CardUser>  )  :
             <Redirect to='/' ></Redirect>  }
        </div>
    )
}

export default List
