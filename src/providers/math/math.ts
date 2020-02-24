import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, IonicNativePlugin } from '@ionic-native/core'

/*
  Generated class for the MathProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Plugin({
  pluginName: 'calculator',
  plugin: 'cordova-plugin-calculator',
  pluginRef: 'Calculator', 
  repo: 'https://github.com/usmankhi18/MathCalculator.git', 
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})

@Injectable()
export class MathProvider {

  @Cordova()
  add(arg1: any): Promise<string>
  {
    return;
  }

  @Cordova()
  substract(arg1: any): Promise<string>
  {
    return;
  }

  @Cordova()
  multiply(arg1: any): Promise<string>
  {
    return;
  }

  @Cordova()
  divide(arg1: any): Promise<string>
  {
    return;
  }

}
