# 4enLinea
<b>4 en linea con javascript y phaser</b>
Phaser es una herramienta(framework, librearía o motor de juego), para facilitar el desarrollo de videoJuegos con html, css y javascript
a continuación los pasos a seguir:
1. Tener el archivo phaser.min.js lo puedes descargar en el siguiente link https://phaser.io/download/stable
2. Crear los archivos html, css y javascript.js
3. Dentro de tu archivo javascript.js va a ir lo siguiente:
4. a).- //Inicializo el juego declarando la variable y la instanciamos
//los parametros son (ancho, alto, etiqueta canvas, ,objeto anonimo {propiedades con sus valores}<br>
var juego = new Phaser.Game(724, 700, Phaser.CANVAS, '',{ preload: preload, create: create, update: update });<br>
4.b).-//declaramos variables y constantes globales<br>
let pelotas, barras;<br>
const GRAVEDAD = 600;<br>
4.c).-//declaro la función de la primera propiedad y cargo los recursos a utilizar<br>
function preload(){<br>
//cargamos el sprite(nombreDelRecurso,rutaDelSprite,ancho, alto)<br>
 juego.load.spritesheet('pelota','imagenes/pelotas.png',100,100);<br>
 juego.load.image('fondoPelota', 'imagenes/fondoPelotas.png');<br>
}<br>
4.d).-//declaramos la función que añade los recursos a nuestro juego<br>
function create(){<br>
  //Inicia la física al juego<br>
  juego.physics.startSystem(Phaser.Physics.ARCADE);<br>
  //le da valor a la gravedad<br>
  juego.physics.arcade.gravity.y = GRAVEDAD;<br>
  //agregamos la imagen de fondo<br>
  var image = juego.add.sprite(juego.world.centerX, juego.world.centerY, 'fondoPelota');<br>
  //agregamos el pivot en el centro<br>
  image.anchor.set(0.5);<br>
  image.inputEnabled = true;<br>
  image.events.onInputDown.add(crear);<br>
  //añadimos el grupo para las pelotas<br>
  pelotas = juego.add.group();<br>
  //le agregamos la física<br>
  juego.physics.arcade.enable(pelotas);<br>
  //la activamos<br>
  pelotas.enableBody = true;<br>
  //agregamos al juego entrada del mouse<br>
  juego.inputEnabled = true;<br>
}<br>
4.e).-//creamos la función que se ejecuta constantemente para verificar la colision entre las pelotas<br>
function update(){<br>
  //parametros (objeto a,objeto b, llamado a una función <br>
  juego.physics.arcade.collide(pelotas, pelotas,fijo);<br>
}<br>
f).-//creamos la función que llama la colisión<br>
function fijo(a,b){<br>
//detenemos las pelotas<br>
  a.body.moves = false;<br>
  a.body.immovable = true;<br>
  b.body.moves = false;<br>
  b.body.immovable = true;<br>
}
