// note: canvasWidth and canvasHeight will be defined before this script runs

const num_of_stars = 2000;
let number_of_planets = 0;
let offset_array = [];
const max_frames = 200;

let x = [];
let y = [];
let speed = [];
let max_speed = 0.5;
let planet_coords = [];

function setup () {
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  background(0);
  populate_offset_array();
  //print(offset_array.toString());
  //for(let a = 0; a < offset_array.length; a++){
  //  print("(" + offset_array[a][0] + ", " + offset_array[a][1] + ", " + offset_array[a][2] + ")");
  //}

  for(i = 0; i < num_of_stars; i++){
    x[i] = random(0, width);
    y[i] = random(0, height);
    speed[i] = random(0, max_speed);
  }

  number_of_planets = ceil(random(0, 10));
  print("Number of planets: " + number_of_planets);
  for(let j = 0; j < number_of_planets; j++){
    let planet_x = random(0, canvasWidth);
    let planet_y = random(0, canvasHeight);
    let planet_size = random(10, 300);
    planet_coords.push([planet_x, planet_y, planet_size]);
  }
  
}

function draw () {
  let bg = map(mouseX, 0, 20, 0, 1);
  // fill(237, 50, 71, bg/2);
  // fill(0);
  background(20);
  rect(0, 0, canvasWidth, canvasHeight);
  noStroke();
  // let mouse_var = map(mouseX, 0, 1, 0, 1);

  draw_planets();
  fill(255); //uncomment for planet overlay "looking into stars"

  for(let i = 0; i < num_of_stars; i++){
    if(speed[i] <= 0.25*max_speed){
      diameter = 1;
      speed[i] *= -1;
    }
    if(speed[i] > 0.25*max_speed && speed[i] <= 0.35*max_speed){
      diameter = 2;
      speed[i] *= -1;
    }
    if(speed[i] > 0.35*max_speed) diameter = 1.5;
    if(speed[i] > 0.45*max_speed) diameter = 2;
    if(speed[i] > 0.75*max_speed) diameter = 3;

    ellipse(x[i], y[i], diameter, diameter);
    x[i] -= speed[i];
    if(x[i] < 0) x[i] = width;
  }
}

function draw_planets(){
  fill(40);

  for(let a = 0; a < number_of_planets; a++){
   // print("(" + planet_coords[a][0] + ", " + planet_coords[a][1] + ")");
    ellipse(planet_coords[a][0], planet_coords[a][1], planet_coords[a][2]);
  }
}


function populate_offset_array(){
  for(let i = 0; i < num_of_stars; i++){
    let x = random(0, 1);
    let y = random(0, 1);
    let speed = random(0, 1);
    offset_array.push([x, y, speed]);
  }
}