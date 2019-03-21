import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { digimonNPage } from '../digimonN/digimonN';
import { digimonSPage } from '../digimonS/digimonS';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-digimon',
  templateUrl: 'digimon.html',
})
export class digimonPage {
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad digimonPage');
  }
  next_normal(){
    this.navCtrl.push(digimonNPage)
  }
  next_special(){
    this.navCtrl.push(digimonSPage)
  }

}
