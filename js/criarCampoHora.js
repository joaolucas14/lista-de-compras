export function criarCampoHora(itemDaLista){
        let itemData = itemDaLista.querySelector(".texto-data");

        if (itemData){
            itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour:"numeric", minute: "numeric"})}`;
        }
        else{
            itemData = document.createElement("p");
            itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour:"numeric", minute: "numeric"})}`
            itemData.classList.add("texto-data");
            itemDaLista.appendChild(itemData);
        }  
}