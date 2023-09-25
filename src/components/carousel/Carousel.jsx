import React, { useState } from 'react'
import "./carousel.css"
import { useSwipeable } from 'react-swipeable';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"

const NEXT = 'next';
const PREV = 'prev';

const getOrder = (index, pos, numItems) => {
    return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};


// eslint-disable-next-line react/prop-types
const Carousel = ({ children }) => {
    const numItems = React.Children.count(children);
    const [sliding, setSliding] = useState(false);
    const [direction, setDirection] = useState('');
    const [pos, setPos] = useState(0);

    const slideNext = () => {
        setSliding(true);
        setDirection(NEXT);
        setPos(pos === numItems - 1 ? 0 : pos + 1);

        setTimeout(stopSliding, 50);
    };

    const slidePrev = () => {
        setSliding(true);
        setDirection(PREV);
        setPos(pos === 0 ? numItems - 1 : pos - 1);

        setTimeout(stopSliding, 50);
    };

    const stopSliding = () => setSliding(false)

    const slide = (direction) => {
        if (direction === NEXT) {
            slideNext()
        } else {
            slidePrev()
        }
    }

    const handlers = useSwipeable({
        // onSwipedLeft: () => slide(NEXT),
        // onSwipedRight: () => slide(PREV),
        // swipeDuration: 0,
        // preventScrollOnSwipe: true,
        // trackMouse: true,
        // onSwiped: (eventData) => console.log("User Swiped!", eventData),
        // onSwiping: () => console.log('swiping'),
        // onSwipedUp: () => console.log('up'),
        // touchEventOptions: { passive: true },

        onSwipedLeft: () => slide(NEXT),
        onSwipedRight: () => slide(PREV),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });


    return (
        <div className='container' {...handlers} >
            <div className='wrapper'>
                <div className={`carousel-container ${direction} ${sliding && 'sliding'}`}>
                    {React.Children.map(children, (child, index) => (
                        <div className='carousel-slot' style={{ order: getOrder(index, pos, numItems) }}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <div className='button_container'>
                <button className='icon_btn' onClick={() => slide(PREV)}>
                    <GrLinkPrevious className="icon" />
                </button>
                <button className='icon_btn' onClick={() => slide(NEXT)}>
                    <GrLinkNext className="icon" />
                </button>
            </div>


            <p className="desc">
                GUCCI HORSEBIT CHAIN MEDIUM SHOULDER BAG
            </p>

            <div className='line_nav'>
                <span
                    onClick={() => setPos(0)}
                    style={pos === 0 ? { backgroundColor: "#000" } : { backgroundColor: "#d9d9d9" }}></span>
                <span
                    onClick={() => setPos(1)}
                    style={pos === 1 ? { backgroundColor: "#000" } : { backgroundColor: "#d9d9d9" }}></span>
                <span
                    onClick={() => setPos(2)}
                    style={pos === 2 ? { backgroundColor: "#000" } : { backgroundColor: "#d9d9d9" }}></span>
                <span
                    onClick={() => setPos(3)}
                    style={pos === 3 ? { backgroundColor: "#000" } : { backgroundColor: "#d9d9d9" }}></span>
            </div>
        </div>
    )

}
export default Carousel