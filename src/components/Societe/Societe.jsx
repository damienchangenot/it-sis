import React from 'react'
import './Societe.scss'
import solution from '../../assets/icons/solution.png';
import networking from '../../assets/icons/networking.png';
import speed from '../../assets/icons/speed.png';
export default function Societe() {
  
  const datas = [
    ['Des solutions pour tous, et adaptées à chacun',
     'iT-sis, propose une gamme de services et de solutions pour toutes les entreprises,administrations et services publics, quels que soient leur taille et leur secteur d’activité.',
      solution
    ],[
      'iT-sis : un réseau de compétences',
      'L’équipe iT-sis, appuyée par son réseau de partenaires, est en mesure d’intervenir sur tous types de projets portant sur votre infrastructure informatique : conception, intégration, déploiement, administration et/ou maintenance de votre réseau et de vos systèmes informatiques.',
      networking
    ],[
      'Le service : écoute et réactivité',
      'Sa culture d’écoute active lui permet d’apporter à ses clients des services de qualité et des solutions adaptées à leurs besoins. Cette approche permet à l’équipe iT-sis de construire avec ses clients une relation saine et durable.',
      speed
    ]

  ]
  return (
    <section id="societe" className=''>
      <h2 className='text-4xl text-center my-4'>La société</h2>
      <div >
        <div className=' flex flex-col gap-4 py-5 items-center justify-center'>
          {datas.map((data, index) => {
            return <a key={data[0]} className=" block-societe rounded-sm w-[90vw] grid grid-cols-12  shadow shadow-black p-3 gap-2 items-center hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 transform" href="#">
              <div className="col-span-12 lg:col-span-1 text-center">
                  <img className='h-16 w-16 m-auto' src={data[2]} alt="icon solution" />
              </div>
              <div className="col-span-12 lg:col-span-11">
                <p className="font-semibold text-base-content text-lg my-2 lg:mt-0 text-center">{data[0]}</p>
                <p className="text-sm font-light">{data[1]}
                </p>
              </div>
            </a>
          })}
        </div>

      </div>

    </section>
    
  )
}
