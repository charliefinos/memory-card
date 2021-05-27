import React, { useEffect, useState } from 'react'
import Noun from '../components/Noun'
import { Row, Col, Container, Button } from 'react-bootstrap'
import cards from '../cards'

const HomeScreen = () => {
    const [randCards, setRandCards] = useState([cards])
    const [cardArr, setCardArr] = useState([])
    const [count, setCount] = useState(0)
    const [countHigh, setCountHigh] = useState(0)
    const [toggle, setToggle] = useState(false)

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

    const toggleHandler = () => {
        setToggle(!toggle)
    }


    useEffect(() => {

    }, [randCards])

    return (
        <Container>
            <Row>
                <Button onClick={toggleHandler}>
                    {toggle ? "Hide Rules" : "Show Rules"}
                </Button>
                {toggle &&
                    <Col>
                        <p>The rules are simple: </p>
                        <p>- If you click a fruit two times you lose!</p>
                        <p>- If you click on each fruit without repeating, you win!</p>
                    </Col>
                }

            </Row>
            <Row>
                <h1>Scoreboard:</h1>
            </Row>

            <Row>
                <Col>
                    <Row><h2>Score: </h2></Row>
                    <Row><h2>High Score:</h2></Row>
                </Col>

                <Col>
                    <Row><h2>{count}</h2></Row>
                    <Row><h2>{countHigh}</h2></Row>
                </Col>
            </Row>
            <Row>
                {rCard.map((card) => {
                    return (
                        <Col key={card._id} >
                            <Noun handleGame={handleGame} card={card} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default HomeScreen


