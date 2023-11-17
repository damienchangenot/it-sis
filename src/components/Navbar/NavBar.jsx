import logoHeader from '../../assets/logo-header.png';
import { Link } from 'react-router-dom';
import settings from  '../../assets/icons/settings.png'
export default function NavBar()
{
    return <>
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50">
                    <li><Link to="/">Acceuil</Link></li>
                    <li>
                        <a>Métiers</a>
                        <ul className='p-2'>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/ingenierie">Ingénierie</Link></li>
                            <li><Link to="/solutions">Solutions</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/recrutement">Recrutement</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="partenaires">Mécénats / Partenariats</Link></li>
                </ul>
                </div>
                <img src={logoHeader} alt="" width="70"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal px-1">
                <Link className='mx-3' to="/">Acceuil</Link>
            
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className='mx-3'>Métiers</label>
                    <ul className='p-2 z-50 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/ingenierie">Ingéniérie</Link></li>
                        <li><Link to="/solutions">Solutions</Link></li>
                    </ul>
                </div>
         
                
                <Link className='mx-3' to="/recrutement">Recrutement</Link>
                <Link className='mx-3' to="/contact">Contact</Link>
                <Link className='mx-3' to="/partenaires">Mécénats / Partenariats</Link>
                </div>
            </div>
            <div className="navbar-end ">
                <a href="https://get.teamviewer.com/q7c2du5" target="_blank" className="btn btn-error btn-sm"><img src={settings} alt="icon setting" />Support Technique</a>
            </div>
        </div>
    </>
}