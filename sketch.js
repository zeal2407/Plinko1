const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinko = [];
var division =[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,800,800,20);

  
  for (var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <=width; j = j + 50){
    plinko.push(new Plinko(j,75))
  }

  for(var j = 15; j <=width-10; j = j + 50){
    plinko.push(new Plinko(j, 175))
  }

  for(var j = 40; j <=width; j = j + 50){
    plinko.push(new Plinko(j,275))
  }

  for(var j = 15; j <=width-10; j = j + 50){
    plinko.push(new Plinko(j, 375))
  }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
  }

  

 for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  ground.display();

  for(var k = 0; k < division.length; k++){
    division[k].display();

}


}