function countUniqueItems(arr) {
    let counter = 0;
    arr.forEach((element, index) => {
        if (arr.indexOf(element) === index){
            counter += 1;
        }
    });
    return counter;
}