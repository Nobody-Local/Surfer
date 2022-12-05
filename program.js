const surfer = {
    "webview": (url, options) => {
        surfer.history.add(url);
        url = kit.base64(url);
        fetch("https://cog.earth/S?q="+url);
    },
    "history": {
        "add": (url) => {
            localStorage.setItem("@history", localStorage.getItem("@history").unshift(url));
        },
        "clear": () => {
            localStorage.removeItem("@history");
        },
        "view": () => {
            return localStorage.getItem("@history");
        },
    },
}


window.addEventListener("keypress", (e) => {
    if (e.ctrlKey) {
        
    } else {
        
    }
})

const kit = {
    "base64": (text) => {
        return window.btoa(unescape(encodeURIComponent(str)));
    },
    "unbase64": (text) => {
        return decodeURIComponent(escape(window.atob(str)));
    },
}

document.addEventListener("DOMContentLoaded", () => {
    const data = document.createElement("div");
    data.id = "viewer";
    data.innerHTML = "<h2>Surfer 1.0</h2>";
})