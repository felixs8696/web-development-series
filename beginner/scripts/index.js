var nav = document.getElementsByTagName('nav')[0];
window.onscroll = function () {
    if (document.body.scrollTop > 200 ) {
        nav.classList.add("nav-opaque");
        nav.classList.remove("nav-translucent");
    }
    else {
        nav.classList.add("nav-translucent");
        nav.classList.remove("nav-opaque");
    }
};
