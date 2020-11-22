let modulo=require('./modulos')
let proceso=require('process')
let queQuiere=proceso.argv[2]
switch(queQuiere){
    case'enumerar':
        let tareas=modulo.leerElMalditoJson()
        if(tareas.length===0){
            console.log('Disculpá, amigo, no te encontré nada para hacer en tu lista más vacía que tu alma.')
        }
        else{
            console.log('Hola, esta es su lista de tareas! ')
            console.log('---------------------------------')
            for(let i=0;i<tareas.length;i++){
                console.log('El título de la tarea es '+tareas[i].titulo+'. El estado en el que está es: '+tareas[i].estado)
            }
        }
        break;
    case'agregar':
        let titulon=proceso.argv[3]
        let estadon=proceso.argv[4]
        modulo.escribirElMalditoJson(titulon,estadon)
        console.log('¡La tarea ha sido agregada exitosamente!')
        break;
    case'deshacer':
        modulo.deshacerElMalditoJson()
        break;
    case'buscar':
        let busqueda=modulo.buscarEnElMalditoJson(proceso.argv[3])
        console.log(busqueda)
        break;
    case'ayuda':
        console.log('-Para usar "enumerar", escriba "enumerar" después de ejecutar el código.')
        console.log('-Para usar "agregar", escriba "agregar" y luego el título y el estado de la tarea. Si son varias palabras, use comillas.')
        console.log('-Para usar "buscar", escriba "buscar", y luego el título de la tarea que está buscando. Si está compuesto por varias palabras, escríbalo entre comillas.')
        console.log('-Para usar "deshacer", escriba "deshacer" y eliminará la última tarea agregada.')
        break;
    default:
        console.log('Por favor, dé la orden para hacer algo con el código.')
        setTimeout(()=>console.log('Las opciones son: enumerar, agregar, buscar o deshacer. Si no sabe usarlas, tipee "ayuda".'),2000)
        
}