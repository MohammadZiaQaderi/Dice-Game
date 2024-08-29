function winner() {
    var dices=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
    var rand_number1=Math.random();
    rand_number1=Math.floor(rand_number1*6);
    const image1=dices[rand_number1];
    document.querySelector('.img1').setAttribute("src","images/"+image1)
    var rand_number2=Math.random();
    rand_number2=Math.floor(rand_number2*6);
    const image2=dices[rand_number2];
    document.querySelector('.img2').setAttribute("src","images/"+image2)
    if(rand_number1>rand_number2) {
        // document.querySelector('span').innerHTML="Player 1 wins!"
        alert("Player 1 wins!")
    }
    else if(rand_number2>rand_number1) {
        // document.querySelector('span').innerHTML="Player 2 wins!"
        alert("Player 2 wins!")
    }
    else {
        //  document.querySelector('span').innerHTML="Draw"
        alert("Draw!")
    }
}