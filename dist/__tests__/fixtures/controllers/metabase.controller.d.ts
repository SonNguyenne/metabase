import { MetabaseService } from "../../../services/metabase.service";
export declare class MetabaseController {
    mbService: MetabaseService;
    metabaseUrl: string;
    constructor(mbService: MetabaseService, // @inject('services.MetabaseService') public mbService: MetabaseService,
    metabaseUrl: string);
    dashboard(): Promise<any>;
    getDataCard(id: number, filter?: any): Promise<any>;
    getDataCardFilter(id: number, type?: string, format?: string, granularity?: string, filter?: any): Promise<any>;
}
