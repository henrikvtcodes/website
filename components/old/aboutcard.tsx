import Image from 'next/image';



const AboutCard = () =>{
      return (
          <div className="card shadow-xl h-3/6">
            <figure >
              <Image src="/images/henrik-forest.jpg" width={1000} height={1000}  alt='Henrik' />
            </figure> 
            <div className="justify-end card-body">
              <h2 className="card-title Whitney"> About Me </h2> 
              <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            </div>
          </div> 
      );

}

export default AboutCard;