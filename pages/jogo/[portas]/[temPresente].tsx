import Link from 'next/link'
import styles from '../../../styles/jogo.module.css'
import { useEffect, useState } from 'react'
import criarPorta, { atualizarPortas } from '../../../funtions /portas'
import Porta from '../../../components/Porta'
import { useRouter } from 'next/router'


export default function jogo() {
  const router = useRouter()
  
  const [portas, setPorta] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPorta(criarPorta(portas, temPresente))
  }, [router?.query] ) 
    
  

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPorta(atualizarPortas(portas, novaPorta))} />
    })
  }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
            {renderizarPortas() }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                <button>Reiniciar Jogo!</button>
                </Link>
            </div>
        </div>
    )
}