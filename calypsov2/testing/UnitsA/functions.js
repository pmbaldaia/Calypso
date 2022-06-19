exports.rating = function(rating) { 
    if(isNaN(rating) || rating < 1 || rating > 5){
        throw Error('invalid rating')
    } else {
        return true
    }
}

exports.checkLink = function(link) {
    if(!link.includes("https://")){
        throw Error('invalid link')
    } else {
        return true
    }
}