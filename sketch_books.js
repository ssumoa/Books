let input, button, greeting;
let recth1, rectw1, recth2, rectw2=0;
let booktagW, booktagH;
let bookColorArray;


function setup() {
  createCanvas(1920,1080);
 
  input = createInput();
  input.position(30, 70);

  button = createButton('books');
  button.position(input.x + input.width-50, 70);
  button.mousePressed(greet);
  
  greeting = createElement('h2', 'How many books?');
  greeting.position(30, 5);
  textAlign(CENTER);

}

function keyPressed() {
  if(key == 'a'){
    let fs = fullscreen();
    background(255);
    fullscreen(!fs);
  }
}

function greet() {
  let booknum = input.value();
  fullscreen();
  
    bookColorArray=[color('#FF2A00'),color('#FFAA01'),color('#FDFE00'),color('#00FFDF'),color('#1B00FF'),color('#AF81E4'),color('#EB8181'),color('#D69A4C'),color('#8C8A38'),color('#B7E080')]
  
  booknum = int(booknum);
  greeting.html( 'How many books?');
  rectw2=0
  //input.value('');
  background(255);
 
  for (let i = 0; i <booknum; i++) {
    
    rectw1 =random(60,180);
    recth1=random(350,750);
    
    if(booknum <= 18){
      console.log(booknum +' 1');
      booktagH=140;
      booktagW=100;
    }
    else if(18 < booknum && booknum < 30){
      rectw1=rectw1*0.65;
      recth1=recth1*0.85;
      booktagH=140*0.88;
      booktagW=100*0.65;
      console.log(booknum +' 2');

    }
    else{console.log(booknum +' 5');
      rectw1=rectw1*0.45;
      recth1=recth1*0.77;
      booktagW=100*0.45;
      booktagH=140*0.75;
      }
    
    push();
    fill(0);
    scale(1, -1)

    //books
    let myColor = color(random(255), random(255), random(255), 200);
    fill(myColor);
    rect(40+rectw2,-950,rectw1,recth1);
    
    //booktag
    fill(255,245);
    let randomC = random(9);
    if(rectw1<booktagW){
      rect(40+rectw2,-920,rectw1,booktagH);
      fill(bookColorArray[int(int(random(9)))],110);
      rect(40+rectw2,-920,rectw1,booktagH*0.3);
    }else{
        rect(40+rectw2+rectw1/2-booktagW/2,-920,booktagW,booktagH);
        fill(bookColorArray[int(int(random(9)))],110);
        rect(40+rectw2+rectw1/2-booktagW/2,-920,booktagW,booktagH*0.3);
    }
    rectw2 += rectw1;
    recth2 += recth1;
    pop();
  }
  
  
  textSize(20);
  text(booknum + ' books are here', width/2,height-50 )
    
}


