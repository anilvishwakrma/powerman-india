import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const stats = [
    { label: 'CUSTOMER CENTRIC INNOVATION', end: 200 },
    { label: 'SUCCESSFUL INSTALLATIONS WORLDWIDE', end: 1500 },
    { label: 'COUNTRIES AND COUNTING', end: 85 },
    { label: 'GLOBAL PARTNERS', end: 50 },
];

const GlobalFootprintStats = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} style={{ background: '#e8e8e8', color: '#000', padding: '5rem 0' }}>
            <Container className="text-center">
                <h2 className="display-5 fw-bold mb-5 text-uppercase">
                    FOLLOW OUR <br />
                    <span style={{ color: '#e63946' }}>GLOBAL FOOTPRINT</span>
                </h2>
                <Row className="g-4">
                    {stats.map((item, idx) => (
                        <Col md={6} lg={3} key={idx}>
                            <Card
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: 'none',
                                    color: '#000',
                                    transition: 'transform 0.3s',
                                }}
                                className="h-100 shadow-sm text-center p-4 hover-shadow"
                                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <Card.Body>
                                    <Card.Title style={{ color: '#ff4d4f', fontSize: '2.5rem', fontWeight: '700' }}>
                                        {inView ? <CountUp end={item.end} duration={2.5} /> : '0'}+
                                    </Card.Title>
                                    <Card.Text className="text-uppercase small fw-semibold mt-3">
                                        {item.label}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default GlobalFootprintStats;
