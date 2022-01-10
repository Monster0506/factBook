function search() {
    // get searcg abd search list for it.
    var search = document.getElementById("search").value.toLowerCase();
    var items = document.getElementsByClassName("list-item");
    // create a number of results counter, and change the text to the number of results
    var results = document.getElementById("results");
    results.innerHTML = "";
    var counter = 0;
    // check if the items list contains the search string.lower
    for (var i = 0; i < items.length; i++) {
        if (items[i].innerHTML.toLowerCase().includes(search)) {
            // if it does, hide all other items
            items[i].style.display = "block";
            // and increase the counter
            counter++;
        } else {
            // if it doesn't, hide the item
            items[i].style.display = "none";
        }
        // set the results text to the number of results
        results.innerHTML = counter + " results";


    }
}