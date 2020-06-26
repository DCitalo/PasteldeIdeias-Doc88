export default class ItemCardapio {
  constructor(titulo, sabor, valor, desc, img) {
    this._titulo = titulo;
    this._sabor = sabor;
    this._valor = valor;
    this._desc = desc;
    this._img = img;
    Object.freeze(this);
  }

  get titulo() {
    return this._titulo;
  }

  get sabor() {
    return this._sabor;
  }

  get desc() {
    return this._desc;
  }

  get img() {
    return this._img;
  }
}
