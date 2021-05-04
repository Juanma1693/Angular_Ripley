import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipientService } from '../../services/recipient.service';
import { BankService } from '../../services/bank.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeAccountService } from '../../services/type-account.service';


import { Bank } from '../../models/Bank';
import { Recipient } from '../../models/Recipient';
import { TypeAccount } from '../../models/TypeAccount';

@Component({
  selector: 'app-new-recipient',
  templateUrl: './new-recipient.component.html',
  styleUrls: ['./new-recipient.component.css'],
})
export class NewRecipientComponent implements OnInit {

  banks: Array<Bank> = [];
  form: FormGroup = new FormGroup ({
    title: new FormControl (''),
    description: new FormControl ('')
  });
  tittle = 'Nuevo Destinatario';
  editForm: boolean;
  recipient!: Recipient;
  typesAccount: Array<TypeAccount> = [];

  constructor(
    private router: Router,
    private recipientService: RecipientService,
    private formBuilder: FormBuilder,
    private bankService: BankService,
    private typeAccountService: TypeAccountService
  ) {
    this.form.setValue ({
      title: 'Complete me',
      description: 'Now!'
    });
    this.editForm = false;
  }

  ngOnInit(): void {

    this.bankService.getAll().subscribe(
      (res: any) => {
        this.banks = res.banks;
      },
      (err: any) => console.error(err)
    );

    this.typeAccountService.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.typesAccount = res;
      },
      (err: any) => console.error(err)
    );

    this.form = this.formBuilder.group({
      rut: [ Validators.required, Validators.pattern('!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/'), Validators.maxLength(11)],
      name: [ Validators.required, Validators.maxLength(255)],
      email: [ Validators.required, Validators.maxLength(255), Validators.email],
      tel: [ Validators.required, Validators.maxLength(9)],
      bank: [ Validators.required],
      number_account: [ Validators.required, Validators.maxLength(11)],
      TypeAccountId: [ Validators.required],
    });

  }
  save(): void {
    this.recipientService.create(this.form.value)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        },
        err => console.error(err)
      );
  }

}


