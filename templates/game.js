// JavaScript Document

window.onload = main;


var pname="Player";
var pturns=0;

function main() {    	
    var divs = document.getElementsByClassName("c");
    for(var i=0; i<divs.length; i++) {
        divs[i].onclick = setAudio;
    }
	
	try{
	 pname=JSON.parse(window.localStorage.mydata).name;
	 pturns=JSON.parse(window.localStorage.mydata).turns;
	 
	 clicks=pturns;
	 document.getElementById("insert").innerHTML= (pname)+" : Progress " +(clicks);
	}catch(exception){
		document.getElementById("insert").innerHTML= (pname)+" : Progress " +(clicks);
	}
}

var setAudio = function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://static1.grsites.com/archive/sounds/battle/battle003.mp3');
    audioElement.load()
    audioElement.play(); 
    clicks++;
	
	//alert(clicks);	
	document.getElementById("insert").innerHTML= (pname)+" : Progress " +(clicks);
	
    if(clicks > 23){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://static1.grsites.com/archive/sounds/battle/battle008.mp3');
        audioElement.load()
        audioElement.play();
        
        alert("Times up loser!");        
        clicks=0;
		
		window.localStorage.clear();	
        document.location.reload(true);	
    }
}

var clicks=0;
abs="position:absolute;";
wit="width:99px;height:99px;";

function clas(e,c){e.className="w "+c}

// add css prefixes
function pfix(cs){return";-webkit-"+cs+";-moz-"+cs+";-o-"+cs}

// get out a random element from an array
function R(a){return a.splice(0|a.length*Math.random(),1)[0]}

var css = document.createElement('style');
css.type = 'text/css';

var styles
=".w{"+wit+"border:1px solid# +777;text-align:center;margin:5px;float:left"+
"}.v .b,.p .b{"+pfix("transform:rotatey(180deg); opacity:0")+"}.c{"+wit+abs+"font-size:80px; padding-top:10px;}.c b{"+abs+"font-size:24px;left:5px}.b,.r{color:red}"+
".b{padding-top:0px; background-image: url(http://img3.wikia.nocookie.net/__cb20100726082133/yugioh/images/e/e5/Back-EN.png);background-size:100px 100px;"+pfix("transition:1s")+"}";

css.appendChild(document.createTextNode(styles));
document.body.appendChild(css);

//Flip the card
function flip(t){
    // get the visible cards
    v=b.querySelectorAll(".v");
    x=v[0];
    y=v[1];
    // if 2 cards are visible and dont match we turn them back 
    if(y)
        clas(x,""),
        clas(y,"");
    // if one card was visible we need to compare it with the one we just turned
    if(x&&!y&&x!=t&&x.innerHTML==t.innerHTML){
        // if they match we sign them as "paired"
        clas(x,"p"),
        clas(t,"p"),
        l--;
    }else clas(t,"v");

    // if all cards paired
    if(!l) {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://static1.grsites.com/archive/sounds/cartoon/cartoon041.mp3');
        audioElement.load()
        audioElement.play();
		
		window.localStorage.clear();	
        document.location.reload(true);
        alert("Excellente!")
    }
}

runCode();
function runCode(){
l=8;

// Fill in p array that represents the pack of cards.
q="0A23456789JQKâ™¥â™ â™¦â™£".split("");
q[0]=10;
p=[];
for(c=13;c<17;c++)
    for(i=0;i<13;i++)
        p.push([c%2?' r':'',c,q[i]]);

// find the pairs.
d=[];
for(i=0;i<8;i++)
    d[i]=d[i+8]=R(p);

h='<div style="width:450px">';
// select 16 cards
for(i=16;i;i--)
    c=R(d),
    h+='<div class="w" onclick="flip(this)"><div class="c f'
        +c[0]
        +'"><b>'
        +q[c[1]]
        +'</b>'
        +c[2]
        +'</div><div class="c b"></div></div>';

 try{
	var stat = JSON.parse(window.localStorage.mydata).gameprogress;		
	b.innerHTML=stat+'</div>';	
   }catch(exception){	
	b.innerHTML=h+'</div>';	
  }	

}