let four_elements = [];
let random_element;

let mousex = 0;
let mousey = 0;

let timer;

$(document).ready(() => {
    four_elements = [];
    $("._404").html("");

    for (let index = 0; index < 250; index++) {
        create_404();
    }
    
    update();
});

let update = () => {
    clearTimeout(timer);
    randomize();
    timer = setTimeout(function () {
        update();
    }, 1750);
}

let create_404 = () => {
    let element = document.createElement("DIV");
    element.innerHTML = "404";
    element.classList = "four";
    $("._404").append(element);
    four_elements.push(element);
}

let randomize = () => {
    let index = 0;

    four_elements.forEach((element, index) => {
        let u = Math.random();
        let v = Math.random();
        let theta = u * 2.0 * Math.PI;
        let phi = Math.acos(2.0 * v - 1.0);
        let r = Math.cbrt(20);
        let sinTheta = Math.sin(theta);
        let cosTheta = Math.cos(theta);
        let sinPhi = Math.sin(phi);
        let cosPhi = Math.cos(phi);
        let x = r * sinPhi * cosTheta;
        let y = r * sinPhi * sinTheta;
        y += 4;
        let z = r * cosPhi;

        $(element).css("transform",
            "translate3d(" + x + "in," + y + "in," + z + "in) " +
            "scale(" + Math.abs(z / 20) + ") " +
            ""
        );
        $(element).css("opacity", Math.abs(z / 2.5));
    });

    $(".four").css("color", '#' + Math.floor(Math.random() * 16777215).toString(16));
}