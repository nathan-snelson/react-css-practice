import React from 'react';
import Button from 'react-bootstrap/Button';

class TestButton extends React.Component {
    handleClick() {
        alert('This button just got clicked!');
    }

    render() {
        return (
            <Button variant="success" onClick={() => {this.handleClick()}}>Click me!</Button>
        )
    }
}

export default TestButton;