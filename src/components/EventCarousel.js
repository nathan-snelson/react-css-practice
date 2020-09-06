import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const EventCarousel = (props) => {
    const [index, setIndex] = React.useState(0);
    const { items } = props

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const buildItem = (value) => {
        return(            
            <Carousel.Item key={value}>
                <h1>{value}</h1>
                <Carousel.Caption>
                    <h2>Test Header</h2>
                    <p>Test Body</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {items.map((value) => {
                    return buildItem(value)
                })}
            </Carousel>
        </>
    )
}

export default EventCarousel;