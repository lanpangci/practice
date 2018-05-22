function getHTTPObject () {
    if(!XMLHttpRequest) {
        XMLHttpRequest = function () {
            try{
                return new ActiveXObject("Msxml2.XMLTTP.6.0");
            }catch(e) {}
            try{
                return new ActiveXObject("Msxml2.XMLTTP.3.0");
            }catch(e) {}
            try{
                return new ActiveXObject("Msxml2.XMLTTP");
            }catch(e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}