/**
 * 一个或多个import语句,引入所依赖的文件,es6语法,从@angular/core中导入Component模块
 *
 */
import { Component } from '@angular/core';
export class Hero {
    id:number;
    name:string;
}
//Component 是一个 装饰器函数 ，它接受一个 元数据对象 作为参数。
//通过给这个函数加上 @ 前缀，并使用 metadata 对象调用它，可以把这个“函数调用”加到组件类的紧上方。
//@Component用于告诉Angular,它对应的选择器以及这个选择器要呈现的内容
//这里的“双大括号”会告诉应用：从组件中读取 title 和 hero 属性，并且渲染它们。
//这就是单向数据绑定的“插值表达式”形式, 如果需要双向绑定,需要引入FormsModule,表现在Html上就是把value属性替换为[(ngModel)],并去掉花括号
//ES6和TS支持使用反引号进行HTML模版的优雅排版
@Component({
    selector: 'my-app',
    template: ` <h1>{{title}}</h1>
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>{{hero.name}}
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>`
})
//每个 Angular 应用都至少有一个 根组件 ，习惯上命名为 AppComponent ，它是放用户界面的容器; 容器里面放着组件,组件对应着DOM,这就构成了MVC里面的视图
//打算构建一个真实的应用时，通过添加属性和应用逻辑来扩展这个类。 但不需要在这个“快速起步”中做这些事，所以这里的 AppComponent 类是空的。
//导出 AppComponent ，以便在应用的其它地方 导入 它——比如创建 main.ts 时。
export class AppComponent {
    title = '英雄指南';
    hero:Hero = {
        id: 1,
        name: '思过崖'
    }
}
