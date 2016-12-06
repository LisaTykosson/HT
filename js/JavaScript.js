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
function infektiosa() {
    if (document.getElementById("infektion").checked)
        document.getElementById("infekt").style.display = "block";
    else {
        document.getElementById("infekt").style.display = "none";
    }
}
function postop() {
    if
        (document.getElementById("postopkomp").selectedIndex == "2") {
        document.getElementById("komplikationer").style.display = "block";
    }
    else {
        document.getElementById("komplikationer").style.display = "none";
    }
}
function kardiovask() {
    if (document.getElementById("kardiov").checked)
        document.getElementById("kardio").style.display = "block";
    else {
        document.getElementById("kardio").style.display = "none";
    }
}
function neurokirurg() {
    if (document.getElementById("neurokir").checked)
        document.getElementById("neuro").style.display = "block";
    else {
        document.getElementById("neuro").style.display = "none";
    }
}
function clavpneu() {
    if (document.getElementById("pneu").checked)
        document.getElementById("clav").style.display = "block";
    else {
        document.getElementById("clav").style.display = "none";
    }
}
function lokalisationkir() {
    if
                        (document.getElementById("lokalkir").selectedIndex == "1") {
        document.getElementById("meningiomkir").style.display = "block"
        document.getElementById("ovrigakir").style.display = "none";
        document.getElementById("ryggarkir").style.display = "none";
    }
    else if (
        document.getElementById("lokalkir").selectedIndex == "2") {
        document.getElementById("ovrigakir").style.display = "block"
        document.getElementById("meningiomkir").style.display = "none";
        document.getElementById("ryggarkir").style.display = "none";
    }
    else if (
    document.getElementById("lokalkir").selectedIndex == "3") {
        document.getElementById("ryggarkir").style.display = "block"
        document.getElementById("meningiomkir").style.display = "none";
        document.getElementById("ovrigakir").style.display = "none";
    }

    else {
        document.getElementById("meningiomkir").style.display = "none"
        document.getElementById("ryggarkir").style.display = "none";
        document.getElementById("ovrigakir").style.display = "none";
    }
}
function reg() {
    if 
        (document.getElementById("regr").selectedIndex == "2") {
        document.getElementById("regress").style.display = "block";
    }
    else {
        document.getElementById("regress").style.display = "none";
    }
}
function nytill() {
    if 
        (document.getElementById("nya").selectedIndex == "2") {
        document.getElementById("bortfall").style.display = "block";
    }
    else {
        document.getElementById("bortfall").style.display = "none";
    }
}
