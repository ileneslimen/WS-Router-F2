import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function CardUser({el}) {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>   {el.name} </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  <Link  to= {`/details/${el.id}`} > <Button>Details</Button> </Link> 
  </Card.Body>
</Card> 
        </div>
    )
}

export default CardUser
