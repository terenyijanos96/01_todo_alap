class MegjSor {
  #adat = [];
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem;


    this.sor();
  }

  sor() {
    let html_tartalom = "<tr>";
    for (const key in this.#adat) {
      html_tartalom += `<td>${this.#adat[key]}</td>`;
    }
    html_tartalom +="<td><span class='kesz'>✔️</span><span class='torol'>🗑️</span></td>";
    html_tartalom += "</tr>";

    this.szuloElem.append(html_tartalom)
  }
}

export default MegjSor;
