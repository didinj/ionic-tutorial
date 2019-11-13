import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  details = { id: null, name: '', team: '', photo: '', lat: null, lng: null };
  persons = Player;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details = this.persons.find(x => x.id === id);
    }
  }

  showMap(id: any) {
    this.router.navigate(['/tabs/tab3/', id]);
  }

}
