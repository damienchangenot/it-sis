import React from 'react'
import Carousel from './Carousel/Carousel'

export default function Reference() {

  const images = [];
  
  return (
    <>
      <h2 className='text-center'>Nos références</h2>
      <div className='text-center'>
        <h3>iT-sis intervient chez tous types de clients, TPE, PME/PMI et institutionnels.</h3>
        <p>Voici quelques clients qui nous font confiance :</p>
      </div>
      <Carousel></Carousel>
    </>
  )
}
