class Game{


    constructor(){ }


    getState(){

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    

    updateState(state){
        database.ref("/").update({
            gameState: state
        })
        
    }

    //gamestate 0
    start(){

        if(gameState === 0 ){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }


    //gamestate 1
    play(){}


    //gamestate 2
    end(){}


}