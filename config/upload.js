const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', 'uploads')); // Define o diretório de destino
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Define o nome do arquivo
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
