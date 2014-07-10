/**
 * Change the slide on hover
 * @return {[type]} [description]
 */
(function() {
  'use strict';

  // cooooool
  var _slice = function(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  };

  var _removeActive = function(objt, length){
    for (var j = 0; j < length; j++) {
      // yes, another closure
      (function(j) {
        objt[j].classList.remove("active");
      })(j);
    }
  };

  var querySlides = _slice(".carousel-container img");
  var queryButtons = _slice(".lst-inline.nav-points li");
  var length = querySlides.length;

  // bind each with the slide
  for (var i = 0; i < length; i++) {
    // yes, a closure
    (function(i) {
      queryButtons[i].addEventListener("mouseover", function() {
        _removeActive(querySlides, length);
        querySlides[i].classList.add("active");
      });
    })(i);
  }

})();


/**
 * Change the slide when click in the corners
 * @return {[type]} [description]
 */
(function() {
  'use strict';

  // cooooool
  var _slice = function(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  };

  var _removeActive = function(objt, length){
    for (var j = 0; j < length; j++) {
      // yes, another closure
      (function(j) {
        objt[j].classList.remove("active");
      })(j);
    }
  };

  var querySlides = _slice(".carousel-container img");
  var buttonRight = _slice(".nav-next");
  var buttonLeft = _slice(".nav-prev");
  var length = querySlides.length;
  var count = 1;

  buttonRight[0].addEventListener("click", function() {
    _removeActive(querySlides, length);
    count = (count === length-1) ? 0 : ++count;
    querySlides[count % length].classList.add("active");
  });

  buttonLeft[0].addEventListener("click", function() {
    _removeActive(querySlides, length);
    count = (count === 0) ? length-1 : --count;
    querySlides[count % length].classList.add("active");
  });

})();