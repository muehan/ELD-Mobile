import { RouteRate } from "../models/route-rate";

export class RouteRateService {

    private ratedRoutes: RouteRate[];

    constructor() {
        this.ratedRoutes = new Array<RouteRate>();
    }

    public GetRate(id: string): RouteRate | null {
        return this.ratedRoutes.find(x => x.id == id);
    }

    public Rate(rate: RouteRate) {
        let index = this.ratedRoutes.findIndex(x => x.id === rate.id);

        if (index !== -1) {
            this.UpdateRate(rate);
        } else {
            this.ratedRoutes.push(rate);
        }
    }

    public UpdateRate(rate: RouteRate) {
        let index = this.ratedRoutes.findIndex(x => x.id === rate.id);

        if (index === -1) {
            throw Error('index for update not found');
        }

        this.ratedRoutes[index] = rate;
    }
}