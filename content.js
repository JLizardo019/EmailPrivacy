let data =[];
console.log("In content");

$('button[type=submit]').click(function () //when they click submit button
  {

    // I want to add data validation so it doesnt get added twice into the array

    console.log("about to collect email");
    console.log("email I collected:", $('input[type=email]').val()); 
    let result = [ $('input[type=email]').val(), window.location.href]; // collect email and url
    data.push(result);
    chrome.runtime.sendMessage({"info": data}, function(response) {
      console.log("sent");
    });
  });

console.log("what I collected so far in array",data);

// notes to open the terms and conditions policy page and parse it
///////////////////////////////////////////////////////////////////

//window.open(path.html,'_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none', '');
// open a hidden window from the user

//

// You can't do that if the document you're opening in a new window is from a different domain (for example, yoursite.com opening a new window that loads google.com). This is a security restriction known as same-origin policy. More information: Same-origin policy (MDN).

// Hope this clarifies things a bit for you.

// shareimprove this answer

// function openWin() {
//   myWindow = window.open("http://www.google.com/", 
//       "myWindow", "width=400, height=400");

//   myWindow.opener.document.write(myWindow.document.body.innerHTML);
//myWindow.close();   // Closes the new window
// }

// myWindow.opener.document.body;
//   console.log("here",test); // look at the content of the pop-up page