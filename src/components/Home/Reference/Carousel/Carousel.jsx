import React from 'react'
import './Carousel.scss';
import mars from '../../../../assets/reference/mars.png';
import martin from '../../../../assets/reference/martin.png';
import acmAgro from '../../../../assets/reference/ACM-agro.png';
import acmPharma from '../../../../assets/reference/ACM-Pharma.jpg';
import kgf from '../../../../assets/reference/kgf.png';
import fft from '../../../../assets/reference/fft-logo.webp';
import mairie from '../../../../assets/reference/fleury.jpg';
export default function Carousel({images}) {
  return (
    <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<a href="https://fra.mars.com/" target="_blank"><img src={mars} height="100" width="250" alt="logo mars" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.martin-environnement.com/" target="_blank"><img src={martin} height="100" width="250" alt="logo martin environnement" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.merieuxnutrisciences.com/fr/" target="_blank"><img src={acmAgro} height="100" width="250" alt="logo acm agro" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.acmpharma.com/" target="_blank"><img src={acmPharma} height="100" width="250" alt="logo acm pharma" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://fr.kvernelandgroup.com/" target="_blank"><img src={kgf} height="100" width="250" alt="logo kgf" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.fft.fr/"><img src={fft} height="100" width="250" alt="logo fft" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.fleurylesaubrais.fr/"><img src={mairie} height="100" width="250" alt="logo fleury les aubrais" loading="lazy"/></a>
		</div>
        <div class="slide">
			<a href="https://fra.mars.com/" target="_blank"><img src={mars} height="100" width="250" alt="logo mars" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.martin-environnement.com/" target="_blank"><img src={martin} height="100" width="250" alt="logo martin environnement" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.merieuxnutrisciences.com/fr/" target="_blank"><img src={acmAgro} height="100" width="250" alt="logo acm agro" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.acmpharma.com/" target="_blank"><img src={acmPharma} height="100" width="250" alt="logo acm pharma" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://fr.kvernelandgroup.com/" target="_blank"><img src={kgf} height="100" width="250" alt="logo kgf" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.fft.fr/"><img src={fft} height="100" width="250" alt="logo fft" loading="lazy"/></a>
		</div>
		<div class="slide">
			<a href="https://www.fleurylesaubrais.fr/"><img src={mairie} height="100" width="250" alt="logo fleury les aubrais" loading="lazy"/></a>
		</div>
	</div>
</div>
  )
}
