import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtCode } from '../types/UnqualifiedDataTypes';
/*

  1  cbc:ItemClassificationCode [0..1]

*/

const ParamsMap = {
  itemClassificationCode: { order: 1, attributeName: 'cbc:ItemClassificationCode', min: 0, max: 1, classRef: UdtCode },
};

type AllowedParams = {
  itemClassificationCode: string | UdtCode;
};

/**
 *
 */
class CommodityClassification extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:CommodityClassification');
  }
}

export { CommodityClassification, AllowedParams as CommodityClassificationParams };
