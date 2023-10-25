document.addEventListener("DOMContentLoaded", () => {
    let currentUrl = new URL(window.location);

    let splitPathname = currentUrl.pathname.split("/");

    let lastPathname = splitPathname[splitPathname.length - 1];

    console.log(lastPathname);

    if (lastPathname == "zoom") {
        currentUrl = "https://us02web.zoom.us/j/4146842904";
    } else {
        currentUrl.pathname = splitPathname[0];
    }

    window.location.replace(currentUrl);
});