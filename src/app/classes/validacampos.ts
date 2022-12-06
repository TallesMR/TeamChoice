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
  public checkbox = false

    testaVazio(campos: Array<string>){
      this.cont = 0;
      let valores = document.querySelectorAll('input');
       valores.forEach((valor)=>{
         var dados = valor.value;
         if (valor.type == 'checkbox') {
          this.checkbox = valor.checked;
        }
           if (dados == "" && valor.type != 'email' && !this.checkbox){
           this.is_vazio = true;
           this.msg = "Preencha os campos para prosseguir"
           this.severity = 'warn';
           valor.style.border = (this.error_color);
           setTimeout(() => {
             valor.style.border = (this.reset_color);
           }, 4500)
          }else{
                this.msg = "Por favor concorde com nossos termos para prosseguir em seu cadastro";
                this.severity = 'info';

              if (this.senhas.length >= 2) {
                this.comparaSenha();  
              }
              if (valor.name.match('senha')) { 
                this.senhas[this.cont] = valor.value;
                this.cont = this.cont + 1;
              } 
            this.is_vazio = false;
           }
       });
       }          

    comparaSenha(){
        let senha         = (this.senhas[0]);
        let senhaconfirma = (this.senhas[1]);
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