import express from 'express';
import personagem from './dados.js';
import { BuscarUFsbyNome, BuscarbyID } from './serviços/servicos.js';

const app = express();

// Rota para buscar UFs por nome (query string)
app.get('/ufs', (req, res) => {
    const nomeUfs = req.query.busca;
    const resultado = nomeUfs ? BuscarUFsbyNome(nomeUfs) : personagem;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: 'Não encontramos o valor' });
    }
});

// Rota para buscar UF por ID
app.get('/ufs/:iduf', (req, res) => {
    const iduf = parseInt(req.params.iduf);

    if (isNaN(iduf)) {
        return res.status(400).json({ erro: 'ID inválido' });
    }

    const uf = BuscarbyID(iduf);

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ erro: 'UF não encontrada' });
    }
});

// Iniciar servidor
app.listen(8080, () => {
    console.log('Servidor iniciado em:');
});
