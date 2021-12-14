// Estado del Reproductor
let reproduciendo = 0

function reproductorRecurso(theFile) {
    reproductor.src = theFile.target.result
    reproductor.play()
}

function reproducir(i){
    reproduciendo = i
    // Creo un lector de archivos
    var reader = new FileReader();
    // ¿ Cuando se lee el archivo ?
    reader.onload= reproductorRecurso 
    // ¿ Como leer este archivo?
    reader.readAsDataURL( archivos.files[i] );
}

function listar(){
    // Borro la lista
    lista.innerHTML = ''
    Array.from(archivos.files).forEach( crearItemList )
}

function crearItemList(archivo){
    let listItem = document.createElement('li') 
    // Evento para cuando se hace click en el nombre, se reproduzca
    listItem.addEventListener('click' , reproducirItem )
    // Agrego el nombre del archivo al List Item
    listItem.innerText = archivo.name
    // Agrego el nodo a la lista
    lista.appendChild(listItem)
}

function reproducirItem( evento ){
    reproducir(
        Array.from(lista.children).indexOf(evento.target)
    )
}

function siguiente(){
    if( reproduciendo < archivos.files.length - 1){
        reproducir( ++reproduciendo )
    }else{
        alert('Lista terminada')
    }
}

archivos.addEventListener('change', listar)
reproductor.addEventListener('ended' , siguiente)