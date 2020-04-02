const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let snakeX=100;
let snakeY=100;
let currX=0 ;
let currY=0;
const setup = ()=>{
  ctx.fillStyle = "#d65d5d";
  ctx.fillRect(0,0,500,500);
}
let Snake = {
    color : "#ffffff",
    xSpeed : 10,
    ySpeed : 10,
    coordX : 100,
    coordY : 100

}
let Food = {
  dimensionX : 10,
  dimensionY : 10,
  color : '#75b1c4',
  coordX :50,
  coordY : 10
}
const generateFood  = () =>
{
  ctx.fillStyle = Food.color;
  let randomX = Math.floor(Math.random()*500);
  let randomY = Math.floor(Math.random()*500);
  console.log(randomX,randomY);
  ctx.fillRect(randomX,randomY,Food.dimensionX,Food.dimensionY);
}
 
const moveRightSnake = () =>
{
    currX = snakeX + Snake.xSpeed;
    currY = snakeY ;
    ctx.fillStyle = Snake.color;
    ctx.fillRect(currX,currY,10,10);
    snakeX = currX;
    snakeY = currY;
}
const moveLeftSnake = () =>
{
    currX = snakeX - Snake.xSpeed;
    currY = snakeY ;
    ctx.fillStyle = Snake.color;
    ctx.fillRect(currX,currY,10,10);
    snakeX = currX;
    snakeY = currY;
}
const moveDownSnake = () =>
{
    currX = snakeX ;
    currY = snakeY +Snake.ySpeed;
    ctx.fillStyle = Snake.color;
    ctx.fillRect(currX,currY,10,10);
    snakeX = currX;
    snakeY = currY;
}
const moveUpSnake = () =>
{
    currX = snakeX ;
    currY = snakeY - Snake.ySpeed;
    ctx.fillStyle = Snake.color;
    ctx.fillRect(currX,currY,10,10);
    snakeX = currX;
    snakeY = currY;
}
const pressedKey = (key)=>
{
  switch(key.which)
  {
    case 37:
      moveLeftSnake();
      break;
    case 38:
      moveUpSnake();
      break;
    case 39:
      moveRightSnake();
      break;
    case 40:
      moveDownSnake();
      break;
  }
  
}
const gameLoop = () =>
{
  setup();
  generateFood();
  document.onkeydown = pressedKey;
}

gameLoop();

/*var pressedKey2;
  pressedKey2 = key.which;*/
  
  /*if(pressedKey2 == 37)
  {
    moveLeftSnake();
    
  }
  else if (pressedKey2 == 38)
  {
    moveUpSnake();
    
  }
  else if (pressedKey2 == 39)
  {
    moveRightSnake();
    
  }
  else if (pressedKey2 == 40)
  {
    moveDownSnake();
  }*/
