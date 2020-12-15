import React from 'react'
import { Card, Row } from 'react-bootstrap'

const AboutScreen = () => {
    return (
        <>
            <h1 >About Me</h1>
            <Row sm={2}>
                <Card >
                    <Card.Header>
                        Charlie
                </Card.Header>
                    <Card.Img src='https://avatars3.githubusercontent.com/u/60705940?s=400&u=236e8c52c256175ad0a380c96c412d712bea5feb&v=4'>
                    </Card.Img>
                    <Card.Title className="pt-3 pr-3 px-3">Carlos Emmanuel Finos</Card.Title>
                    <Card.Text className="py-2 px-3">

                    </Card.Text>
                </Card>
            </Row>
        </>
    )
}

export default AboutScreen
