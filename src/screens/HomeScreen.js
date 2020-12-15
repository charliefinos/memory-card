import React, { useEffect, useState } from 'react'
import Noun from '../components/Noun'
import { Row, Col } from 'react-bootstrap'
import cards from '../cards'

const HomeScreen = () => {
    const [randCards, setRandCards] = useState([cards])
    const [count, setCount] = useState(0)

    const rCard = cards

    const shuffle = (rCard) => {
        for (let i = rCard.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rCard[i], rCard[j]] = [rCard[j], rCard[i]];
        }
        console.log(rCard)
        setRandCards([rCard])
    }

    const handler = () => {
        shuffle(rCard)
    }

    useEffect(() => {

    }, [rCard])

    return (
        <div>
            <Row>
                {rCard.map((card) => {
                    return (
                        <Col key={card._id} >
                            <Noun handler={handler} card={card} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default HomeScreen
