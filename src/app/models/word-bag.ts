export class WordBag {
    
    private words: string[] = [""];

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.words = `
        serie llegó
        organización lleva
        nuevas llevar
        calidad lo
        economía local
        carácter lópez
        jefe los
        estamos lucha
        prensa luego
        control lugar
        sociales luis
        universidad luz
        militar m
        cabo madre
        diez madrid
        fuerzas mal
        congreso manera
        ésta mano
        hijos manos
        justicia mantener
        mundial manuel
        dólares mañana
        juego mar
        económica marcha
        políticos marco
        duda maría
        recursos martín
        pública marzo
        crisis más
        cuales ministerio
        manuel minutos
        contrario ministro
        garcía mira
        fuerte mirada
        sol mis
        jóvenes misma
        apoyo mismo
        habría mismos
        civil mitad
        miguel modelo
        pedro modo
        partidos momento
        libre momentos
        fuentes movimiento
        administración mucha
        común muchas
        dejar mucho
        cine muchos
        salir muerte
        comunicación muerto
        b muestra
        experiencia mujer
        demasiado mujeres
        plan mundial
        respuesta mundo        
        `.split(' ');
    }

    private getRandomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)].trim();
    }

    public getWord() {

        let candidate = this.getRandomWord();

        while (!this.accepted(candidate)) {
            candidate = this.getRandomWord();
        }

        return candidate;
    }

    private accepted(candidate: string): boolean {
        return !(
            candidate.includes("é") ||
            candidate.includes("á") ||
            candidate.includes("í") ||
            candidate.includes("ó") ||
            candidate.includes("ú") ||
            candidate.includes("ñ")
        ) &&
        (
            candidate.length > 3
        );
    }

}