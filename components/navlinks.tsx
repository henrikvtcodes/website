import Link from 'next/link'
import Icon from 'supercons';


const NavBar = () => {
  return (
  <nav className="mt-2 mb-2">
      
      <Link href='/about' passHref><button className="btn m-4"><Icon glyph="person" size={48} /></button></Link>
      
      <Link href='/blog' passHref><button className="btn m-4"><Icon glyph="docs" size={48} /></button></Link>  
      
      <Link href='/projects' passHref><button className="btn m-4"><Icon glyph="code" size={48} /></button></Link>
        
      <Link href='/contact' passHref><button className="btn m-4"><Icon glyph="email" size={48} /></button></Link>

  </nav>
  )
};

export default NavBar;