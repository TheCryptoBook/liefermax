import React from 'react';
import { Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function Slider() {
  return (
    <div>
        <Carousel controls={false} fade={true}>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src='/images/food/burger.jpg' alt="Burger" width={3000} height={350} />
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src='/images/food/pizza.jpg' alt="Pizza" width={3000} height={350} />
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src='/images/food/burrito.jpg' alt="Burrito" width={3000} height={350} />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}