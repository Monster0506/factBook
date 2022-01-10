function search() {
    // get search and check list to determine if any items contain the item. Then, display the items that do, and hide the others.
    var searchI = document.getElementById("search").value.toLowerCase();
    var items = document.getElementsByClassName("list-item");
    // create a number of results counter, and change the text to the number of results
    var results = document.getElementById("results");
    results.innerHTML = "";
    var counter = 0;
    // check if the items list contains the search string.lower
    // use a for of loop
    for (var i of items) {
        if (i.innerHTML.toLowerCase().includes(searchI)) {
            i.style.display = "block";
            counter++;
        } else {
            i.style.display = "none";
        }
        results.innerHTML = counter + " results";
    }
}

function huntDropdown() {
    console.log("running");
    // get the select menu and search for the selected value
    var select = document.getElementById("hunt-select").value.toLowerCase();
    // get the list of items and check if the selected value is in the list
    var items = document.getElementsByClassName("list-item");
    // create a number of results counter, and change the text to the number of results
    var results = document.getElementById("results");
    results.innerHTML = "";
    var counter = 0;
    // check if the items list contains the search string.lower
    // use a for of loop
    for (var i of items) {
        if (i.innerHTML.toLowerCase().includes(select)) {
            i.style.display = "block";
            counter++;
        } else {
            i.style.display = "none";
        }
        results.innerHTML = counter + " results";
    }
}
