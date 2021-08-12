import React,{useState} from 'react';
import s from './SliderModule/Slider.module.css'
import img1 from './../../Assets/image3.jpg'






const Slider=()=>{
debugger;
const pict=['https://w-dog.ru/wallpapers/0/54/559256088640538/kvinsboro-most-nyu-jork-most-zdanie-queens.jpg',
'https://picfiles.alphacoders.com/310/310855.jpg',
'https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg',
'https://wroom.ru/i/cars2/mercedesbenz_ml_1.jpg',
img1];
const [index,setIndex]=useState(0);





    return( 

        <div className={s.displayed}>
        <button disabled={index==0} onClick={()=>(setIndex(index-1))}>prev</button>
        <img className={s.size} src={pict[index]}/>
        <button disabled={index==pict.length-1}onClick={()=>(setIndex(index+1))}>next</button>
 
        </div>
    )

}



export default Slider;