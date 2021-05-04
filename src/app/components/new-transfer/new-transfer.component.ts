import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipient } from '../../models/Recipient';
import { HistoryService } from '../../services/history.service';
import { RecipientService } from '../../services/recipient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {


  tittle = 'Nueva Transferencia';
  recipients: Array<Recipient> = [];
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private historyService: HistoryService,
    private recipientService: RecipientService
    ) {
    this.form.setValue({
      title: 'Complete me',
      description: 'Now!'
    });
  }

  ngOnInit(): void {

    this.recipientService.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.recipients = res;
      },
      (err: any) => console.error(err)
    );

    this.form = this.formBuilder.group({
      mount: [, Validators.required, Validators.maxLength(11)],
      description: [, Validators.maxLength(255)],
      RecipientNumberAccount: [, Validators.required, Validators.maxLength(11)],
    });
  }

  save(): void {
    this.historyService.create(this.form.value)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        },
        err => console.error(err)
      );
  }
}
