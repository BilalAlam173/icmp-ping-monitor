import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SettingComponent } from './setting/setting.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../@core/data/smart-table.service';
import { EditConnectionFormComponent } from './edit-connection-form/edit-connection-form.component';



const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    SettingComponent,
    DetailComponent,
    LoaderComponent,
    DashboardComponent,
    EditConnectionFormComponent
  ],
  providers:[SmartTableService],
  bootstrap:[LoaderComponent],
  entryComponents: [DashboardComponent]
})
export class PagesModule {
}
