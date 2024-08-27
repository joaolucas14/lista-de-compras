const compradosH2 = document.getElementById("comprados_h2")

export function verificarListaComprados(lista) {
    if (lista.children.length === 0) {
      compradosH2.style.display = 'none';
    } else {
      compradosH2.style.display = 'block';
    }
  }