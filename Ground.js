class Ground {
    constructor(){

       var groundoptions={
            isStatic : true
        }

        this.ground = Bodies.rectangle(200,390,400,50,groundoptions);
        World.add(world,this.ground);
    }
        display(){
            var pos =this.ground.position;
            rectMode(CENTER);
            fill(255);
            rect(pos.x, pos.y, 400 , 50);
    }
}