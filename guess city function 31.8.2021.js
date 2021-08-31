function guessCity(capital, coastal, famous, ancient) {
    // your code goes here
    if(capital && famous && ancient && !coastal){
        return "Jeruslaem"
    }if(!capital && coastal && famous && !ancient){
        return "Tel-Aviv"
    }if(!capital && coastal && !famous && ancient){
        return "Acre"
    }if(!capital && coastal && !famous && !ancient){
        return "Zikim"
    }if(!capital && !coastal && !famous && !anceint){
        return "Musmus"
    }else return "Don't Know This one"
}
console.log(guessCity(true, true, true , true));