import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private auth: AuthService,
              private router: Router){}
    
  ngOnInit() {
    this.userSub = this.auth.user.subscribe(user=>{
      this.isAuthenticated = !!user;
      console.log(!user)
      console.log(!!user)
    });

  }
  onLogout(){
    this.auth.logout();
    
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
