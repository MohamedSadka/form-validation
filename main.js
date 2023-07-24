/**
 * ! call the html tags
 * make addeventlisnter on the input submit
 * check if the input value is empty => put a mes in the error div
 * make all that easiter using functions
 */

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let userName =id("username"),
    email = id("email"),
    password = id("password"),
    submit = id("submit"),
    form = id("form");
    errorMsg= classes("error"),
    failureIcon = classes("failure-icon"),
    successIcon = classes("success-icon");




form.addEventListener("submit" , (e) => {
    e.preventDefault();
    engine(userName,0,"Username can't be blank");
    engine(email,1,"email can't be blank");
    engine(password,2,"password can't be blank");
})

function engine(id,serial,message) {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }else {
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
        errorMsg[serial].innerHTML = "";
    }
}

