import Image from 'next/image';
import { useEffect } from 'react';

import { CustomMeta } from '~component/old/meta';
import DefaultMeta from '~component/old/meta';



const errorgifs: object = {
  1: {
    link: "https://c.tenor.com/MKLGBC3pWMEAAAAi/dead-inside.gif",
    width: 496,
    height: 206,
    alt: 'spinning letters that say "social life: 404 not found" ',
  },
  2: {
    link: "https://c.tenor.com/FcVg5W9zZJQAAAAC/error.gif",
    width: 320,
    height: 240,
    alt: "gif where cat smashes computer screen after thing doesnt load",
  },
  3: {
    link: "https://c.tenor.com/g6UyWxRljhwAAAAi/missing-head-mind-loading.gif",
    width: 498,
    height: 455,
    alt: "person who's head is a loading spinner"
  },
};


const Error404 = (props) => {
    let errorgifselect: number = Math.floor(Math.random() * 3) + 1;
    return (
      <main className="grid place-items-center svgbg-blue pagefill text-white">
          <DefaultMeta  />
        <div>
            {/* <h1 className="UniSansHeavy text-center"> PAGE NOT FOUND </h1> */}
          <Image src={errorgifs[errorgifselect].link} 
          width={errorgifs[errorgifselect].width} 
          height={errorgifs[errorgifselect].height} 
          alt={errorgifs[errorgifselect].alt} />
        </div>
      </main>
    );
    
}

export default Error404;