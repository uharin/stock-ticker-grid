import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private oauthService:OAuthService){
    this.configureSingleSignOn();
  }
  title = 'stock-ticker-grid';

  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
     this.oauthService.logOut();
  }

  get token(){
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}
