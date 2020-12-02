export const loadFromLocalStorage = (key) => {
    try{
        const serializedState = localStorage.getItem(key);
        if(!serializedState) return null
        return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e);
        return null
    }
}

export const saveToLocalStorage = (key, state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    }
    catch(e){
        console.log(e);
    }
}
