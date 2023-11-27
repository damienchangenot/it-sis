import React from 'react'
import services from '../../assets/services.jpg'
export default function Services() {
  return (
    <section>
        <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${services})`}}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold transform transition duration-500 hover:scale-110">Services</h1>
            </div>
          </div>
        </div>
        <h2 className='text-4xl text-center my-4'>Supervision, Administration, Maintenance, Assistance</h2>
        <p>Pour assurer à ses clients la meilleure continuité de services et de production, iT-sis propose des contrats très souples, adaptés aux particularités et aux contraintes de chaque client. iT-sis réalise, sur site ou à distance (télémaintenance) des prestations dans les domaines suivants :</p>
        <h2 className='text-4xl text-center my-4'>Domaines techniques maîtrisés</h2>
        <p>Nos clients utilisent nos compétences pour les aider à mettre en place et à maintenir leur infrastructure informatique, c’est pourquoi nous avons référencé et nous intégrons un grand nombre de systèmes réputés du marché, mais surtout correspondant aux besoins des entreprises.
            <br /> 
            Comme chaque société possède ses propres spécificités, iT-sis a intégré, depuis sa création, la gestion des environnements hétérogènes. Nos clients utilisent de manière fluide des systèmes Microsoft, Linux et Apple combinés, que ce soit sur site, dans le cloud ou un hybride
        </p>
    </section>
  )
}
