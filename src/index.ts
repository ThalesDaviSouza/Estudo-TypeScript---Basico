type Hero = {
    name: string,
    vulgo: string
}

console.log('Hello World!');

function printHero(hero: Hero){
    console.log('Name: ', hero.name)
    console.log('Vulgo: ', hero.vulgo)
}

printHero({
    name: 'Peter Parker',
    vulgo: 'Miranha'
})