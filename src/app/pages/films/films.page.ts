import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {}

  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    this.router.navigateByUrl(`/tabs/films/42`);
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }

}