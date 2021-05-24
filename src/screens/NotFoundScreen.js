import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Col className="d-flex flex-column">
            <Row>
                <h1 className>Page Not Found</h1>
            </Row>
            <Row>
                <Button ><Link to="/">Go Home</Link></Button>
            </Row>
        </Col>
    )
}

export default NotFound
