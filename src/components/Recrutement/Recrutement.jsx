import React from 'react'
import hire from '../../assets/hire.jpg'

export default function Recrutement() {
  return (
    <section>
        <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${hire})`}}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold transform transition duration-500 hover:scale-110">Recrutement</h1>
            </div>
          </div>
        </div>
    </section>
  )
}
