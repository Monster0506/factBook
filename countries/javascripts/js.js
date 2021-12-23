function searchFunc(){
    // get value from search box in menu div
    var searchVal = document.search.getElementById("search").value;
    let dict = {"Aruba":"aa", "Pacific Ocean": "zn"};
    console.log(searchVal)

    // if the search is in a key of the dict
    if(searchVal in dict){
        // get the value of the key
        var country = dict[searchVal];
        // create a new div with the value of the key
        var newDiv = document.createElement("div");
        newDiv.innerHTML = country;
        // append the new div to the body
        document.body.appendChild(newDiv);

    }else{
        // if the search is not in the dict
        // create a new div with the value of the key
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Country not found";
        // append the new div to the body
        document.body.appendChild(newDiv);
    }

}
