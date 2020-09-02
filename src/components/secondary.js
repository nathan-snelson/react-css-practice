import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const PointCounter = () => {    
    const [count, setCount] = React.useState(0);

    const increaseValue = () => (count === 15) ? setCount(15) : setCount(count + 1);
    
    const decreaseValue = () => (count === 0) ? setCount(0) : setCount(count - 1);

    return (
        <div className="secondary">
            <div className="input">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="firstPlayerName">Your Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="firstPlayerName"/>
                </InputGroup>
            </div>

            <div className="counter">
                <Button variant="outline-primary" onClick={increaseValue}>
                    Increase
                </Button>
                <label className="textElement">
                    {count}
                </label>
                <Button variant="outline-secondary" onClick={decreaseValue}>
                    Decrease
                </Button>
            </div>                
        </div>
    )
}

export default PointCounter;