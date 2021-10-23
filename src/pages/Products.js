import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/products.css';

const Products = () => {
    return (
        <div >

        <Container className="pt-3">
            <Row>
                <Col className="container-grid"><img src="../assets/pequenio.JPG"/></Col>
                <Col className="container-grid"><p className="p_buttom">Mediano (165 g)</p></Col>
                <Col className="container-grid"><img src="../assets/grande.JPG"/></Col>
            </Row>
            <Row>
                <Col className="container-grid"><p className="p_top">Pequeño (110 g)</p></Col>
                <Col className="container-grid"><img src="../assets/mediano.JPG"/></Col>
                <Col className="container-grid"><p className="p_top">Grande (250 g)</p></Col>
            </Row>
        </Container>
            
            <img />
            <img />

        </div>
    );
};

export default Products;