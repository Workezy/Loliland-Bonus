let switcher = document.querySelector('.switcher');
let description = document.querySelector('.description');
switcher.addEventListener('click', () => {
    if(description.classList.contains('off')) {
        description.textContent = 'Автоматическое получение бонуса включено';
        description.classList.remove('off');
        description.classList.add('on');
    } else {
        description.textContent = 'Автоматическое получение бонуса отключенно';
        description.classList.remove('on');
        description.classList.add('off');
    }
})