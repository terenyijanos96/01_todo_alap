class TodoView {
    constructor(szuloElem, adatLista) {
        this.szuloElem = szuloElem
        this.adatLista = adatLista

        let html_tartalom = this.tablazatLetrehozasa();
        this.szuloElem.html(html_tartalom)
    }

    tablazatLetrehozasa(){
        let html_tartalom = ""

        html_tartalom+= '<table class="table">'
        this.adatLista.forEach(adatElem => {
            html_tartalom += `<tr><td>${adatElem}</td></tr>`
        });

        html_tartalom+= "</table>"

        return html_tartalom

    }
}

export default TodoView