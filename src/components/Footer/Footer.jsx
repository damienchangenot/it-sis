import logoFooter from '../../assets/logo-footer.png'
import './footer.css'

export default function Footer() {
  return (
    <>
    <footer className="footer footer-center p-10 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">Plan du site</a> 
            <a className="link link-hover">Partenaires</a> 
            <a className="link link-hover">Mentions légales</a> 
            <a className="link link-hover">Crédits</a>
        </nav> 
        <nav>
            <div className="grid grid-flow-col gap-4">
            <a href="https://fr.linkedin.com/company/it-sis" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            </a> 
            </div>
        </nav> 
        <aside>
            <p>Fait avec ❤ par <a href="https://github.com/damienchangenot" target="_blank">Damien Changenot</a> - Copyright © 2023 - All right reserved by IT-sis</p>
        </aside>
    </footer>
    </>
  )
}
