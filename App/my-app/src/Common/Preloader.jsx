import React from 'react';
import loader from './../Assets/loader.gif';
import s from './PreloaderModule.css'

let Preloader=()=>{
    return(<div className={s.size}>
        <img src={loader} alt="preloader"/>
        </div>
        )
};



export default Preloader;