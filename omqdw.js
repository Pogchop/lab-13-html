window.onload = function () {
    var canvas = document.getElementById("mCanvas");
    var ctext = canvas.getContext("2d");
    var x = 69;
    var y = 50;
    var w = 150;
    var h = 137;
    var imgObj = new Image();
    imgObj.onload = function () {
    ctext.drawImage(imgObj, x, y, w, h);
    };
    imgObj.src="bird.jpg";
};