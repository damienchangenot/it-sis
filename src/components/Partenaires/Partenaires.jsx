import React from 'react'
import mecenat from '../../assets/mecenat.jpg'
export default function Partenaires() {
  return (
    <section>
        <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${mecenat})`}}>
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-7xl font-bold transform transition duration-500 hover:scale-110">Mécénats/Partenariat</h1>
              <p>Chez iT-sis, nous sommes engagés auprès d’associations et d’événements locaux.</p>
              <p>Nous sommes convaincus que nous avons notre rôle à jouer !</p>
            </div>
          </div>
        </div>
        <div>
          
        </div>
    </section>
    
  )
}
