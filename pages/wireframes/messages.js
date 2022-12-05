import Link from 'next/link'
import React from 'react'
import styles from '../../styles/wireframescss/WireframeMessages.module.css'

const messages = () => {
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
        <div className={styles.center}>
          <div className={styles.top}>
            Switch Account
          </div>
          <div className={styles.account}>
            Others account
          </div>
        </div>

          <div className={styles.messages}>
              <h1>You Messages</h1>
          <button>Send Message</button>
          </div>

      </div>

    </div>
  )
}

export default messages