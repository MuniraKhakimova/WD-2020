function add() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("ItemInput").value;
  var t = document.createTextNode(inputValue);
  li.append(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("UL").append(li);
  }
  document.getElementById("ItemInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.append(txt);
  li.append(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


var nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.append(txt);
  nodelist[i].append(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




