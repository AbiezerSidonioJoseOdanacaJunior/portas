import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Porta from '../components/Porta'
import Presente from '../components/Presente'
import criarPorta, { atualizarPortas } from '../funtions /portas'
import PortaModel from '../model/porta'



export default function Home() {
  const [portas, setPorta] = useState(criarPorta(5, 5))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPorta(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div style={{display: "flex"}}>
      {renderizarPortas() }
    </div>
  )
}
