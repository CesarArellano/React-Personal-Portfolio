import { useLayoutEffect, useState } from 'react'

export const Navbar = () => {
  
  const [isActiveNavbar, setIsActiveNavbar] = useState(false)
  const [isModeSticky, setIsModeSticky] = useState(false);

  useLayoutEffect(() => {
    const updateModeSticky = () => {
      setIsModeSticky( window.scrollY > 0 )
    }

    window.addEventListener('scroll', updateModeSticky );
    return () => {
      window.removeEventListener('scroll', updateModeSticky );
    }
  }, []);
  
  const toggleMenu = () => {
    setIsActiveNavbar( !isActiveNavbar );
  }

  return (
    <header className={ `${ (isModeSticky ) && 'sticky' }`}>
      <a href="#" className="logo"> Portfolio </a>
      <div className={ `toggle ${ isActiveNavbar && 'active' }` } onClick={ toggleMenu }></div>
      <ul className={ `menu ${ isActiveNavbar && 'active' } `}>
        <li><a href="#home" onClick={ toggleMenu }> Home </a></li>
        <li><a href="#about" onClick={ toggleMenu }> About </a></li>
        <li><a href="#services" onClick={ toggleMenu }> Services </a></li>
        <li><a href="#work" onClick={ toggleMenu }> Work </a></li>
        <li><a href="#certifications" onClick={ toggleMenu }> Certifications </a></li>
        <li><a href="#contact" onClick={ toggleMenu }> Contact </a></li>
      </ul>
    </header>
  )
}