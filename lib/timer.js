(function() {
  var printTime;
  printTime = function() {
    return console.log(new Date());
  };
  setInterval(printTime, 1000);
}).call(this);
