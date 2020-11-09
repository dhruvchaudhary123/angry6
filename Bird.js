class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos=this.body.position;
    if(this.body.velocity.x>10 && pos.x>200)
  {
     


    
    this.trajectory.push([pos.x,pos.y]);
  }
    for(var i=0;i<this.trajectory.length;i++)
    {
      image(this.smokeimage, this.trajectory[i][0],this.trajectory[i][1])
    }

    super.display();
  }
}
