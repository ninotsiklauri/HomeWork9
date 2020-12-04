function bottom(){
    let elem = document.getElementById("div3");
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 348) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.top = pos + "px"; 
        }
    }
}
function up(){
    let elem = document.getElementById("div3");
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 348) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.bottom = pos + "px"; 
        }
    }
}
function left(){
    let elem = document.getElementById("div3");
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 648) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.right = pos + "px"; 
        }
    }
}
function right(){
    let elem = document.getElementById("div3");
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 648) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.left = pos + "px"; 
        }
    }
}