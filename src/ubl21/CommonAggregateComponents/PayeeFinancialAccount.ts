import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtText } from '../types/UnqualifiedDataTypes';
import { FinancialInstitutionBranch } from './FinancialInstitutionBranch';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UdtText },
  financialInstitutionBranch: {
  order: 3,
    attributeName: 'cac:FinancialInstitutionBranch',
    min: 0,
    max: 1,
    classRef: FinancialInstitutionBranch,
  },
};

type AllowedParams = {
  id: string | UdtIdentifier;
  financialInstitutionBranch?: FinancialInstitutionBranch;
};

class PayeeFinancialAccount extends GenericAggregateComponent {
  /**
   *
   * @param content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:PayeeFinancialAccount');
  }
}

export { PayeeFinancialAccount, AllowedParams as PayeeFinancialAccountParams };
