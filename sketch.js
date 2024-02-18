var fundo, fundoImagem;
var coelho, coelhoImagem;
var cenoura, cenouraImagem;
var chao;
var Gcenoura;
var veloCenoura = 0;
var placar=0;

function preload(){
 fundo = loadImage ("fundo floresta jogo.jpg")
 coelho = loadImage("coelhojogo.png");
 cenoura = loadImage ("cenourajogo.png");
}

function setup() {
 createCanvas (windowWidth, windowHeight);
 fundoImagem = createSprite (windowWidth/2, windowHeight/2);
 fundoImagem.addImage ("floresta", fundo);
 fundoImagem.scale = 0.2;

 coelhoImagem = createSprite (400,600);
 coelhoImagem.addImage ("jogador",coelho);

 
 chao = createSprite (100,670,4000,10);
 chao.visible = false;
 chao.velocityX = 1;

 Gcenoura = new Group ();
}

function draw() {
 background ("#1F405F");
 drawSprites ();

 text ("Pontos: " + placar, 500,200);

 if (keyDown ("space")) {
    coelhoImagem.velocityY = -10;
 }
 coelhoImagem.velocityY += 0.9;

 coelhoImagem.collide (chao);

 if (frameCount%100 == 0) {
    cenouraImagem = createSprite (windowWidth,600);
    cenouraImagem.addImage ("obstaculo", cenoura);
    cenouraImagem.scale = 0.5;
    cenouraImagem.velocityX = -8 + veloCenoura;
    veloCenoura = veloCenoura + -0.2;
    Gcenoura.add (cenouraImagem);
    placar = placar + 1;
 }

 if (coelhoImagem.isTouching(Gcenoura)) {
    background("black");
    cenouraImagem.velocityX = 0;
 }
   


}