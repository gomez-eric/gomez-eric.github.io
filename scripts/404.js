let size = 25;

$(document).ready(() => {
    let fours = $(".four");
    for (let index = 0; index < fours.length; index++) {
        let element = fours[index];
        $(element).css("font-size", size + "px");
        size--;
        
    }
});