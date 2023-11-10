import React from 'react'
import telephone from '../../assets/icons/telephone.png'
import mail from '../../assets/icons/mail.png'
import time from '../../assets/icons/time.png'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <h1 className='text-center text-3xl '>Nous contacter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        <div className=''>
          <form action="" className='bg-neutral-focus mx-5 py-3 rounded' >
            <div className='m-3 text-center'>
              <input  type="text" name="name" id="name" placeholder="Nom" className="input input-bordered input-info w-full max-w-xs bg-white m-3 lg:my-0"/>
              <input type="text" name="firstname" id="firstname" placeholder="Prénom" className="input input-bordered input-info w-full max-w-xs bg-white m-3 lg:my-0" />
            </div>
            <div className='m-3 text-center'>
              <input type="email" name="email" id="email" placeholder="E-mail"className="input input-bordered input-info w-full max-w-xs bg-white m-3 lg:my-0" />  
              <input type="tel" name="phone" id="phone" placeholder="Téléphone" className="input input-bordered input-info w-full max-w-xs bg-white m-3 lg:my-0" />
            </div>
            <div className='m-3 text-center'>
              <textarea name="message" id=""  className="textarea textarea-info bg-white textarea-lg w-full max-w-2xl" placeholder="Message"></textarea>
            </div>
            <div className='m-3 text-center'>
              <button type="submit" className="btn btn-info">Envoyer</button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  h-3/4 place-items-center" id="info-contact">
          <div className='flex text-xl'><img src={telephone} alt="icon telephone" className='max-h-8' /> <a href="tel:0238802792" className='pl-2'>: 02 38 80 27 92</a></div>
          <div className='flex text-xl'><img src={mail} alt="icon mail" className='max-h-8' /> <a href="mailto:info@it-sis.com" className='pl-2'>: info@it-sis.com</a></div>
          <div className='flex text-lg col-span-2 items-center '><img src={time} alt="icon mail" className='max-h-8' /> <p className='pl-2'> Ouverture du lundi au vendredi : <br /> de 9h à 12h et de 14h à 18h. </p></div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10690.290462686935!2d1.9297265!3d47.9446502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4fb760c82f785%3A0x27be90bd4e8f80df!2siT-sis!5e0!3m2!1sfr!2sfr!4v1699441002917!5m2!1sfr!2sfr" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </>
    )
}
