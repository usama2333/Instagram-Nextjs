import Image from 'next/image'
import React from 'react'
import sty from '../styles/avatar.module.css'

const Avatar = ({profileImage}) => {
  console.log("from avatar", profileImage);
  return (
    <div className={sty.main}>
        <Image src={profileImage} width={40} height={40} className={sty.image} alt="account logo" />
    </div>
  )
}

export default Avatar