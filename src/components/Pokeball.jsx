import React from 'react';
import pokeball from '../assets/pokeball.png'

const Pokeball = () => {
    return (
        <div className='pokeball floating-ball'>
            <img src={pokeball} alt="" />
        </div>
    );
};

export default Pokeball;