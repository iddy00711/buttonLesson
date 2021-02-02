const text = "Welcome to your first lesson in layout principles. Today we will cover buttons, good vs bad ones.";

const textArr = text.split('');

console.log(screen.width)




textArr.map((letter, index)=>{
    setTimeout(()=>{
        let singleLetter = document.createElement('span');
    singleLetter.innerHTML = letter;
    singleLetter.className = 'letter';
    document.getElementById('word-container').appendChild(singleLetter);

    }, 100*(index+1))
    if(index+1 === textArr.length){
        
        // console.log('here')
        // var button = document.getElementById('button');
        // button.style.opacity = '1'
       
    
        // button = document.createElement('img');
        // button.src = '../assets/vader.png';
        
    }
    

});

setTimeout(()=>{
    let butt = document.getElementById('button');
    butt.style.opacity = '1'
}, 10000)



function rotateAndMoveButton() {
    var button = document.getElementById('button');
    button.style.transform = 'rotate(180deg)';
    setTimeout(()=>{
        button.style.transition = '2s ease-in';
        button.style.opacity = '0'
        button.style.left = '96vw';
        setTimeout(()=>{
            window.location.replace('./buttonPage.html')

        },1800)
  
    }, 500)
    
}