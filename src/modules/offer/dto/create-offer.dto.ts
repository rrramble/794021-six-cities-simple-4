import { Location } from '../../../types/location.type';
import { OfferFeatures } from '../../../types/offer-features.type';
import { OfferType } from '../../../types/offer-type.type';
import { User } from '../../../types/user.type';


export default class CreateOfferDto {
  public cityName!: string;
  public commentCount!: number;
  public description!: string;
  public features!: OfferFeatures;
  public host!: User;
  public isPremium!: boolean;
  public location!: Location;
  public maxGuestCount!: number;
  public photoPaths!: string[];
  public previewPath!: string;
  public price!: number;
  public publicationDate!: Date;
  public rating!: number;
  public roomCount!: number;
  public title!: string;
  public type!: OfferType;
}
