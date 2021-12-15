import Link from 'next/link'
import styles from '../../../styles/jogo.module.css'
import { useEffect, useState } from 'react'
import criarPorta, { atualizarPortas } from '../../../funtions /portas'
import Porta from '../../../components/Porta'
import { useRouter } from 'next/router'


export default function jogo() {
  const router = useRouter()
  
  const [valido, setValido] = useState(false)
  const [portas, setPorta] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPorta(criarPorta(portas, temPresente))
  }, [router?.query] ) 


  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente


    const qtdPortasValida =portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdPortasValida && temPresenteValido)

  }, [portas] ) 
    
  

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPorta(atualizarPortas(portas, novaPorta))} />
    })
  }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
            {valido?
             renderizarPortas():
             <h1>Valores iválida!!</h1> }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                <button>Reiniciar Jogo!</button>
                </Link>
            </div>
        </div>
    )
}