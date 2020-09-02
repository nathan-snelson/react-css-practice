import React from 'react';
import Button from 'react-bootstrap/Button';

const TestButton = () => {
    const handleClick = () => alert('This button just got clicked');

    return (
        <Button variant="success" onClick={handleClick}>Click me!</Button>
    )
}

export default TestButton;