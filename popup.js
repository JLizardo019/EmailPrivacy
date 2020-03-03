//let data = [1,2,3];








window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      // ...and send a request for the DOM info...
      chrome.tabs.onMessage.addListener(
          tabs[0].id,
          function()
          {
              alert("h");
            console.log("recieved");
            let element = document.getElementById("results");
            element.innerText = request.info;

          });
    });
  });
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
    //   console.log(sender.tab ?
    //               "from a content script:" + sender.tab.url :
    //               "from the extension");

        // alert(request.info);
    //data.request.info;
    // console.log("recieved");
    // let element = document.getElementById("results");
    // element.innerText = request.info;
    //});
//console.log(data);