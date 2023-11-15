function scramble(str1, str2) {
    const obj = {}
    for(const letter of str1){
        obj[letter] = (obj[letter] || 0)+1
    }

    for(const letter of str2){
        if(!obj[letter]){
            return false
        }
        obj[letter]--
    }
    return true
}

scramble("str1", "str2")