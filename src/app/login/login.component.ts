import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { environment } from '../../environments/environment';
import {User} from "../global/models/user";
import {UsersService} from "../shared/services/users.service";
import {SessionsService} from "../shared/services/sessions.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public  user: User;

    constructor(
        private user_service: UsersService,
        private session_service: SessionsService,
        private translate: TranslateService,
        public router: Router
    ) {

        this.user = new User();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        if (localStorage.getItem('SF-Token')){
            this.session_service.getData().subscribe(
                result => {
                    this.router.navigate(['/']);
                }, error => {
                    localStorage.clear();
                    console.log(<any>error.error);
                }
            );
        }
    }
    onSubmit(){
        this.user.client_secret=environment.API_CLIENT_SECRET;
        this.user.client_id=environment.API_CLIENT_ID;
        this.user.grant_type=environment.API_GRANT_TYPE;

        this.user_service.addUser(this.user).subscribe(
            result => {
                localStorage.setItem('SF-Token',result.access_token);
                localStorage.setItem('SF-Username',this.user.username);
                this.router.navigate(['/']);
            }, error => {
                console.log(<any>error.error);
            }
        );
    }
}
