
//注意，我们是从 @angular/platform-browser-dynamic 中引入的 platformBrowserDynamic 函数
//而不是从 @angular/core 中。
//“引导”不是核心的一部分，因为这不是启动应用的唯一途径,虽然，大部分应用都是在浏览器中调用 bootstrap 函数的。
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';


//无论是 main.ts 还是组件的文件都非常小。
//它只是一个“快速起步”而已。 我们本可以把这两个文件装进 app.component 文件来减少一点复杂度。
//但我们应该用正确的方式组织 Angular 应用的文件结构。
//启动 App 与展现视图是两个相互分离的关注点。
//把这些关注点混在一起会增加不必要的难度。 可以通过使用不同的引导器 (bootstraper) 来在不同的环境中启动 AppComponent 。
//测试组件也变得更容易，因为不需要再运行整个程序才能跑测试。
//让我们多花一点精力来用 “正确的方式” 实现它。
platformBrowserDynamic().bootstrapModule(AppModule);
