

var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function addButtons() {

    //set up some vars (neater this way than to create fresh vars on each loop)
    var btn;
    var div = document.getElementById("buttonContainer");

    for(var i=0; i<a.length;i++) {

        //create and save a "button" html element
        btn = document.createElement("button");

        //add the three necessary attributes to my button element
        btn.setAttribute("class","ltrBtn");
        btn.setAttribute("value",a[i]);
        btn.setAttribute("onclick","btnClickHandler(this)");

        //set the display value of the button
        btn.innerHTML = a[i];

        //append the button element to the page
        div.appendChild(btn);

        //final html output is:
        // <button class="ltrBtn" value="a" onclick="btnClickHandler(this)">a</button>


    }



}

function btnClickHandler(button) {
    //the "this" parameter returns the button itself
    //write the button value to the page
    document.getElementById("output").innerHTML = button.value;


}