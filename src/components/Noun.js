import React from 'react'
import { Card } from 'react-bootstrap'


const Noun = ({ card, handleGame }) => {
    return (
        <Card
            onClick={handleGame.bind(this, card.name)}
            style={{ width: "12rem", height: "19rem" }}
            className='my-4 p-3 rounded'>
            <Card.Img variant='top' src={card.image} />
            {console.log(card.image)}
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
