import Link from 'next/link'
import React from 'react'
import styles from '../../styles/wireframescss/WireframePost.module.css'

const post = () => {
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
        <div className={styles.modal}>
          <h2>Create new post</h2>
          <div>
            <h3>Drag Photos videos here</h3>
          <button>Select from computer</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default post