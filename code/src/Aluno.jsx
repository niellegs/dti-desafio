// src/Aluno.js
class Aluno {
    constructor(nome, classe, notaPortugues, freqPortugues, notaMatematica, freqMatematica, notaHistoria, freqHistoria, notaFisica, freqFisica, notaFilosofia, freqFilosofia) {
        this.nome = nome;
        this.classe = classe;
        this.notaPortugues = notaPortugues;
        this.freqPortugues = freqPortugues;
        this.notaMatematica = notaMatematica;
        this.freqMatematica = freqMatematica;
        this.notaHistoria = notaHistoria;
        this.freqHistoria = freqHistoria;
        this.notaFisica = notaFisica;
        this.freqFisica = freqFisica;
        this.notaFilosofia = notaFilosofia;
        this.freqFilosofia = freqFilosofia;
    }

    mediaNota() {
        return (this.notaPortugues + this.notaMatematica + this.notaHistoria + this.notaFisica + this.notaFilosofia) / 5;
    }

    mediaFrequencia() {
        return (this.freqPortugues + this.freqMatematica + this.freqHistoria + this.freqFisica + this.freqFilosofia) / 5;
    }
}

export default Aluno;
