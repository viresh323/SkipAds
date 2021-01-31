
var observeElement = (function () {
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

  
function hideAdScreen()
{
    
    if($("div[id^='div-gpt-ad']").length>0)
    {
        $("div[id^='div-gpt-ad']").css("display","none");
        console.log("removed ad")
    }
   
}

var tViewBody = function()
{
    return document.getElementsByClassName("tv-chart-view__body")[0];
}
var startObserving = function()
{
    var tviewBody = tViewBody();
    observeElement(tviewBody, hideAdScreen);
}
var initApp = function()
{
    setTimeout(startObserving,1000);
}

initApp();