import { Map} from "immutable";
import { createSelector } from "reselect";

export const trustedServicesGetter = (state: any) => state.trustedServices.entities;
export const filtersGetter = (state: any) => state.filters;

export const filteredTrustedServicesSelector = createSelector(trustedServicesGetter, filtersGetter, (trustedServices, filters) => {
  const { searchValue } = filters;
  const search = searchValue.toLowerCase();

  const filtered = trustedServices.filter((service: any) => {
    try {
      return (
        service.url.toLowerCase().match(search) ||
        service.cert.notAfter.toString().toLowerCase().match(search) ||
        service.cert.issuerFriendlyName.toLowerCase().match(search) ||
        service.cert.subjectFriendlyName.toLowerCase().match(search)
      );
    } catch (e) {
      return true;
    }
  });

  const normalized = {};

  filtered.map((item) => {
    let cert;

    // Если сервис добавили в список и сразу идем в просмотр, то сертификат это immutable объект и надо преобразовать в Object
    // После открытия прораммы сертификат хранится уже в виде объекта.
    try {
      cert = item.cert.toJS();
    } catch (e) {
      cert = item.cert;
    }

    normalized[item.url] = {...cert, url: item.url};
  });

  return new Map(normalized);
});
