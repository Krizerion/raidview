import { Component } from '@angular/core';
import { CLASS_DATA } from '@app/raid-planner/constants/add-player.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-specs-roles.constants';
import { SelectableIcon } from '@app/shared/models/planner.models';
import { getBackgroundColorByClassName } from '@app/shared/utils/class-spec-utils';
import { AppState } from '@app/store';
import { getClassComp } from '@app/store/raid-leader-tools';
import { select, Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'rlt-class-composition',
  templateUrl: './class-composition.component.html',
  styleUrls: ['./class-composition.component.scss']
})
export class ClassCompositionComponent {
  public classData: SelectableIcon[] = cloneDeep(CLASS_DATA);
  public classCount$: Observable<{ [key: string]: number }> = this.store.pipe(select(getClassComp));

  constructor(private store: Store<AppState>) {}

  getBackgroundColor(className: string): string {
    return getBackgroundColorByClassName(className);
  }

  getClassNameById(id: string): string {
    return CLASSES_NAMES[id];
  }
}
