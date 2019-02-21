function size() {
  var elmnt = document.getElementById("myDIV");
  var txt = "";
  txt += "Height, padding: " + elmnt.clientHeight + "px<br>";
  txt += "Height, padding, border: " + elmnt.offsetHeight + "px<br>";
  txt += "Width, padding: " + elmnt.clientWidth + "px<br>";
  txt += "Width, padding, border: " + elmnt.offsetWidth + "px";
  document.getElementById("demo").innerHTML = txt;
  setInterval(size, 1000);
}
