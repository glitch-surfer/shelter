const petsData = [
    {
        "id": "1",
        "name": "Jennifer",
        "img": "./assets/img/pets/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "2",
        "name": "Sophia",
        "img": "./assets/img/pets/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "3",
        "name": "Woody",
        "img": "./assets/img/pets/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": "4",
        "name": "Scarlett",
        "img": "./assets/img/pets/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "5",
        "name": "Katrine",
        "img": "./assets/img/pets/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "6",
        "name": "Timmy",
        "img": "./assets/img/pets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": "7",
        "name": "Freddie",
        "img": "./assets/img/pets/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "8",
        "name": "Charly",
        "img": "./assets/img/pets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn`t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]
document.addEventListener('DOMContentLoaded', function () {

    /* BURGER >>>>>>>>>>>>>>>>>>>>>*/
    const burgerIcon = document.getElementById('burger-icon')
    const burgerMenu = document.getElementById('burger-menu')

    burgerIcon.addEventListener('click', burgerMenuHandler)
    burgerMenu.addEventListener('click', burgerMenuHandler)
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 768) {
            burgerIcon.classList.remove('is-active')
            burgerMenu.classList.remove('is-active')
            if (document.querySelector('.overlay')) { document.querySelector('.overlay').remove() }
            document.body.style.overflow = ""
        }
    })
    function burgerMenuHandler(event) {

        //make menu active
        if (!burgerIcon.classList.contains('is-active')) {
            burgerIcon.classList.add('is-active')
            burgerMenu.classList.add('is-active')
            generateOverlay()
            document.body.style.overflow = "hidden"

            //add listener to overlay
            document.querySelector('.overlay').addEventListener('click', burgerMenuHandler)
        }
        //make menu inActive
        else if (!event.target.classList.contains('burger-menu')) {
            burgerIcon.classList.remove('is-active')
            burgerMenu.classList.remove('is-active')
            document.querySelector('.overlay').remove()
            document.body.style.overflow = ""
        }
    }
    /* if (!event.target.classList.contains('burger-menu')) {
        burgerIcon.classList.toggle('is-active')
        burgerMenu.classList.toggle('is-active')
        overlay.classList.toggle('is-active')
    
        //document.body.classList.toggle('is-active')
    } */
    function generateOverlay() {
        let overlay = document.createElement('div')
        overlay.classList.add('overlay')
        document.body.append(overlay)
    }




       /* POP UP >>>>>>>>>>>>>>>>*/

    document.querySelector('.carousel').addEventListener('click', (event) => {
        if (event.target.closest('.card')) {

            //select pets data
            let cardId = event.target.closest('.card').dataset.id
            let cardData = getPetsData(cardId)

            //make a modal and overlay
            let modalWindow = generateModal(cardData)
            generateOverlay()
            document.querySelector('.overlay').append(modalWindow)
            document.body.style.overflow = "hidden"
        }
        document.querySelector('.overlay').addEventListener('click', closePopup)
    })
    const getPetsData = id => petsData.find(card => card.id == id)
    
    const generateModal = (cardData) => {

        let card = document.createElement('div')
        card.classList.add('modal')

        let template = `<img class="modal__img" src="${cardData.img}" alt="animal">
    <button class="btn slider__btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003V6.00003Z" fill="#292929"/>
    </svg></button>
    <div class="modal__wrapper">
        <div class="modal__title">
            <h3 class="modal__name">${cardData.name}</h3>
            <p class="modal__subtitle">${cardData.type} - ${cardData.breed}</p>
        </div>
        <div class="modal__description">${cardData.description}</div>
        <ul class="modal__list">
            <li class="modal__item"><span class="modal__text"><b>Age:</b> ${cardData.age}</span></li>
            <li class="modal__item"><span class="modal__text"><b>Inoculations:</b> ${cardData.inoculations.join(', ') || cardData.inoculations[0]}</span></li>
            <li class="modal__item"><span class="modal__text"><b>Disease:</b> ${cardData.diseases.join(', ') || cardData.diseases[0]}</span></li>
            <li class="modal__item"><span class="modal__text"><b>Parasites:</b> ${cardData.parasites.join(', ') || cardData.parasites[0]}</span></li>
        </ul>
    </div>`

        card.innerHTML = template
        return card
    }
    const closePopup = (event) => {
        if (!event.target.closest('.modal')) {
            document.querySelector('.overlay').remove()
            document.body.style.overflow = ""
        }
        else if (event.target.closest('.btn')) {
            document.querySelector('.overlay').remove()
            document.body.style.overflow = ""
        }
    }

    /* SLIDER >>>>>>>>>>>>>>>> */

    let pastArr = []
    let currArr = []
    let nextArr = []
    //number of cards in slider window
    let cardsNumber = document.documentElement.clientWidth > 950 ? 3 : document.documentElement.clientWidth <= 950 && document.documentElement.clientWidth > 450 ? 2 : 1
    //number of cards at all -1 (count from 0, not data.length)
    let dataNumber = petsData.length - 1

    const sliderBackward = document.querySelector('.carousel__content_backward')
    const sliderActive = document.querySelector('.carousel__content_active')
    const sliderForward = document.querySelector('.carousel__content_forward')

    const forwardBtn = document.querySelector('#btn-forward')
    const backwardBtn = document.querySelector('#btn-backward')

    function sliderInit() {
        //make random curArr from petsData
        generateRandomArr(nextArr)
        currArr = nextArr
        nextArr = []
        //make random nextArr from petsData without currArr data
        generateNextArr(nextArr, currArr)
        //shift curr-next to past-curr, next is empty
        pastArr = currArr
        currArr = nextArr
        nextArr = []
        // make new next arr, all 3 arrs is full now with 2 conditions: 1) next != curr 2) past != curr
        generateNextArr(nextArr, currArr)

        generateCards(pastArr, sliderBackward)
        generateCards(currArr, sliderActive)
        generateCards(nextArr, sliderForward)
    }
    sliderInit()

    function generateCards(arr, sliderPosition) {
        sliderPosition.innerHTML = ''
        for (let i = 0; i < cardsNumber; ++i) {
            let card = `<div class="card-list__item card-list__item_1">
            <div class="card slider__card card__interactive" data-id="${arr[i].id}">
                <img class="card__img" src="${arr[i].img}" alt="${arr[i].breed}">
                <h3 class="card__subtitle">${arr[i].name}</h3>
                <button class="card__btn btn">Learn more</button>
            </div>
            </div>`
            sliderPosition.insertAdjacentHTML('beforeend', card)
        }
    }

    function generateRandomArr(arr) {
        while (arr.length < cardsNumber) {
            let randomItemIndex = Math.round(Math.random() * dataNumber)
            if (!arr.includes(petsData[randomItemIndex]))
                arr.push(petsData[randomItemIndex])
        }
    }
    function generateNextArr(netxArr, currArr) {
        while (netxArr.length < cardsNumber) {
            let randomItemIndex = Math.round(Math.random() * dataNumber)
            if (!netxArr.includes(petsData[randomItemIndex]) && !currArr.includes(petsData[randomItemIndex]))
                netxArr.push(petsData[randomItemIndex])
        }
    }

    function forward() {
        //disabled button
        forwardBtn.removeEventListener('click', forward)
        //start animation
        sliderActive.classList.add('animation-move-left-active')
        sliderForward.classList.add('animation-move-left-forward')
        //waiting while animation ends
        sliderActive.addEventListener('animationend', () => {
            /* pastArr = currArr */
            currArr = nextArr
            generateCards(currArr, sliderActive)
            //come back
            sliderActive.classList.remove('animation-move-left-active')
            sliderForward.classList.remove('animation-move-left-forward')
            //activate button again
            forwardBtn.addEventListener('click', forward)
        })
        //add new nextArr
        nextArr = []
        generateNextArr(nextArr, currArr)
        generateCards(nextArr, sliderForward)
    }

    function backward() {
        backwardBtn.removeEventListener('click', backward)

        sliderActive.classList.add('animation-move-right-active')
        sliderBackward.classList.add('animation-move-right-backward')
        sliderActive.addEventListener('animationend', () => {
            

            currArr = pastArr
            generateCards(currArr, sliderActive)

            sliderActive.classList.remove('animation-move-right-active')
            sliderBackward.classList.remove('animation-move-right-backward')

            backwardBtn.addEventListener('click', backward)
        })
        pastArr = []
        generateNextArr(pastArr, currArr)
        generateCards(pastArr, sliderBackward)
    }

    forwardBtn.addEventListener('click', forward)
    backwardBtn.addEventListener('click', backward)
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 950) {
            cardsNumber = 3
            sliderInit()
        }
        if (document.documentElement.clientWidth <= 950) {
            cardsNumber = 2
            sliderInit()
        }
        if (document.documentElement.clientWidth < 450) {
            cardsNumber = 1
            sliderInit()
        }
    })

})