//Inicializo el juego declarando la variable y la instanciamos
var juego = new Phaser.Game(724, 700, Phaser.CANVAS, '',
{ preload: preload, create: create, update: update });
let pelotas, barras;
const GRAVEDAD = 600;
function preload(){
 juego.load.spritesheet('pelota','imagenes/pelotas.png',100,100);
 juego.load.image('fondoPelota', 'imagenes/fondoPelotas.png');
}

function create(){
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
function update(){
  juego.physics.arcade.collide(pelotas, pelotas,fijo);

}

function fijo(a,b)
{
  a.body.moves = false;
  a.body.immovable = true;
  b.body.moves = false;
  b.body.immovable = true;
}
let ver=0,veces=0,veces2=0,veces3=0,veces4=0,veces5=0,veces6=0,veces7=0;
function crear(){

    if((juego.input.x >=0 && juego.input.x <=100)&&
    (juego.input.y >=0 && juego.input.y <=100)&&
    veces<6){
      veces++;
      if(ver == 0){
        var ja = pelotas.create(3,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=0;
        ja.body.velocity.y=300;
        ver =1;
      }else {
        var ja = pelotas.create(3,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=1;
        ja.body.velocity.y=300;

        ver=0;
      }
    }
    else if((juego.input.x >=106 && juego.input.x <=206)&&
    (juego.input.y >=0 && juego.input.y <=100)&&
    veces2<6){
      veces2++;
      if(ver == 0){
        var ja = pelotas.create(106,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=0;
        ja.body.velocity.y=300;

        ver =1;
      }else {
        var ja = pelotas.create(106,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=1;
        ja.body.velocity.y=300;

        ver=0;
      }
    }else if((juego.input.x >=209 && juego.input.x <=309)&&
    (juego.input.y >=0 && juego.input.y <=100)&&
    veces3<6){
      veces3++;
      if(ver == 0){
        var ja = pelotas.create(209,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=0;
        ja.body.velocity.y=300;

        ver =1;
      }else {
        var ja = pelotas.create(209,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=1;
        ja.body.velocity.y=300;

        ver=0;
      }
    }else if((juego.input.x >=312 && juego.input.x <=412)&&
    (juego.input.y >=0 && juego.input.y <=100)&&
    veces4<6){
      veces4++;
      if(ver == 0){
        var ja = pelotas.create(312,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=0;
        ja.body.velocity.y=300;

        ver =1;
      }else {
        var ja = pelotas.create(312,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=1;
        ja.body.velocity.y=300;

        ver=0;
      }
    }else if((juego.input.x >=415 && juego.input.x <=515)&&
    (juego.input.y >=0 && juego.input.y <=100)&&
    veces5<6){
      veces5++;
      if(ver == 0){
        var ja = pelotas.create(415,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=0;
        ja.body.velocity.y=300;

        ver =1;
      }else {
        var ja = pelotas.create(415,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=1;
        ja.body.velocity.y=300;

        ver=0;
      }
    }else if((juego.input.x >=518 && juego.input.x <=618)&&
    (juego.input.y >=0 && juego.input.y <=100)&&
    veces6<6){
      veces6++;
      if(ver == 0){
        var ja = pelotas.create(518,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=0;
        ja.body.velocity.y=300;

        ver =1;
      }else {
        var ja = pelotas.create(518,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=1;
        ja.body.velocity.y=300;

        ver=0;
      }
    }else if((juego.input.x >=621 && juego.input.x <=721)&&
    (juego.input.y >=0 && juego.input.y <=100)&&
    veces7<6){
      veces7++;
      if(ver == 0){
        var ja = pelotas.create(621,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=0;
        ja.body.velocity.y=300;

        ver =1;
      }else {
        var ja = pelotas.create(621,0, 'pelota');
        ja.body.collideWorldBounds = true;
        ja.frame=1;
        ja.body.velocity.y=300;

        ver=0;
      }
    }
}

function FijarGrupo(objeto)
{
  objeto.body.moves = false;
  objeto.body.immovable = true;
}
