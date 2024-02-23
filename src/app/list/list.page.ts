import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonLabel,IonItem,
IonList,IonContent,IonTitle,IonToolbar,IonButtons,IonHeader,IonBadge,IonButton} from '@ionic/angular/standalone';


import { Router, RouterModule } from '@angular/router';

import { LocalAppDataService } from '../services/local-app-data.service';
import { BackendDataService} from '../services/backend-data.service';

import { Platform } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,RouterModule,IonLabel,IonItem,IonList,
  IonContent,IonTitle,IonToolbar,IonButtons,IonHeader,IonBadge,IonButton]
})
export class ListPage implements OnInit {


   refreshIntervalID: any;
   deviceStatus = Array ();
   deviceStatusColor = Array ();

   deviceInfoDebug = " ";
  constructor(  private router: Router,
                public localAppDataService: LocalAppDataService,
                public backendDataService:BackendDataService,
                public platform: Platform
             ) {

             }



  ngOnInit() {
  }
  ionViewWillEnter(){
       //console.log ('Get device list');
       this.localAppDataService.getDeviceList().then( this.findDeviceOnThisHost.bind(this)     );
       this.refreshIntervalID =  setInterval( this.deviceStatusRefresh.bind(this), 3000);
  }

  ionViewDidLeave() {
        //console.log ('**********************ionViewDidLeave called. ' );
      if (this.refreshIntervalID) {
        clearInterval(this.refreshIntervalID);
      }
    }


  newDevice() {
      this.localAppDataService.selectedItemforEdit = {deviceID:0, deviceTitle: "new-device", deviceURL: "http://", deviceKEY: "new-key"};
      this.localAppDataService.selectedItemIndex = null;
      this.router.navigate(['/device-data']);
    }

  editDevice( item:any) {
  //  console.log("edit device called: item= " +  JSON.stringify(item));
    this.localAppDataService.selectedItemforEdit = item;
    this.localAppDataService.selectedItemIndex = this.localAppDataService.deviceList.indexOf(item);
  //  console.log("edit device called: ataService.selectedItemIndex " +  this.dataService.selectedItemIndex );
    this.router.navigate(['/device-data']);
  }


  selectDevice(item:any) {
      this.localAppDataService.saveLocalAppconfig(item);
      this.router.navigate(['/']);
      }


   async deviceStatusRefresh () {
           //console.log ('List data status refresh initiated : ' );
           //console.log(JSON.stringify( this.localAppDataService.deviceList));
           if (this.localAppDataService.deviceList) {
                this.localAppDataService.deviceList.forEach(function(this:any, value:any)
                                                                            {
                                                                              //console.log(JSON.stringify( value));
                                                                              let deviceID = value.deviceID;
                                                                              let deviceURL = value.deviceURL;
                                                                              let deviceKEY = value.deviceKEY;
                                                                              //console.log ('ping device: ' + deviceID + deviceURL + deviceKEY);
                                                                              this.ping_device(deviceID,deviceURL,deviceKEY);
                                                                            }.bind(this)
                                                             );



           }
       }

      public async ping_device (deviceID:any,deviceURL:any,deviceKEY:any) {
         this.backendDataService.ServerKEY = deviceKEY;
         this.backendDataService.ServerURL = deviceURL;

         await this.backendDataService.checkDeviceVersion()
           .subscribe(res => {
            // console.log(res);

             this.deviceStatus[deviceID] = "Connection OK";
             this.deviceStatusColor[deviceID] = "success";
           }, err => {
            // console.log(err);
             this.deviceStatus[deviceID] = "Connection error";
             this.deviceStatusColor[deviceID] = "warning";
           });

       }

  findDeviceOnThisHost () {
      console.log("Trying to find a device on this host/port");

      if (this.platform.is('cordova') == false)
        {
          if (this.platform.is('mobileweb') || this.platform.is('desktop'))
            {
                // find out the URL. Try to ping this URL.
                //this.deviceInfoDebug = this.deviceInfoDebug + window.location.origin ;  //
                let localDeviceURL = window.location.origin;
                // check if this host is already added
                let URLinList = this.localAppDataService.deviceList.find(x => x.deviceURL === localDeviceURL);
                //console.log(URLinList);
                if (!URLinList) {
                         this.localAppDataService.deviceList.push( {"deviceID":999, deviceTitle:localDeviceURL, deviceURL:localDeviceURL, deviceKEY:"new-key"});
                         this.localAppDataService.saveDeviceList(this.localAppDataService.deviceList);
                  }


            }
        }

/*
      if (this.platform.is('cordova'))  this.deviceInfoDebug = this.deviceInfoDebug + " Cordova";  // Android app
      if (this.platform.is('mobileweb'))  this.deviceInfoDebug = this.deviceInfoDebug + " mobileweb";  // OK. proceed
      if (this.platform.is('desktop')) this.deviceInfoDebug = this.deviceInfoDebug + " desktop"; // OK. proceed

Platform Name	Description
android	a device running Android
capacitor	a device running Capacitor
cordova	a device running Cordova
desktop	a desktop device
electron	a desktop device running Electron
hybrid	a device running Capacitor or Cordova
ios	a device running iOS
ipad	an iPad device
iphone	an iPhone device
mobile	a mobile device
mobileweb	a web browser running in a mobile device
phablet	a phablet device
pwa	a PWA app
tablet	a tablet device
*/





  }

}
