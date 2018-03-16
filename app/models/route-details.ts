import { RouteListItem } from ".";

export class RouteDetails extends RouteListItem {
    remark: string;
    picturePaths?: string[];
    createdBy: string;
    createdAt: Date;
}