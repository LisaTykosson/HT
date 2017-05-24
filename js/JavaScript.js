function lokalisation() {
    if 
                        (document.getElementById("lokal").selectedIndex == "1") {
     
        document.getElementById("spinalmeningi").style.display = "block";
        document.getElementById("ryggar").style.display = "none";
        document.getElementById("patient").style.display = "none";
        document.getElementById("diagnos").style.display = "none";
        document.getElementById("planerad").style.display = "none";
        document.getElementById("diagovr").style.display = "none";
 
    }
    else if (
        document.getElementById("lokal").selectedIndex == "3" || document.getElementById("lokal").selectedIndex == "4" || document.getElementById("lokal").selectedIndex == "5" || document.getElementById("lokal").selectedIndex == "6" || document.getElementById("lokal").selectedIndex == "7" || document.getElementById("lokal").selectedIndex == "8" || document.getElementById("lokal").selectedIndex == "9" || document.getElementById("lokal").selectedIndex == "10" || document.getElementById("lokal").selectedIndex == "11" || document.getElementById("lokal").selectedIndex == "12" || document.getElementById("lokal").selectedIndex == "13" || document.getElementById("lokal").selectedIndex == "14" || document.getElementById("lokal").selectedIndex == "15" || document.getElementById("lokal").selectedIndex == "16" || document.getElementById("lokal").selectedIndex == "17" || document.getElementById("lokal").selectedIndex == "18") {

        document.getElementById("spinalglio").style.display = "block";
        document.getElementById("ryggar").style.display = "none";
        document.getElementById("patient").style.display = "none";
        document.getElementById("diagnos").style.display = "none";
        document.getElementById("planerad").style.display = "none";
        document.getElementById("diagovr").style.display = "none";
     
    }
    else if (
    document.getElementById("lokal").selectedIndex == "2" || document.getElementById("lokal").selectedIndex == "19" || document.getElementById("lokal").selectedIndex == "20" || document.getElementById("lokal").selectedIndex == "21" || document.getElementById("lokal").selectedIndex == "22") {
        document.getElementById("ryggar").style.display = "block";
        document.getElementById("patient").style.display = "block";
        document.getElementById("diagnos").style.display = "block";
        document.getElementById("planerad").style.display = "block";
        document.getElementById("diagovr").style.display = "none";
        document.getElementById("specmen").style.display = "none";
        document.getElementById("vaxtmen").style.display = "none";
        document.getElementById("meningiom").style.display = "none";
        document.getElementById("ovriga").style.display = "none";
        document.getElementById("symtomryggar").style.display = "none";
        document.getElementById("symtom").style.display = "none";
        document.getElementById("mdt").style.display = "block";
    }

    else {
        document.getElementById("spinalglio").style.display = "none";
        ocument.getElementById("spinalmeningi").style.display = "none";
        document.getElementById("ryggar").style.display = "none";
        document.getElementById("patient").style.display = "none";
        document.getElementById("diagnos").style.display = "none";
        document.getElementById("planerad").style.display = "none";
        document.getElementById("diagovr").style.display = "none";
        document.getElementById("specmen").style.display = "none";
        document.getElementById("vaxtmen").style.display = "none";
        document.getElementById("meningiom").style.display = "none";
        document.getElementById("ovriga").style.display = "none";
        document.getElementById("symtomryggar").style.display = "none";
        document.getElementById("symtom").style.display = "none";
        document.getElementById("mdt").style.display = "none";
    }
}
function spinalmen() {
    if (document.getElementById("spinalmen").selectedIndex == "2"){
        document.getElementById("ryggar").style.display = "block";
        document.getElementById("patient").style.display = "block";
        document.getElementById("diagnos").style.display = "block";
        document.getElementById("planerad").style.display = "block";
        document.getElementById("mdt").style.display = "block";
    }
    else if (document.getElementById("spinalmen").selectedIndex == "1") {
        document.getElementById("meningiom").style.display = "block"
        document.getElementById("patient").style.display = "block";
        document.getElementById("diagnos").style.display = "block";
        document.getElementById("planerad").style.display = "block";
        document.getElementById("diagovr").style.display = "block";
        document.getElementById("specmen").style.display = "block";

    }
    else {
        document.getElementById("meningiom").style.display = "none"
       
        document.getElementById("patient").style.display = "none";
        document.getElementById("diagnos").style.display = "none";
        document.getElementById("planerad").style.display = "none";
        document.getElementById("diagovr").style.display = "block";
        document.getElementById("specmen").style.display = "none";
 
    }
}
function spinalgli() {
    if (document.getElementById("spinalgli").selectedIndex == "2") {
        document.getElementById("ryggar").style.display = "block";
        document.getElementById("patient").style.display = "block";
        document.getElementById("diagnos").style.display = "block";
        document.getElementById("planerad").style.display = "block";
        document.getElementById("mdt").style.display = "block";
        document.getElementById("ovriga").style.display = "none"

    }
    else if (document.getElementById("spinalgli").selectedIndex == "1") {
        document.getElementById("ovriga").style.display = "block"
        document.getElementById("ryggar").style.display = "none"
        document.getElementById("patient").style.display = "block";
        document.getElementById("planerad").style.display = "block";
        document.getElementById("diagovr").style.display = "block";
        document.getElementById("mdt").style.display = "block";
       

    }
    else {
        document.getElementById("ovriga").style.display = "none"
        document.getElementById("patient").style.display = "none";
        document.getElementById("diagnos").style.display = "none";
        document.getElementById("planerad").style.display = "none";
        document.getElementById("diagovr").style.display = "block";
        document.getElementById("mdt").style.display = "none";

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
        document.getElementById("kirmeningiom").style.display = "block"
        document.getElementById("uppf").style.display = "none";
        document.getElementById("kirgliom").style.display = "none";
        document.getElementById("ryggarkir").style.display = "none";
    }
    else if (
        document.getElementById("lokalkir").selectedIndex == "2") {
        document.getElementById("kirgliom").style.display = "block"
        document.getElementById("kirmeningiom").style.display = "none";
        document.getElementById("ryggarkir").style.display = "none";
    }
    else if (
    document.getElementById("lokalkir").selectedIndex == "3") {
        document.getElementById("ryggarkir").style.display = "block"
        document.getElementById("kirmeningiom").style.display = "none";
        document.getElementById("kirgliom").style.display = "none";
    }

    else {
        document.getElementById("kirmeningiom").style.display = "none"
        document.getElementById("ryggarkir").style.display = "none";
        document.getElementById("ovrigakir").style.display = "none";
        document.getElementById("uppf").style.display = "block";
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
        (document.getElementById("sym").selectedIndex == "1" && document.getElementById("spinalmen").selectedIndex == "1") {
        document.getElementById("symtom").style.display = "block";
        document.getElementById("symtomryggar").style.display = "none";
    }
    else if (document.getElementById("sym").selectedIndex == "1" && document.getElementById("lokal").selectedIndex == "2" || document.getElementById("lokal").selectedIndex == "19" || document.getElementById("lokal").selectedIndex == "20" || document.getElementById("lokal").selectedIndex == "21" || document.getElementById("lokal").selectedIndex == "22") {
        document.getElementById("symtomryggar").style.display = "block";
        document.getElementById("symtom").style.display = "none";
    }
    else if (document.getElementById("sym").selectedIndex == "1" && document.getElementById("spinalmen").selectedIndex == "2") {
        document.getElementById("symtom").style.display = "none";
        document.getElementById("symtomryggar").style.display = "block";
    }
    else if (document.getElementById("sym").selectedIndex == "1" && document.getElementById("spinalgli").selectedIndex == "2") {
        document.getElementById("symtom").style.display = "none";
        document.getElementById("symtomryggar").style.display = "block";
    }
    else if (document.getElementById("sym").selectedIndex == "1" && document.getElementById("spinalgli").selectedIndex == "1") {
        document.getElementById("symtom").style.display = "block";
        document.getElementById("symtomryggar").style.display = "none";
    }
    else if (document.getElementById("sym").selectedIndex == "2") {
        document.getElementById("symtom").style.display = "none";
        document.getElementById("symtomryggar").style.display = "none";
    }
    else if (document.getElementById("sym").selectedIndex == "0") {
        document.getElementById("symtom").style.display = "none";
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
        (document.getElementById("kirbeh").selectedIndex == "1") {
        document.getElementById("kirklin").style.display = "block";
        document.getElementById("who").style.display = "none";
    }
    else if(
        document.getElementById("kirbeh").selectedIndex == "2" || document.getElementById("kirbeh").selectedIndex == "3" || document.getElementById("kirbeh").selectedIndex == "4") {
        document.getElementById("kirklin").style.display = "block";
    }
    else {
        document.getElementById("kirklin").style.display = "none";
        document.getElementById("who").style.display = "block";
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
function anledning() {
    if 
        (document.getElementById("reop").selectedIndex == "2") {
        document.getElementById("reoper").style.display = "block";
    }
    else {
        document.getElementById("reoper").style.display = "none";
    }
}

function kraniotyp() {
    if
        (document.getElementById("kranio").selectedIndex == "2") {
        document.getElementById("typkrani").style.display = "block";
    }
    else {
        document.getElementById("typkrani").style.display = "none";
    }
}
function duratyp() {
    if 
        (document.getElementById("dura").selectedIndex == "2") {
        document.getElementById("typdura").style.display = "block";
    }
    else {
        document.getElementById("typdura").style.display = "none";
    }
}
function poopmdk() {
    if
        (document.getElementById("poop").selectedIndex == "2") {
        document.getElementById("poopdat").style.display = "block";
    }
    else {
        document.getElementById("poopdat").style.display = "none";
    }
}
function plankircheck() {
    if (document.getElementById("plankir").checked) {
        document.getElementById("orsakplankir").style.display = "block"
        document.getElementById("opanledning").style.display = "none";
    }
    else {
        document.getElementById("orsakplankir").style.display = "none";
        document.getElementById("opanledning").style.display = "block";
    }
}
function sensoriska() {
    if 
        (document.getElementById("sensor").selectedIndex == "2") {
        document.getElementById("sensoriskasymtom").style.display = "block";
    }
    else {
        document.getElementById("sensoriskasymtom").style.display = "none";
    }
}
function armar() {
    if
        (document.getElementById("sensorarm").selectedIndex == "2") {
        document.getElementById("arm").style.display = "block";
    }
    else {
        document.getElementById("arm").style.display = "none";
    }
}
function benar() {
    if 
        (document.getElementById("sensorben").selectedIndex == "2") {
        document.getElementById("ben").style.display = "block";
    }
    else {
        document.getElementById("ben").style.display = "none";
    }
}
function paressym() {
    if
        (document.getElementById("pares").selectedIndex == "2") {
        document.getElementById("paressymtom").style.display = "block";
    }
    else {
        document.getElementById("paressymtom").style.display = "none";
    }
}
function pararmar() {
    if 
        (document.getElementById("paresarm").selectedIndex == "2") {
        document.getElementById("pararm").style.display = "block";
    }
    else {
        document.getElementById("pararm").style.display = "none";
    }
}
function parbenar() {
    if
        (document.getElementById("paresben").selectedIndex == "2") {
        document.getElementById("parben").style.display = "block";
    }
    else {
        document.getElementById("parben").style.display = "none";
    }
}
function fokalneur() {
    if 
        (document.getElementById("fokal").selectedIndex == "2") {
        document.getElementById("fokalsymt").style.display = "block";
    }
    else {
        document.getElementById("fokalsymt").style.display = "none";
    }
}
function plegisym() {
    if
        (document.getElementById("plegi").selectedIndex == "2") {
        document.getElementById("plegisymtom").style.display = "block";
    }
    else {
        document.getElementById("plegisymtom").style.display = "none";
    }
}
function plegiarmar() {
    if
        (document.getElementById("plegiar").selectedIndex == "2") {
        document.getElementById("plegiarmen").style.display = "block";
    }
    else {
        document.getElementById("plegiarmen").style.display = "none";
    }
}
function plegibenar() {
    if 
        (document.getElementById("plegib").selectedIndex == "2") {
        document.getElementById("plegibenet").style.display = "block";
    }
    else {
        document.getElementById("plegibenet").style.display = "none";
    }
}
function epilepsi() {
    if 
        (document.getElementById("epilep").selectedIndex == "2") {
        document.getElementById("epi").style.display = "block";
    }
    else {
        document.getElementById("epi").style.display = "none";
    }
}

function showpad() {
    if
        (document.getElementById("padshow").selectedIndex == "3") {
        document.getElementById("pad").style.display = "block";
    }
    else {
        document.getElementById("pad").style.display = "none";
    }
}
function showpadm() {
    if 
        (document.getElementById("padshowm").selectedIndex == "3") {
        document.getElementById("padm").style.display = "block";
    }
    else {
        document.getElementById("padm").style.display = "none";
    }
}
function studieprot() {
    if 
        (document.getElementById("stud").selectedIndex == "2") {
        document.getElementById("studie").style.display = "block";
    }
    else {
        document.getElementById("studie").style.display = "none";
    }
}
function onko() {
    if
        (document.getElementById("icke").selectedIndex == "2") {
        document.getElementById("ickekirurgisk").style.display = "block";
    }
    else {
        document.getElementById("ickekirurgisk").style.display = "none";
    }
}
function onkomen() {
    if 
        (document.getElementById("ickemen").selectedIndex == "2") {
        document.getElementById("ickekirurgiskmen").style.display = "block";
    }
    else {
        document.getElementById("ickekirurgiskmen").style.display = "none";
    }
}
function patfoljcheck() {
    if (document.getElementById("patfolj").checked) {
        document.getElementById("folj").style.display = "none";
    }
    else {
        document.getElementById("folj").style.display = "block";
    }
}
function ickkir() {
    if (document.getElementById("ikir").selectedIndex == "2") {
        document.getElementById("onkbehand").style.display = "block";
    }
    else {
        document.getElementById("onkbehand").style.display = "none";
    }
}
function radioter() {
    if (document.getElementById("radi").selectedIndex == "2") {
        document.getElementById("rad").style.display = "block";
    }
    else {
        document.getElementById("rad").style.display = "none";
    }
}
function konkokemo() {
    if (document.getElementById("konk").selectedIndex == "2") {
        document.getElementById("konkdat").style.display = "block";
    }
    else {
        document.getElementById("konkdat").style.display = "none";
    }
}
function kemoter() {
    if (document.getElementById("kemo").selectedIndex == "2") {
        document.getElementById("kemodat").style.display = "block";
    }
    else {
        document.getElementById("kemodat").style.display = "none";
    }
}
function fotoner() {
    if (document.getElementById("fot").checked) {
        document.getElementById("foto").style.display = "block";
    }
    else {
        document.getElementById("foto").style.display = "none";
    }
}
function stereotaxi() {
    if (document.getElementById("ster").checked) {
        document.getElementById("stereo").style.display = "block";
    }
    else {
        document.getElementById("stereo").style.display = "none";
    }
}
function anickir() {
    if (document.getElementById("ann").selectedIndex == "2") {
        document.getElementById("annikir").style.display = "block";
    }
    else {
        document.getElementById("annikir").style.display = "none";
    }
}
function studieonk() {
    if
        (document.getElementById("studonk").selectedIndex == "2") {
        document.getElementById("studieicke").style.display = "block";
    }
    else {
        document.getElementById("studieicke").style.display = "none";
    }
}
function foljicke() {
    if 
        (document.getElementById("foljo").selectedIndex == "2") {
        document.getElementById("foljningonk").style.display = "block";
    }
    else {
        document.getElementById("foljningonk").style.display = "none";
    }
}
function visamen() {
    if
        (document.getElementById("antmen").selectedIndex == "1") {
        document.getElementById("entum").style.display = "block"
        document.getElementById("tvatum").style.display = "none"
        document.getElementById("tretum").style.display = "none";
    }
    else if(
            document.getElementById("antmen").selectedIndex == "2") {
        document.getElementById("tvatum").style.display = "block"
        document.getElementById("entum").style.display = "block"
        document.getElementById("tretum").style.display = "none";
    }
    else if (
            document.getElementById("antmen").selectedIndex == "3" || document.getElementById("antmen").selectedIndex == "4" || document.getElementById("antmen").selectedIndex == "5") {
        document.getElementById("tretum").style.display = "block"
        document.getElementById("tvatum").style.display = "block"
        document.getElementById("entum").style.display = "block";
    }
    else {
        document.getElementById("tretum").style.display = "none"
        document.getElementById("tvatum").style.display = "none"
        document.getElementById("entum").style.display = "none";
    }
}
function oper3() {
    if (document.getElementById("opt3").checked)
        document.getElementById("st3").style.display = "block";
    else {
        document.getElementById("st3").style.display = "none";
    }
}
function oper2() {
    if (document.getElementById("opt2").checked)
        document.getElementById("st2").style.display = "block";
    else {
        document.getElementById("st2").style.display = "none";
    }
}
function oper1() {
    if (document.getElementById("opt1").checked)
        document.getElementById("st1").style.display = "block";
    else {
        document.getElementById("st1").style.display = "none";
    }
}
function nejmenop() {
    if
        (document.getElementById("menorsak").selectedIndex == "1") {
        document.getElementById("avbopmen").style.display = "block";
        document.getElementById("senbopmen").style.display = "none";
    }
    else if
        (document.getElementById("menorsak").selectedIndex == "2") {
        document.getElementById("senbopmen").style.display = "block";
        document.getElementById("avbopmen").style.display = "none";
        
    }
    else {
        document.getElementById("avbopmen").style.display = "none";
        document.getElementById("senbopmen").style.display = "none"
    }
}
function nytumor() {
    if (document.getElementById("nyt").checked)
        document.getElementById("extra").style.display = "block";
    else {
        document.getElementById("extra").style.display = "none";
    }
}
function visaovr() {
    if 
        (document.getElementById("antovr").selectedIndex == "1") {
        document.getElementById("tumoren").style.display = "block"
        document.getElementById("tumortva").style.display = "none"
        document.getElementById("tumortre").style.display = "none";
    }
    else if (
            document.getElementById("antovr").selectedIndex == "2") {
        document.getElementById("tumortva").style.display = "block"
        document.getElementById("tumoren").style.display = "block"
        document.getElementById("tumortre").style.display = "none";
    }
    else if (
            document.getElementById("antovr").selectedIndex == "3" || document.getElementById("antovr").selectedIndex == "4" || document.getElementById("antovr").selectedIndex == "5") {
        document.getElementById("tumortre").style.display = "block"
        document.getElementById("tumortva").style.display = "block"
        document.getElementById("tumoren").style.display = "block";
    }
    else {
        document.getElementById("tumortre").style.display = "none"
        document.getElementById("tumortva").style.display = "none"
        document.getElementById("tumoren").style.display = "none";
    }
}