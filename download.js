document.getElementById("download").addEventListener("click", function() {
  var downloadLink = document.createElement("a");
  downloadLink.href = "media/florian_llimos";
  downloadLink.download = "florian_llimos";
  downloadLink.click();
});
