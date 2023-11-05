import React from 'react'
import Reference from './Reference/Reference'
import Societe from '../Societe/Societe'
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
            <a href="" className="btn btn-primary">Découvrir</a>
          </div>
        </div>
      </div>
    <Societe>&</Societe>
    <Reference></Reference>
    </>
  )
}
