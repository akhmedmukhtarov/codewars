function justify(text, width){
    const arrayOfText = text.split(' ')
    const lines = []
    let currenLine = []
    let currentLength = 0
    for(const word of arrayOfText){
        if(currentLength + (currenLine.length-1) + word.length >= width){
            const spaces = width - currentLength
            const gaps = currenLine.length - 1
            const spacesPerGap = Math.floor(spaces / gaps)
            let extraSpaces  = spaces % gaps
            const line = currenLine
            .map((el,i) => {
                if(i != currenLine.length - 1)
                el += ' '.repeat(spacesPerGap);
                if (extraSpaces) {
                    el += ' ';
                    extraSpaces--;
                }
                return el;
            })
            .join('');
            lines.push(line);
            console.log(line);
            currenLine = []
            currentLength = 0

        }
        currenLine.push(word)
        currentLength += word.length
    }
    const lastLine = currenLine.join(' ')
    lines.push(lastLine)
    const result = lines.join('\n')
    console.log(result);
    return result
}