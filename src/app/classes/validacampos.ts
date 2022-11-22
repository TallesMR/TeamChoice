export class Validacampos {

public valido = false;
public nomecampo = "";

    testaVazio(campos: Array<string>){
        for (let i = 0; i < 2; i++) {
            if (campos[i] == ""){
              this.nomecampo = 'cad_email';
            }
        }

}

}