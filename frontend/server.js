let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let turn_x = true; //players
let gameMode= "";

const winningPattern= [
    [0,1,2],[0,3,6],[0,4,8], [1,4,7], [2,5,8], [2,4,6],
    [3,4,5],
    [6,7,8],[8,7,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //prevents clicking if the box is already filled
        if (box.innerText !== ""){
            return;
        }
        console.log("box was clicked");

        if(turn_x){
            box.innerText = "X";
            turn_x = false;
            
        
        if(gameMode == "easy" && !check_winner()){
            document.querySelector(".container").style.pointerEvents = "none";
            setTimeout(()=>{
                ai_easy();
                
                document.querySelector(".container").style.pointerEvents = "auto";
                
            },700);
        } 
        box.disabled = true;
        let win = check_winner();
        
        if(win == "winner"){

       setTimeout(()=>winner_screen(),3000);
             console.log("winner screen called");
           
        }else{
            if([...boxes].every((box)=> box.innerText !== ""))
            setTimeout(()=>draw_screen(),2000);
            console.log("draw")
        }     
    }
    });
});


function winner_screen(){
    
     const screen = document.getElementById('winner');
            screen.style.display = 'flex';
            document.getElementById('game_screen').style.display = 'none';
    
}
function draw_screen(){
    const screen = document.getElementById('draw');
    screen.style.display = 'flex';
    document.getElementById('game_screen').style.display = 'none';
}

function check_winner(){
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                boxes.forEach(box => box.disabled = true);
                return "winner"             
            }
        }
    }
}




reset_btn.addEventListener("click",reset_game);

function reset_game(){
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    document.getElementById('main_menu').style.display = 'none';
    document.getElementById('difficulty').style.display = 'none';
    document.getElementById('game_screen').style.display = 'flex';
    document.getElementById('winner').style.display = 'none';
    document.getElementById('draw').style.display = 'none';
   
    turn_x = true;
}

function show_difficulty_menu(){
    document.getElementById('main_menu').style.display= 'none';
    document.getElementById('difficulty').style.display = 'flex';

}
function multiplayer(){
    document.getElementById('main_menu').style.display = 'none';
    document.getElementById('difficulty').style.display = 'none';
    document.getElementById('game_screen').style.display = 'flex';

}

function start_game(mode){
    gameMode = mode;
    document.getElementById('main_menu').style.display = 'none';
    document.getElementById('difficulty').style.display = 'none';
    document.getElementById('game_screen').style.display = 'flex';
    reset_game();
}

function back_to_main(){
    document.getElementById('main_menu').style.display = 'flex';
    document.getElementById('difficulty').style.display = 'none';
    document.getElementById('game_screen').style.display = 'none';

}

function ai_easy(){
    let available_boxes = [...boxes].filter(box => box.innerText === "");
    if(available_boxes.length > 0){
        let random_box = available_boxes[Math.floor(Math.random()* available_boxes.length)];
        //math.random generates decimal between 0 and 1
        random_box.innerText = "O";
        random_box.disabled = true;
        turn_x = true;

        if(check_winner() === "winner"){
            setTimeout(()=> winner_screen(), 3000);

        }else if ([...boxes].every(box => box.innerText != "")){
            setTimeout(()=> draw_screen(), 3000);
        }
    }
}