function genSelector(data) {
    const Type = {
        redblue: './IMG/generationTypes/red-blue.png',
        goldsilver: './IMG/generationTypes/gold-silver.png',
        rubysapphire: './IMG/generationTypes/ruby-sapphire.png',
        fireredleafgreen: './IMG/generationTypes/firered-leafgreen.png',
        diamondpearl: './IMG/generationTypes/diamond-pearl.png',
        black2white2: './IMG/generationTypes/black2-white2.png'
    }

    return Type[data];
}