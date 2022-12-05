import Link from 'next/link'
import React from 'react'
import styles from '../../styles/wireframescss/WireframeAccount.module.css'

const account = () => {
  return (
    <div className={styles.main}>
      <div className={styles.right}>
        <div className={styles.navigation}>
          <h2>Instagram</h2>
          <h2>Navigation Panel</h2>
          <ul>
              <li><Link href='/wireframes/home'>Home</Link></li>
              <li><Link href='/wireframes/account'>Account/Profile</Link></li>
              <li><Link href='/wireframes/post'>Post</Link></li>
              <li><Link href='/wireframes/messages'>Messages</Link></li>
              <li><Link href='/wireframes'>Logout</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.left}>
        <div className={styles.top}>
          <div className={styles.photo}>
            Logo
          </div>
          <div className={styles.account}>
            Account Details
          </div>
        </div>

        <div className={styles.bottom}>
          <h1>Share Photos</h1>
        </div>
      </div>

    </div>
  )
}

export default account