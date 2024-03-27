import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthModule } from '@angular/fire/auth';
import {
  FirebaseAppModule,
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import { environment } from '../../../environments/environment.development';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AuthModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      ],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
