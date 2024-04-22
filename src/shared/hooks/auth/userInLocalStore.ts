const JWT_LOCAL_STORAGE_KEY = "token";

export interface AuthLocalStorage {
  token: string;
}

export function getJWTFromLocalStorage() {
  const localStorageValue = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
  return localStorageValue
    ? (JSON.parse(localStorageValue) as AuthLocalStorage)
    : null;
}

export function saveJWT(jwt: AuthLocalStorage): void {
  localStorage.setItem(JWT_LOCAL_STORAGE_KEY, JSON.stringify(jwt, null, 2));
}

export function removeJWT(): void {
  localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
}

export function saveAuth(token: string) {
  localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token);
}
