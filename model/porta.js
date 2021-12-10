export default class Porta {
    #numero
    #ganhouPresente
    #selecionada
    #aberta


    constructor(numero, ganhouPresente = false, selecionada = false, aberta = false ) {
        this.#numero = numero
        this.#ganhouPresente = ganhouPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }

    get ganhouPresente() {
        this.#ganhouPresente
    }

    get selecionada() {
        this.#selecionada
    }

    get ganhouPresente() {
        this.#aberta
    }

    desselecionar() {
        const selecionada = !this.selecionada
        return new Porta(this.numero, this.ganhouPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new Porta(this.numero, this.ganhouPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new Porta(this.numero, this.ganhouPresente, this.selecionada, aberta)
    }
}