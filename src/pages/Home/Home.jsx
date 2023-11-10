import React from 'react'
import Reference from '../../components/Reference/Reference'
import Societe from '../../components/Societe/Societe'
import background from '../../assets/background.jpg'
export default function Home() {
  return (
    <> 
      <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-6xl font-bold">Services, conseils & solutions</h1>
            <p className="mb-5">en gestion des infrastructures informatiques</p>
            <a href="#societe" className="btn btn-info">Découvrir</a>
          </div>
        </div>
      </div>
      <Societe></Societe>
      <Reference></Reference>
    </>
  )
}
