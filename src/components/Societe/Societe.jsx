import React from 'react'
import './Societe.scss'
export default function Societe() {
  return (
    <section id="societe">
      <h2>Société</h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div className="collapse-title text-2xl font-medium">
          Des solutions pour tous, et adaptées à chacun
        </div>
        <div className="collapse-content"> 
          <p>
            iT-sis, société de Conseil et de Services en Ingénierie Informatique, 
            propose une gamme de services et de solutions pour toutes les entreprises, 
            administrations et services publics, quels que soient leur taille et leur secteur d’activité.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-2xl font-medium">
        iT-sis : un réseau de compétences
        </div>
        <div className="collapse-content"> 
          <p>
            L’équipe iT-sis, appuyée par son réseau de partenaires, 
            est en mesure d’intervenir sur tous types de projets portant sur votre 
            infrastructure informatique : conception, intégration, déploiement, administration et/ou 
            maintenance de votre réseau et de vos systèmes informatiques.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-2xl font-medium">
        Le service : écoute et réactivité
        </div>
        <div className="collapse-content"> 
          <p>
            Sa culture d’écoute active lui permet d’apporter à ses clients des services de qualité et 
            des solutions adaptées à leurs besoins. Cette approche permet à l’équipe iT-sis de construire 
            avec ses clients une relation saine et durable.
          </p>
        </div>
      </div>
    </section>
    
  )
}
