export class Validacampos {
  public error_color = "2px solid red"
  public reset_color = "1px solid black"

    testaVazio(campos: Array<string>){
      campos.forEach((campo:string)=>{
        let valor = (<HTMLInputElement>document.querySelector(campo));
        if (valor.value == ""){
          valor.style.border = (this.error_color);
          setTimeout(() => {
            valor.style.border = (this.reset_color);
          }, 4500)
        }
      });
    }

    comparaSenha(){
      
    }
}