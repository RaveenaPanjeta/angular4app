import { Injectable } from '@angular/core';
import { HOMES } from "../mocks/mock-homes";
import { Home } from "../mocks/home";

@Injectable()

export class HomeService {
    getHomes(): Promise<Home[]> {
        return Promise.resolve(HOMES);
    }
    getHome(id: number): Promise<Home> {
        return this.getHomes()
                .then(homes => homes.find(home => home.id === id));
    }
}