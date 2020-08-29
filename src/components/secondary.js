import React from 'react';
import Button from 'react-bootstrap/Button';

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
            <>
                <Button variant="outline-primary" onClick={this.increaseValue}>
                    Increase
                </Button>
                <label>
                    {this.state.value}
                </label>
                <Button variant="outline-secondary" onClick={this.decreaseValue}>
                    Decrease
                </Button>
            </>
        );
    }
}

export default PointCounter;