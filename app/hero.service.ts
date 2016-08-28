import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable()

export class HeroService {
    /**
     * 异步请求
     * @returns {Promise<Hero[]>}
     */
    getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    /**
     * 延时的异步请求
     * @returns {Promise<Hero[]>}
     */
    getHeroesSlowly():Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 5000) // 2 seconds
        );
    }

    /**
     * 同步请求
     */
    getHeroesSync():Hero[] {
        return HEROES;
    }
}