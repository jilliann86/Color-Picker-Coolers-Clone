// Create a generate colors function and return an array of these color codes
//   This function will also update the colors on the front-end.
//   * Use ES6 syntax here please.

// Create function that will listen for spacebar hit and call the generate colors function.

function generateColor(columnId) {
    let randomNumber = Math.floor(Math.random() * 16777215).toString(16); 
    let randColor = randomNumber.padStart(6, 0); 
    $("#" + columnId).css("background-color", `#${randColor.toUpperCase()}`)
    $("#" + columnId).html(`#${randColor.toUpperCase()}`)
}     

$(document).on('keyup', event => {
    if (event.keyCode == 32) {
        for (let i = 1; i < 6; i++) {
            generateColor("col-" + i);
        }
    }
})

 $(document).on("click", event => {
    event.stopImmediatePropagation();
    let cellId = event.target.getAttribute('id');
    if (cellId != "col-1" && cellId != "col-2" && cellId != "col-3" && cellId != "col-4" && cellId != "col-5") {
        return;
    }
    console.log(cellId)
    let copyText = $("#" + cellId).text();
    navigator.clipboard.writeText(copyText);
    alert("Copied the color: " + copyText);
 })

$(window).on("load", event => {
    for (let i = 1; i < 6; i++) {
        generateColor("col-" + i);
    }
}) 


//Extra if you have time:

// if (lightOrDark(randColor.toUpperCase())=== 'light') {
    //     document.getElementById(columnId).style.fontFamily = "georgia,garamond,serif;color:#000000";
    // } else {
    //     document.getElementById(columnId).style.fontFamily = "georgia,garamond,serif;color:#FFFFFF";
    // }
    //console.log(document.getElementById(columnId));


//borrowed from krabs-github
// function lightOrDark(color) {
//     // Check the format of the color, HEX or RGB?
//     let r;
//     let g;
//     let b;
//     if (color.match(/^rgb/)) {
//       // If HEX --> store the red, green, blue values in separate variables
//       color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
//       r = color[1];
//       g = color[2];
//       b = color[3];
//     } 
//     console.log(r)
//     console.log(g)
//     console.log(b)
//     // HSP equation from http://alienryderflex.com/hsp.html
//     hsp = Math.sqrt(
//       0.299 * (r * r) +
//       0.587 * (g * g) +
//       0.114 * (b * b)
//     );
//     // Using the HSP value, determine whether the color is light or dark
//     if (hsp>127.5) {
//       return 'light';
//     } 
//     else {
//       return 'dark';
//     }
//   }