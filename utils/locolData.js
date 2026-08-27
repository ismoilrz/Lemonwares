const btns = document.querySelectorAll('.viewBtn')
const contents = document.querySelectorAll('.contentView')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'))
        contents.forEach(cnt => cnt.classList.remove('active'))

        btn.classList.add('active')

        const btnTar = btn.getAttribute('data-view')
        document.getElementById(btnTar).classList.add('active')
    })
})