import React, { useEffect, useState } from 'react'
import Noun from '../components/Noun'
import { Row, Col } from 'react-bootstrap'
import cards from '../cards'

const HomeScreen = () => {

    const [newCards, setNewCards] = useState(cards)

    const shuffle = (newRandCards) => {
        for (let i = newRandCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newRandCards[i], newRandCards[j]] = [newRandCards[j], newRandCards[i]];
        }
    }


    useEffect(() => {
        const newRandCards = [...newCards]
        shuffle(newRandCards)
        setNewCards(newCards)
        console.log(newCards)
    }, [newCards])

    return (
        <div>
            <Row>
                {newCards.map((card) => {
                    return (
                        <Col >
                            <Noun shuffle={shuffle} card={card} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default HomeScreen
