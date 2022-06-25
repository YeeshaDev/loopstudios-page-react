import React from 'react';

export default function Card(props){
    return(
        <div>
            <section className='card'>
                <img src={`./images/desktop/${props.img}`} className='card-img'/>
                <img src={`./images/mobile/${props.img}`} className='mobile-img'/>
                <h3 className='title'>{props.title}</h3>
            </section>
        </div>
    )
}