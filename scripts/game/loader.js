function LoadScript(string) {
    document.write("<script src=\"/scripts/game/"+string+".js\"></script>");
}

function LoadShader(filename, type, id) {
    let toWrite = "<script type=\""+type+"\" id=\""+id+"\">";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","./scripts/game/shaders/"+filename, false);
    xmlhttp.send();
    if(xmlhttp.status==200) {
        toWrite += xmlhttp.responseText;
    }
    toWrite += "</script>";
    document.write(toWrite);
}



LoadShader("vs_01.vert","vertext_shader", "vs_01");
LoadShader("fs_01.frag", "fragment_shader", "fs_01");

LoadScript("class/Material");
LoadScript("class/Sprite");
LoadScript("class/Game");



LoadScript("main");