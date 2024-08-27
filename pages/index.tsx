import styles from '../styles/Login.module.css';
import Head from 'next/head';
import React from 'react';


export default function Login() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>ForFarm Docs</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </Head>

            <img className={styles.logo} src="./images/forfarmlogobranca.png" />
            <img className={styles.bg} src="./images/bgforfarmweb.jpg" />

            <main className={styles.box}>
                <h1 className={styles.title}><span className={styles.spanH1}>Boas-vindas</span> ao ForFarm Docs!</h1>
                <p className={styles.subtitle}>Digite seu <span className={styles.span}>Email</span> e <span className={styles.span}>Senha</span> para entrar na sua conta.</p>

                <form className={styles.form}>
                    <div className={styles.inputbox}>
                        <label className={styles.label} htmlFor="crm">E-mail</label>
                        <input
                        className={styles.input}
                        id="crm"
                        type="text"
                        required
                        />
                    </div>
                    <div className={styles.inputbox}>
                        <label className={styles.label} htmlFor="password">Senha</label>
                        <input
                        className={styles.input}
                        id="password"
                        type="password"
                        required
                        />
                    </div>

                    <button className={styles.button} type="submit">Acessar</button>
                    <a href='' className={styles.a}>Esqueceu sua senha? <span className={styles.aSpan}>Clique aqui.</span></a>
                </form>
            </main>

      <style jsx global>{`
        * {
          font-family: "Montserrat", sans-serif;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        },
      `}</style>
      
        </div>
    )
}