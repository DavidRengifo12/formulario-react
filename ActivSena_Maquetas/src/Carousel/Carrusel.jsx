import React, { useRef, useState, useEffect } from 'react'
import './Styles/StyleCarrusel.css'
import { data } from '../assets/data';





export default function Carrusel() {
 const listRef = useRef();
 const [currentindex, setCurrentIndex] = useState(0);

useEffect(() => {
  const listNode = listRef.current;
  const imgNode = listNode.querySelectorAll("li > img")[currentindex];

  if(imgNode){
    imgNode.scrollIntoView({
        behavior:"smooth"
    });
  }
}, [currentindex])

const scrollToImage = (direction) => {
    if(direction === 'prev'){
     setCurrentIndex(curr =>{
        const PrimerImagen = currentindex === 0;
        return PrimerImagen ? 0: curr -1;
     })
    }else{
        const UltimaImagen = currentindex === data.length -1;
        if(!UltimaImagen){
            setCurrentIndex(curr => curr +1);
        }
    }
}


const goToSlide = (sliderIndexx) =>{
    setCurrentIndex(sliderIndexx)
}

  return (
    <>
    <h1>Feedback De Eventos</h1>
    <div className='main-container'>
        
      <div className='slider-container'>
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className='container-images'>
            <ul ref={listRef} >
                {
                    data.map((item) =>{
                        return <li key={item.id}>
                            <img src={item.imgUrl} width={700} height={400}/>

                        </li>
                    })
                }
            </ul>
        </div>
        <div className='dots-container'>
            {
                data.map((_, idx)=>(
                    
                    <div key={idx} className={`dot-container-item ${idx === currentindex ? "active" : ""}`} onClick={() => goToSlide(idx)}> 
                        &#9832;
                    </div>
                )
                    
                 )
            }

        </div>
      </div>
    </div>
</>
  )
}
