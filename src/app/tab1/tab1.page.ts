import { Component } from '@angular/core';
import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';


constructor(private pro: Pro) { }


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 // Get app info
this.pro.getAppInfo().then((res: AppInfo) => {
  console.log(res)
})

// Get live update info
this.pro.deploy.info().then((res: DeployInfo) => {
  console.log(res)
})

}
