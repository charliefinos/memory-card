import React, { useEffect, useState } from 'react'
import Noun from '../components/Noun'
import { Row, Col } from 'react-bootstrap'
import cards from '../cards'

const HomeScreen = () => {
    const [randCards, setRandCards] = useState([cards])
    const [cardArr, setCardArr] = useState([])
    const [count, setCount] = useState(0)
    const [countHigh, setCountHigh] = useState(0)

    const rCard = cards

    const shuffle = (rCard) => {
        for (let i = rCard.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rCard[i], rCard[j]] = [rCard[j], rCard[i]];
        }
        console.log(rCard)
        setRandCards([rCard])
    }

    // Main Game function

    const handleGame = (cardName) => {
        if (!cardArr.includes(cardName)) {
            handleCard(cardName)
            handleCounter();
        } else {

            if (count > countHigh) {
                handleHighCount();
            }
            alert(`You Lose!\n Your Score is ${count}\n Your last highest score is ${countHigh}`)
            restartCount();
            handleResetCard()
        }
        shuffle(rCard)

    }

    const restartCount = () => {
        setCount(0)
    }

    const handleHighCount = () => {
        setCountHigh(count)
    }

    const handleCounter = () => {
        setCount(count + 1)
    }

    const handleCard = (cardName) => {
        setCardArr([...cardArr, cardName])
        console.log(cardArr)
    }

    const handleResetCard = () => {
        setCardArr([])
    }


    useEffect(() => {

    }, [randCards])

    return (
        <div>
            <Col>
                <h2>Scoreboard:</h2>
                <p>Score: {count}</p>
                <p>High Score: {countHigh}</p>
            </Col>
            <Row>
                {rCard.map((card) => {
                    return (
                        <Col key={card._id} >
                            <Noun handleGame={handleGame} card={card} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default HomeScreen


