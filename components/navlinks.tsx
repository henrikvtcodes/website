import Link from 'next/link'



const NavBar = () => {
  return (
  <nav className="mt-2 mb-2">
      
      <Link href='/about' passHref><button className="btn m-4"> about </button></Link>
      
      <Link href='/blog' passHref><button className="btn m-4"> blog </button></Link>  
      
      <Link href='/projects' passHref><button className="btn m-4"> projects </button></Link>
        
      <Link href='/contact' passHref><button className="btn m-4"> contact </button></Link>

  </nav>
  )
};

export default NavBar;