import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'
import ladki from '../../public/ladki.png'

const Hero = () => {
    return (
        <div className={`container text-black ${classes.page_container}`}>
            <div className={`p-5 mx-20 float-right`}>
                <button className={`border-2 border-emerald-500 p-3 transition-ease-in-out duration-700 rounded-lg mx-5 hover:bg-emerald-500`}>
                    Sign In
                </button>
                <button className={`bg-emerald-500 p-3 rounded-lg transition-ease-in-out duration-700 border-2 border-emerald-500 hover:bg-transparent`}>
                    Join us
                </button>
            </div>
            <nav className={`${classes.navDiv} flex h-1/3 w-full border-2 border-emerald-800 p-10 mt-20 `}>
                <div className={`${classes.navDiv_ball} flex-1 flex`}>
                    balls
                </div>
                <div>
                </div>
            </nav>
      <section className={`${classes.section1} flex width-full h-autho`} >
        <div className={`${classes.textDiv} flex-1 w-1/2 h-80 pl-28 pt-14`}>
          <h2 className={`text-5xl`}>Explore your curiosity</h2>
          <p className={`my-10 text-m text-grey-400`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex maxime autem modi eum consequuntur 
            illum fugit ab illo quis deleniti, dolorem corporis culpa praesentium ad accusantium. Nihil, sed iure.</p>
        </div>
        <div className={`${classes.ladkiDiv} w-1/2`}>
          <Image src={ladki}/>
        </div>
      </section>
      </div >
      
  )
}

export default Hero
