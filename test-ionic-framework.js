1. component needed to start with ionic: 
	nodejs, cordova and ionic, 
2. attribute needed to define for ionic application?
	And to make our new app run, we need to add the ng-app attribute to the body tag:
	<body ng-app="todo">
3. Ionic framework is true. ?
	- it provides tools and servieces for mobile UI with native look and feel.
	- Ionic is used for developing mobile application.
	- Ionic is open source.
4. Components allows to see the next page in navigation stack?
	navPush.
5.The _modal_ is a content pane that can go over the user’s main view temporarily.
 Usually used for making a choice or editing an item?
 	<ion-modal-view> element.
6. to hide some elements when keyboard open?
	By using hide-on-keyboard-open class in elements
7.  Ionic provides many services like "$loading, $actionSheet", and various delegate services.
8, directive is used to attach a controller to the DOM?
	sng-controller.
9. CSS components of Ionic. 
	checkbox, colors.
10. Ionic has __components_ that are purely CSS-driven?
11. The ___ngCordova__ repository contains all of the AngularJS wrappers for Cordova plugins to make it easier for you to use the plugins?
12. Show() this modal instance.
	Returns: promise A promise which is resolved when the modal is finished animating in.
13. Which of the following properties can be passed to create method of Toast component?
	position, duration.
14. Ionic Events? https://www.tutorialspoint.com/ionic/ionic_js_events.htm
	on-hold, on-touch, on-swipe.
15. What is the Ionic Framework Features as following?
	AngularJS, css components.
16. plugin are added by following command: 
	ionic plugin add {plugin}
17. components is not exist in Ionic 2? (tooltip) (cac components: Toast, slides, checkbox...)
18.

19. Remove pager (dots) in new ion-slides ionic component?
	options="{pagination: false}"
20. How i can get input value within ionic 2 in my Component?
	Solution:

1- app/pages/index.html
	In Angular 2, you should use ngModel in the template.

	<ion-header>
	  <ion-navbar primary>
	  </ion-navbar>
	</ion-header>

	<ion-content>
	  <ion-item>
	    <button lightgray full (click)="incrementQty()">+</button>
	    <ion-item>
	      <ion-input type="number" min="1" [value]="qty" [(ngModel)]="qty"></ion-input>
	    </ion-item>
	    <button lightgray full (click)="decrementQty()">-</button>
	  </ion-item>
	</ion-content>
2- app/pages/index.ts

	import { Component} from '@angular/core';
	import { NavController, Slides} from 'ionic-angular';

	@Component({
	  templateUrl: 'build/pages/titlepage/titlepage.html',
	})
	export class titlePage {
	  qty:any;
	  constructor(private nav: NavController) {
	    this.qty = 1;
	  }

	  // increment product qty
	  incrementQty() {
	    console.log(this.qty+1);
	    this.qty += 1;
	  }

	  // decrement product qty
	  decrementQty() {
	    if(this.qty-1 < 1 ){
	      this.qty = 1
	      console.log('1->'+this.qty);
	    }else{
	      this.qty -= 1;
	      console.log('2->'+this.qty);
	    }
	  }
	}
21. Ionic Framework has the following Features?
	Ionic CLI, CSS components, AngularJS.
22. call node server using ionic. 
	angular.module('started.services', ['ngResource'])
	.factory('Session', function($resoure){
		return $resoure('http://xx.xxx:5000/session/:sessionId');
	});
23.Ionic provides custom __components_ and methods? interac with device native.
24. Add custom page transition on ionic 2: 
	import { Config } from 'ionic-angular';

	@NgModule({})
	class AppModule {
	  constructor(private config: Config) {
	    this.config.setTransition('fade-transition', FadeTransition);
	  }
	}
25. shows all the colors applied. https://www.tutorialspoint.com/ionic/ionic_toggle.htm
	Styling Toggle
26.(chon all) Range will usually require icons to display data clearly. We just need to add 
icons before and after range input to place them on both sides of the range element
choose a correct answer?
	<div class = "item range">
	   <input type = "range" name = "range1">
	</div>
27. abbreviature FAB? (Floating Action Buttons)

