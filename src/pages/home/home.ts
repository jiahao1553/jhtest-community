import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { Shared } from '../../providers/shared';
import { RestService } from '../../providers/rest-service';
import { Idea } from '../../models/idea';
import { SuggestionPage } from '../suggestion/suggestion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ideas: Idea[];
  moreIdeas: Idea[];
  loadIdeasSkipper: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public restService: RestService,
    private shared: Shared) {
        this.loadIdeasSkipper = 0;
        console.log('initialised again');
        let loading = this.loadingCtrl.create({
          content: "Getting ideas we collected..."
        });
        loading.present();
        this.shared.getUserInformation();
        this.restService.getIdea(this.loadIdeasSkipper).subscribe(data => {
          this.ideas = data;
          loading.dismiss();
        }, (err) => {
          loading.dismiss();
          console.log('Error');
        });
  }

  doInfinite(infiniteScroll) {
    this.loadIdeasSkipper+=5;
    console.log(this.loadIdeasSkipper);
    setTimeout(() => {
      this.restService.getIdea(this.loadIdeasSkipper).subscribe(data => {
        this.moreIdeas = data;
        this.ideas = this.ideas.concat(this.moreIdeas);
      }, (err) => {
        console.log('Error');
      });
      infiniteScroll.complete();
    }, 3000);
  }

  presentModal(idea: Idea) {
    let modal = this.modalCtrl.create(SuggestionPage, {idea});
    modal.present();
  }
}
