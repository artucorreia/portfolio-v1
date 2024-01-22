import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  describe: string = 'Não hesite em entrar em contato comigo enviando o formulário abaixo, darei retorno o mais rápido possível';

  public form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required ,Validators.minLength(2), Validators.maxLength(50)]],
    email: ['', [Validators.required ,Validators.minLength(10), Validators.maxLength(65), Validators.email]],
    message: ['', [Validators.required ,Validators.minLength(1), Validators.maxLength(400)]]
  });

  constructor (private formBuilder: FormBuilder) { }

  submitForm(form: {}) {
    console.log(form);
  }
}
