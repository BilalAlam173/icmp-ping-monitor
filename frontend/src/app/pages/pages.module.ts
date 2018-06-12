import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SettingComponent } from './setting/setting.component';
import { DetailComponent } from './detail/detail.component';
import { StatusRenderComponent } from './dashboard/dashboard.component';



const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    SettingComponent,
    DetailComponent,
    StatusRenderComponent
  ],
  entryComponents: [StatusRenderComponent]
})
export class PagesModule {
}
