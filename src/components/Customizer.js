import React from 'react';

export default function Customizer({ color, setColor, message, setMessage }) {
    return (
    <div className="customizer">
        <label>
            T-Shirt Color:
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
            <label>
                Message:
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                </div>
                );
            }