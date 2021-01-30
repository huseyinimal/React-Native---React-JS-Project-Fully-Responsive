import React from 'react';
import { Button } from './Button';

import './HeroSection.css';

function   HeroSection(){
    return(
        <div className='hero-container'>
{/*<video src='/videos/video-2.mp4' autoPlay loop muted />*/}
<h1>MACERA SENİ BEKLİYOR</h1>
<p>Hala neyi bekliyorsun?</p>
<div className='hero-btns'>
<Button
className='btns'
buttonStyle='btn--outline'
buttonSize='btn--large'
>
    HADİ BAŞLAYALIM
</Button>

<Button
className='btns'
buttonStyle='btn--primary'
buttonSize='btn--large'
>
    FRAGMANI İZLE <i className='far fa-play circle'/>
</Button>

</div>
        </div>
    )
}
export default HeroSection