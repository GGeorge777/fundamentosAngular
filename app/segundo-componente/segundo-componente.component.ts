import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
    nome = "Thomas Shelby O brabo";
    dataNascimento = "1995-04-23";
    urlImagem = "/assets/thomas shelby.jpg";

    mostrarDataNascimento(){
      alert('a data de nascimento do joão é: ${this.dataNascimento}');
    }
}
