var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10
function preload(){
  brick1image= loadImage("brick1.png")
  brick2image= loadImage("brick2.png")
  backgroundimage= loadImage("backg.jpg")

}
function setup(){
  createCanvas(1000,1000)
  var brick1 = createSprite(200,500,150,40)
  brick1.addImage(brick1image)
  var brick2 = createSprite(400,600,150,40)
  var brick3 = createSprite(700,200,650,30)
  var brick4 = createSprite(340,900,60,70)
  var brick5 = createSprite(678,790,150,90)
  var brick6 = createSprite(550,950,850,4)
  var brick7= createSprite(207,850,150,10)
  var brick8 = createSprite(950,880,1000,90)
  var brick9 = createSprite(210,890,150,70)

}
function draw(){
  background(backgroundimage)
  drawSprites()
}
