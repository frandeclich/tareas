let fs=require('fs')

module.exports=traemos={
    archivo:'./tareas.json',
    leerElMalditoJson:function(){
        let leer=fs.readFileSync(this.archivo,'utf-8')
        return JSON.parse(leer)
    },
    escribirElMalditoJson:function(titulo,estado){
        let nuevaTarea={
            titulo:titulo,
            estado:estado
        }
        let tareasAnteriores=this.leerElMalditoJson()
        tareasAnteriores.push(nuevaTarea)
        this.guardarElMalditoJson(tareasAnteriores)
    },
    guardarElMalditoJson:function(data){
        let nuevoJson=JSON.stringify(data)
        fs.writeFileSync(this.archivo,nuevoJson,'utf-8')
    },
    deshacerElMalditoJson:function(){
        let tareas=this.leerElMalditoJson()
        tareas.pop()
        this.guardarElMalditoJson(tareas)
    },
    buscarEnElMalditoJson:function(busqueda){
        let tareas=this.leerElMalditoJson()
        let tareasFiltradas=tareas.filter(function(tarea){
            return tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
        })
        return tareasFiltradas
    }
}
//traemos.deshacerElMalditoJson()
/* let leer=fs.readFileSync('./tareas.json','utf-8')
leerParse=JSON.parse(leer) */
//console.log(traemos())

   /*  escribirJSON : function(titulo,estado){
        let nuevaTarea = {
            titulo : titulo,
            estado : estado
        }
        let tareasAnteriores = this.leerJSON();
        tareasAnteriores.push(nuevaTarea);
        this.guardarJSON(tareasAnteriores)
    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync(this.archivo,nuevoJSON,'utf-8')
    }
} */ 