import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const validationRules = {
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        // message: 'Invalid email format',
    },
    mobile: {
        regex: /^[6-9]\d{9}$/,
        message: 'Mobile number must start with 6-9 and be 10 digits',
    },
    date: {
        regex: /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
        message: 'Please select a valid date',
    }
};

const CustomInput = ({
    label,
    name,
    value = '', // Ensure value is always a string
    onChange,
    required = false,
    type = 'text',
    as, // for textarea support
    rows,
    ...rest
}) => {
    const [error, setError] = useState('');

    const validate = (val) => {
        if (required && (!val || typeof val !== "string" || !val.trim())) {
            return `${label} is required`;
        }
        if (type in validationRules && val && typeof val === "string" && val.trim()) {
            const { regex, message } = validationRules[type];
            if (!regex.test(val.trim())) return message;
        }
        return '';
    };

    const handleBlur = () => {
        const validationError = validate(value);
        setError(validationError);
        if (validationError) toast.error(validationError);
    };

    const handleChange = (e) => {
        const val = e.target.value;
        onChange(val);
        if (error) setError(''); // Clear error on typing
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                className='custom_input'
                type={type}
                as={as}
                rows={rows}
                name={name}
                value={typeof value === "string" ? value : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                {...rest}
            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
    );
};

export default CustomInput;

