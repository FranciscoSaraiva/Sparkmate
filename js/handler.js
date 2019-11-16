const timer = setInterval(() => {
    removeGachaBaseLegend();
    removeGachaTicketLegend();
    removeGachaStarLegend();
}, 150);

function removeGachaBaseLegend(){
    let elements = document.getElementsByClassName('prt-gacha-obtain base legend');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeGachaTicketLegend(){
    let elements = document.getElementsByClassName('prt-gacha-obtain ticket legend');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeGachaStarLegend(){
    let elements = document.getElementsByClassName('prt-gacha-obtain star-stone legend');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}