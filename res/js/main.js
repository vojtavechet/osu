const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const button = document.getElementById("button"); 
const pocet = document.getElementById("pocet");
var sound = new Audio("/res/mp3/osu1.mp3");
let score = 0


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
          
          let ifActive = true; 
            
          canvas.addEventListener("click", function(event) {
            const mouseX = event.clientX - canvas.offsetLeft;
            const mouseY = event.clientY - canvas.offsetTop;
            
          
            
            if (circle.clicked(mouseX, mouseY) && ifActive == true) {
              ctx.clearRect(0, 0, canvas.width, canvas.height); 
                  ifActive = false;
                  score ++;
                  pocet.innerHTML = score
            } 
        
          });
        
          setTimeout(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
             
            }, this.time);
        circle.draw();
          
      
        
      }, this.time2);
     
      }
  }


  let circle1 = new Circle (3.5,4.3,800,0)
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
  let circle19 = new Circle (3.5,4.3,800,18400)
  circle19.DrawCircle()
  let circle20 = new Circle (2,3.9,800,19400)
  circle20.DrawCircle()
  let circle21 = new Circle (3.8,3.2,800,20400)
  circle21.DrawCircle()
  let circle22 = new Circle (1.5,2.3,800,21400)
  circle22.DrawCircle()
  let circle23 = new Circle (2,3.9,800,22400)
  circle23.DrawCircle()
  let circle24 = new Circle (2,1.3,800,23400)
  circle24.DrawCircle()
  let circle25 = new Circle (2.9,1.8,800,24400)
  circle25.DrawCircle()
  let circle26 = new Circle (3.2,3.7,800,25400)
  circle26.DrawCircle()
  let circle27 = new Circle (2,7.2,800,26400)
  circle27.DrawCircle()
  let circle28 = new Circle (1.6,1.5,800,27400)
  circle28.DrawCircle()
  let circle29 = new Circle (1.5,2.3,800,28400)
  circle29.DrawCircle()
  let circle30 = new Circle (3.8,3.2,800,29400)
  circle30.DrawCircle()
  let circle31 = new Circle (1.5,2.3,800,30400)
  circle31.DrawCircle()
  let circle32 = new Circle (2,3.9,800,31400)
  circle32.DrawCircle()
  let circle33 = new Circle (2,1.3,800,32400)
  circle33.DrawCircle()
  let circle34 = new Circle (2,1.3,800,33400)
  circle34.DrawCircle()
  let circle35 = new Circle (2,1.3,800,34400)
  circle35.DrawCircle()
  let circle36 = new Circle (2,1.3,800,35400)
  circle36.DrawCircle()
  let circle37 = new Circle (1.5,2.3,800,36400)
  circle37.DrawCircle()
  let circle38 = new Circle (3.8,3.2,800,37400)
  circle38.DrawCircle()
  let circle39 = new Circle (1.5,2.3,800,38400)
  circle39.DrawCircle()
  let circle40 = new Circle (2,3.9,800,39400)
  circle40.DrawCircle()
  let circle41 = new Circle (2,1.3,800,40400)
  circle41.DrawCircle()
  let circle42 = new Circle (2,1.3,800,41400)
  circle42.DrawCircle()
  let circle43 = new Circle (2,1.3,800,42400)
  circle43.DrawCircle()
  let circle44 = new Circle (2,1.3,800,43400)
  circle44.DrawCircle()
  let circle45 = new Circle (3.5,4.3,800,44400)
  circle45.DrawCircle()
  let circle46 = new Circle (2,3.9,800,45400)
  circle46.DrawCircle()
  let circle47 = new Circle (3.8,3.2,800,46400)
  circle47.DrawCircle()
  let circle48 = new Circle (1.5,2.3,800,47400)
  circle48.DrawCircle()
  let circle49 = new Circle (2,3.9,800,48400)
  circle49.DrawCircle()
  let circle50 = new Circle (2,1.3,800,49400)
  circle50.DrawCircle()
  let circle51 = new Circle (2.9,1.8,800,50400)
  circle51.DrawCircle()
  let circle52 = new Circle (3.2,3.7,800,51400)
  circle52.DrawCircle()
  let circle53 = new Circle (2,7.2,800,52400)
  circle53.DrawCircle()
  let circle54 = new Circle (1.6,1.5,800,53400)
  circle54.DrawCircle()
  let circle55 = new Circle (1.5,2.3,800,54400)
  circle55.DrawCircle()
  let circle56 = new Circle (3.8,3.2,800,55400)
  circle56.DrawCircle()
  let circle57 = new Circle (1.5,2.3,800,56400)
  circle57.DrawCircle()
  let circle58 = new Circle (2,3.9,800,57400)
  circle58.DrawCircle()
  let circle59 = new Circle (2,1.3,800,58400)
  circle59.DrawCircle()
  let circle60 = new Circle (2,1.3,800,59400)
  circle60.DrawCircle()
  let circle61 = new Circle (2,1.3,800,60400)
  circle61.DrawCircle()
  let circle62 = new Circle (2,1.3,800,61400)
  circle62.DrawCircle()
  let circle63 = new Circle (3.2,3.7,800,62400)
  circle63.DrawCircle()
  let circle64 = new Circle (1.6,1.5,800,63400)
  circle64.DrawCircle()
  let circle65 = new Circle (1.5,2.3,800,64400)
  circle65.DrawCircle()
  let circle66 = new Circle (3.8,3.2,800,65400)
  circle66.DrawCircle()
  let circle67 = new Circle (1.5,2.3,800,66400)
  circle67.DrawCircle()
  let circle68 = new Circle (2,3.9,800,67400)
  circle68.DrawCircle()
  let circle69 = new Circle (2,1.3,800,68400)
  circle69.DrawCircle()
  let circle70 = new Circle (2,1.3,800,69400)
  circle70.DrawCircle()
  let circle71 = new Circle (2,1.3,800,70400)
  circle71.DrawCircle()
  let circle72 = new Circle (2,1.3,800,71400)
  circle72.DrawCircle()
  let circle73 = new Circle (3.2,3.7,800,72400)
  circle73.DrawCircle()
  let circle74 = new Circle (1.6,1.5,800,73400)
  circle74.DrawCircle()
  let circle75 = new Circle (1.5,2.3,800,74400)
  circle75.DrawCircle()
  let circle76 = new Circle (3.8,3.2,800,75400)
  circle76.DrawCircle()
  let circle77 = new Circle (1.5,2.3,800,76400)
  circle77.DrawCircle()
 
  
  


}