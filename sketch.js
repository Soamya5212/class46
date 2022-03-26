var bg,bgg;
var balloon1,balloon11;
var obstacletop, obstops1, obstops2;
var obstaclebottom, obsbottom1, obsbottom2, obsbottom3;

function preload(){
bg=loadImage("assets/bg.png");
balloon1=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

obstops1=loadImage("assets/obsTop1.png")
obstops2=loadImage("assets/obsTop2.png")

obsbottom1=loadImage("assets/obsBottom1.png")
obsbottom2=loadImage("assets/obsBottom2.png")
obsbottom3=loadImage("assets/obsBottom3.png")
}
function setup(){
    createCanvas(400,400);
    bgg=createSprite(165,485,1,1);
bgg.addImage(bg);
bgg.scale=1.5;

topground=createSprite(200,10,800,20);
topground.visible=false;

bottomground=createSprite(200,390,800,20);
bottomground.visible=false;


balloon11=createSprite(100,200,20,50);
balloon11.addAnimation("blon",balloon1);
balloon11.scale=0.5

}
function draw(){
    background("black")
    if(keyDown("SPACE")){
        balloon11.velocityY=-8;
    }
    balloon11.velocityY=balloon11.velocityY+2;
    bar();
drawSprites();
spawnObstaclesTop();
}


function spawnObstaclesTop(){
    if(World.frameCount % 60===0){
        obstacletop=createSprite(400,50,40,50);
        obstacletop.scale=0.1;
        obstacletop.velocityX=-4;
        obstacletop.y=Math.round(random(10,100));

        var rand=Math.round(random(1,2));
        switch(rand){
            case 1: obstacletop.addImage(obstops1);
                break;
            case 2: obstacletop.addImage(obstops2);
                    break;
            default:
                    break;

        }
       obstacletop.lifetime=100;
       balloon1.depth=balloon1.depth+1;


    }

}

function bar(){
    if(World.frameCount % 60===0){
        var bar= createSprite(400,200,10,800);
        bar.velocityX=-6
        bar.depth=balloon1.depth;
        bar.lifetime=70;
        bar.visible=false;

    }
}