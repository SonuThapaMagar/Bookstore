document.getElementById("searchButton").addEventListener("click",(=>{
    //Getting the input value
    const searchValue=document.getElementById("searchInput").ariaValueMax.trim();
    const resultsContainer = document.getElementById("resultsContainer");

    if(searchValue){
        console.log(`You searched for: ${searchValue}`);
        searchInList(searchValue);
    }else{
        alert("Please enter a search term!");
    }
}))