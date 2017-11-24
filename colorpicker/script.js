var theBox = null;
window.addEventListener('load', function (e) {
    // initialize
    var initialImage = 'data:image/png;base64,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';

    var initImage = document.createElement('img')
    initImage.src = initialImage;
    initImage.onload = function(e) {
        loadImageIntoCanvas(initImage);
    }

    document.body.onpaste = function (e) {
        var items = e.clipboardData.items;
        for (var i = 0; i < items.length; ++i) {
            if (items[i].kind == 'file' &&
                items[i].type.indexOf('image/') !== -1) {
                var blob = items[i].getAsFile();
                window.URL = window.URL || window.webkitURL;
                var blobUrl = window.URL.createObjectURL(blob);
                var imageObj = document.createElement('img');
                imageObj.src = blobUrl;
                imageObj.onload = function(e) {
                    loadImageIntoCanvas(imageObj);
                }
            }
        }
    }
});

function loadImageIntoCanvas(imageObj) {
    var canvas = document.createElement('canvas');
    canvas.width = imageObj.width;
    canvas.height = imageObj.height;
    
    var imgWidth = imageObj.naturalWidth;
    var screenWidth = canvas.width;
    var scaleX = 1;
    if (imgWidth > screenWidth)
        scaleX = screenWidth / imgWidth;
    var imgHeight = imageObj.naturalHeight;
    var screenHeight = canvas.height;
    var scaleY = 1;
    if (imgHeight > screenHeight)
        scaleY = screenHeight / imgHeight;
    var scale = scaleY;
    if (scaleX < scaleY)
        scale = scaleX;
    if (scale < 1) {
        imgHeight = imgHeight * scale;
        imgWidth = imgWidth * scale;
    }

    canvas.height = imgHeight;
    canvas.width = imgWidth;
    canvas.style.cursor = 'crosshair';
    
    var context = canvas.getContext("2d");
    context.drawImage(imageObj, 0, 0, imageObj.naturalWidth, imageObj.naturalHeight, 0, 0, imgWidth, imgHeight);

    theBox = document.getElementById('the-box');
    while (theBox.firstChild) {
        theBox.removeChild(theBox.firstChild);
    }
    theBox.appendChild(canvas);
    canvas.onclick = getColor;    
}

function getColor(e) {
    var pos = findPos(this);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;
    var coord = "x=" + x + ", y=" + y;
    var c = this.getContext('2d');
    var p = c.getImageData(x, y, 1, 1).data;
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    document.getElementById('colorbox').style.backgroundColor = hex;
    document.getElementById('status').innerHTML = "Color at: " + coord + " is RGB: " + hex;
}

function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
