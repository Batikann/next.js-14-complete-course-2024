'use client'
import { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import Image from 'next/image'

const Links = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
  ]

  //TEMPORARY
  const session = false
  const isAdmin = false

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link?.title} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt="menu icon"
        className={styles.menuBtn}
        onClick={() => setOpen(!open)}
        width={30}
        height={30}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}
export default Links
