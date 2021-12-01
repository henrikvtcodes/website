import Favicon, { DefaultMeta } from '../components/meta'



const StdLayout = ({children}:any) =>{

  return (
    <main className="">
      <Favicon />
      <DefaultMeta />
      <div className="">
        {children}
      </div>
    </main>
  )

}

export default StdLayout;