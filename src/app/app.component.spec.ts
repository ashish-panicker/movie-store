import { TestBed } from '@angular/core/testing';
import { AuthModule } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AppComponent } from './app.component';
import { UserService } from './users/service/user.service';
import { environment } from '../environments/environment.development';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,  AuthModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),],
      providers: [UserService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
