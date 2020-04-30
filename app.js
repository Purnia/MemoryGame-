document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
    
        {
            name: 'crazy',
            img: 'images/crazy.jpeg'
        },
        {
            name: 'crazy',
            img: 'images/crazy.jpeg'
        },
    
        {
            name: 'LOL',
            img: 'images/LOL.jpeg'
        },
        {
            name: 'LOL',
            img: 'images/LOL.jpeg'
        },
        {
            name: 'love',
            img: 'images/love.jpeg'
        },
        {
            name: 'love',
            img: 'images/love.jpeg'
        },
        {
            name: 'skeptical',
            img: 'images/skeptical.jpeg'
        },
        {
            name: 'skeptical',
            img: 'images/skeptical.jpeg'
        },
        {
            name: 'starry-eyed',
            img: 'images/starry-eyed.jpeg'
        },
        {
            name: 'starry-eyed',
            img: 'images/starry-eyed.jpeg'
        },
        {
            name: 'yawn',
            img: 'images/yawn.jpeg'
        },
        {
            name: 'yawn',
            img: 'images/yawn.jpeg'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //creating board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/gradient.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    createBoard()


    //find match

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/gradient.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/gradient.jpeg') 
            alert('Sorry! Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }

    }


    //flip card 

    function flipCard () {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }



});