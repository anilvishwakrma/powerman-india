import React from 'react';
import { FaGlobe, FaCogs, FaStore, FaBox, FaHandsHelping, FaReact } from 'react-icons/fa';

const slidesData = [
    {
        price: '70',
        icon: <FaGlobe />,
        description: 'Operating in 120+ countries worldwide.',
    },
    {
        icon: <FaCogs />,
        price: '50',
        description: '21+ state-of-the-art manufacturing units.',
    },
    {
        icon: <FaStore />,
        price: '40',
        description: 'Over 20000+ retail outlets globally.',
    },

    {
        icon: <FaHandsHelping />,
        price: '10',
        description: '1500+ dedicated service centers.',
    },
    // {
    //     image: 'https://via.placeholder.com/300x150/28a745/FFFFFF?text=Custom+Content',
    //     title: 'Fully Customizable',
    //     description: 'This slide demonstrates how you can add any custom HTML or React components as children.',
    //     children: (
    //         <div style={{ padding: '10px', border: '1px dashed #28a745', borderRadius: '5px' }}>
    //             <p>This is a **custom div** with specific styles!</p>
    //             <FaReact style={{ fontSize: '2em', color: '#61DAFB' }} />
    //             <p>And more elements here.</p>
    //         </div>
    //     ),
    // },
];

export default slidesData;