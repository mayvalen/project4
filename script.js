//create an array of mushroom names 
var mushrooms = ["Alder Scalycap", "Blushing Amanita", "Common Chantarelle", "Death Cap Amanita", "Earthy Powdercap", "Funeral Bell", "Gypsy Mushroom", "Hooded False Morel", "Ice Panther", "Jelly Babies", "King Bolete", "Lion's Mane", "Morel", "Nasty Cap", "Orange Birch Bolete", "The Prince", "Queen Elizabeth", "Royal Fly Agaric", "Satan's Bolete", "Tiger's Eye", "Umbrella Inky Cap", "Velvet Rollrim", "Woolly Webcap", "Xavier's Head", "Yellow Stagshorn", "Zen Angel"];
var colors = ["#F5F1E7", "#EBE2CC", "#F9F6EF", "#EFE9E3", "#EBE7E4", "#F0EEE5", "#ECE8DB", "#F5F0DC", "#F6EEE6"]
//create keydown function to call a mushroom for each key pressed 
document.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key)

    let newMushroomText=" ";
    //a
    if(event.key == "a"){
    
    newMushroomText=mushrooms[0]
    document.body.style.backgroundColor = colors[0]
    //b
    }else if(event.key == "b"){
    
    newMushroomText=mushrooms[1]
    document.body.style.backgroundColor = colors[1]
    //c
    }else if(event.key == "c"){

    newMushroomText=mushrooms[2]
    document.body.style.backgroundColor = colors[2]
    //d
    }else if(event.key == "d"){

    newMushroomText=mushrooms[3]
    document.body.style.backgroundColor = colors[3]
    //e
    }else if(event.key == "e"){

    newMushroomText=mushrooms[4]
    document.body.style.backgroundColor = colors[4]
    //f
    }else if(event.key == "f"){

    newMushroomText=mushrooms[5]
    document.body.style.backgroundColor = colors[5]
    //g
    }else if(event.key == "g"){

    newMushroomText=mushrooms[6]
    document.body.style.backgroundColor = colors[6]
    //h
    }else if(event.key == "h"){

    newMushroomText=mushrooms[7]
    document.body.style.backgroundColor = colors[7]
    //i
    }else if(event.key == "i"){

    newMushroomText=mushrooms[8]
    document.body.style.backgroundColor = colors[8]
    //j
    }else if(event.key == "j"){

    newMushroomText=mushrooms[9]
    document.body.style.backgroundColor = colors[1]
    //k
    }else if(event.key == "k"){

    newMushroomText=mushrooms[10]
    document.body.style.backgroundColor = colors[2]
    //l
    }else if(event.key == "l"){

    newMushroomText=mushrooms[11]
    document.body.style.backgroundColor = colors[3]
    //m
    }else if(event.key == "m"){

    newMushroomText=mushrooms[12]
    document.body.style.backgroundColor = colors[4]
    //n
    }else if(event.key == "n"){

    newMushroomText=mushrooms[13]
    document.body.style.backgroundColor = colors[5]
    //o
    }else if(event.key == "o"){

    newMushroomText=mushrooms[14]
    document.body.style.backgroundColor = colors[6]
    //p
    }else if(event.key == "p"){

    newMushroomText=mushrooms[15]
    document.body.style.backgroundColor = colors[7]
    //q
    }else if(event.key == "q"){

    newMushroomText=mushrooms[16]
    document.body.style.backgroundColor = colors[8]
    //r
    }else if(event.key == "r"){

    newMushroomText=mushrooms[17]
    document.body.style.backgroundColor = colors[1]
    //s
    }else if(event.key == "s"){

    newMushroomText=mushrooms[18]
    document.body.style.backgroundColor = colors[2]
    //t
    }else if(event.key == "t"){

    newMushroomText=mushrooms[19]
    document.body.style.backgroundColor = colors[3]
    //u
    }else if(event.key == "u"){

    newMushroomText=mushrooms[20]
    document.body.style.backgroundColor = colors[4]
    //v
    }else if(event.key == "v"){

    newMushroomText=mushrooms[21]
    document.body.style.backgroundColor = colors[5]
    //w
    }else if(event.key == "w"){

    newMushroomText=mushrooms[22]
    document.body.style.backgroundColor = colors[6]
    //x
    }else if(event.key == "x"){

    newMushroomText=mushrooms[23]
    document.body.style.backgroundColor = colors[7]
    //y
    }else if(event.key == "y"){

    newMushroomText=mushrooms[24]
    document.body.style.backgroundColor = colors[8]
    //z
    }else if(event.key == "z"){

    newMushroomText=mushrooms[25]
    document.body.style.backgroundColor = colors[1]

    }

  document.querySelector('#mushroom-text').innerText=newMushroomText;

})




