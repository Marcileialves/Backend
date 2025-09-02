import express from 'express';
import personagem from './dados.js'

const app = express()


const BuscarUFs = (nomeUfs) => {
    return personagem.filter(uf => uf.nome.toLowerCase().includes(nomeUfs.toLowerCase()))
}

app.get('/ufs', (req,res) => {
    const nomeUfs = req.query.busca;
    const Buscador = nomeUfs ? BuscarUFs(nomeUfs) : personagem;

    if(Buscador.length > 0){
        res.json(Buscador)
    }
    else{
        res.status(404).send({'Erro': 'Não encontramos o valor'})
    }
})
app.get('/ufs/:iduf',  (req,res) =>{
    let idUF = parseInt(req.params.iduf)
    let mensagemErro = "";
    let uf;
    if(!(isNaN(idUF))){
        let uf = personagem.find( num => num.id === idUF )

        if(!uf){
            mensagemErro = "UFS não encontrada"
        }

        else{
            mensagemErro = "Requisisão invalidada"
        }
        if(uf) {
            res.json(uf)
        }
        else{
            res.status(404).json({"Erro":mensagemErro})
    
        }
    
    }

});

app.listen(8080,()=>{
    let data = new Date()
    console.log('Servidor iniciado em' + data)
});





