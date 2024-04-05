let button1 = document.querySelector('#stone');
let button2 = document.querySelector('#knife');
let button3 = document.querySelector('#paper');

let result = document.querySelector('#resulty');
let choice = document.querySelector('#your-choice');
let resultcomputer = document.querySelector('#computer-choice');

let computer = 0;

function computerChoice(){
    if(computer == 0){
        resultcomputer.innerHTML = "Выбор компьютера: Камень"
    }
    else if(computer == 1){
        resultcomputer.innerHTML = "Выбор компьютера: Ножницы"
    }
    else{
        resultcomputer.innerHTML = "Выбор компьютера: Бумага"
    }
}

function playGame(type){

    computer = Math.round(Math.random() * 2);
    computerChoice();
    if(+computer == +type){
        result.innerHTML = "Результат: Ничья";
    }
    else if(+computer == 0 && +type == 1)
    {
        result.innerHTML = "Результат: Поражение";
    }
    else if(+computer == 0 && +type == 2)
    {
        result.innerHTML = "Результат: Победа";
    }
    else if(+computer == 1 && +type == 0)
    {
        result.innerHTML = "Результат: Победа";
    }
    else if(+computer == 1 && +type == 2)
    {
        result.innerHTML = "Результат: Поражение";
    }
    else if(+computer == 2 && +type == 0)
    {
        result.innerHTML = "Результат: Поражение";
    }
    else if(+computer == 2 && +type == 1)
    {
        result.innerHTML = "Результат: Победа";
    }
    if(+type == 0){
        choice.innerHTML = "Ваш выбор: Камень";
    }else if(+type == 1){
        choice.innerHTML = "Ваш выбор: Ножницы";
    }else if(+type == 2){
        choice.innerHTML = "Ваш выбор: Бумага";
    }

}

button1.addEventListener('click', () => playGame(0));
button2.addEventListener('click', () => playGame(1));
button3.addEventListener('click', () => playGame(2));
