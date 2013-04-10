// ==UserScript==
// @name           Show Me More Instagram
// @namespace      www.kelvingan.co.uk
// @description    Launch a user's stream in Instagram app using http://www.pushthepage.com - you need to install their app as well
// @include        http://instagr.am/p/*
// @version 0.2
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
    var jQueryScript = document.createElement("script");
    jQueryScript.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    jQueryScript.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(jQueryScript);
}

function moreInstagram() {
    var username = $('p.username:first');
    var usernameText = username.text();

    var instaURI = 'instagram://user?username='+username.text();
    var newURI='http://www.pushthepage.com/send?device=d581ac7cb7efc8e49663dbc18f9af4dd&url='+instaURI;

    username.wrapInner('<a style="color: #456A81;" href="http://instagre.at/#/by/' + usernameText + '" />');

    username.after('<p><a style="color: #456A81;" href="' + newURI + '">view stream on Instagram iPhone app using Push The Page</a></p>');
    
}


// load jQuery and execute the main function
addJQuery(moreInstagram);