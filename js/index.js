$(document).ready(function() {
    // 100vh 구하기
    function vh(v) {
        let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }
    // 100vh내려오면 헤더 내려옴
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= vh(95)) {
            $(".index-header").addClass("header-down");
        } else {
            $(".index-header").removeClass("header-down");
        }
    })
    

})