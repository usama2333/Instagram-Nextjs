import Image from 'next/image'
import React from 'react'
import sty from '../styles/stories.module.css'

const Stories = () => {
  return (
    <div className={sty.main}>
        <div className={sty.story}>
            <Image src="/dp.jpg" height={70} width={70} alt="story" className={sty.img}/>
        </div>
        <div className={sty.story}>
            <Image src="/team1.jpg" height={70} width={70} alt="story" className={sty.img}/>
        </div>
        <div className={sty.story}>
            <Image src="/teampic2.jpg" height={70} width={70} alt="story" className={sty.img}/>
        </div>
        <div className={sty.story}>
            <Image src="/blog-1.jpeg" height={70} width={70} alt="story" className={sty.img}/>
        </div>
        <div className={sty.story}>
            <Image src="/blog-2.jpeg" height={70} width={70} alt="story" className={sty.img}/>
        </div>
    </div>
  )
}

export default Stories