export const config = {
    clientId: '0oa1b5s9ecpAG47I25d7',
    oktaDomain: 'https://dev-92651581.okta.com',
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    oktaConfig : {
      issuer: 'https://dev-92651581.okta.com/oauth2/default',
      clientId: '0oa1b5s9ecpAG47I25d7',
      redirectUri: window.location.origin + '/login/callback'
    }
  };