import Head from 'next/head'
import Image from 'next/image'
import Porta from '../components/Porta'
import Presente from '../components/Presente'


export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Porta />
      <Porta selecionada />
      
    </div>
  )
}
