class Game {
    constructor(){



    }
    getState(){

        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data){

            gameState = data.val();


        })


    }
update(state)
{

database.ref('/').update({

gameState:state

});
}
async start(){

if(gameState === 0){
player=new Player();
var playerCountref = await database.ref('playerCount').once("value");

if(playerCountref.exists()){

    playerCount=playerCountref.val();
    player.getCount();

}

form = new Form();
form.display();
}

car1=createSprite(100,200);
car1.addImage("car1",cars1);
car2=createSprite(300,200);
car2.addImage("car2",cars2);
car3=createSprite(500,200);
car3.addImage("car3",cars3);
car4=createSprite(700,200);
car4.addImage("car4",cars4);


cars=[car1,car2,car3,car4];


}

Play(){


    form.hide();
    //textSize(30);
    //text("Game Start",120,100);
    Player.getplayerinfo();
    if(allPlayers !== undefined){
        background("green");
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);

        //var display_position = 130;
        var index = 0;
        var x = 140;
        var y;
        
        for(var plr in allPlayers){

            index = index+1;
            x=x+200;
            y = displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index === player.index){

                cars[index-1].shapeColor="red";

                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
            }
        
            //textSize(15);
            //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
        }



    }

    if(keyIsDown(UP_ARROW)&& player.index!== null){

        player.distance+=50;
        player.update();
    }
    drawSprites();
    }
}



