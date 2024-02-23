import { GenericController } from '../../common/infrastructure/generic.controller';
import { SubscriptionOfferDO } from '../../data/do/SubscriptionOffer';
// @ts-ignore
import { SubscriptionOfferRequestDTO } from '../../data/dto/SubscriptionOffer/request';
// @ts-ignore
import { SubscriptionOfferResponseDTO } from '../../data/dto/SubscriptionOffer/response';
import { subscriptionofferSA, SubscriptionOfferSA } from '../../service/applicatif/SubscriptionOffer';

class SubscriptionOfferController extends GenericController<
  SubscriptionOfferDO,
  SubscriptionOfferRequestDTO,
  SubscriptionOfferResponseDTO,
  SubscriptionOfferSA
> {}

export const subscriptionofferController = new SubscriptionOfferController(subscriptionofferSA);

