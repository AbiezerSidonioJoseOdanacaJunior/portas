import PortaModel from "../model/porta"

export default function criarPorta(qtd: number, selecionada: number): PortaModel[] {
    return Array.from({length: qtd}, (_, i) => {
        const numero = i + 1
        const temPresente = numero === selecionada

        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModoficada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModoficada.numero
        if(igualModificada){
            return portaModoficada
        }else {
           return portaModoficada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}