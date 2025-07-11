import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};

const EmailInput = ({ label = 'Email', value, onChange, required = false, placeholder = 'Enter your email' }) => {
    const [error, setError] = useState('');

    useEffect(() => {
        if (value && !isValidEmail(value)) {
            // setError('Invalid email format');
        } else {
            setError('');
        }
    }, [value]);

    const handleBlur = () => {
        const trimmed = value.trim();
        if (required && !trimmed) {
            setError('Email is required');
            toast.error('Email is required');
        } else if (trimmed && !isValidEmail(trimmed)) {
            setError('Invalid email format');
            toast.error('Invalid email format');
        } else {
            setError('');
        }
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="email"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                onBlur={handleBlur}
                isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default EmailInput;
