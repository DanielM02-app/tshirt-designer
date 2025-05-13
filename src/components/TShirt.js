import React from 'react';

export default function TShirt({ color, message }) {
    return (
    <div className="tshirt" style={{ backgroundColor: color }}>
        <p className="message">{message}</p>
        </div>
        );
    }