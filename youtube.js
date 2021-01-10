var observeYoutubePlayer = (function () {
  var MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver;

  return function (obj, callback) {
    if (!obj || obj.nodeType !== 1) return;

    if (MutationObserver) {
      // define a new observer
      var mutationObserver = new MutationObserver(callback);

      // have the observer observe foo for changes in children
      mutationObserver.observe(obj, { childList: true, subtree: true });
      return mutationObserver;
    }

    // browser support fallback
    else if (window.addEventListener) {
      obj.addEventListener("DOMNodeInserted", callback, false);
      obj.addEventListener("DOMNodeRemoved", callback, false);
    }
  }; 
})();

// Function to click the Skip Ad button
var clickSkipAdButton = function (ytPlayer) {
  let elements = document.getElementsByClassName(
    "ytp-ad-skip-button ytp-button"
  );
  
  // check if element exists
  if (elements.length>0) {
    elements[0].click();
    console.log("Skipped");
  }
};

var getYoutubePlayer = function()
{
    return document.getElementById("ytd-player");
  
}

var startObserving = function()
{
    var youtubePlayer = getYoutubePlayer();
    observeYoutubePlayer(youtubePlayer, clickSkipAdButton);
}

var initApp = function()
{
    setTimeout(startObserving, 5000);
}


initApp();
