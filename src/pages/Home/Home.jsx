import React from 'react'
import Reference from '../../components/Reference/Reference'
import Societe from '../../components/Societe/Societe'
import background from '../../assets/background.jpg'
import informatique from '../../assets/informatique.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <> 
      <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 id="title-home" className="mb-5 text-7xl font-bold ">
              <span className='inline-block transform transition duration-500 hover:scale-110'>Services</span>, <span className='inline-block transform transition duration-500 hover:scale-110'> Ingénierie</span> & <span className='inline-block transform transition duration-500 hover:scale-110'>Solutions</span>
            </h1>
            <p className="mb-5">en gestion des infrastructures informatiques</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#presentation" className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">Découvrir</a>
              <Link to="/contact" className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">Nous contacter</Link>
            </div>
          </div>
        </div>
      </div>
      <section id="presentation" >
        <h2 className='text-4xl text-center my-4'>À propos de nous</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-8 justify-around'>
          <div className='flex justify-center items-center' >
            <div className='lg:w-3/4 '>
              <p>iT-sis est, depuis sa création en <big className='font-bold'>2003</big>, spécialiste du service informatique global aux entreprises.</p><br />
              <p>Nous établissons une vraie relation de partenariat avec nos clients, impliquant une proximité et une confiance mutuelle. </p><br />
              <p>Nous nous positionnons en tant qu'interlocuteur unique et savons répondre à tous vos besoins concernant la gestion de vos systèmes d'information, ou le développement de logiciels.</p><br />
              <p>Nous sommes à votre service : contactez-nous pour découvrir nos solutions adaptées à vos besoins.</p>
            </div>
          </div>
          <img loading="lazy" src={informatique} alt="reprensation informatique" className='rounded-lg shadow-md shadow-black transition duration-300 ease-in-out hover:scale-105 transform'/>
        </div>
      </section>
      <Societe></Societe>
      <Reference></Reference>
    </>
  )
}
