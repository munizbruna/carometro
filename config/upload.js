const multer = require('multer');

// Configuração do armazenamento de arquivos usando multer.diskStorage
const storage = multer.diskStorage({
    // Função que define o destino dos arquivos
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // Onde os arquivos serão armazenados
    },
    // Função que define o nome do arquivo
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()) // Nome do arquivo
    }
  });
  
  // Configuração do middleware de upload utilizando a configuração de armazenamento definida acima
  const upload = multer({ storage: storage });
  

module.exports = upload;
