export class Validacampos {
  public error_color = "2px solid red"
  public reset_color = "1px solid black"
  public msg = ""
  public severity = "";
  public is_vazio = false;
  public is_valid = false
  public is_coincidesenha = false
  public senhas:any = []
  public cont = 0

    testaVazio(campos: Array<string>){
      campos.forEach((campo:string)=>{
        let valor = (<HTMLInputElement>document.querySelector(campo));
        if (valor.value == ""){
          this.is_vazio = true;
          console.log(campo + ' => ' + valor.value)
          this.msg = "Preencha os campos para prosseguir"
          this.severity = 'warn';
          valor.style.border = (this.error_color);
          setTimeout(() => {
            valor.style.border = (this.reset_color);
          }, 4500)
        }else{
          this.is_vazio = false;
            if (campo.match('senha')) { 
              this.senhas[this.cont] = campo;
              this.cont = this.cont + 1;
          } 
        } 
      });
      if (this.senhas.length >= 2) {
        this.comparaSenha();  
      }          
    }

    comparaSenha(){
        let senha         = (<HTMLInputElement>document.querySelector(this.senhas[0])).value;
        let senhaconfirma = (<HTMLInputElement>document.querySelector(this.senhas[1])).value;
        console.log('Senha: ' + senha);
        console.log('Senha confirmação: ' + senhaconfirma);
        if (senha == senhaconfirma && senha != "") {
          this.valido(); 
         }else{
          if (!this.is_vazio) {
            this.is_vazio = true;
            this.msg = "As senhas nao coicidem"
            this.severity = 'error'; 
          }
         }
      }

    valido(){
      this.severity = 'success'
      this.msg      = 'Sucesso';
      this.is_valid = true;
    }
}
