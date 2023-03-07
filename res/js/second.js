
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore 
//ignore ignore ignore  



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const button = document.getElementById("button"); 


var sound = new Audio("/res/mp3/osu1.mp3");

button.onclick= () => {
  sound.play();
  button.remove();



const circle1 = {
    x: canvas.width / 3,
    y: canvas.height / 2,
    radius: 50,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
     
    },
    clicked: function(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
      }
    };
    
    canvas.addEventListener("click", function(event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      if (circle1.clicked(mouseX, mouseY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
    });
  
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
  circle1.draw();



  setTimeout(() => {
  const circle2 = {
    x: canvas.width / 1.5,
    y: canvas.height / 2.3,
    radius: 50,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
     
    },
    clicked: function(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
      }
    };
    
    canvas.addEventListener("click", function(event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      if (circle2.clicked(mouseX, mouseY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
    });
  
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
  circle2.draw();
}, 1000);

setTimeout(() => {
  const circle3 = {
    x: canvas.width / 3.8,
    y: canvas.height / 3.2,
    radius: 50,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
     
    },
    clicked: function(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
      }
    };
    
    canvas.addEventListener("click", function(event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      if (circle3.clicked(mouseX, mouseY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
    });
  
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
  circle3.draw();
}, 2500);



setTimeout(() => {
  const circle4 = {
    x: canvas.width / 1.5,
    y: canvas.height / 2.3,
    radius: 50,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
     
    },
    clicked: function(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
      }
    };
    
    canvas.addEventListener("click", function(event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      if (circle4.clicked(mouseX, mouseY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
    });
  
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
  circle4.draw();
}, 3700);

setTimeout(() => {
  const circle5 = {
    x: canvas.width / 2,
    y: canvas.height / 3.9,
    radius: 50,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
     
    },
    clicked: function(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
      }
    };
    
    canvas.addEventListener("click", function(event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      if (circle5.clicked(mouseX, mouseY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
    });
  
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
  circle5.draw();
}, 4900);

setTimeout(() => {
  const circle6 = {
    x: canvas.width / 2,
    y: canvas.height / 1.3,
    radius: 50,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
     
    },
    clicked: function(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
      }
    };
    
    canvas.addEventListener("click", function(event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      if (circle6.clicked(mouseX, mouseY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
    });
  
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
  circle6.draw();
}, 6200);


setTimeout(() => {
  const circle7 = {
    x: canvas.width / 2,
    y: canvas.height / 1.3,
    radius: 50,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
     
    },
    clicked: function(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
      }
    };
    
    canvas.addEventListener("click", function(event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      if (circle7.clicked(mouseX, mouseY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
    });
  
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
  circle7.draw();
}, 6200);



 



}




button.onclick= () => {
  sound.play();
  button.remove();

class Circle{
  constructor( x, y, time, time2){
    this.xx = x
    this.yy = y
    this.time = time
    this.time2 = time2
  }
  DrawCircle(){
var opak = 1
if (opak = 1){
    opak ++
    setTimeout(() => {
      const circle = {
        x: canvas.width / this.xx,
        y: canvas.height / this.yy,
        radius: 50,
        color: "red",
        draw: function() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
         
        },

     
        clicked: function(mouseX, mouseY) {
            const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
            return distance < this.radius;
          }
        };
       
     

        canvas.addEventListener("click", function(event) {
          const mouseX = event.clientX - canvas.offsetLeft;
          const mouseY = event.clientY - canvas.offsetTop;
      
        
      
          if (circle.clicked(mouseX, mouseY)) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
         
          } 
      
        });
      
        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }, this.time);
      circle.draw();
    }, this.time2);
}
  }
}


let circle1 = new Circle (3,2,900,0)
circle1.DrawCircle()
let circle2 = new Circle (1.5,2.3,900,1000)
circle2.DrawCircle()
let circle3 = new Circle (3.8,3.2,900,2000)
circle3.DrawCircle()
let circle4 = new Circle (1.5,2.3,900,3000)
circle4.DrawCircle()
let circle5 = new Circle (2,3.9,900,4000)
circle5.DrawCircle()
let circle6 = new Circle (2,1.3,900,5000)
circle6.DrawCircle()
}
 





let circle1 = new Circle (3.5,4.3,1300,0)
circle1.DrawCircle()
let circle2 = new Circle (2,3.9,800,1400)
circle2.DrawCircle()
let circle3 = new Circle (3.8,3.2,800,2400)
circle3.DrawCircle()
let circle4 = new Circle (1.5,2.3,800,3400)
circle4.DrawCircle()
let circle5 = new Circle (2,3.9,800,4400)
circle5.DrawCircle()
let circle6 = new Circle (2,1.3,800,5400)
circle6.DrawCircle()
let circle7 = new Circle (2.9,1.8,800,6400)
circle7.DrawCircle()
let circle8 = new Circle (3.2,3.7,800,7400)
circle8.DrawCircle()
let circle9 = new Circle (2,7.2,800,8400)
circle9.DrawCircle()
let circle10 = new Circle (1.6,1.5,800,9400)
circle10.DrawCircle()
let circle11 = new Circle (1.5,2.3,800,10400)
circle11.DrawCircle()
let circle12 = new Circle (3.8,3.2,800,11400)
circle12.DrawCircle()
let circle13 = new Circle (1.5,2.3,800,12400)
circle13.DrawCircle()
let circle14 = new Circle (2,3.9,800,13400)
circle14.DrawCircle()
let circle15 = new Circle (2,1.3,800,14400)
circle15.DrawCircle()
let circle16 = new Circle (2,1.3,800,15400)
circle16.DrawCircle()
let circle17 = new Circle (2,1.3,800,16400)
circle17.DrawCircle()
let circle18 = new Circle (2,1.3,800,17400)
circle18.DrawCircle()
let circle19 = new Circle (3.5,4.3,1300,0)
circle19.DrawCircle()
let circle20 = new Circle (2,3.9,800,1400)
circle20.DrawCircle()
let circle21 = new Circle (3.8,3.2,800,2400)
circle21.DrawCircle()
let circle22 = new Circle (1.5,2.3,800,3400)
circle22.DrawCircle()
let circle23 = new Circle (2,3.9,800,4400)
circle23.DrawCircle()
let circle24 = new Circle (2,1.3,800,5400)
circle24.DrawCircle()
let circle25 = new Circle (2.9,1.8,800,6400)
circle25.DrawCircle()
let circle26 = new Circle (3.2,3.7,800,7400)
circle26.DrawCircle()
let circle27 = new Circle (2,7.2,800,8400)
circle27.DrawCircle()
let circle28 = new Circle (1.6,1.5,800,9400)
circle28.DrawCircle()
let circle29 = new Circle (1.5,2.3,800,10400)
circle29.DrawCircle()
let circle30 = new Circle (3.8,3.2,800,11400)
circle30.DrawCircle()
let circle31 = new Circle (1.5,2.3,800,12400)
circle31.DrawCircle()
let circle32 = new Circle (2,3.9,800,13400)
circle32.DrawCircle()
let circle33 = new Circle (2,1.3,800,14400)
circle33.DrawCircle()
let circle34 = new Circle (2,1.3,800,15400)
circle34.DrawCircle()
let circle35 = new Circle (2,1.3,800,16400)
circle35.DrawCircle()
let circle36 = new Circle (2,1.3,800,17400)
circle36.DrawCircle()
let circle37 = new Circle (1.5,2.3,800,10400)
circle37.DrawCircle()
let circle38 = new Circle (3.8,3.2,800,11400)
circle38.DrawCircle()
let circle39 = new Circle (1.5,2.3,800,12400)
circle39.DrawCircle()
let circle40 = new Circle (2,3.9,800,13400)
circle40.DrawCircle()
let circle41 = new Circle (2,1.3,800,14400)
circle41.DrawCircle()
let circle42 = new Circle (2,1.3,800,15400)
circle42.DrawCircle()
let circle43 = new Circle (2,1.3,800,16400)
circle43.DrawCircle()
let circle44 = new Circle (2,1.3,800,17400)
circle44.DrawCircle()







  var cas = 0
  var pocet = 1
  for (let i = 0; i < 66; i++) {
    var nahodne1 = Math.floor((Math.random() * 2) );
    var nahodne11 = Math.random();
    var nahodne2 = Math.floor((Math.random() * 2) );
    var nahodne22 = Math.random();
    var cislo1 = nahodne1 + nahodne11
    var cislo2 = nahodne2 + nahodne22
    var pocet = pocet + 1
    var cas = cas+1100
    var pocet = new Circle (cislo1,cislo2,800,cas)
    pocet.DrawCircle()
}

  