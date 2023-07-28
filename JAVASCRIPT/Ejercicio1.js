/*const frutas = [];
const fruta= prompt("Digite una nueva fruta")
frutas.push(fruta);



while(confirm("Quiere agregar una nueva fruta")){
    const fruta= prompt("Digite una nueva fruta")
    frutas.push(fruta);
}

console.log('Compraste')
for(let fruta of frutas){
    console.log(fruta)

}

frutas.forEach( fruta => console.log(fruta))*
let frutas = ['manza', 'sandiaa','pera'];

frutas.forEach(fruta => console.log(fruta))
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    get nombrMayus (){
        return this.nombre.toUpperCase();
    },
    set agregarAmigo(nuevoamigo){
        this.enemigos.push(nuevoamigo)
    }
};

console.log(gato.nombrMayus);

gato.agregarAmigo = 'Perez'
console.log(gato)*

const h1 = document.getElementById('title')

h1.addEventListener('click',() =>{
    console.log('me distes click')
    h1.style.color= 'black'
    h1.textContent = 'Nuevo'
} )*

const textprincipal = document.querySelector('#txt-principal')
const cambiar = document.querySelector('#cambiar')

cambiar.addEventListener('click', () =>{
    cambiar.style.display='none'
  var rpt =  prompt('Quiere realizar una operacion')
    if(rpt == 'si'){
        textprincipal.textContent = 'OPERACIONES'
        textprincipal.style.color='white'
        textprincipal.style.backgroundColor = 'blue'
     let oper = prompt('1 SUMA 2 RESTA')
     oper = parseInt(oper)
        switch(oper){
            case 1:
                let num1 = parseInt(prompt('digite un numero'))
                let num2 =parseInt(prompt('digite un numero'))
                let suma = num1 + num2
                console.log(suma)
                break
            case 2:
                let num3 = parseInt(prompt('digite un numero'))
                let num4 = parseInt(prompt('digite un numero'))
                let resta = num3 + num4
                console.log(resta)
                break
            default:
                alert('no se spudo encontrar')
        }
    } else{
        
        textprincipal.textContent = 'GRACIAS'
        textprincipal.style.color='white'
        textprincipal.style.backgroundColor = 'blue'
    }
})
*
const Manzana = document.querySelector('#Manzana');
const pera  = document.querySelector('#pera');
const sandia = document.querySelector('#sandia')
const mostrar = document.querySelector('#mostrar')
const frutas =[]

Manzana.addEventListener('click', () =>{
    frutas.push('Manzana')

})
pera.addEventListener('click', () =>{
    frutas.push('pera')

})
sandia.addEventListener('click', () =>{
    frutas.push('sandia')


})

mostrar.addEventListener('click', () =>{
    frutas.forEach(fruta => console.log(fruta))
})
*
const lista = document.querySelector('#lista');

const fragment = document.createDocumentFragment();

const nombnre = ['Darlin','Ander','Luna']

nombnre.forEach( persona =>{
    const li = document.createElement('li');
    li.textContent = persona
    const referenceNode = fragment.firstChild;

    fragment.insertBefore(li,referenceNode)
})
    lista.appendChild(fragment)
*

const listaDinamica = document.querySelector("#listaDinamica");
const arrayElementos = ["Perú", "Bolivia", "Colombia"];
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector("#liTemplate");

const clickPais = () => console.log("me diste cklick");

arrayElementos.forEach((pais) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector("span").textContent = pais;

    clone.addEventListener("click", clickPais);

    fragment.appendChild(clone);
});

listaDinamica.appendChild(fragment);*/
//4:25:24 / 9:21:25
//https://www.youtube.com/watch?v=w_bM1l1UGnY
/*
const lista = document.querySelector("#lista")

const fragment = document.createDocumentFragment();

const liTemplate = document.querySelector("#liTemplate")

const arrayElementos = ["Perú", "Bolivia", "Colombia"];

const clipaises = e => console.log('me diste click')

arrayElementos.forEach( pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector('span').textContent = pais
    clone.addEventListener('click', clipaises)
    fragment.appendChild(clone)

})
lista.appendChild(fragment)
*
//crear la constante de lista
const lista = document.querySelector("#lista")
//crear el fragmento documento
const fragment = document.createDocumentFragment()
//creamos la constante para nuestra lista de nuestro template
const liTemplate = document.querySelector("#liTemplate")
//creamos el array de los hermanos
const arrayhermano = ["dani","jose"]
//empezamos con el recorrido de nuestro array con un forEch
arrayhermano.forEach( hermanos =>{
    //creamos el clone para replanzar su contenido del liTemplate
    const clone = liTemplate.content.cloneNode(true)
    //clonamos donde ira el nombre de nuestro hermano dentro del span
    //remplazamos su contenido para que se muestren los hermanos
    clone.querySelector('.text-primary').textContent = hermanos;
    //ya remplazo realizamos el apellchilld pero del fragemnet
    //el reflou
    fragment.appendChild(clone)
})
//para finalizar listamos las cosas que queremos trabajar en la lista
lista.appendChild(fragment)



*
//TEMPLATE DE NOMBRE DE HERMANOS


//creamos la constante para la lista
const lista = document.querySelector("#lista")
//creamos el fragman para evitar el reflou
const fragemnet = document.createDocumentFragment()
//creamos la constante para nuestro liTemplate
const liTemplate = document.querySelector("#liTemplate")
//creamos nuestro array con los elemnentos de fruta
const arrayfruta = ["manzan","pera"]
//realizamos el forech para el recorrido de nuestro array
arrayfruta.forEach( fruta => {
    //creamos la constante de clone para nuestro liTemplate
    const clone = liTemplate.content.cloneNode(true)
    //remplazamos el contenido de nuestro span
    clone.querySelector('.text-primary').textContent = fruta;
    //realizamos el reflou con nuestro fragment
    fragemnet.appendChild(clone)

})
//listamos nuestro elementos ya recordis
    lista.appendChild(fragemnet)*
//creamos la constante de lista
const lista = document.querySelector("#lista")
//creamos el document fragment para evitar el refloui
const fragemnet = document.createDocumentFragment()
//creamos la constante para nuestro lista template
const liTemplate = document.querySelector("#liTemplate")
//creamos nuestro array para el recorrido
const arrayfruta = ["manzana","pera"]
//nuestro recorrido
arrayfruta.forEach( fruta => {
    //creamos nuestro clone para remplazar nuestro lista
    const clone = liTemplate.content.cloneNode(true)
    //remplazamos el contenido
    clone.querySelector('.text-primary').textContent = fruta;
    //listamos en el fragment para evitar el reflou
    fragemnet.appendChild(clone)

})
//finalmente listamos con el fragemne
lista.appendChild(fragemnet)*/
//creamos las constantes con union de nuestro html 
/*
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragemne = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button")
const text = document.querySelectorAll("#text");


//creamos el objecto carrito
const carritobjecto = {};
//creamos nuestro boton para que se agreguen los productos

const agregarcarrito = (e) => {
   
   
    //creamos una costante producto para ver que es lo que se va almacenar \
    const producto = {
        //creamos el nombre de los objecto de producto
        //luego realizamos un e.target.dataset.fruta pora saber
        //el nombre y cosas asi 
        tiuto: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };
    //luego de haber rewalizado esto procedemos
    //ah evaluar una situacion para agregar 
    //los productos
    if(carritobjecto.hasOwnProperty(producto.id)){
        producto.cantidad = carritobjecto[producto.id].cantidad + 1;
    }
    carritobjecto[producto.id] = producto;
   
    

    swal({
        title: "Fruta",
        text: "Se agrego correctamente",
        icon: "success",
        button: "Aww yiss!",
      });
  pintarcarrito();
  
   
}
//Despues ya creamos realizamos un forech para que realize
//el recorrido de los productos compramose
agregar.forEach( (botton) => botton.addEventListener('click', agregarcarrito))

//pintamos las frutas de nuestro carrito de objectos
const pintarcarrito = () => {
    carrito.textContent ="";
    Object.values(carritobjecto).forEach( (item) =>{
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.tiuto
        clone.querySelector('.rounded-pill').textContent = item.cantidad;
        fragemne.appendChild(clone)
        
    });
    carrito.appendChild(fragemne)
}

*

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragemne = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button")

const arraycarrito = [];

const agregarcarrito = (e) => {

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    //busqueda del objecto
    const buscar = arraycarrito.findIndex( (item) => item.id ===producto.id)
    //evaluamos la situacion
    if(buscar===-1){
        arraycarrito.push(producto)
    }else{
        arraycarrito[buscar].cantidad++;
    }
    swal({
        title:'FRUTA', 
        text:'Se agrego correctamente',
        icon:'success',
        button:'Ok'
    })
    pintarcarrito()

}

agregar.forEach( (boton) => boton.addEventListener("click", agregarcarrito));

const pintarcarrito =  () =>{
    carrito.textContent = "";
    arraycarrito.forEach( (item =>{
        const clone = template.content.cloneNode(true)
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragemne.appendChild(clone)
    }))

    carrito.appendChild(fragemne)
}*


const border = document.querySelectorAll(".border");

border.forEach( (item)=> {
    item.addEventListener( 'click',(e) =>{
        e.stopPropagation();
        console.log('me diste click')
    })
})*
const formlario = document.querySelector('form')

formlario.addEventListener( 'submit', (e) =>{
    console.log('me diste click')
})*


const container = document.querySelector(".container")

container.addEventListener( 'click', (e) =>{
    //console.log(e.target.id);

    if(e.target.id ==='padre' ){
        console.log('diste click al padre')
    } else if(e.target.id === 'hijo'){
        console.log('diste click hijo')
    } else if( e.target.id === 'nieto'){
        console.log('nieto')
    }
})*


const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector('#footer')
const templateFooter = document.querySelector('#templateFooter')
const fragment = document.createDocumentFragment();

let carritoArray = [];
document.addEventListener('click', (e) =>{
    if( e.target.matches('.card button')){
        agregarCarrito(e)
    }

    if(e.target.matches(".list-group-item .btn-success")){
        btnAumentar(e);
    }

    if(e.target.matches(".list-group-item .btn-danger")){
        btnDisminuir(e);
    }

   // pintarCarrito();
});



const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
    }

    //console.log(carritoArray);

    pintarCarrito();
};

//agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

const pintarCarrito = () => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent =
            item.precio * item.cantidad;
      
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
    pintarFooter();
};

const pintarFooter = () =>{
    footer.textContent ="";

    const total = carritoArray.reduce(
        (acc, current) => acc + current.precio * current.cantidad,
        0
    );
    const clone = templateFooter.content.cloneNode(true)
    clone.querySelector("p span").textContent = total;

    footer.appendChild(clone);
}
const btnAumentar = (e) => {
    carritoArray = carritoArray.map( (item) => {
        if(item.id === e.target.dataset.id){
            item.cantidad++
        }
        return item
    })
    pintarCarrito();
};
const btnDisminuir = (e) => {
    carritoArray = carritoArray.filter ((item) =>{
        if(item.id == e.target.dataset.id) {
            if(item.cantidad > 0){
                item.cantidad --;

                if(item.cantidad == 0) return;

                return item
            }
        }else {
            return item
        }
    });
    pintarCarrito();
}*

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();
let carritoArray = [];

// Delegación de eventos:
document.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.dataset.fruta);
    // console.log(e.target.matches(".card button"));
    if (e.target.matches(".card button")) {
        agregarCarrito(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches(".list-group-item .btn-success")) {
        btnAumentar(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-danger"));
    if (e.target.matches(".list-group-item .btn-danger")) {
        btnDisminuir(e);
    }
});

const agregarCarrito = (e) => {
    // console.log(e.target.dataset);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
    }

    // console.log(carritoArray);
    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent =
            item.precio * item.cantidad;
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);

    pintarFooter();
};

const pintarFooter = () => {
    footer.textContent = "";

    const total = carritoArray.reduce(
        (acc, current) => acc + current.precio * current.cantidad,
        0
    );

    // console.log(total);

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("p span").textContent = total;

    // fragment.appendChild(clone);
    footer.appendChild(clone);
};

const btnAumentar = (e) => {
    // console.log(e.target.dataset.id);
    carritoArray = carritoArray.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++;
        }
        return item;
    });
    pintarCarrito();
};

const btnDisminuir = (e) => {
    // console.log(e.target.dataset.id);
    carritoArray = carritoArray.filter((item) => {
        // console.log(item);
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                // console.log(item);
                if (item.cantidad === 0) return;
                return item;
            }
        } else {
            return item;
        }
    });
    pintarCarrito();
};
*
const registroExp =/chapu/

const registroobje = new registroExp()*
const posts = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];
/*
const finPostById = (id) =>{
   return new Promise ( (resolve, rejeact ) =>{
        setTimeout( () =>{
            const post = posts.find( item => item.id === id);

            if(post){
                resolve(post)
            }else{
                rejeact('no se pudo ejecutar '+id)
            }

        }, 2000)

   })

};

const buscar = async () =>{

    try {
        const rewPost = await Promise.all([finPostById(1), finPostById(2)])
    console.log(rewPost[0].title, rewPost[1].title)
    }catch (error){
        console.log(error)
    }finally{
        console.log('se ejecuto')
    }
}
   buscar(3)
 
    
      

//finPostById(2).then( post => console.log(post)).catch( e => console.log(e))



const finId = ( id, callback) =>{
    const post = posts.find( item => item.id ===id)

    if(post){
        return callback(null, post)
    }else{
        console.log('nose pudo encontrar '+id)
    }
}

finId(5, (err,post) =>{
    if(err){
        return console.log(err)
    }
    console.log(post)
})*

///fetcheApi
const url = 'https://jsonplaceholder.typicode.com/posts/'

    const finById = async (id) =>{

        try {
            const res = await fetch(url + id)
            const post = await res.json()
            console.log(post)
        } catch (error) {
            console.log(error)
        }   
    }
    finById(1)
*


const url = ("https://pokeapi.co/api/v2/pokemon/ditto")

fetch(url)
.then( (res) => res.json())
.then( (post) =>  console.log(post))
*


const cardsdinamicas = document.getElementById('cards-dinamicas')
const templatecard = document.getElementById('template-card').content

document.addEventListener("DOMContentLoaded", () =>{
    fetchData()
})
const fetchData = async () =>{
    try {
        //loaddingData(true)
        const res =await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        pintarimg(data)

    } catch (error) {
        console.log(error)
    }finally{
       // loaddingData(false)
    }
}
/*
const loaddingData = (estado) =>{
    const loading = document.getElementById("loading");
    if(estado){
        loading.classList.remove('d-none')
    }else{
        loading.classList.add('d-none')
    }
}*

const pintarimg = (data) =>{
    const fragment = document.createDocumentFragment()
    cardsdinamicas.textContent="";
    data.results.forEach( (item) =>{
        const clone = templatecard.cloneNode(true)

        clone.querySelector('h5').textContent = item.name
        clone.querySelector('p').textContent = item.species
        clone.querySelector('img').setAttribute('src',item.image)

        fragment.appendChild(clone)

    });
    cardsdinamicas.appendChild(fragment)
}

//DOMContentLoaded

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
})

const card = document.querySelector("#cards-dinamicas")
const templatecard = document.querySelector("#template-card").content

const fetchData = async () =>{

    try {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        pintarcarrito(data)
    } catch (error) {
        console.log(error)
    }

}

const pintarcarrito = (data) =>{
    card.textContent = "";

    const fragemnet = document.createDocumentFragment()

    data.results.forEach( (item) =>{
        const clone = templatecard.cloneNode(true)
        clone.querySelector("h5").textContent  = item.name
        clone.querySelector("p").textContent  = item.species
        clone.querySelector("img").setAttribute( 'src', item.image);
        fragemnet.appendChild(clone);
    })
    
    card.appendChild(fragemnet)

}

loops

var estudiantes = ["Mauricio", "Mario", "Daniel", "Gabriel", "Luca"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudinate = estudiantes.shift()
}*/
///clave de trilce
//88880000


//DOMContentLoaded

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
})

const card = document.querySelector("#cards-dinamicas")
const templatecard = document.querySelector("#template-card").content

const fetchData = async () =>{

    try {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        pintarcarrito(data)
    } catch (error) {
        console.log(error)
    }

}

const pintarcarrito = (data) =>{
    card.textContent = "";

    const fragemnet = document.createDocumentFragment()

    data.results.forEach( (item) =>{
        const clone = templatecard.cloneNode(true)
        clone.querySelector("h5").textContent  = item.name
        clone.querySelector("p").textContent  = item.species
        clone.querySelector("img").setAttribute( 'src', item.image);
        fragemnet.appendChild(clone);
    })
    
    
    card.appendChild(fragemnet)

}






