import Image from 'next/image'
import React from 'react'
import sty from '../styles/cardcomponent.module.css'
import Avatar from './Avatar'

const 
CardComponent = ({key, userName, imageurl, likes, uploadedtime, profileImage}) => {
    console.log("image url",imageurl);

  return (
    <div className={sty.main}>
        <div className={sty.top}>
            <div className={sty.topfirst}>
            <Avatar profileImage={profileImage}/>
            
            <p style={{fontSize:"14px", fontWeight:600}}>{userName}</p>
            </div>
            <p>...</p>
        </div>
        <div className={sty.pic}>
            
            <Image  src={imageurl} width={460} height={500} alt="post1"/>

        </div>

        <div className={sty.bottom}>
            <div className={sty.icons}>
                <div>
                    <Image src="/icon-like.png" width={30} height={30} alt="like button"/>
                    <Image src="/icon-comment.png" width={30} height={30} alt="like button"/>
                    <Image src="/icon-share.png" width={30} height={30} alt="like button"/>
                </div>
                    <Image src="/icon-save.png" width={30} height={30} alt="like button"/>
                <div>

                </div>
            </div>
            <div className={sty.likes}>
                {likes}
            </div>
            <div className={sty.details}>
                <span>Usama Ahmed </span>
            </div>
            <div className={sty.viewcomments}>
                View all comments
            </div>
            <div className={sty.time}>
                {uploadedtime} <span> See more......</span> 
            </div>
           
        </div>
    </div>
  )
}

export default 
CardComponent