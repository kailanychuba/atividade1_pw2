import React from 'react'

import Container from './Container'
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <ul class={styles.list}>
                    <li class={styles.item}> <a href="/" >Home</a> </li>
                    <li class={styles.item}> <a href="/Empresa">Empresa</a></li>
                    <li class={styles.item}> <a href="/Contato">Contato</a> </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar
