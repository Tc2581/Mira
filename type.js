var yesGifArray = ["yes/1.gif", "yes/2.gif"];
var noGifArray = ["no/1.gif", "no/2.gif", "no/3.gif", "no/4.gif", "no/5.gif","no/6.gif", "no/7.gif", "no/8.gif", "no/9.gif", "no/10.gif","no/11.gif", "no/12.gif", "no/13.gif", "no/14.gif", 
                  "no/15.gif","no/16.gif", "no/17.gif", "no/18.gif", "no/19.gif", "no/end.gif", "no/end.gif"];
var currentYesGifIndex = 0;
var currentNoGifIndex = 0;



var yesTexts = ["Reallly? &#129402 You love me??? &#129402 &#129402 &#129402", "YIPPIEEEEEE I LOVE YOU TOOOO MY BUBUUUU :3 &#128151 <br> THANK YOU SO MUCH FOR BEING MY EVERYTHING &#128149"];
var yesTextsIndex = 0;

var noTexts = ["WHAAAAAAAAT? &#128551", "HAHA YOURE JUST JOKING, RIGHT????", "NO NO NO YOU HAVE TO PRESS YES &#128522", "YOU ARE SO MEAN WHY DO YOU PRESS NO &#128544", 
    "YOU MOTKA BUBU YOU ARE A MEANIE",  "COME HERE IM GONNA BEAT YOU, STOP PRESSING NO &#128545", "LOOK, YOU MAKE YOUR DUDU CRY :((((", "YOU MAKE MY HEART BREAK &#128557",
    "OKAY FINE, I WILL KMS. THIS IS YOUR FAULT", "YOU HAVE ONE LAST CHANCE, TRY PRESSING NO AGAIN <br> AND SEE WHATS GONNA HAPPEN &#128522", "I WILL BEAT YOU 1 TIME", 
    "I WILL BEAT YOU 2 TIMES", "I WILL BEAT YOU 3 TIMES", "I WILL BEAT YOU 4 TIMES", "I WILL BEAT YOU 5 TIMES", "I WILL BEAT YOU 6 TIMES", "I WILL BEAT YOU 7 TIMES",
    "I WILL BEAT YOU 8 TIMES", "OH, I ONLY HAVE 8 FINGERS :(", "okay fine, i accept that you dont love me", "why do you still press no..."  ];
var noTextsIndex = 0;


var pressedNo = false;



function noButton() {
 
    pressedNo = true;
    //change gif only if we havent reached end of array yet
    if(currentNoGifIndex < noGifArray.length){

        //change gif + text
        document.getElementById("gif").src = noGifArray[currentNoGifIndex];
        document.getElementById("text").innerHTML = noTexts[noTextsIndex];

        // Update the index to the next GIF in the array
        currentNoGifIndex = (currentNoGifIndex + 1); 
        noTextsIndex = (noTextsIndex + 1);
    }
}



function yesButton() {
   

    if(pressedNo==true){

        document.getElementById("gif").src = "pressedNo.gif";
        document.getElementById("text").innerHTML = "But why did you press no at first? :(";
        pressedNo=false;
        
    }else{

        document.getElementById("question").innerHTML = "";
        //check if end of array is reached
        if(yesTextsIndex < yesTexts.length){

        //change gif + text
        document.getElementById("gif").src = yesGifArray[currentYesGifIndex];
        document.getElementById("text").innerHTML = yesTexts[yesTextsIndex];

        //increment array counter
        yesTextsIndex = (yesTextsIndex + 1);
        currentYesGifIndex = (currentYesGifIndex + 1); 
    }

    }
    
}
