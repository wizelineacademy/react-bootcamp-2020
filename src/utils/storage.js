const cacheItem = "AppState";

export const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem(cacheItem);
        if(!serializedState) return null
        return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e);
        return null
    }
}

export const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem(cacheItem, serializedState);
    }
    catch(e){
        console.log(e);
    }
}
