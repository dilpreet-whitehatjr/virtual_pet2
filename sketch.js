//Create variables here
var dog, happydog,database, foodS, foodStock;
var feedpet, addfood;
var feedTime,lastFed;
var foodObj;
function preload()
{
	//load images here
  dogimg= loadImage("images/dogImg.png");
  dogimg1= loadImage("images/dogImg1.png");
  milkImg = loadImage("images/Milk.png");

  foodObj= new Food();

}

function setup() {
  database= firebase.database();
	createCanvas(800, 600);
  dog= createSprite(600,300,40,40);
  dog.addImage(dogimg1);
  dog.scale=0.3;
  

  feed=createButton("Feed The Dog");
  feed.position(500,100);
  feed.mousePressed(feedDog)

  addFood= createButton("Add Food");
  addFood.position(400,100);
  addFood.mousePressed(addFoods);
  foodStock = database.ref('Food');
  foodStock.on("value",function(data){
    foodS = data.val();
  })
  foodObj = new Food(foodS,lastFed);
}



function draw() {  
  background("lightblue")
 

  foodObj.display();
fill("black");
  textSize(30);
 
  text("Food Available:" + foodS,500,500);
fedTime= database.ref('FeedTime');
fedTime.on("value", function(data){
  lastFed=data.val();
})
if(lastFed>=12){
  text("last feed:"+lastFed%12+ "PM",450,40);
}
else if(lastFed==0){
  text("last Feed: 12 AM" ,450,40 );
}
else{
  text("Last Feed: "+lastFed+"AM",450,40);
}
  drawSprites();
  //add styles here

}



function feedDog() {
  dog.addImage(dogimg);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    hour:hour()
  })
}
function addFoods(){
foodS++;
database.ref('/').update({
  Food:foodS
})
}