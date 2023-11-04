import { PlatDto } from "./PlatDto";

export interface RestaurantDetailDto {
 id?: any;
 nom?: string; 
 adresse?: string;
vegetarien?: boolean;
plats?: Array<PlatDto>;

}