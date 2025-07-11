// VideoModal.jsx
import React from "react";
import { Modal } from "react-bootstrap";

const VideoModal = ({ show, onHide, videoUrl }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Body className="p-0">
                <div className="ratio ratio-16x9">
                    <iframe
                        src={videoUrl}
                        title="Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default VideoModal;
