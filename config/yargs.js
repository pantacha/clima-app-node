const argv = require('yargs')
                            .options({
                                direccion: {
                                    alias: 'd',
                                    descripcion: 'obtiene el clima de cualquier lugar en el mundo',
                                    demand: true
                                }
                            })
                            .argv;
            
module.exports = {
    argv
}