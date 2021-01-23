class Paper{
    constructor(){
        var options = {
            isStatic : false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        //this.d= d
        this.body = Bodies.circle(30,350,20,options)
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        rectMode(CENTER)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,25,25);
    }
}