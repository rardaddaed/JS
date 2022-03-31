function searchBooks(library, authorName) {
    let titleArr = [];
    for (let i = 0; i < library.length; i++){
        if (library[i].author === authorName){
            titleArr.push(library[i].title)
        } 
    }
    if (!titleArr.length){
        return 'NOT FOUND';
    }
    return titleArr.join();
}