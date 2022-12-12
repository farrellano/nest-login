import { Injectable } from '@nestjs/common';

export type Fav = any;

@Injectable()
export class FavsService {

    private readonly favs = []

    async addFav(id: string): Promise<Fav | undefined>{
        const index = this.favs.indexOf(id);
        if(index <= -1)
            this.favs.push(id);
        return this.favs;
    }

    async deleteFav(id: string): Promise<Fav | undefined>{
        const index = this.favs.indexOf(id);
        if(index > -1){
            this.favs.splice(index,1);
        }
        return this.favs;
    }
    
    async getAll (): Promise<Fav | undefined>{
        return this.favs;
    }

}
