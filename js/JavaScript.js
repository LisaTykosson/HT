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
function symtomfri() {
    if
        (document.getElementById("sym").selectedIndex == "1" && document.getElementById("lokal").selectedIndex == "3") {
        document.getElementById("symtomryggar").style.display = "block";
        document.getElementById("symtom").style.display = "none";
    }
    else if(document.getElementById("sym").selectedIndex == "1" && document.getElementById("lokal").selectedIndex == "2") {
        document.getElementById("symtom").style.display = "block";
        document.getElementById("symtomryggar").style.display = "none";
    }
    else if (document.getElementById("sym").selectedIndex == "1" && document.getElementById("lokal").selectedIndex == "1") {
        document.getElementById("symtom").style.display = "block";
        document.getElementById("symtomryggar").style.display = "none";
    }
    else {
        document.getElementById("symtom").style.display = "none";
        document.getElementById("symtomryggar").style.display = "none";
    }
}
function mdtdat() {
    if 
        (document.getElementById("mdt").selectedIndex == "2") {
        document.getElementById("mdk").style.display = "block";
    }
    else {
        document.getElementById("mdk").style.display = "none";
    }
}
function kirbehklin() {
    if
        (document.getElementById("kirbeh").selectedIndex == "2") {
        document.getElementById("kirklin").style.display = "block";
        document.getElementById("who").style.display = "none";
    }
    else {
        document.getElementById("kirklin").style.display = "none";
        document.getElementById("who").style.display = "block";
    }
}
function ickirbehklin() {
    if 
        (document.getElementById("ickirbeh").selectedIndex == "2") {
        document.getElementById("ickirklin").style.display = "block";
    }
    else {
        document.getElementById("ickirklin").style.display = "none";
    }
}
function expekt() {
    if
        (document.getElementById("ex").selectedIndex == "2") {
        document.getElementById("expektans").style.display = "block";
    }
    else {
        document.getElementById("expektans").style.display = "none";
    }
}
function symtlindr() {
    if 
        (document.getElementById("lindra").selectedIndex == "2") {
        document.getElementById("symlindr").style.display = "block";
    }
    else {
        document.getElementById("symlindr").style.display = "none";
    }
}
function malignitet() {
    if
        (document.getElementById("snomed").selectedIndex == "3") {
        document.getElementById("malign").style.display = "block";
    }
    else {
        document.getElementById("malign").style.display = "none";
    }
}
function diagrund() {
    if (document.getElementById("annatdia").checked)
        document.getElementById("anndia").style.display = "block";
    else {
        document.getElementById("anndia").style.display = "none";
    }
}
function multi() {
    if (document.getElementById("multidisci").selectedIndex == "2")
        document.getElementById("multidat").style.display = "block";
    else {
        document.getElementById("multidat").style.display = "none";
    }
}
function progr() {
    if 
        (document.getElementById("prog").selectedIndex == "2") {
        document.getElementById("tumprog").style.display = "block";
    }
    else {
        document.getElementById("tumprog").style.display = "none";
    }
}
function klinprog() {
    if
        (document.getElementById("klinp").selectedIndex == "2") {
        document.getElementById("klindat").style.display = "block";
    }
    else {
        document.getElementById("klindat").style.display = "none";
    }
}
function radiolund() {
    if 
        (document.getElementById("radio").selectedIndex == "2") {
        document.getElementById("radund").style.display = "block";
    }
    else {
        document.getElementById("radund").style.display = "none";
    }
}
function ctd() {
    if
        (document.getElementById("CT").selectedIndex == "2") {
        document.getElementById("CTdat").style.display = "block";
    }
    else {
        document.getElementById("CTdat").style.display = "none";
    }
}
function mrtd() {
    if 
        (document.getElementById("MRT").selectedIndex == "2") {
        document.getElementById("MRTdat").style.display = "block";
    }
    else {
        document.getElementById("MRTdat").style.display = "none";
    }
}
function petd() {
    if
        (document.getElementById("PET").selectedIndex == "2") {
        document.getElementById("PETdat").style.display = "block";
    }
    else {
        document.getElementById("PETdat").style.display = "none";
    }
}