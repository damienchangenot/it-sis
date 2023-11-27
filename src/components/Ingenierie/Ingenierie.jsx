import React from 'react'
import ingenierie from '../../assets/ingenierie.jpg'
import coding from '../../assets/coding.jpg'
export default function Ingenierie() {
  return (
    <section>
        <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${ingenierie})`}}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold transform transition duration-500 hover:scale-110">Ingénierie</h1>
            </div>
          </div>
        </div>
        <div>

        <p>Afin de répondre au plus près aux besoins de nos clients, iT-sis est organisée en deux pôles d’ingénierie : la gestion des infrastructures et le développement de logiciels.</p>
        
        <h2 className='text-4xl text-center my-4'>Gestion d’infrastructures</h2>
        <p className='text-center'>Métier initial d’iT-sis, nous gérons aujourd’hui les infrastructures de nos clients.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 mx-12 justify-around'>
          <div>
              <h3 className='text-2xl text-center mb-4 font-bold'>Installation, paramétrage, déploiement de serveurs</h3>
              <p>Nous répondons aux besoins de nos clients pour la mise à disposition des données et des services dont ils ont besoin en installant et en gérant la production de leurs serveurs, qu’ils soient physiques, virtualisés ou hybrides, y compris dans le cloud.</p>
              <h3 className='text-2xl text-center mb-4 font-bold'>Conception, installation et déploiement réseaux</h3>
              <p>L’accès rapide et fiable aux données de l’entreprise étant un atout stratégique, nous concevons des infrastructures réseau efficaces et pérennes (filaires, sans fil, optiques, etc.)</p>
              <h3 className='text-2xl text-center mb-4 font-bold'>Mise en oeuvre de la sécurité</h3>
              <p>L’efficacité de l’entreprise reposant sur l’accessibilité à ses infrastructures informatiques, nous gérons sa sécurité (intrusions, accès, malwares, etc.) et la sauvegarde des données, en environnement physique ou virtuel.</p>
          </div>
          <div></div>
        </div>
        <h2 className='text-4xl text-center my-4'>Développement de logiciels</h2>
        <p className='text-center'>Spécialistes des technologies du web, nous intervenons chez nos clients dans deux grands domaines :</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-8 justify-around'>
          <div className='flex justify-center'>
            <div className='max-w-xl'>
              <img src={coding} alt="" className=' rounded-lg shadow-md shadow-black transition duration-300 ease-in-out hover:scale-105 transform' />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center '>
              <h3 className='text-2xl text-center mb-4 font-bold'>Développement de modules logiciels</h3>
              <p>Pour répondre à des besoins spécifiques non gérés par les progiciels de l’entreprise (reporting, qualité, pilotage, etc.), nous développons des modules satellites qui s’intègrent à l’environnement et permettent d’améliorer la productivité.</p>
              <h3 className='text-2xl text-center my-4 font-bold'>Réalisation de progiciels intégrés</h3>
              <p>Certaines activités n’étant pas couvertes par les éditeurs de logiciels, nous réalisons, en partenariat avec nos cliens, leur progiciel de gestion intégré.</p>
              <p>Nous intervenons du cahier des charges au suivi de la production.</p>
              <p>Cette solution permet de répondre à 100% aux besoins de l’entreprise.</p>
          </div>
        </div>
      </div>

    </section>
  )
}
