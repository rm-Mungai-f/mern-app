import React from "react";
import {Image, Row, Col, Container} from "react-bootstrap"
import Styles from "./home.module.css"
import image1 from "../../../images/mercedes.jpeg"
import image2 from "../../../images/huracan.jpg"
import image3 from "../../../images/prado.webp"
import image4 from "../../../images/range rover.jpg"

export default function Home(){
    return(
        <Container>
            {/*Commence filtering */}
            <Row>
                <Col lg="8">
                        <Row className={Styles.background}>
                            <Col md={4} sm={4} xs={4}>
                                <div className={Styles.text}>
                                    Vehicles : 100
                                </div>
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <select className='form-control'>
                                    <option>Mercedes</option>
                                    <option>Toyota</option>
                                    <option>BMW</option>
                                    <option>Audi</option>
                                </select>
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <select className='form-control'>
                                    <option>E class</option>
                                    <option>Premio</option>
                                    <option>NZE</option>
                                    <option>Q7</option>
                                </select>
                            </Col>
                        </Row>
                        {/*End of filtering */}

                        <hr/>

                        {/* Start of cars */}
                        <Row>
                            <Col lg={4} md={6} sm={6} xs={6} className={Styles.margin}>
                            <Image src={image1} thumbnail />
                                <div className='product-price'>
                                <div>Kshs 2,000,000</div>
                                <button className='btn btn-success'>Add to cart</button>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6} className={Styles.margin}>
                            <Image src={image2} thumbnail />
                                <div className='product-price'>
                                <div>Kshs 150,000,000</div>
                                <button className='btn btn-success'>Add to cart</button>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6} className={Styles.margin}>
                            <Image src={image3} thumbnail />
                                <div className='product-price'>
                                <div>Kshs 14,000,000</div>
                                <button className='btn btn-success'>Add to cart</button>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6} className={Styles.margin}>
                            <Image src={image4} thumbnail />
                                <div className='product-price'>
                                <div>Kshs 30,000,000</div>
                                <button className='btn btn-success'>Add to cart</button>
                                </div>
                            </Col>
                        </Row>
                </Col>
                <Col lg="4">
                </Col>
            </Row>

            </Container>
    )
    };