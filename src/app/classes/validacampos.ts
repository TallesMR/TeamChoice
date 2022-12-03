export class Validacampos {

public valido = false;
public nomecampo = "";

    testaVazio(campos: Array<string>){
      campos.forEach((campo:string)=>{
      console.log('=>' + campo);
      var valor = (<HTMLInputElement>document.getElementById(campo)).value;;
      if (valor == "") {
        (<HTMLInputElement>document.getElementById(campo)).style.border = '1px solid red';;
        console.log(campo + ' => esta  vazio');
      }else{
        console.log("O campo " + campo + " esta preenchido com o valor de =>" + valor);
      }
      })};

}