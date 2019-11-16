//Choose Spark Target
/*document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('spark-target-image');
    element.addEventListener('click', function () {
        //https://gbf.wiki/Journal/Characters
        var url = "https://gbf.wiki/Journal/Characters";
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onload = function(){
  
            var listOfDivs = xmlHttp.response.getElementById('mw-content-text').childNodes[10];
            var characters = listOfDivs.children;
            var characterList = [];
    
            for (var i = 0; i < listOfDivs.childElementCount; i++) {
                var name = characters[i].getElementsByTagName('a').item('title').title;
                var image = characters[i].getElementsByTagName('img').item('src').src;
    
                var character = { name: name, image: image };
    
                characterList.push(character);
            }
    
            getCharacterList(characterList);
        }

        xmlHttp.open('GET', url, true);
        xmlHttp.responseType = "document";
        xmlHttp.send();
    });
})*/

function getCharacterList(characterList){
    var selectDiv = document.getElementsByClassName('character-list-div');

    var select = document.createElement('select');
    
    var selectId     = document.createAttribute('id');
    selectId.value   = "character-list";
    select.setAttributeNode(selectId);

    var selectClass   = document.createAttribute('class');
    selectClass.value = "form-control"; 
    select.setAttributeNode(selectClass);

    characterList.forEach(function(character){
        var option = document.createElement('option');
        option.value = character.name;
        option.text = character.name;
        select.appendChild(option);
    });

    selectDiv.appendChild(select);
}
