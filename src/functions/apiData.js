async function fetchData(uri) {

    try {
        const response = await fetch(uri);
        const data = await response.json();
        return data;
    
    } catch (error) {
        throw new Error(`There was a networking error: ${error}`);
    }
    
}

module.exports = { fetchData };