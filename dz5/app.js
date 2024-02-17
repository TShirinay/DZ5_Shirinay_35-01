const app = (lastname,name,surname)=>{
    return `${lastname} ${name.toUpperCase()[0]}.${surname.toUpperCase()[0]}.`
}
console.log(app('Абдутахирова', 'Эмилия', 'Замирбековна'))


function books (book){
    const filterBooks = book.filter(book=>book.includes('У') || book.includes('у'))
    filterBooks.forEach (book => console.log(book))
}
const arrayBooks = ['Мастер и маргарита', 'Убийства по алфавиту', 'Шерлок Холмс', 'Тайна Отца Брауна']
books(arrayBooks)


let exploiter = [
    {name: 'Sasha', birtday: '26.03.2001'},
    {name: 'Jack', birtday: '29.08.2007'},
    {name: 'Roman', birtday: '30.12.1978'},
    {name: 'Mia', birtday: '07.11.2005'},
    {name: 'Bob', birtday: '17.01.1997'},
    {name: 'Minnie', birtday: '16.03.2008'},
]
exploiter.forEach((user) => console.log(`Пользователь ${user.name} родился ${user.birtday}`))


function isPalidrom(str){
    const string = str.toLowerCase()

    let stringWithSpace = ''
    for (let i = 0; i<string.length; i++){
        if (string[i] !== ' '){
            stringWithSpace += string[i]
        }
    }

    for (let i = 0; i<stringWithSpace.length; i++){

    }

}
function palidrom(str){
    let palidrom2 = ''
    for (let i = str.length -1; i >= 0; i--){
        palidrom2 += str[i]
    }
    return palidrom2
}
console.log(palidrom('cinema').toLowerCase())