import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'


const Noun = ({ card, shuffle }) => {


    return (
        <Card
            style={{ width: "12rem", height: "19rem" }}
            key={card._id}
            className='my-4 p-3 rounded'>
            <Card.Img variant='top' src={card.image} />
            <Card.Body style={{ position: 'absolute', bottom: '0' }}>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text >
                    {card.name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Noun
