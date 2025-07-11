import React, { useState } from 'react';
import { Button, Modal, Container } from 'react-bootstrap'; // Import necessary components

function SimpleModalExample({ }) {
    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);

    // Function to handle opening the modal
    const handleShow = () => setShowModal(true);

    // Function to handle closing the modal
    const handleClose = () => setShowModal(false);

    return (
        <Container className="mt-5 text-center">
            <h2>Modal Integration Example</h2>
            <p>Click the button below to see the modal pop up!</p>

            {/* Button to trigger the modal */}
            <Button variant="primary" size="lg" onClick={handleShow}>
                Open My Awesome Modal
            </Button>

            {/* The Modal Component */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Hello from the Modal!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>This is the content of your modal.</p>
                    <p>You can put any information, forms, images, or other components here.</p>
                    <hr />
                    <h5>What can you do with this modal?</h5>
                    <ul>
                        <li>Display notifications</li>
                        <li>Collect user input with forms</li>
                        <li>Show enlarged images or videos</li>
                        <li>Confirm actions before proceeding</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default SimpleModalExample;