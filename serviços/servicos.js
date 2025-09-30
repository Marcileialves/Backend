import personagem from "../dados.js"

export const buscarUfs = ()=>{
    return personagem;
};

export const BuscarUFsbyNome = (nomeUfs) => {
    
    return personagem.filter(uf => uf.nome.toLowerCase().includes(nomeUfs.toLowerCase()));
};

export  const BuscarbyID = (id)=> {
    const idUF = parseInt(id);
    return personagem.find(uf => uf.id === idUF);
};