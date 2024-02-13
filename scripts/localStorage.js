const saveToLocalStorage = (NameGenerator) => {
    let favorites = getLocalStorage();

    // let save
    if(!favorites.includes(NameGenerator)){
        favorites.push(NameGenerator);
    }
    localStorage.setItem("Favorites", JSON.stringify(favorites));

}
const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (NameGenerator) => {
    let saved = getLocalStorage();

    let namedIndex = saved.indexOf(NameGenerator);

    
    saved.splice(namedIndex, 1);
    
    localStorage.setItem("Favorites", JSON.stringify(saved));
}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage};