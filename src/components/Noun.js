import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Noun = ({ card }) => {
    return (
        <Card hover className='my-3 p-3 rounded'>
            <Link to={card._id}>
                <Card.Img variant='top' src={card.image} />
            </Link>
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                    {card.name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Noun
