function buscar() {
    let searchInput = document.getElementById("inputLupa").value;
    console.log(searchInput);
    window.open('/plp?text='+searchInput, "_self");
}