import Image from 'next/image';
import { CustomMeta } from '~component/meta';
import DefaultMeta from '~component/meta';


const Error404 = () => {
    return (
      <main className="grid place-items-center bg-gray-jet pagefill text-white">
        <div>
            <DefaultMeta  />
            {/* <h1 className="UniSansHeavy text-center"> PAGE NOT FOUND </h1> */}
          <Image src="https://c.tenor.com/MKLGBC3pWMEAAAAi/dead-inside.gif" width={496} height={206} />
        </div>
      </main>
    );
    
}

export default Error404;