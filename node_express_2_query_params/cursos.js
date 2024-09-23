let infoCursos = {
    programacion:[
        {
            id:1,
            titulo:"Aprende python",
            lenguaje: "python", 
            vistas: 15250 , 
            nivel:"basico" 
        },
        {
            id:2,
            titulo:"Aprende javascript",
            lenguaje: "javascript", 
            vistas: 14000,   
            nivel: "intermedio"
        },
        {
            id:3,
            titulo:"Aprende javascript legacy",
            lenguaje: "javascript", 
            vistas: 16000,   
            nivel: "avanzado"
        }
    ],
    matematicas:[
        {
            id:1,
            titulo:"Aprende calculo",
            tema: "calculo", 
            vistas: 15000,   
            nivel: "basico"
        },
        {
            id:2,
            titulo:"Aprende algebra",
            tema: "algebra", 
            vistas: 15000,   
            nivel: "basico"
        }
    ]
}

module.exports.infoCursos = infoCursos;