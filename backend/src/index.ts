import server from './server';
import  {db}  from './config/db'; // Importa tu instancia de Sequelize

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida.');

    // Sincroniza los modelos con la base de datos
    await db.sync();
    console.log('Base de datos y modelos sincronizados.');

    server.listen(port, () => {
      console.log(`Servidor escuchando en el puerto,  http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error durante la inicialización:', error);
  }
}

startServer();