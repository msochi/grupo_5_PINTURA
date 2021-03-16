function buscar() {
    let searchInput = document.getElementById("inputLupa").value;
    console.log(searchInput);
    window.open('/search?text='+searchInput, "_self");
}