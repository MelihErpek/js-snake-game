class SnakeGame
{
  constructor()
  {
    this.canvas = document.getElementById('myCanvas');
    this.context = this.canvas.getContext('2d');
    document.addEventListener('keydown',this.onKeyPress.bind(this));

  }
  
  init()
  {
    this.positionX = this.positionY = 10;
    this.foodX = this.foodY = 5;
    this.tailSize = 5;
    this.trail = [];
    this.gridSize = this.tileCount = 20;
    this.velocityX = this.velocityY = 0;
    this.timer = setInterval(this.loop.bind(this),1000/15);
  }
  reset()
  {
    clearInterval(this.timer);
    this.init();
  }
  loop ()
  {
    this.update();
    this.draw();
  }
  update()
  {
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;

    if(this.positionX < 0)
    {
      this.positionX = this.tileCount -1;
    }
    if(this.positionY < 0)
    {
      this.positionY = this.tileCount -1;
    }
    if(this.positionX > this.tileCount-1)
    {
      this.positionX = 0;
    }
    if(this.positionY > this.tileCount-1)
    {
      this.positionY = 0;
    }
    this.trail.forEach(a => {
      if(this.positionX == a.positionX && this.positionY == a.positionY)
      {
        this.reset();
      }
    })
    this.trail.push({positionX: this.positionX, positionY : this.positionY});
    console.log(this.trail);
    while(this.trail.length > this.tailSize)
    {
      this.trail.shift(); 
    }
    if(this.foodX == this.positionX && this.foodY == this.positionY)
    {
      this.tailSize++;
      this.foodX = Math.floor(Math.random()*this.tileCount);
      this.foodY = Math.floor(Math.random()*this.tileCount);
    }


  }
  draw()
  {
    this.context.fillStyle = "#d65d5d";
    this.context.fillRect(0,0,400,400);

    this.context.fillStyle = 'white';
    this.context.font = '20px Arial';
    this.context.fillText(this.tailSize,20,40);
    
    this.context.fillStyle = '#ffffff'
    this.trail.forEach( a => {
      this.context.fillRect(a.positionX * this.gridSize , a.positionY * this.gridSize,this.gridSize-5,this.gridSize-5);
    })

    this.context.fillStyle = '#75b1c4';
    this.context.fillRect(this.foodX * this.gridSize,this.foodY*this.gridSize,this.gridSize-5,this.gridSize-5);

  }

  onKeyPress(key)
  {
    if(key.keyCode == 37 && this.velocityX != 1)
    {
      this.velocityX = -1;
      this.velocityY = 0;
    }
    if(key.keyCode == 38 && this.velocityY != 1)
    {
      this.velocityX = 0;
      this.velocityY = -1;
    }
    if(key.keyCode == 39 && this.velocityX != -1)
    {
      this.velocityX = 1;
      this.velocityY = 0;
    }
    if(key.keyCode == 40 && this.velocityY != -1)
    {
      this.velocityX = 0;
      this.velocityY = 1;
    }
  }
}

const game  = new SnakeGame();
window.onload = () => game.init();
