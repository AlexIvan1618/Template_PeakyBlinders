const personage = () => {
    var animSmoke = document.getElementById('animSmoke')

    animSmoke.style.display = 'block'
    animSmoke.style.animation = 'ease 2s linear 0.5s'
    document.getElementsByClassName('container_primary')[0].style.display = 'none'

    const changeToPerso = () => {
        var animSmoke = document.getElementById('animSmoke')
        var personage_container = document.getElementById('personage_container')
        animSmoke.style.display = 'none'
        personage_container.style.display = 'block'
        document.getElementById('persoLink').classList.toggle('active_link')
    }

    setTimeout(changeToPerso, 1000)
}