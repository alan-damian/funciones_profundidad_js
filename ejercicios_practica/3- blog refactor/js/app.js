"use strict";

const tituloPrincipal = document.querySelector(".main-title");

console.log(tituloPrincipal.textContent);

const hoy = new Date();

tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

let posteos = [];
for(const postInfo of data) {
    posteos.push(new Post(
            postInfo.titulo,
            postInfo.avatar,
            postInfo.texto
        )
    );
}
let accumulator = ""
for(const post of posteos){
  accumulator += post.render();
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

addMousseEvents();