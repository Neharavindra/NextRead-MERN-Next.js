"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()

  return (
    <div className={styles.c1}>
      <div className={styles.c11}>
        <Image
          src="/assets/logo.png"
          alt="Logo"
          className={styles.logo}
          width={400} // specify the width
          height={250} // specify the height
        />
        <p className={styles.t1}>Take your stories wherever you go</p>

        <div className={styles.btnRow}>
          <button className={styles.btn1}
            onClick={() => {
              router.push('/signup')
            }}
          >Create an account</button>

          <button className={styles.btn2}
            onClick={() => {
              router.push('/login')
            }}
          >
            
            <span>Sign in with your account</span>
          </button>
        </div>
      </div>
      <Image src="/assets/dashbook.png"
        alt="dashBook Logo"
        className={styles.bottomimg}
        width={1000}
        height={500}
      />
    </div>
  )
}

export default page