var w1;
var w2;
var w3;
var w4;
var w5;
var w6;
var w7;
var w8;
var w9;
var w10;
var w11;
var w12;
var w13;

var opacity = 8;
var wrdF = "";
var xRand;
var currentWords = [""];
var letterBG;

var num1 = 0;
var num2 = 1;
var num3 = 2;

var bgColor = "blue";
var instructionPanelToggle = true;

function changeFill(num)
{
  switch(num)
  {

// blue/purple
    case 0:
      fill(0,0,35);
      break;

    case 1:
      fill(40,10,30);
      break;

    case 2:
      fill(110,50,75,85);
      break;

// green/brown

    case 3:
      fill(35,25,0);
      break;

    case 4:
      fill(30,30,10);
      break;

    case 5:
      fill(110,100,35,85);
      break;

// pink/peach

    case 6:
      fill(255, 175, 189, 35);
      break;

    case 7:
      fill(255, 195, 160, 85);
      break;

    case 8:
      fill(178, 128, 180, 35);
      break;

    default:

  }
}

var art = [
"the", "my", "your", "our", "a", "this", "every", "one", "his", "her", "their", "its"
];
var adj = [
"blue", "liquid", "happy", "good", "listless", "formal", "electric", "first", "wirey", "false", "confidant", "bashful", "yellow", "cold", "warm", "eager", "balding", "last", "hateful", "warm", "blissful", "urgent", "deathless", "silver", "equal", "foreboding", "hollow", "glassy", "placid", "frantic", "sleepy", "dancing", "still", "tired", "endless", "stiff", "cellophane", "sleepy", "intoxicating"
];
var nou = [
"edge", "tongue", "stone", "test", "chair", "fruit", "mother", "father", "brother", "sister", "dust", "light", "sun", "sky", "fable", "dusk", "rot", "rust", "rest", "rime", "favor", "sleep", "blood", "dream", "palm", "forest", "guts", "smile", "root", "bottom", "top", "gallows", "question", "home", "lamp", "light", "pearl", "basket", "water", "flame", "soil", "flower", "sweat", "gall", "tooth", "molar"
];
var ver = [
"runs", "lies", "twists", "faces", "hides", "shouts", "wrinkles", "squeezes", "stands", "lifts", "flees", "holds", "savors", "indicts", "rakes", "smothers", "tries", "pulls", "covers", "prays to", "scratches", "understands", "reaches", "drifts", "washes", "etches", "warns", "sees", "hides", "embraces", "feels", "seethes", "grows", "aches", "watches", "flows", "grips", "touches", "tastes", "eats"
];
var pre = [
"under", "in front of", "above", "behind", "near", "following", "inside", "besides", "unlike", "like", "beneath", "against", "into", "beyond", "without", "with", "towards", "touching"
];
var con = [
"even though", "because", "and", "but", "nevertheless", "so", "consequently", "therefore", "despite", "while"
];
var ppl = [
  "Samson", "Esther", "Saul", "Hagar", "Elijah", "Jezebel", "Ahaz", "Ruth", "Sisera", "Delilah", "Abraham", "Abednago", "Omri", "Gideon", "Goliath"
];

function setup()
{
  new_sentence();

  createCanvas(500,500);
  frameRate(24);
}

function draw()
{
  if(instructionPanelToggle)
  {
    background(65,65,65);
    textSize(24);
    fill(180,180,180);

    text("'a' to switch modes\n'c' to switch colors\n'q' to view instruction panel\nclick to change sentence (and to start)", 60, 100);
  }
  else
  {
    background(255,255,255, opacity);
    textSize(12);

    var y = 40;
    var meep = int(random(4,8));
    var div = int(random(0,8));
    var bloop = int(random(0,8));
    var wordIndex = int(random(currentWords.length-1));

    if(meep % div == bloop)
    {
      opacity = random(0,8);
    }

        // LETTER TEXTURE
    if(letterBG){
      for(var i = 0; i<1500; i++)
      {
        changeFill(num1);
        var index = int(random(currentWords.length-1));
        text(random(currentWords[index].substring(3, currentWords[index].length).split("")), random(0,600), random(0,800));
      }
      for(var i = 0; i<1500; i++)
      {
        changeFill(num2);
        var index = int(random(currentWords.length-1));
        text(random(currentWords[index].substring(3, currentWords[index].length).split("")), random(0,600),random(0,800));
      }
      for(var i = 0; i<1500; i++)
      {
        changeFill(num3);
        var index = int(random(currentWords.length-1));
        text(random(currentWords[index].substring(3, currentWords[index].length).split("")), random(0,600),random(0,800));
      }
    }

      // FULL LETTER TEXTURE
    else {
      for(var i = 0; i<500; i++)
      {
        changeFill(num1);
        var index = int(random(currentWords.length-1));
        text(currentWords[index].substring(3, currentWords[index].length), random(0,600), random(0,800));
      }
      for(var i = 0; i<500; i++)
      {
        changeFill(num2);
        var index = int(random(currentWords.length-1));
        text(currentWords[index].substring(3, currentWords[index].length), random(0,600),random(0,800));
      }
      for(var i = 0; i<500; i++)
      {
        changeFill(num3);
        var index = int(random(currentWords.length-1));
        text(currentWords[index].substring(3, currentWords[index].length), random(0,600),random(0,800));
      }
    }

    textSize(18);
    fill(200,80,80, 120);
    for(var i = 0; i<currentWords.length; i++)
    {
        if(random(10) > 8)
        {
          xRand = parseInt(currentWords[i].substring(0,3));
          text(currentWords[i].substring(3, currentWords[i].length), xRand, y);
        }
        y = y + 30;
    }
  }
}

function pick_word(words)
{
	var n = int(random(words.length));
	wrdF = words[n];

	return wrdF;
}

function new_sentence()
{
	w1 = int(random(100, 400)).toString() + pick_word(art);
	w2 = int(random(100, 400)).toString() + pick_word(adj);
	w3 = int(random(100, 400)).toString() + pick_word(nou);
	w4 = int(random(100, 400)).toString() + pick_word(ver);
	w5 = int(random(100, 400)).toString() + pick_word(art);
	w6 = int(random(100, 400)).toString() + pick_word(adj);
	w7 = int(random(100, 400)).toString() + pick_word(nou);
	w8 = int(random(100, 400)).toString() + pick_word(con);
	w9 = int(random(100, 400)).toString() + pick_word(art);
	w10 = int(random(100, 400)).toString() + pick_word(nou);
	w11 = int(random(100, 400)).toString() + pick_word(ver);
	w12 = int(random(100, 400)).toString() + pick_word(art);
	w13 = int(random(100, 400)).toString() + pick_word(nou);

	currentWords.push(w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13);

	xRand = random(400)
}

function mousePressed()
{
	if(instructionPanelToggle)
	{
		instructionPanelToggle = false;
	}
	else
	{
		currentWords = [];
		new_sentence();
	}
}

function keyPressed()
{
	if (key == 'a')
	{
	  letterBG = !letterBG;
	}

	if (key == 'c')
	{
	  if(bgColor == "blue")
	  {
	    num1 = 0;
	    num2 = 1;
	    num3 = 2;

	    bgColor = "green";
	  }

	  else if(bgColor == "green")
	  {
	    num1 = 3;
	    num2 = 4;
	    num3 = 5;

	    bgColor = "orange";
	  }

	  else if(bgColor == "orange")
	  {
	    num1 = 6;
	    num2 = 7;
	    num3 = 8;

	    bgColor = "blue";
	  }
	}

	if(key == 'q')
	{
		instructionPanelToggle = true;
	}
}
