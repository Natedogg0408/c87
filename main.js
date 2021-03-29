canvas = new fabric.Canvas("myCanvas"); 
ctx = canvas.getContext("2d");

player_img_height = 30; 
player_img_width = 30; 

block_img_height = 30; 
block_img_width = 30; 

player_x = 10; 
player_y = 10;

player_object = ""; 
block_img_object = ""; 

function player_update(){
   fabric.Image.fromURL("player.png", function(Img){
       player_object = Img; 
       player_object.scaleToWidth(150);
       player_object.scaleToWidth(140);
       player_object.set({
           top:player_y,
           left:player_x 

       });
       canvas.add(player_object);
   });

}

function new_image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
        block_img_object = Img; 
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToWidth(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x 
 
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed); 

    if(e.shiftKey == true && keyPressed == "80"){
        console.log("P and Shift were pressed together")
        block_img_width = block_img_width + 10; 
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }

    if(e.shiftKey == true && keyPressed == "77"){
        console.log("M and Shift were pressed together")
        block_img_width = block_img_width - 10; 
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
        
    }
 
    if(keyPressed == "38"){
        Up(); 
        console.log("up");
    }

    if(keyPressed == "40"){
        Down(); 
        console.log("down");
    }
 
    if(keyPressed == "37"){
        Left(); 
        console.log("left");
    }

    if(keyPressed == "39"){
        Right(); 
        console.log("right");
    }

    if (keyPressed == "87"){
        new_image("wall.jpg");
        console.log("w");
    }  

    if (keyPressed == "71"){
        new_image("ground.png");
        console.log("g");
    }

    if (keyPressed == "76"){
        new_image("light_green.png");
        console.log("l");
    }

    if (keyPressed == "84"){
        new_image("trunk.jpg");
        console.log("t");
    }

    if (keyPressed == "82"){
        new_image("roof.jpg");
        console.log("r");
    }

    if (keyPressed == "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }

    if (keyPressed == "68"){
        new_image("dark_green.png");
        console.log("d");
    }

    if (keyPressed == "85"){
        new_image("unique.png");
        console.log("u");
    }

    if (keyPressed == "67"){
        new_image("cloud.jpg");
        console.log("c");
    }
}



