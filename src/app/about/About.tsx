import React from 'react';
import Image from 'next/image';
import Skill from './Skill'; // Import Skill component

function About() {
  return (
    <div  id='About'>
      <h2 className='mt-16 text-center text-5xl font-bold text-yellow-400 underline'>About me</h2>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="flex justify-around gap-y-14">
            <Image
              src="/Images/image2.jpg"
              alt="photo"
              width={300}
              height={1}
              className="rounded-full"
            />
            <div />
          </div>

          <div className="text-center lg:w-2/3 w-full text-yellow-600">
            <h1 className="title-font text-4xl mb-4 mt-5 font-medium text-yellow-600">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="leading-relaxed text-1xl text-white">
              Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
              tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
              ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
              meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af
              fingerstache pitchfork.
            </p>
          </div>
        </div>
        {/* Include the Skills component */}
        <Skill />
      </section>
    </div>
  );
}

export default About;