import React from 'react'
import Carousel from './Carousel/Carousel'

export default function Reference() {

  const images = [];
  
  return (
    <section id='reference' className='my-10'>
      <h2 className='text-center text-4xl mb-5 '>Nos références</h2>
      <div className='text-center'>
        <h3>iT-sis intervient chez tous types de clients, TPE, PME/PMI et institutionnels.</h3>
        <p className='my-5'>Voici quelques clients qui nous font confiance :</p>
      </div>
      <Carousel></Carousel>
    </section>
  )
}
