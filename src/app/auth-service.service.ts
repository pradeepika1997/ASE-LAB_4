import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    public StoreRegisterDetailsInLocalStorage(fullname: string, email: string, username: string, password: string): void {
        this.storage.set('FULL_NAME', fullname);
        this.storage.set('EMAIL_ID', email);
        this.storage.set('USER_NAME', username);
        this.storage.set('PASSWORD', password);
    }

    public CheckUserCredentials(username: string, password: string): boolean {

        if ( this.storage.get('USER_NAME') === username  &&
            this.storage.get('PASSWORD') === password ) {
            return true;
        }
        return false;
    }
}
