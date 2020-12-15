import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Noun = ({ card, shuffle, handler, revolver }) => {


    return (
        <Card
            onClick={handler}
            style={{ width: "12rem", height: "19rem" }}
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
