const express = require('express');
const router = express.Router();
                  
// Importação dos roteadores de cada recurso
const animalRoute = require('./animal.route');
const colsultaRoute = require('./consulta.route');
const tutorRoute = require('./tutor.route');

// 1. Rotas de Recursos (Coloque SEMPRE antes do 404)
router.use('/animais', animalRoutes);
router.use('/consultas', consultaRoutes);
router.use('/tutores', tutorRoutes);

// 2. Rota Raiz - Status da API
router.get('/', (req, res) => {
  res.json({ sistema: 'Clínica Veterinária', status: 'Online' });
});
                  
// 3. Rota 404 - Caso nenhuma rota acima seja encontrada
router.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada na Clínica Veterinária.' });
});
                  
module.exports = router;