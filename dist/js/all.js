$('#menu_HTML').load('_menu.html');

function checkVariable(){
    try{
        setCurrentPage(curPage);
    } catch(error){
        setTimeout(checkVariable,250);
    }
}

$(document).ready(function(){
    // debugger;
    checkVariable();
})