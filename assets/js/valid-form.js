function validarDatos() {
    window.event.preventDefault(){

        if(document.form.nombre.value == ""){
            alert("campo nombre obligatorio")
            document.form.nombre.focus();

        }
        else if(document.form.email.value == ""){
            alert("campo email obligatorio")
            document.form.email.focus();

        }else if(document.form.asunto.value == ""){
            alert("campo asunto obligatorio")
            document.form.asunto.focus();

        }else if(document.form.email.value.indexOf( "@" )== -1 || document.form.email.value.indexOf( "." )== -1){
            alert("email es invalido!")
            document.form.email.focus();

        }else if(document.form.asunto.value == ""){
            alert("campo asunto obligatorio")
            document.form.asunto.focus();

        }else if(document.form.mensaje.value.indexOf( " " )== -1 || document.form.mensaje.value.length <= 50){
            alert("campo mensaje obligatorio y no puede terner mas de 50 caracteres")
            document.form.mensaje.focus();
    }
}
document.querySelector("form").addEventListener("submit", validarDatos);