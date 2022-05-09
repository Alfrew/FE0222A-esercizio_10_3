import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer.component';
import { Route, RouterModule } from '@angular/router';
import { UsersPage } from './pages/users.page';

const routes: Route[] = [
    {
        path: 'users',
        component: UsersPage,
    },
];
@NgModule({
    declarations: [AppComponent, NavbarComponent, FooterComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
