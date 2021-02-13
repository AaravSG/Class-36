class Form{

    constructor(){
        
    }


    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        
        var input = createInput("NAME");
        input.position(130,160);
        
        var button = createButton("PLAY");
        button.position(250,200); 
        
        button.mousePressed(function (){

            input.hide();
            button.hide();

            var name = input.value();

            playerCount ++;
            player.updateCount(playerCount);
            player.update(name);

            var greeting= createElement("h3");
            greeting.html("Hello "+ name);
            greeting.position(130,160);

        })
    }

   
    
}