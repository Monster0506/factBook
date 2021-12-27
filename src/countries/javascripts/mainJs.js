var mode;

function search() {
    // get searcg abd search list for it.
    var search = document.getElementById("search").value.toLowerCase();
    var items = document.getElementsByClassName("item");
    // create a number of results counter, and change the text to the number of results
    var results = document.getElementById("results");
    results.innerHTML = "";
    var counter = 0;
    // if blank search, hide all
    if (search == "") {
        for (var i = 0; i < items.length; i++) {
            const newLocal = items[i].style.display = "none";
        }
        results.innerHTML = "";
    } else {
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
        dark();

    } else if (mode === "dark") {

        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/water.css@2/out/light.css";
        document.head.appendChild(link);
        mode = "light";
        // move body down 80px
        document.body.style.marginTop = "80px";
    } else {
        dark();
    }

}

function dark() {
    // set theme to dark mode
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css";
    document.head.appendChild(link);
    mode = "dark";
    // move body down 80px
    document.body.style.marginTop = "80px";
    return link;
}
