import MegjSor from "./MegjSor.js"

class TodoView {
    #adatLista
    constructor(szuloElem, adatLista) {
        this.szuloElem = szuloElem
        this.#adatLista = adatLista

        this.szuloElem.append(`<table>`)
        this.tableElem = this.szuloElem.children("table") 
        this.tablazatbaIr()
    }

    tablazatbaIr(){
        let html_tartalom = ""
        for (let index = 0; index < this.#adatLista.length; index++) {
            new MegjSor(this.#adatLista[index], this.tableElem)
            

        }
        this.szuloElem.append(html_tartalom)
    }
}

export default TodoView