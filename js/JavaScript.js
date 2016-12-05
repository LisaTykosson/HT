function lokalisation() {
    if 
                        (document.getElementById("lokal").selectedIndex == "1") {
        document.getElementById("meningiom").style.display = "block"
        document.getElementById("ovriga").style.display = "none";
        document.getElementById("ryggar").style.display = "none";
    }
    else if (
        document.getElementById("lokal").selectedIndex == "2") {
        document.getElementById("ovriga").style.display = "block"
        document.getElementById("meningiom").style.display = "none";
        document.getElementById("ryggar").style.display = "none";
    }
    else if (
    document.getElementById("lokal").selectedIndex == "3") {
        document.getElementById("ryggar").style.display = "block"
        document.getElementById("meningiom").style.display = "none";
        document.getElementById("ovriga").style.display = "none";
    }

    else {
        document.getElementById("meningiom").style.display = "none"
        document.getElementById("ryggar").style.display = "none";
        document.getElementById("ovriga").style.display = "none";
    }
}

function frammening() {
    if (document.getElementById("framre").checked)
        document.getElementById("fram").style.display = "block";
    else {
        document.getElementById("fram").style.display = "none";
    }
}
function mellmening() {
    if (document.getElementById("mell").checked)
        document.getElementById("mellan").style.display = "block";
    else {
        document.getElementById("mellan").style.display = "none";
    }
}
function bakmening() {
    if (document.getElementById("bak").checked)
        document.getElementById("bakre").style.display = "block";
    else {
        document.getElementById("bakre").style.display = "none";
    }
}
function konvmening() {
    if (document.getElementById("konvex").checked)
        document.getElementById("konvexitet").style.display = "block";
    else {
        document.getElementById("konvexitet").style.display = "none";
    }
}