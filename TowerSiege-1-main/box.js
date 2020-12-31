class Box {

    constructor(x,y,width,height){

        var options ={
            
            restitution :0.8,
            friction :0,
            
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        World.add(world,this.body);


    }


    display(){



       console.log(this.body.speed);

       if (this.body.speed<3){
        super.display();
      
        
      }
      else{ 

        push();

       

        push();
       
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
       
      fill("lime");
        pop ();
      }

      

    }


}