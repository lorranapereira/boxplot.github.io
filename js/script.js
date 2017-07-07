const valor = document.querySelector('div.valores');
const form1 = document.querySelector('form.vares');
const quartil11 = document.querySelector('div.quartil1');
const quartil22 = document.querySelector('div.quartil2');
const quartil33 = document.querySelector('div.quartil3');
const maximo = document.querySelector('div.valor_maximo');
const minimo = document.querySelector('div.valor_minimo');
const Valores = {
  valores: [],
  classes: [],
  get organizar() {
    this.valores.sort(function (a, b) {
    return a - b;
    })
  },
  get maximo() {
    return this.valores[this.valores.length - 1];
  },
  get quartil11 () {
    if (this.valores.length > 4) {
      let a = parseInt(this.valores.length / 2);
      if (a % 2 != 0) {
        let a = parseInt((this.valores.length / 2)/2);
        return this.valores[a];
      }
      else {
        let a = parseInt((this.valores.length / 2)/2);
        let b = parseInt((this.valores.length / 2)/2 -1);
        return (this.valores[a] + this.valores[b])/2;
      }
    }
  },
  get quartil22(){
    if (this.valores.length % 2 != 0) {
      return  this.valores[parseInt(this.valores.length / 2)];
    }
    else {
      let a = this.valores[parseInt(this.valores.length / 2)];
      let b = this.valores[parseInt(this.valores.length / 2) - 1];
      return (a + b) / 2;
    }
  },
  get quartil33 () {
    if (this.valores.length > 4){
      let a = parseInt(this.valores.length / 2);
      if (a % 2 != 0) {
        let a = (this.valores.length / 2);
        let b = ((this.valores.length / 2)/2);
        return this.valores[parseInt(a+b)];
      }
      else {
        if (this.valores.length % 2 == 0) {
          let c = parseInt(a/2);
          let b = c - 1 ;
          return (this.valores[a+c] + this.valores[a+b])/2;
        }
        else {
          let c = parseInt(a/2);
          let b = c - 1 ;
          return (this.valores[a+c+1] + this.valores[a+b+1])/2;
        }
      }
    }
  },
  get minimo() {
    return this.valores[0];
  },
  atualizaView: function () {
    let html = "";
    for (let valor of this.valores) {
        html += `<p>${valor}</p>`;
    }
    valor.innerHTML = html;
    quartil11.textContent = this.quartil11;
    quartil22.textContent = this.quartil22;
    quartil33.textContent = this.quartil33;
    maximo.textContent = this.maximo;
    minimo.textContent = this.minimo;
  },
  adiciona: function (valor) {
    let v = parseFloat(valor);
    if (v >= 0) {
      this.valores.push(v);
      this.valores.sort(function (a, b) {
        return a - b;
      });
      this.atualizaView();
    }
  }
};


form1.addEventListener('submit', function (evento) {
  Valores.adiciona(this.valors.value);
  evento.preventDefault();
});
