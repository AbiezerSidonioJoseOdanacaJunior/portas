import styles from '../styles/jogo.module.css'
import { useState } from 'react'
import criarPorta, { atualizarPortas } from '../funtions /portas'
import Porta from '../components/Porta'


export default function() {
    const [portas, setPorta] = useState(criarPorta(5, 5))

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
                <button>Voltar</button>
            </div>
        </div>
    )
}