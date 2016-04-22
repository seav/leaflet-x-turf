// Library function to load JSONP data
// Sourced from https://gist.github.com/gf3/132080/110d1b68d7328d7bfe7e36617f7df85679a08968
var loadJSONP = (function(){
  var unique = 0;
  return function(url, callback, param) {

    // initialize
    var name = "_jsonp_" + unique++;
    url += "&" + param + "=" + name;

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Setup handler
    window[name] = function(data){
      callback.call(window, data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };

    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();
