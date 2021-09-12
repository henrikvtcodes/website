import Link from 'next/link'



const NavBar = () => {
  return (
  <nav>
      
      <Link href='/twitch' passHref><button className="btn"> twitch </button></Link>
      

      
      <Link href='/blog' passHref><button className="btn"> blog </button></Link>  
      

      
      <Link href='/projects' passHref><button className="btn"> projects </button></Link>
        

      
      <Link href='/contact' passHref><button className="btn"> contact </button></Link>
          

      
      <Link href='/about' passHref><button className="btn"> about </button></Link>
      

  </nav>
  )
};

export default NavBar;