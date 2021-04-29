import {
  HTTP_CODE,
  HTTP_CODE_CLIENT_ERROR,
  HTTP_CODE_SERVER_ERROR,
  HTTP_CODE_INFORMATION,
  HTTP_CODE_REDIRECTION,
  HTTP_CODE_SUCCESS, isHttpCodeClientError, isHttpCodeInformation, isHttpCodeRedirection, isHttpCodeServerError,
  isHttpCodeSuccess,
} from '../src/httpcode';

const successCodeDataset = Object.values(HTTP_CODE_SUCCESS).map((httpCode) => [httpCode]);
const informationCodeDataset = Object.values(HTTP_CODE_INFORMATION).map((httpCode) => [httpCode]);
const redirectionCodeDataset = Object.values(HTTP_CODE_REDIRECTION).map((httpCode) => [httpCode]);
const clientErrorCodeDataset = Object.values(HTTP_CODE_CLIENT_ERROR).map((httpCode) => [httpCode]);
const serverErrorCodeDataset = Object.values(HTTP_CODE_SERVER_ERROR).map((httpCode) => [httpCode]);

describe('http code information type guard', () => {
  test.each(informationCodeDataset)('should return true for information http code (%p)', (httpCode) => {
    expect(isHttpCodeInformation(httpCode)).toBeTruthy();
  });

  test.each([
    ...successCodeDataset,
    ...redirectionCodeDataset,
    ...clientErrorCodeDataset,
    ...serverErrorCodeDataset,
    // @ts-ignore
  ])('should return false for not information http code (%p)', (httpCode) => {
    expect(isHttpCodeInformation(httpCode)).toBeFalsy();
  });

  test('should work with string', () => {
    expect(isHttpCodeInformation('100')).toBeTruthy();
  });
});

describe('http code success type guard', () => {
  test.each(successCodeDataset)('should return true for success http code (%p)', (httpCode) => {
    expect(isHttpCodeSuccess(httpCode)).toBeTruthy();
  });

  test.each([
    ...informationCodeDataset,
    ...redirectionCodeDataset,
    ...clientErrorCodeDataset,
    ...serverErrorCodeDataset,
  // @ts-ignore
  ])('should return false for not success http code (%p)', (httpCode) => {
    expect(isHttpCodeSuccess(httpCode)).toBeFalsy();
  });

  test('should work with string', () => {
    expect(isHttpCodeSuccess('200')).toBeTruthy();
  });
});

describe('http code redirection type guard', () => {
  test.each(redirectionCodeDataset)('should return true for redirection code (%p)', (httpCode) => {
    expect(isHttpCodeRedirection(httpCode)).toBeTruthy();
  });

  test.each([
    ...informationCodeDataset,
    ...successCodeDataset,
    ...clientErrorCodeDataset,
    ...serverErrorCodeDataset,
    // @ts-ignore
  ])('should return false for not redirection http code (%p)', (httpCode) => {
    expect(isHttpCodeRedirection(httpCode)).toBeFalsy();
  });

  test('should work with string', () => {
    expect(isHttpCodeRedirection('300')).toBeTruthy();
  });
});

describe('http code client error type guard', () => {
  test.each(clientErrorCodeDataset)('should return true for client error http code (%p)', (httpCode) => {
    expect(isHttpCodeClientError(httpCode)).toBeTruthy();
  });

  test.each([
    ...informationCodeDataset,
    ...successCodeDataset,
    ...redirectionCodeDataset,
    ...serverErrorCodeDataset,
    // @ts-ignore
  ])('should return false for not client error http code (%p)', (httpCode) => {
    expect(isHttpCodeClientError(httpCode)).toBeFalsy();
  });

  test('should work with string', () => {
    expect(isHttpCodeClientError('400')).toBeTruthy();
  });
});

describe('http code server error type guard', () => {
  test.each(serverErrorCodeDataset)('should return true server error http code (%p)', (httpCode) => {
    expect(isHttpCodeServerError(httpCode)).toBeTruthy();
  });

  test.each([
    ...informationCodeDataset,
    ...successCodeDataset,
    ...redirectionCodeDataset,
    ...clientErrorCodeDataset,
    // @ts-ignore
  ])('should return false for not server error http code (%p)', (httpCode) => {
    expect(isHttpCodeServerError(httpCode)).toBeFalsy();
  });

  test('should work with string', () => {
    expect(isHttpCodeServerError('500')).toBeTruthy();
  });
});

describe('http code includes all type of http code', () => {
  test.each([
    ...informationCodeDataset,
    ...successCodeDataset,
    ...redirectionCodeDataset,
    ...clientErrorCodeDataset,
    ...serverErrorCodeDataset,
    // @ts-ignore
  ])('should be include in HTTP_CODE (%p)', (httpCode) => {
    const HttpCodeValues = Object.values(HTTP_CODE);
    expect(HttpCodeValues.includes(httpCode)).toBeTruthy();
  });

  test('should work with string', () => {
    expect(isHttpCodeInformation('100')).toBeTruthy();
  });
});
