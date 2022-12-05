import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.main}>
        <div className={styles.logo}>
            <Image src="/logo.png" width={120} height={45} alt="Instagram logo"/>
        </div>

        <div className={styles.nav}>
            <div className={styles.navitem}>
                <Link href="/home" className={styles.navlink}>
                    <Image src="/icon-home.png" width={35} height={35} alt="icon-home"/>
                    <span className={styles.navspan}>Home</span>
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link href="/home" className={styles.navlink}>
                    <Image src="/icon-search.png" width={35} height={35} alt="icon-home"/>
                    <span className={styles.navspan}>Search</span>
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link href="/explore" className={styles.navlink}>
                    <Image src="/icon-explore.png" width={35} height={35} alt="icon-home"/>
                    <span className={styles.navspan}>Explore</span>
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link href="/messages" className={styles.navlink}>
                    <Image src="/icon-messages.png" width={35} height={35} alt="icon-home"/>
                    <span className={styles.navspan}>Messages</span>
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link href="/home" className={styles.navlink}>
                    <Image src="/icon-notifications.png" width={35} height={35} alt="icon-home"/>
                    <span className={styles.navspan}>Notifications</span>
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link href="/post" className={styles.navlink}>
                    <Image src="/icon-create.png" width={35} height={35} alt="icon-home"/>
                    <span className={styles.navspan}>Create</span>
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link href="/account" className={styles.navlink}>
                    <Image src="/icon-profile.png" width={35} height={35} alt="icon-home"/>
                    <span className={styles.navspan}>Profile</span>
                </Link>
            </div>
        </div>

        <div className={styles.more}>
            <div className={styles.navitem}>
                    <Link href="/home" className={styles.navlink}>
                        <Image src="/icon-more.png" width={35} height={35} alt="icon-home"/>
                        <span className={styles.navspan}>More</span>
                    </Link>
                </div>
            </div>
    </div>

  )
}

export default Navigation