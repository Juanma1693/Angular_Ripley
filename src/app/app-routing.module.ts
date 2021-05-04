import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecipientComponent } from './components/new-recipient/new-recipient.component';
import { NewTransferComponent } from './components/new-transfer/new-transfer.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'recipient',
    component: NewRecipientComponent
  },
  {
    path: 'transfer',
    component: NewTransferComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
