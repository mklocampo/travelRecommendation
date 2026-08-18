
function SearchResults(){
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('searchResults').style.display = 'block';
}
function ClearResults(){
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('inputSearchItems').value = "";
}
function SetSearchCursor(){
    document.getElementById('inputSearchItems').focus();;
}













