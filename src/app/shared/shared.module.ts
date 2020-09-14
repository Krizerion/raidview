import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { PlayerCardComponent } from '@app/shared/components/player-card/player-card.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, PlayerCardComponent],
  exports: [
    HeaderComponent,
    PlayerCardComponent,
    NzSelectModule,
    NzAlertModule,
    NzModalModule,
    NzToolTipModule,
    NzInputModule,
    DragDropModule
  ]
})
export class SharedModule {}
