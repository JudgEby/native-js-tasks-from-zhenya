import { IGlobalState } from './state'

export const selectCurrency = (state: IGlobalState) => state.currency
