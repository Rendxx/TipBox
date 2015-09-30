
$(function () {
    var sampleHtml1 = "<div class='tip-content'><div class='icon'></div><div class='text'>Html content<br/>Customize: offset</div></div>";
    var sampleHtml2 = "<div class='tip-content tip-content-2'><div class='icon'></div><div class='text'>Html content<br/>Customize: Transparent BG / Sharp Corner</div></div>";

    var squ1 = $(".squ1");
    var squ2 = $(".squ2");
    var squ3 = $(".squ3");
    var squ4 = $(".squ4");
    squ1.tip({
        content: "Default options with plain text. Customize: Width / Font",
        width: 200,
        orientation: "top",
        css: {
            "width": "200px",
            "font-family": "Raleway"
        }
    });
    squ2.tip({
        content: "Customize: color / margin / padding",
        orientation: "left",
        margin: 30,
        css: {
            "background-color": "#ddd",
            "color": "#333",
            "padding": "20px"
        }
    });
    squ3.tip({
        content: sampleHtml1,
        orientation: "bottom",
        offset: 80
    });
    squ4.tip({
        content: sampleHtml2,
        orientation: "right",
        css: {
            "height": "140px",
            "background-color": "rgba(50, 50, 55, 0.70)",
            "border-radius": "0px"
        }
    });
});