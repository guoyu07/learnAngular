//我们把 Angular 应用通过 Angular 模块 组织成了一些功能紧密相关的代码块。
//每个应用都至少需要一个模块（ 根模块 ），习惯上我们把它叫做 AppModule 。
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//在我们让 表单输入 支持双向数据绑定之前，我们得先导入 FormsModule 模块。
//只要把它添加到 NgModule 装饰器的 imports 数组中就可以了。
//这样我们就引入了包括 ngModel 在内的表单依赖包。
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    //该数组是应用中用到的外部模块列表,用来导入当前模块所需的“素材”。 几乎每个应用的 根模块 都要导入 BrowserModule 模块。
    //该模块包含了要在浏览器中运行我们的应用时所需的一切。
    //Angular 本身被拆分成了一组独立的模块，所以我们只要导入我们真正用到的那些就可以了。
    //最常用的模块之一是 FormsModule 以及我们即将看到的 RouterModule 和 HttpModule 。
    imports: [
        BrowserModule,
        FormsModule,
    ],
    //从属于 当前 模块的组件和指令。
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    //标记出 根组件 ，在启动应用时， Angular 应该通过它来进行 引导
    bootstrap: [AppComponent]
})

export class AppModule {
}
