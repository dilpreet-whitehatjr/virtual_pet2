class Food{
    
constructor(foodS){
    this.foodS=foodS;
    this.lastFed=lastFed;
    this.image=loadImage("images/Milk.png");
}

getFoodStock(){
return foodS;
}
updateFoodStock(x){
    if(x<=0){
        x=0;
      }
      else{
        x=x-1;
      }
      foodS=x;
}
deductFood(){
if(foodS>0){
    foodS=foodS-1;
}


}
display(){
    var x=300, y=100;

if(this.foodS!=0){
    for(var i=0; i<foodS; i++){
        if(i%10===0){
            x=80;
            y=y+50;
        }
        image(this.image,x,y,50,50)
        x=x+30;
    }
}
}
}