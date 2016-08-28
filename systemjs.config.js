/**
 * 配置SystemJs模块加载器
 */
(function (global) {

    // 首先创建一个映射表，来告诉 SystemJS 当想要引入某些模块的时候，该到哪里去找
    var map = {
        'app': 'app',
        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs'
    };
    // 配置默认的文件及其扩展
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'}
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    // 单个文件
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }
    // 打包文件
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }
    // 一般情况下使用UMD,个别情况下使用packUmd
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // 设置angular的包入口
    ngPackageNames.forEach(setPackageConfig);
    // UMD路由
    packages['@angular/router'] = {main: 'index.js', defaultExtension: 'js'};
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
