class Propietario{
    constructor(nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario(){
        return `
        El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}         
        `
    }
}


class Animal extends Propietario{
    constructor(nombre,direccion,telefono,tipo){
        super(nombre,direccion,telefono);
        this._tipo = tipo;
    }

    get tipo(){
        return this._tipo
    }
}

class Mascota extends Animal{
    constructor(nombre,direccion,telefono,tipo,nombreMascota,enfermedad){
        super(nombre,direccion,telefono,tipo)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota(){
        return this._nombreMascota
    }

    set nombreMascota(nombreMascota){
        this._nombreMascota = nombreMascota;
    }

    get enfermedad(){
        return this._enfermedad
    }

    set enfermedad(enfermedad){
        this._enfermedad = enfermedad;
    }

    datosMascota(){
        return ` El tipo de animal es un: ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`
    }
}

const tipoMascota = () => {
    let tipo = document.querySelector('#tipo').value;
    if(tipo == 'perro'){
        return tipo
    }else if(tipo == 'gato'){
        return tipo
    }else {
        return tipo
    }
        
}

const desplegar = mascota => {
    const lista = document.querySelector('#lista')
    const propietario = document.createElement('li')
    const datoMascota = document.createElement('li')

    propietario.innerHTML = mascota.datosPropietario()
    lista.append(propietario)
    // console.log(mascota.datosPropietario());

    datoMascota.innerHTML = mascota.datosMascota()
    lista.append(datoMascota)
    // console.log(mascota.datosMascota());
}

const limpiar = () => {
    document.querySelector('#propietario').value = "";
    document.querySelector('#telefono').value = "";
    document.querySelector('#direccion').value = "";
    document.querySelector('#nombreMascota').value = "";
    document.querySelector('#tipo').value = "";
    document.querySelector('#enfermedad').value = "";
}


const agregar = event => {
    event.preventDefault()
    console.log('estoy dentro de fc agregar');
    let dueno = document.querySelector('#propietario').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let tipo = tipoMascota();
    let enfermedad = document.querySelector('#enfermedad').value;

    const mascota = new Mascota(dueno,direccion,telefono,tipo,nombreMascota,enfermedad)
    desplegar(mascota)
    limpiar()
}


let formulario = document.querySelector('form');
formulario.addEventListener('submit',agregar);
