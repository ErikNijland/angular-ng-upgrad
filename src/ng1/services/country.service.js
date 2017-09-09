angular
  .module('ng1App')
  .service('countryService', countryService);

function countryService () {
  return { getAll };

  function getAll () {
    return [
      {
        value: 'CA',
        label: 'Canada'
      }, {
        value: 'US',
        label: 'United States'
      }
    ]
  }
}
