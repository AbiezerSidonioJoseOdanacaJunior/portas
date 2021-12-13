import styles from "../styles/Porta.module.css"
import PortaModel from "../model/porta"

interface PortaProps {
    value: PortaModel
}

export default function Porta(props: PortaProps) {

    const porta = props.value
    const selecionada = porta.selecionada ? styles.selecionada : ''



    return (
       <div className={styles.area}>
           <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numeroPorta}>{porta.numero}</div>
                    <div className={styles.maceneta}></div>
                </div>
           </div>
           <div className={styles.chao}></div>
       </div>
    )
}