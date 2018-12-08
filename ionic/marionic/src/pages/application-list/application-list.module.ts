import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplicationListPage } from './application-list';

@NgModule({
  declarations: [ ApplicationListPage ],
  imports: [ IonicPageModule.forChild(ApplicationListPage) ],
  exports: [ ApplicationListPage ]
})
export class ApplicationListPageModule {}
