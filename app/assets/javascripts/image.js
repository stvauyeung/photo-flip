$(document).on('page:change', function() {

  var images = ["/images/bbbbbb.JPG", "/images/ccccc.JPG", 
  "/images/ddddd.JPG", "/images/eeeee.JPG", "/images/fffff.JPG", 
  "/images/ggggg.JPG", "/images/hhhhh.JPG", "/images/iiiii.JPG", 
  "/images/jjjjjj.JPG", "/images/kkkkk.JPG", "/images/llllll.JPG", 
  "/images/mmmmmm.JPG", "/images/nnnnnn.JPG", "/images/oooooo.JPG", 
  "/images/pppppp.JPG", "/images/qqqqqq.JPG", "/images/rrrrrr.JPG", 
  "/images/sssss.JPG", "/images/tttttt.JPG", "/images/uuuuuu.JPG", 
  "/images/vvvvvv.JPG", "/images/wwwww.JPG", "/images/xxxxxx.JPG"];

  var currentImage = 0;


  $('#point-left').on('click', function() {
    if (currentImage < -22) {
      currentImage = -1
      var newImage = images.length + currentImage;
    } else if (currentImage > 0 && currentImage < images.length) {
      currentImage = currentImage - 1;
      var newImage = currentImage;
    } else {
      currentImage = currentImage - 1;
      var newImage = images.length + currentImage;
    };
    
    $('#main-img').attr('src', images[newImage]);
    console.log(currentImage);
  });
  
  $('#point-right').on('click', function() {
    currentImage = currentImage + 1;
    if (currentImage == 0) {
      var newImage = 0;
    } else if (currentImage == 23) {
      currentImage = 0;
      var newImage = currentImage;
    } else if (currentImage < 0) {
      var newImage = images.length + currentImage;
    } else {
      var newImage = currentImage - 1;
    };

    $('#main-img').attr('src', images[newImage]);
    console.log(currentImage);
  });
});