import React from 'react'
import solutions from '../../assets/solutions.jpg'
import dell from '../../assets/solution/dell.png'
import aruba from '../../assets/solution/aruba.png'
import sonicwall from '../../assets/solution/sonicwall.png'
import ubiquiti from '../../assets/solution/ubiquiti.png'
import cisco from '../../assets/solution/cisco.svg'
import vmware from '../../assets/solution/Vmware.svg'
import veeam from '../../assets/solution/veeam.png'
import zimbra from '../../assets/solution/zimbra.png'
import eset from '../../assets/solution/eset.png'
import ovh from '../../assets/solution/ovh.svg'
import './Solutions.scss';
import Solution from '../Solution/Solution';
export default function Solutions() {
  const datas = [
      [dell, 'Dell', 'https://www.dell.com/fr-fr','Serveurs et micro-ordinateurs', ],
      [aruba, 'Aruba','https://www.arubanetworks.com/fr/', 'Solutions WIFI'],
      [sonicwall, 'Sonicwall', 'https://www.sonicwall.com/fr-fr/', 'Routeurs/Firewall' ],
      [ubiquiti, 'Ubiquiti', 'https://www.ui.com/', 'Ponts radio'],
      [cisco, 'Cisco','https://www.cisco.com/c/fr_fr/index.html', 'Réseau'],
      [vmware, 'VMWare', 'https://www.vmware.com/fr.html', 'Solutions de virtualisation'],
      [veeam, 'Veeam', 'https://www.veeam.com/fr', 'Sauvegarde des environnements virtualisés' ],
      [zimbra, 'Zimbra','https://www.zimbra.com/', 'Solutions de collaboration'],
      [eset, 'Eset', 'https://www.eset.com/fr/', 'Sécurité anti-virale/anti-malware' ],
      [ovh, 'OVH', 'https://www.ovh.com/fr/', 'Solutions d’hébergement']

  ]
  return (
    <section>
        <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${solutions})`}}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold transform transition duration-500 hover:scale-110">Solutions</h1>
            </div>
          </div>
        </div>
        <div className=' flex justify-center'>          
          <div className='md:w-3/4'>
            <p>iT-sis a sélectionné des solutions informatiques pour les besoins spécifiques de ses clients. Celles-ci correspondent à notre vision de l’informatique d’entreprise: simples et efficaces.</p>
            <br />
            <p className='font-bold text-xl'>Vous ne vous préoccupez plus de votre informatique, vous vous concentrez sur votre métier.</p>
            <br />
            <p>Grâce à notre expérience, nous avons choisi de travailler notamment avec :</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center justify-center'>
              {datas.map(data => {
                return <Solution key={data[1]} data={data}></Solution>
              })}
            </div>
            <p>Cette sélection, validée par notre cellule technique, nous permet de maîtriser ce que nous installons.</p>
            <p>Nous pouvons bien-sûr intervenir sur les équipements et logiciels d’autres éditeurs ou constructeurs, en fonction de vos besoins et de votre historique.</p>
          </div>
        </div>
    </section>

  )
}
