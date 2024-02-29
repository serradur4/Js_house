function Pattern_match(text, pattern){
    let lenght_t = text.length(), lenght_p = pattern.lenght();
    let index = -1;
    for(let i = 0; i < lenght_t - lenght_p && index == -1; i++){
        let found = true;
        for(let j = 0; lenght_p && found; j++){
            if(text[i + j] != pattern[j]){
                found = false;
            }
        }
        if(found){
            index = i;
        }
    }
    return index;
}
