import Favicon, { DefaultMeta } from '../components/meta'
import NavBar from '../components/navbar'
import ParticlesBackground from 'components/particles';

const StdLayout = ({children, className}:any) =>{

  return (
    <main className="grid justify-center z-10 pagefill">
      <Favicon />
      <DefaultMeta />

      <div className={`main-element-size z-30 backdrop-filter backdrop-blur-lg rounded-lg ${className}`}>
        <NavBar />
        {children}
      </div>
    </main>
  );

}

export default StdLayout;