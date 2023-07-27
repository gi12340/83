//Declara uma váriavel chamada mouseEvent e a inicializa com o valor "empty". Essa variável será usada para cotrolar o estado do mouse.

var mouseEvent = "empty";

//Declara duas variáveis chamadas em atribuir um valor inicial.

var last_position_of_x, last_position_of_y

//Obtém a referência para o elemento HTML com o ID "myCanvas" e armazena-o na variavél.

canvas = document.getElementById("myCanvas");

//Obtém o contexto 2D do canvas, que permite desenhas nele, e armazena-o na variável ctx. A partir de agora, podemos usar ctx para realizar de desenho no canvas.

ctx = canvas.getContext("2D")

var width = screen.width

newWidth = screen.width - 70;
newHeight= screen.height - 300;
if(width< 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e)
{
    console.log("myTouchStart");

    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;

    lastPositionOfx = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e)
{
    console.log("myTouchMove");
    correntPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft
}