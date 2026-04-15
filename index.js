const express = require('express');
const routes = require('./src/routes/index.route');
                    
const app = express();
                    
app.use(express.json());
                    
// Conecta com o agregador de rotas
app.use(routes);
                    
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVIDOR]: Clínica Veterinária online em http://localhost:${PORT}`);
});