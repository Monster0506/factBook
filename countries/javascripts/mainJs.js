var mode = "light";
function search() {
    var search = document.getElementById("search").value.toLowerCase();
    var items = document.getElementsByClassName("item");
    // create a number of results counter, and change the text to the number of results
    var results = document.getElementById("results");
    results.innerHTML = "";
    var counter = 0;
    // if blank search, hide all
    if (search == "") {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }
        results.innerHTML = "";
    }
    else {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.innerHTML.toLowerCase().indexOf(search) > -1) {
                item.style.display = "table";
                counter++;
            } else {
                item.style.display = "none";
            }
        }
        results.innerHTML = counter + " results out of " + items.length;
    }
}
//dark mode toggle
function modeT() {
    if (mode === "light") {
        
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css";
        document.head.appendChild(link);
        mode = "dark";

        document.body.style.marginTop = "50px";
    }
    else {

        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/water.css@2/out/light.css";
        document.head.appendChild(link);
        mode = "light";
        // move body down 50px
        document.body.style.marginTop = "50px";
    }

}




