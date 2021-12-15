import styles from '../styles/Formulario.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Cartao from '../components/Cartao'
import Porta from '../components/Porta'
import Presente from '../components/Presente'
import criarPorta, { atualizarPortas } from '../funtions /portas'
import PortaModel from '../model/porta'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'



export default function Formulario() {

  const [qtdPortas, setQtdPortas ] = useState(3)
  const [comPresente, setComPresente ] = useState(1)


  return (
    <div className={styles.formulario}>
     <div>
     <Cartao bgcolor='#c0392c'>
     <h1>Monty Hall</h1>
     </Cartao>
     <Cartao>
       <EntradaNumerica text='Qtd Portas?' 
       value={qtdPortas} 
       onChange={novaQtd => setQtdPortas(novaQtd) } />
     </Cartao>
     </div>
     <div>
     <Cartao >
     <EntradaNumerica text='Porta com Presente?' 
       value={comPresente} 
       onChange={novaPortaCompresente => setComPresente(novaPortaCompresente) } />
     </Cartao>
     <Cartao bgcolor='#28a085'>
       <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
       <h2 className={styles.link}>Iniciar!</h2>
       </Link>
     
     </Cartao>
     </div>
    </div>
  )
}
