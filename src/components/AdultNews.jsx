import React from 'react';
import gob from '../Img/gob.png'
import establecimientos from '../Img/establecimientos.png'
import saludresponde from '../Img/saludresponde.png'
import Personaje21 from '../Img/Personaje21.png'

export const AdultNewsInf = () => {
    return (
        <div className='news-content'>

        <div className='news1'>
        <h3>Noticias</h3>
        <img class="projectImg" src={Personaje21}width='200px' alt="project Personaje"></img> 
        </div>

        <div className='news2'>
        <h3>Infórmate aquí sobre la última cifra oficial entregados por el Ministerio de Salud</h3>
        <a href="https://www.gob.cl/coronavirus/cifrasoficiales/" ><img class="projectImg" src={gob} alt="project gob"></img></a>      
        </div>

        <div className='news3'>
        <h3>Si deseas conocer la ubicación del establecimiento de salud más cercano a tu domicilio puedes buscarlo pinchando en la siguiente imagen </h3>
        <a href="https://saludresponde.minsal.cl/establecimientos-de-salud/" ><img class="projectImg" src={establecimientos} alt="project establecimientos"></img></a>      
        </div>

        <div className='news4'>
        <h3>Tienes síntomas y no sabes que hacer, donde llamar, a donde ir o simplemente necesitas orientación ingresa Aquí </h3>
        <a href="https://saludresponde.minsal.cl/" ><img class="projectImg" src={saludresponde} alt="project establecimientos"></img></a>      
        </div>
        
       </div>
    )
}