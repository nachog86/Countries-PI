export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';

export function loadCountries(countries) {
  return {
    type: LOAD_COUNTRIES,
    payload: countries
  };
}
