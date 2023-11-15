function getFreeUrinals(urinals) {
    if (urinals.includes('11')) {
        return -1;
    }
    let counter = 0
    for (let i = 0; i < urinals.length; i++) {
        const currentUrinal = urinals[i];
        const previousUrinal =  i == 0 ? urinals[0] : urinals[i-1]
        const nextUrinal = i == urinals.length - 1 ? urinals[urinals.length - 1] : urinals[i+1]
        if (currentUrinal == '0' && previousUrinal == '0' && nextUrinal == '0') {
            urinals = urinals.split('')
            urinals[i] = '1'
            urinals = urinals.join('')
            counter++
        }
    }
    return counter
}

console.log(getFreeUrinals('10000'));