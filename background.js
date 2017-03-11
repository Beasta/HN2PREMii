(function() {
    "use strict";
    function redirectToPremii (url) {
        var r = /id=([0-9]+)/;
        var match = r.exec(url);
        if (match) {
            return `https://hn.premii.com/#/article/${match[1]}`;
        }
        return url;
    }
    function callback (details) {
        if (details.url.indexOf("/item?id=") === -1) {
            return;
        }
        return { redirectUrl: redirectToPremii(details.url) };
    }
    var filter = { urls: ["*://news.ycombinator.com/*"]};
    var extraInfoSpec = ["blocking"];

    chrome.webRequest.onBeforeRequest.addListener(callback, filter, extraInfoSpec);
})();