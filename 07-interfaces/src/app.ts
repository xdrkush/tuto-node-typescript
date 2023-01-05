console.log('ferf')

class User {
    pseudo: string
    mail: string

    constructor(pseudo: string, mail?: string) {
        this.pseudo = pseudo
        this.mail = mail
    }
}

class Modo extends User {
    modo: boolean

    constructor (modo: boolean) {
        super()
        this.modo = modo
    }
}
