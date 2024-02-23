import { Injectable } from '@angular/core';

import { Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalAppDataService {
    private _storage: Storage | null = null;

  deviceList: Array<{deviceID:number, deviceTitle: string, deviceURL:string, deviceKEY:string}> = [];
  selectedItemforEdit = {deviceID:0, deviceTitle: "new-device", deviceURL: "http://", deviceKEY: "new-key"};
  selectedItemIndex:any;


  constructor(private storage: Storage) { this.init(); }

  async init (){
  const storage = await this.storage.create();
  this._storage = storage;
   console.log("storage init finished");
  }
/*
  public async set (key: string, value: any) {
    let result = await this._storage?.set(key,value);
    console.log(result);
  }
  public async get(key:string) {
    let value = await this._storage?.get(key);
    console.log(value);
    return value
  }
*/
   public async getLocalAppconfig () {
         let value = await this._storage?.get('LocalAppConfig');
         //console.log(value);
         return value
   }

   public async saveLocalAppconfig(data: any) {
       let result = await this._storage?.set('LocalAppConfig',data);
       //console.log(result);
     }


   public async getDeviceList() {
      let result = await this._storage?.get('DeviceList');

      console.log('device list:' + JSON.stringify( result));
      if(result){
                  this.deviceList = result;
            }
   }

  public async saveDeviceList(DeviceListData:any){
     //console.log(JSON.stringify( DeviceListData));
     let result = await this._storage?.set('DeviceList',DeviceListData);
   }


    saveNewDeviceItem() {
       // find next available device ID
       let nextDeviceID = 0;

       if(this.deviceList.length < 1 || this.deviceList == undefined){
          //empty
          nextDeviceID = 1;
          }
        else {
          nextDeviceID = Math.max.apply(Math, (this.deviceList.map(q => q.deviceID))) +  1;

        }
      //console.log("new device ID = " + nextDeviceID);

      this.selectedItemforEdit.deviceID = nextDeviceID ;
      this.deviceList.push(this.selectedItemforEdit);

    //   console.log(JSON.stringify( this.deviceList));
       this.saveDeviceList(this.deviceList);
   }

   saveExistingDeviceItem() {
       this.deviceList[this.selectedItemIndex] = this.selectedItemforEdit;
      // console.log("updating existing device record. deviceid =  " + this.selectedItemforEdit.deviceID);
  //     console.log("updating existing device record. device index =  " + this.selectedItemIndex);
       this.saveDeviceList(this.deviceList);
   }









}
