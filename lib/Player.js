class Player{
    constructor(x,y,w,h){
        var op = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,w,h,op);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(playerImg,pos.x,pos.y,this.w,this.h);
    }
}