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
        console.log("box was clicked");
        if(turn_x){
            box.innerText = "X";
            turn_x = false;
        }
        else{
            box.innerText = "O";
            turn_x = true;
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