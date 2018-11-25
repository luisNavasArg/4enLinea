# 4enLinea
4 en linea con javascript y phaser
Phaser es una herramienta(framework, librearía o motor de juego), para facilitar el desarrollo de videoJuegos con html, css y javascript
a continuación los pasos a seguir:
1. Tener el archivo phaser.min.js lo puedes descargar en el siguiente link https://phaser.io/download/stable
2. Crear los archivos html, css y javascript.js
3. Dentro de tu archivo javascript.js va a ir lo siguiente:
4. a).- //Inicializo el juego declarando la variable y la instanciamos
//los parametros son (ancho, alto, etiqueta canvas, ,objeto anonimo {propiedades con sus valores}
var juego = new Phaser.Game(724, 700, Phaser.CANVAS, '',{ preload: preload, create: create, update: update });
4.b).-//declaramos variables y constantes globales
let pelotas, barras;
const GRAVEDAD = 600;
4.c).-//declaro la función de la primera propiedad y cargo los recursos a utilizar
function preload(){
//cargamos el sprite(nombreDelRecurso,rutaDelSprite,ancho, alto)
 juego.load.spritesheet('pelota','imagenes/pelotas.png',100,100);
 juego.load.image('fondoPelota', 'imagenes/fondoPelotas.png');
}
4.d).-//declaramos la función que añade los recursos a nuestro juego
function create(){
  //Inicia la física al juego
  juego.physics.startSystem(Phaser.Physics.ARCADE);
  //le da valor a la gravedad
  juego.physics.arcade.gravity.y = GRAVEDAD;
  //agregamos la imagen de fondo
  var image = juego.add.sprite(juego.world.centerX, juego.world.centerY, 'fondoPelota');
  //agregamos el pivot en el centro
  image.anchor.set(0.5);
  image.inputEnabled = true;
  image.events.onInputDown.add(crear);
  //añadimos el grupo para las pelotas
  pelotas = juego.add.group();
  //le agregamos la física
  juego.physics.arcade.enable(pelotas);
  //la activamos
  pelotas.enableBody = true;
  //agregamos al juego entrada del mouse
  juego.inputEnabled = true;
}
4.e).-//creamos la función que se ejecuta constantemente para verificar la colision entre las pelotas
function update(){
  //parametros (objeto a,objeto b, llamado a una función 
  juego.physics.arcade.collide(pelotas, pelotas,fijo);
}
f).-//creamos la función que llama la colisión
function fijo(a,b)
{
//detenemos las pelotas
  a.body.moves = false;
  a.body.immovable = true;
  b.body.moves = false;
  b.body.immovable = true;
}
