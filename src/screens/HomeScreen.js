import React from 'react'
import Noun from '../components/Noun'
import { Row, Col } from 'react-bootstrap'
import cards from '../cards'

const HomeScreen = () => {
    return (
        <div>
            <Row>
                {cards.map((card) => {
                    return (
                        <Col key={card._id} sm={12} md={6} lg={4} xl={2.2}>
                            <Noun md card={card} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default HomeScreen
