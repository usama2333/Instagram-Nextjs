import Link from 'next/link'
import React from 'react'
import styles from '../../styles/wireframescss/WireframeLogin.module.css'

const wireframeHome = () => {
  return (
    <React.Fragment>

        <div className={styles.main}>
            Wireframe for Login Page 

            <div className={styles.top}>
                <div className={styles.left}>
                    Login page picture
                </div>
                <div className={styles.right}>
                    Login page form
                <Link className={styles.button} href='/wireframes/home'>Home</Link>
                </div>
            </div>

            <div className={styles.bottom}>
                Links on login page
            </div>
        </div>

    </React.Fragment>
  )
}

export default wireframeHome