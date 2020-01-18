let readyText = 0;

const first = [];
first[0] = 'Teraz przychodzi do nas czytanie z ';
first[1] = 'Bracia teraz bedziemy słuchać słowa z ';
first[2] = 'Teraz usłyszymy czytanie z ';
first[3] = 'Bracie nie wiem w jakiej sytuacji jesteś ale to słowo jest które teraz przychodzi jest dokładnie na ten moment życia w którym jesteś. jest ono z '

const second = [];
second[0] =  '. Jest w nim mowa o';
second[1] = '. Możemy w nim uslyszeć o ';

const third = [];
third[0] = 'miłosci Boga do nas';
third[1] = 'tym że Pan Bóg od początku nas kocha';
third[2] = 'tym że Pan Bóg chodźby nie wiem co byś zrobił i tak Cię nie potępia';
third[3] = 'relacji Boga z człowiekiem';


document.querySelector('.btn').addEventListener('click', function(){
    const value = document.querySelector('.input').value;
    
    if(value != 0){
        readyText = first[Math.floor(Math.random()*first.length)];
        readyText += value;
        readyText += second[Math.floor(Math.random()*second.length)];
        readyText += third[Math.floor(Math.random()*third.length)];
        document.querySelector('.readyText').innerHTML = readyText;
    }
    else{
        alert('nie wpisałes czytanie')
    }
})