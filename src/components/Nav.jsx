import {headerLogo} from './../assets/images';
import {hamburger} from './../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className='glassmorphism-effect padding-x py-2 mt-8 absolute z-20 w-full'>
        <nav className=' flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo} alt="Logo" width={130} height={30} />
            </a>
            <ul className=' flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray hover:underline">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <button className='font-montserrat font-semibold text-xl  rounded-md p-1 px-2 hover:ring-1  ring-slate-600 max-lg:hidden'>Sign In</button>
            <div className='lg:hidden'>
                <img src={hamburger} alt='Hamburger' width={25} height={25} />
                
            </div>
        </nav>
    </header>
  )
}

export default Nav