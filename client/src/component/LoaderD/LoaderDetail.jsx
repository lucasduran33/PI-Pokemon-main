import React from 'react'
import './LoaderDetail.css'
import loding from '../../img/loader.png'

export default function LoaderDetail () {





    return  (
        <div className='containerld'>
        <div className="cargando">
        <div>
         <img src={loding} alt='loading...' />
        </div>
        <div>
            <p className='carga'>    Cargando Detalles!</p>
        </div>
        </div>
            </div>


      );
}