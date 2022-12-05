import Image from "next/image";
import Link from "next/link";
import React from "react";
import sty from "../styles/login.module.css";

export default function Home() {
  return (
    <div className={sty.main}>

      <div className={sty.top}>
        <div className={sty.left}>

          <Image src="/login1.png" width={400} height={600} alt="instagramm-image"/>
        </div>

        <div className={sty.right}>
          <div className={sty.logo}>
              <Image src="/logo.png" width={170} height={70} alt="Instagram logo"/>
          </div>

          <div>
            <form action="" className={sty.form}>
              <input type="text" placeholder="Phone number, username, or email"/>
              <input type="password" placeholder="Password"/>
              <Link href="/home"><input type="button" value="Log in" className={sty.btn}/></Link>
            </form>
          </div>

          <div className={sty.rigthbottom}>
            <p>OR</p>
            <Image src="/login4.png" height={40} width={250} alt="login by facebook"/>
            <p>Forgot password?</p>
          </div>

          <div className={sty.getapp}>
            <p>Get the App.</p>
            <Image src="/login2.png" height={50} width={300} alt="img"/>
          </div>
        </div>
      </div>

      <div className={sty.bottom}>
        <Image src="/login3.png" width={1100} height={120} alt="links"/>
      </div>
    </div>
  )
}
