var div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
document.body.appendChild(div);
div.style.position = 'absolute';
div.style.left = '50%';
div.style.top = '50%';
// add input to div
var input = document.createElement('input');
input.type = 'text';
div.appendChild(input);
// make input look nice
input.style.width = '200px';
input.style.height = '50px';
input.style.border = '1px solid black';
input.style.backgroundColor = 'white';
input.style.fontSize = '20px';
input.style.textAlign = 'center';
input.style.lineHeight = '50px';
input.style.outline = 'none';
input.style.borderRadius = '5px';
input.style.padding = '0px';
input.style.margin = '0px';
input.style.color = 'black';
input.style.fontFamily = 'sans-serif';
input.style.fontWeight = 'bold';
input.style.textShadow = '0px 0px 5px white';
input.style.textDecoration = 'none';
input.style.cursor = 'pointer';
input.style.transition = 'all 0.5s ease-in-out';
input.style.userSelect = 'none';
input.style.webkitUserSelect = 'none';
input.style.mozUserSelect = 'none';
input.style.msUserSelect = 'none';
input.style.oUserSelect = 'none';
input.style.outline = 'none';
input.style.border = 'none';
input.style.boxShadow = '0px 0px 5px black';
input.style.textAlign = 'center';
input.style.textDecoration = 'none';
input.style.letterSpacing = '2px';
// center h1
var h1 = div.getElementsByTagName('h1')[0];
h1.style.textAlign = 'center';
div.style.marginLeft = -div.offsetWidth / 2 + 'px';
div.style.marginTop = -div.offsetHeight / 2 + 'px';

div.querySelector('input').addEventListener('input', function(e) {
    var input = e.target.value;
    if (input == 'wow so cool' || input == 'wow so cool!'|| input == 'wow, so cool' || input == 'wow, so cool!') {
        div.style.backgroundColor = '#000';
        div.style.color = '#fff';
        document.body.style.backgroundColor = '#000';
        div.querySelector('h1').innerHTML = 'Yes it is';
        div.querySelector('h1').style.fontSize = '100px';
    } else
    if (input.match(/^#[0-9a-f]{6}$/i)) {
    // set h1 to "COLORED"
        div.style.backgroundColor = input;
        div.style.color = input;
        document.body.style.backgroundColor = input;
        if (input.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)) {
            var r = parseInt(RegExp.$1, 16);
            var g = parseInt(RegExp.$2, 16);
            var b = parseInt(RegExp.$3, 16);
            var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
            div.style.color = (yiq >= 128) ? '#000' : '#fff';
        }
    }
    else if (input.match(/^[0-9]{1,4}$/)) {
        div.style.fontSize = input + 'px';
        div.querySelector('h1').style.fontSize = input + 'px';
    }
    else if (input.match(/countries/i)) {
        window.location.href = 'countries/index.html';



    }else if (input.match(/^openSite:([a-zA-Z0-9-_./]+)!$/)) {
        var website = RegExp.$1;
        window.open('http://' + website, '_blank');


}
else if (input.match(/^openFile:([a-zA-Z0-9-_./]+)!$/)) {

        var file = RegExp.$1;
        window.open('file:///' + file, '_blank');
}
else if (input.match(/^search:([a-zA-Z0-9\\\/()_\-= ]+!)$/)) {
    var search = RegExp.$1;
    var engine = search.match(/\(engine=([a-zA-Z0-9-_]+)\)/);
    search = search.replace(/!$/, '');
    if (engine !=null){
    if (engine[1] == 'google') {
        search = search.replace(/\(engine=google\)/, '');
        window.open('https://www.google.com/search?q=' + search, '_blank');
    }
    else if (engine[1] == 'duckduckgo') {
            search = search.replace(/\(engine=duckduckgo\)/, '');
        window.open('https://duckduckgo.com/?q=' + search, '_blank');
    }
    else if (engine[1] == 'brave') {
            search = search.replace(/\(engine=brave\)/, '');
        window.open('https://search.brave.com/search?q=' + search, '_blank');
    }
    }else {
             window.open('https://search.brave.com/search?q=' + search, '_blank');
}
}
else if (input.match(/^interesting/)) {
    div.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    div.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = div.style.backgroundColor;
    div.querySelector('h1').innerHTML = 'Interesting';
    div.querySelector('h1').style.fontSize = '100px';
}
else if (input.match(/^clear/)) {
    div.style.backgroundColor = '#fff';
    div.style.color = '#000';
    document.body.style.backgroundColor = '#fff';
    div.querySelector('h1').innerHTML = 'Hello World';
    div.querySelector('h1').style.fontSize = '100px';
}
else{
        div.querySelector('h1').innerHTML = input;
    }
});
var button = document.createElement('button');
button.innerHTML = 'Random Color';
document.body.appendChild(button);
button.addEventListener('click', function() {
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    div.querySelector('input').value = color;
    div.style.backgroundColor = color;
    div.style.color = color;
    document.body.style.backgroundColor = color;
    if (color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)) {
        var r = parseInt(RegExp.$1, 16);
        var g = parseInt(RegExp.$2, 16);
        var b = parseInt(RegExp.$3, 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        div.style.color = (yiq >= 128) ? '#000' : '#fff';
    }
});
// make button look good
button.style.borderRadius = '50%';
button.style.backgroundColor = '#000';
button.style.color = '#fff';
button.style.fontWeight = 'bold';
button.style.textAlign = 'center';
button.style.cursor = 'pointer';
button.style.boxShadow = '0 0 10px #000';
button.style.transition = 'all 0.5s ease';
button.style.transition = 'all 0.5s ease';

var reset = document.createElement('button');
reset.innerHTML = 'Reset';
document.body.appendChild(reset);
reset.addEventListener('click', function() {
    div.querySelector('input').value = '#ffffff';
    div.style.backgroundColor = '#fff';
    div.style.color = '#000';
    document.body.style.backgroundColor = '#fff';
    div.querySelector('h1').innerHTML = 'Hello World';
    div.querySelector('h1').style.fontSize = '24px';
    div.querySelector('input').value = '';
    div.querySelector('input').style.fontSize = '24px';
    div.querySelector('input').style.width = '100%';
    div.querySelector('input').style.height = '100%';
    div.querySelector('input').style.padding = '0';
    div.querySelector('input').style.border = 'none';
    div.querySelector('input').style.backgroundColor = 'transparent';
    div.querySelector('input').style.color = '#000';
    div.querySelector('input').style.fontWeight = 'bold';
    div.querySelector('input').style.textAlign = 'center';
    div.querySelector('input').style.cursor = 'pointer';
    div.querySelector('input').style.boxShadow = '0 0 10px #000';
});
reset.style.borderRadius = '50%';
reset.style.backgroundColor = '#000';
reset.style.color = '#fff';
reset.style.fontWeight = 'bold';
reset.style.textAlign = 'center';
reset.style.cursor = 'pointer';
reset.style.boxShadow = '0 0 10px #000';
reset.style.transition = 'all 0.5s ease';
reset.style.transition = 'all 0.5s ease';
var copy = document.createElement('button');
copy.addEventListener('click', function() {
    div.querySelector('input').select();
    document.execCommand('copy');
});
copy.style.borderRadius = '50%';
copy.style.backgroundColor = '#000';
copy.style.color = '#fff';
copy.style.fontWeight = 'bold';
copy.style.textAlign = 'center';
copy.style.cursor = 'pointer';
copy.style.boxShadow = '0 0 10px #000';
copy.style.transition = 'all 0.5s ease';
copy.style.transition = 'all 0.5s ease';
copy.innerHTML = 'Copy';
document.body.appendChild(copy);
copy.addEventListener('click', function() {
    var input = div.querySelector('input');
    input.select();
    document.execCommand('copy');
});
div.style.transition = 'background-color 1s';
document.body.style.transition = 'background-color 1s';
div.querySelector('input').style.width = '100%';
var help = document.createElement('div');
var meanings= document.createElement('div');
meanings.innerHTML = '<h1>Meaning</h1><p>< > : optional</p><p>[ ] : user choice</p>';
help.innerHTML = '<h2>Help</h2><p>Type a hex color prefixed with # to change the bg color. Type in a number to change the font-size.</p><p> Type openSite:[site address without "https://"]! to open a website in a new tab.</p><p>type openFile:[filename]! to open a file</p><p>type search: <(engine=[duckduckgo,brave,google])>[search term]"</p><p>Type countries to open the countries menu. </p>';// add a button to this
help.style.display = 'none';
help.style.transition = 'height 2s';
meanings.style.transition = 'height 2s';
meanings.style.display = 'none';
help.appendChild(meanings);
div.appendChild(help);
var button = document.createElement('button');
button.innerHTML = 'Symbol Meanings';
help.appendChild(button);
button.addEventListener('click', function() {
    if (meanings.style.display == 'none') {
        meanings.style.display = 'block';
        meanings.style.height = 'auto';
    } else {
        meanings.style.display = 'none';
        meanings.style.height = '0';
    }
});
var button = document.createElement('button');
button.innerHTML = 'Help';
document.body.appendChild(button);
button.addEventListener('click', function() {
    if (help.style.display === 'none') {
        help.style.display = 'block';
        help.style.height = 'auto';
    } else {
        help.style.display = 'none';
        help.style.height = '0';
    }
});
//place help button in bottom right corner
button.style.position = 'fixed';
button.style.bottom = '0';
button.style.right = '0';
button.style.borderRadius = '50%';
button.style.backgroundColor = '#000';
button.style.color = '#fff';
button.style.fontWeight = 'bold';
button.style.textAlign = 'center';
button.style.cursor = 'pointer';