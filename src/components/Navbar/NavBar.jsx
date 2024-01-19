import { useEffect, useState } from 'react';
import logoHeader from '../../assets/logo-header.png';
import { Link } from 'react-router-dom';
export default function NavBar()
{
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    )

    const handleToggle = (e) => {
        if (e.target.checked) {
        setTheme("light");
        } else {
        setTheme("dark");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.documentElement.setAttribute("data-theme", localTheme);
    }, [theme]);

    return <>
        <nav className="navbar bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 z-50">
                    <li><Link to="/" >Acceuil</Link></li>
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
                <img src={logoHeader} className='shadow-lg' alt="" width="70"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 bg-base-100 rounded-lg shadow-lg">
                    <li><Link className='mx-3' to="/">Acceuil</Link></li>
                
                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <summary  className='mx-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
						        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
					        </svg>
                            Métiers
                        </summary>
                        <ul className='p-2 z-50 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/ingenierie">Ingéniérie</Link></li>
                            <li><Link to="/solutions">Solutions</Link></li>
                        </ul>
                    </li>
            
                    
                    <li><Link className='mx-3 ' to="/recrutement">
                            Recrutement
                        </Link>
                    </li>
                    <li><Link className='mx-3' to="/contact">Contact</Link></li>
                    <li><Link className='mx-3' to="/partenaires">Mécénats / Partenariats</Link></li>
                    <li><a className='mx-3' href="https://get.teamviewer.com/q7c2du5" target="_blank">Support Technique</a></li>
                </ul>
            </div>
            <div className="navbar-end ">
            <label className="swap swap-rotate mr-10"> 
                <input type="checkbox" onChange={handleToggle} className="theme-controller" value="synthwave" />          
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>            
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
            </div>
        </nav>
    </>
}