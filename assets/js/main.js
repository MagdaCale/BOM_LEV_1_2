const btn = document.getElementById('btn')
const zeit = document.querySelector('.zeit')

let counter
let myInterval

btn.addEventListener('click', () =>{
    counter = 100
    btn.innerHTML = 'START'
    myInterval = setInterval(prozentCounter, 500)
})

const prozentCounter = () => {
    if(counter === 0){
        clearInterval(myInterval)
        zeit.innerHTML = 'YEAH!'
        btn.innerHTML = 'click again'
    }else {
        console.log(counter)
        counter -= 1
        zeit.innerHTML = counter + '%'
    }
}

