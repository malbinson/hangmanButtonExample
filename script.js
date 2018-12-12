

var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function addButtons() {
    var btn;
    var div = document.getElementById("buttonContainer");

    for(var i=0; i<a.length;i++) {
        btn = document.createElement("button");
        btn.setAttribute("class","ltrBtn");
        btn.setAttribute("value",a[i]);
        btn.setAttribute("onclick","btnClickHandler(this)");
        btn.innerHTML = a[i];
        div.appendChild(btn);
    }



}

function btnClickHandler(button) {

    document.getElementById("output").innerHTML = button.value;


}