
//create an array of mushroom names 
var mushrooms = ["Alder Scalycap", "Blushing Amanita", "Common Chantarelle", "Death Cap Amanita", "Earthy Powdercap", "Funeral Bell", "Gypsy Mushroom", "Hooded False Morel", "Indian Pipe", "Jelly Babies", "King Bolete", "Lion's Mane", "Morel", "Nasty Cap", "Orange Birch Bolete", "The Prince", "Queen Elizabeth", "Royal Fly Agaric", "Satan's Bolete", "Tiger's Eye", "Umbrella Inky Cap", "Velvet Rollrim", "Woolly Webcap", "Xavier's Head", "Yellow Stagshorn", "Zen Angel"];

//create an array of background colors 
/* var colors = ["#F5F1E7", "#EBE2CC", "#F9F6EF", "#EFE9E3", "#EBE7E4", "#F0EEE5", "#ECE8DB", "#F5F0DC", "#F6EEE6"] */

//create an array of latin mushroom names 
var latin = ["(Pholiota alnicola)", "(Amanita rubescens)", "(Cantharellus cibarius)", "(Amanita phalloides)", "(Cystoderma amianthinum)", "(Galerina marginata)", "(Cortinarius caperatus)", "(Gyromitra infula)", "(Monotropa uniflora)", "(Leotia lubrica)", "(Boletus edulis)", "(Hericium erinaceus)", "(Morchella elata)", "(Otidea onotica)", "(Leccinum versipelle)", "(Agaricus augustus)", "(Amanita fulva)", "(Amanita regalis)", "(Boletus satanas)", "(Coltricia perennis)", "(Coprinus plicatilis)", "(Paxillus atrotomentosus)", "(Cortinarius laniger)", "(Cortinarius orellanus)", "(Calocera viscosa)", "(Clathrus ruber)"]
  
// Create a new HTML image element for the mushroom
let mushroomImage = document.createElement("img");

//create mushroom image array
var images = ["images/mushroom1.png", "images/mushroom2.jpeg", "images/mushroom3.jpeg", "images/mushroom4.jpeg", "images/mushroom5.jpeg", "images/mushroom6.jpeg", "images/mushroom7.jpeg", "images/mushroom8.jpeg", "images/mushroom9.jpeg", "images/mushroom10.jpeg", "images/mushroom11.jpeg", "images/mushroom12.jpeg", "images/mushroom13.jpeg", "images/mushroom14.jpeg", "images/mushroom15.jpeg", "images/mushroom16.jpeg", "images/mushroom17.jpeg", "images/mushroom18.jpeg", "images/mushroom19.jpeg", "images/mushroom20.jpeg", "images/mushroom21.jpeg", "images/mushroom22.jpeg", "images/mushroom23.png", "images/mushroom24.png", "images/mushroom25.jpeg", "images/mushroom26.jpeg"]
console.log(images);

//USER STORY:
//when user first comes to page, they will click the keys on keyboard to retrieve different mushrooms from array 
//when they click on a key more than once, more of that mushroom will populate the page
//when they click on a different key, a different mushroom name will appear
//when they click on that key more than once, more of that mushroom will populate the page and so on

          //create old key and set to undefined 
          let oldKey = undefined; 

//create keydown function to call a mushroom for each key pressed: 
document.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key)

   
    //make first-type disappear on any key press
    document.querySelector("#first-type").style.display = "none";

    //make previous mushroom image go away when new letter is clicked
    if (oldKey !== event.key) {
      console.log("different key press");
      document.querySelector(".image-container").innerHTML = " ";
    }

          //set oldKey equal to event.key
          oldKey = event.key;

    let newMushroomText=" ";
    let newLatinText=" ";

    

    //a
    if(event.key == "a"){
    //call mushroom name
    newMushroomText=mushrooms[0]
    //call mushroom latin name
    newLatinText=latin[0]
    //make image div
    makeDiv(images[0]);
    

    
    
    //b
    }else if(event.key == "b"){
    //call mushroom name
    newMushroomText=mushrooms[1]
    //call mushroom latin name
    newLatinText=latin[1]
    //make image div
    makeDiv(images[1]);


    //c
    }else if(event.key == "c"){
    //call mushroom name
    newMushroomText=mushrooms[2]
    //call mushroom latin name
    newLatinText=latin[2]
    //make image div
    makeDiv(images[2]);


    //d
    }else if(event.key == "d"){
    
    newMushroomText=mushrooms[3]
    newLatinText=latin[3]
    //make image div
    makeDiv(images[3]);


    //e
    }else if(event.key == "e"){

    newMushroomText=mushrooms[4]
    newLatinText=latin[4]
    //make image div
    makeDiv(images[4]);

    //f
    }else if(event.key == "f"){

    newMushroomText=mushrooms[5]
    newLatinText=latin[5]
    //make image div
    makeDiv(images[5]);

    //g
    }else if(event.key == "g"){

    newMushroomText=mushrooms[6]
    newLatinText=latin[6]
    //make image div
    makeDiv(images[6]);

    //h
    }else if(event.key == "h"){

    newMushroomText=mushrooms[7]
    newLatinText=latin[7]
    //make image div
    makeDiv(images[7]);

    //i
    }else if(event.key == "i"){

    newMushroomText=mushrooms[8]
    newLatinText=latin[8]
    //make image div
    makeDiv(images[8]);

    //j
    }else if(event.key == "j"){

    newMushroomText=mushrooms[9]
    newLatinText=latin[9]
    //make image div
    makeDiv(images[9]);

    //k
    }else if(event.key == "k"){

    newMushroomText=mushrooms[10]
    newLatinText=latin[10]
    //make image div
    makeDiv(images[10]);

    //l
    }else if(event.key == "l"){

    newMushroomText=mushrooms[11]
    newLatinText=latin[11]
    //make image div
    makeDiv(images[11]);

    //m
    }else if(event.key == "m"){

    newMushroomText=mushrooms[12]
    newLatinText=latin[12]
    //make image div
    makeDiv(images[12]);

    //n
    }else if(event.key == "n"){

    newMushroomText=mushrooms[13]
    newLatinText=latin[13]
    //make image div
    makeDiv(images[13]);

    //o
    }else if(event.key == "o"){

    newMushroomText=mushrooms[14]
    newLatinText=latin[14]
    //make image div
    makeDiv(images[14]);

    //p
    }else if(event.key == "p"){

    newMushroomText=mushrooms[15]
    newLatinText=latin[15]
    //make image div
    makeDiv(images[15]);

    //q
    }else if(event.key == "q"){

    newMushroomText=mushrooms[16]
    newLatinText=latin[16]
    //make image div
    makeDiv(images[16]);
 
    //r
    }else if(event.key == "r"){

    newMushroomText=mushrooms[17]
    newLatinText=latin[17]
    //make image div
    makeDiv(images[17]);

    //s
    }else if(event.key == "s"){

    newMushroomText=mushrooms[18]
    newLatinText=latin[18]
    //make image div
    makeDiv(images[18]);

    //t
    }else if(event.key == "t"){

    newMushroomText=mushrooms[19]
    newLatinText=latin[19]
    //make image div
    makeDiv(images[19]);

    //u
    }else if(event.key == "u"){

    newMushroomText=mushrooms[20]
    newLatinText=latin[20]
    //make image div
    makeDiv(images[20]);

    //v
    }else if(event.key == "v"){

    newMushroomText=mushrooms[21]
    newLatinText=latin[21]
    //make image div
    makeDiv(images[21]);
    
    //w
    }else if(event.key == "w"){

    newMushroomText=mushrooms[22]
    newLatinText=latin[22]
    //make image div
    makeDiv(images[22]);

    //x
    }else if(event.key == "x"){

    newMushroomText=mushrooms[23]
    newLatinText=latin[23]
    //make image div
    makeDiv(images[23]);

    //y
    }else if(event.key == "y"){

    newMushroomText=mushrooms[24]
    newLatinText=latin[24]
    //make image div
    makeDiv(images[24]);

    //z
    }else if(event.key == "z"){

    newMushroomText=mushrooms[25]
    newLatinText=latin[25]
    //make image div
     makeDiv(images[25]);

    

    }


  //append mushroom text array to inner text to mushroom text div in html
  document.querySelector('#mushroom-text').innerText=newMushroomText;
  //append latin text array to inner text to latin text div in html
  document.querySelector('#latin-text').innerText=newLatinText;

  
  //create images for mushrooms
  function makeDiv(imgURL) {
    const myImg = document.createElement("img");
    myImg.classList.add("image");
    myImg.src = imgURL;
    document.querySelector(".image-container").append(myImg);
  }

 

  


})






