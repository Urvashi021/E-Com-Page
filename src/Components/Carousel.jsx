import React from 'react'
import Carousel from 'react-material-ui-carousel'

function CarouselComp()
{
    var items = [
        {
            name: "Duck #1",
            description: "Probably the most random thing you have ever seen!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYrEgQQIrVV3mmjEaoUIsHc7Mv1ksBeUhYrOI1-CnQLlZqcgrBwfFqUwAoRPFHwUH6IbtfIq-z_s&usqp=CAU&ec=48665701",
        },
        {
            name: "Duck #2",
            description: "Hello World!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARdDSeJ0kABqVC285-TuAJLNq-9h__AqhQVtycNzXpA&usqp=CAU&ec=48665701",
        },
        {
            name: "Duck #3",
            description: "Namaste!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuanHLLzntFcEpl8YEgEQGEpepvj6q1LAjyRkRr-Qvyzz8ThhiUNuCcFlFM1VFMBlLCiwgPQqOetg&usqp=CAU&ec=48665701 ",
        }
    ]

    return (
        <div>
        <Carousel>
            {
                items.map((item, i) => {
                    return (
                        <div>
                            <img src={item.img} alt="" />
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </Carousel>
        </div>
    )
}

export default CarouselComp