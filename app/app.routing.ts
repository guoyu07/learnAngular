import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from "./dashboard.component";

const appRoutes:Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',//重定向路由
        pathMatch: 'full'
    },
];

/**
 * 调用 forRoot 方法是因为要在应用程序根部提供配置好的路由。 forRoot 方法为我们提供了路由需要的服务提供商和指令。
 * @type {ModuleWithProviders}
 */
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);