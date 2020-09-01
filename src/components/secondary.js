import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class PointCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }

    increaseValue() {
        let modValue = Object.assign({}, this.state);
        modValue.value++;
        
        if(modValue.value > 15) {
            modValue.value = 15;
        }

        this.setState(modValue);
    }

    decreaseValue() {
        let modValue = Object.assign({}, this.state);
        modValue.value--;

        if(modValue.value < 0) {
            modValue.value = 0;
        }

        this.setState(modValue);
    }

    render() {
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
                    <Button variant="outline-primary" onClick={this.increaseValue}>
                        Increase
                    </Button>
                    <label className="textElement">
                        {this.state.value}
                    </label>
                    <Button variant="outline-secondary" onClick={this.decreaseValue}>
                        Decrease
                    </Button>
                </div>                
            </div>
        );
    }
}

export default PointCounter;