var footer = document.getElementById("footer");
var footerV2 = document.getElementById("footer_V2");
var mc = new Hammer.Manager(footer, footerV2);
mc.add(new Hammer.Tap());

mc.on("tap quadrupletap", function (ev) {
  footer.textContent += " This Is Climate Change! ";
});
