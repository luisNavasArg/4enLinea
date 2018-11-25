let contador = 0;
function adicionClase(id){
  if(contador == 0){
    let elemento = document.getElementById(id);
    elemento.classList.add("jugada");
    verificar(id);
    return contador = 1;
  }
else{
  let elemento = document.getElementById(id);
  elemento.classList.add("jugada2");
  return contador = 0;
}

}
let matriz = [[1,2,3,4,5,6,7],
              [8,9,10,11,12,13,14],
              [15,16,17,18,19,20,21],
              [22,23,24,25,26,27,28],
              [29,30,31,32,33,34,35],
              [36,37,38,39,40,41,42]
            ];
function verificar(id){
  if(id == 1){
    var tresSeis = document.getElementById('1').getAttribute("class");
    alert(tresSeis);


  }
}
