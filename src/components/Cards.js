import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
return (
    <div className='cards'>
        <h1>Muhteşem Destinasyon Bölgelerine Göz At</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Amazon Ormanlarında derinlerde gizlenmiş şelaleri keşfet'
                    label='Macera'
                    path='/services'
                    />
                     <CardItem 
                    src='images/img-2.jpg'
                    text='Cruise gemisi ile Bali Adalarında özel anlar yaşa'
                    label='Lüks'
                    path='/services'
                    />

                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src='images/img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Gizemli'
                    path='/services'
                    />
                     <CardItem 
                    src='images/img-4.jpg'
                    text='Atlas Okyanusunda keşfedilmemiş denizler seni bekliyor'
              label='Macera'
              path='/products'
                    />
                         <CardItem 
                    src='images/img-8.jpg'
                    text='Rehber ve deve eşliğinde Sahra Çölünde gezintiye çık'
                    label='Adrenalin'
                    path='/sign-up'
                    />

                </ul>
            </div>
        </div>
    </div>
);
}
export default Cards;