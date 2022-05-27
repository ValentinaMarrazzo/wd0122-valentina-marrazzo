let bottone:Element|null = document.querySelector('#myform button')

bottone?.addEventListener('click', function(e){
    e.preventDefault()

    let fields = Array.from(document.querySelectorAll<HTMLInputElement>('#myform input'))

    let values = fields.map((f:HTMLInputElement) => f.value)
})