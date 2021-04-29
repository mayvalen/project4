
//create an array of mushroom names 
var mushrooms = ["Alder Scalycap", "Blushing Amanita", "Common Chantarelle", "Death Cap Amanita", "Earthy Powdercap", "Funeral Bell", "Gypsy Mushroom", "Hooded False Morel", "Ice Panther", "Jelly Babies", "King Bolete", "Lion's Mane", "Morel", "Nasty Cap", "Orange Birch Bolete", "The Prince", "Queen Elizabeth", "Royal Fly Agaric", "Satan's Bolete", "Tiger's Eye", "Umbrella Inky Cap", "Velvet Rollrim", "Woolly Webcap", "Xavier's Head", "Yellow Stagshorn", "Zen Angel"];
//create an array of background colors 
var colors = ["#F5F1E7", "#EBE2CC", "#F9F6EF", "#EFE9E3", "#EBE7E4", "#F0EEE5", "#ECE8DB", "#F5F0DC", "#F6EEE6"]
//create an array of latin mushroom names 
var latin = ["(Pholiota Alnicola)", "(Amanita Rubescens)", "(Cantharellus Cibarius)", "(Amanita Phalloides)", "(Cystoderma Amianthinum)", "(Galerina Marginata)", "(Cortinarius Caperatus)", "(Gyromitra Infula)", "(Hydnum Repandum)", "(Leotia Lubrica)", "(Boletus Edulis)", "(Hericium Erinaceus)", "(Morchella Elata)", "(Otidea Onotica)", "(Leccinum Versipelle)", "(Agaricus Augustus)", "(Amanita Fulva)", "(Amanita Regalis)", "(Boletus Satanas)", "(Coltricia Perennis)", "(Coprinus Plicatilis)", "(Paxillus Atrotomentosus)", "(Cortinarius Laniger)", "(Cortinarius Orellanus)", "(Calocera Viscosa)", "(Clathrus Ruber)"]
  
// Create a new HTML image element for the card
let mushroomImage = document.createElement("img");
//create mushroom image array
var images = ["images/mushroom1.png"]





//when user first comes to page, they will click the keys on keyboard to retrieve different mushrooms from array 
//create keydown function to call a mushroom for each key pressed 
document.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key)

    let newMushroomText=" ";
    let newLatinText=" ";



    //a
    if(event.key == "a"){
    //call mushroom name
    newMushroomText=mushrooms[0]
    //call mushroom latin name
    newLatinText=latin[0]
    //call background color
    document.body.style.backgroundColor = colors[0]
    //show mushroom image 
    mushroomImage=images[0]
    
    
    //b
    }else if(event.key == "b"){
    
    newMushroomText=mushrooms[1]
    newLatinText=latin[1]
    document.body.style.backgroundColor = colors[1]
    //c
    }else if(event.key == "c"){

    newMushroomText=mushrooms[2]
    newLatinText=latin[2]
    document.body.style.backgroundColor = colors[2]
    //d
    }else if(event.key == "d"){

    newMushroomText=mushrooms[3]
    newLatinText=latin[3]
    document.body.style.backgroundColor = colors[3]
    //e
    }else if(event.key == "e"){

    newMushroomText=mushrooms[4]
    newLatinText=latin[4]
    document.body.style.backgroundColor = colors[4]
    //f
    }else if(event.key == "f"){

    newMushroomText=mushrooms[5]
    newLatinText=latin[5]
    document.body.style.backgroundColor = colors[5]
    //g
    }else if(event.key == "g"){

    newMushroomText=mushrooms[6]
    newLatinText=latin[6]
    document.body.style.backgroundColor = colors[6]
    //h
    }else if(event.key == "h"){

    newMushroomText=mushrooms[7]
    newLatinText=latin[7]
    document.body.style.backgroundColor = colors[7]
    //i
    }else if(event.key == "i"){

    newMushroomText=mushrooms[8]
    newLatinText=latin[8]
    document.body.style.backgroundColor = colors[8]
    //j
    }else if(event.key == "j"){

    newMushroomText=mushrooms[9]
    newLatinText=latin[9]
    document.body.style.backgroundColor = colors[1]
    //k
    }else if(event.key == "k"){

    newMushroomText=mushrooms[10]
    newLatinText=latin[10]
    document.body.style.backgroundColor = colors[2]
    //l
    }else if(event.key == "l"){

    newMushroomText=mushrooms[11]
    newLatinText=latin[11]
    document.body.style.backgroundColor = colors[3]
    //m
    }else if(event.key == "m"){

    newMushroomText=mushrooms[12]
    newLatinText=latin[12]
    document.body.style.backgroundColor = colors[4]
    //n
    }else if(event.key == "n"){

    newMushroomText=mushrooms[13]
    newLatinText=latin[13]
    document.body.style.backgroundColor = colors[5]
    //o
    }else if(event.key == "o"){

    newMushroomText=mushrooms[14]
    newLatinText=latin[14]
    document.body.style.backgroundColor = colors[6]
    //p
    }else if(event.key == "p"){

    newMushroomText=mushrooms[15]
    newLatinText=latin[15]
    document.body.style.backgroundColor = colors[7]
    //q
    }else if(event.key == "q"){

    newMushroomText=mushrooms[16]
    newLatinText=latin[16]
    document.body.style.backgroundColor = colors[8]
    //r
    }else if(event.key == "r"){

    newMushroomText=mushrooms[17]
    newLatinText=latin[17]
    document.body.style.backgroundColor = colors[1]
    //s
    }else if(event.key == "s"){

    newMushroomText=mushrooms[18]
    newLatinText=latin[18]
    document.body.style.backgroundColor = colors[2]
    //t
    }else if(event.key == "t"){

    newMushroomText=mushrooms[19]
    newLatinText=latin[19]
    document.body.style.backgroundColor = colors[3]
    //u
    }else if(event.key == "u"){

    newMushroomText=mushrooms[20]
    newLatinText=latin[20]
    document.body.style.backgroundColor = colors[4]
    //v
    }else if(event.key == "v"){

    newMushroomText=mushrooms[21]
    newLatinText=latin[21]
    document.body.style.backgroundColor = colors[5]
    //w
    }else if(event.key == "w"){

    newMushroomText=mushrooms[22]
    newLatinText=latin[22]
    document.body.style.backgroundColor = colors[6]
    //x
    }else if(event.key == "x"){

    newMushroomText=mushrooms[23]
    newLatinText=latin[23]
    document.body.style.backgroundColor = colors[7]
    //y
    }else if(event.key == "y"){

    newMushroomText=mushrooms[24]
    newLatinText=latin[24]
    document.body.style.backgroundColor = colors[8]
    //z
    }else if(event.key == "z"){

    newMushroomText=mushrooms[25]
    newLatinText=latin[25]
    document.body.style.backgroundColor = colors[1]

    }
  //append mushroom text array to inner text to mushroom text div in html
  document.querySelector('#mushroom-text').innerText=newMushroomText;
  //append latin text array to inner text to latin text div in html
  document.querySelector('#latin-text').innerText=newLatinText;
  //append images array to img to images div in html
  document.querySelector('#images').img=mushroomImage;



})




