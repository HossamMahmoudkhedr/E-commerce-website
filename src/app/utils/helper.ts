export function setCookie(key: string, value: string, daysToExpire: number) {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  document.cookie = `${key}=${value}; path:/; expires=${expires}`;
  return { [key]: value };
}

export function getCookie(key: string) {
  const cookies = document.cookie.split(';');
  const value = cookies.filter((cookie) => {
    return cookie.split('=')[0].trim() === key;
  });

  return value.length > 0 ? value[0].split('=')[1] : undefined;
}

export function removeCookie(key: string) {
  const date = new Date();
  date.setTime(date.getTime() - 1);
  const expired = date.toUTCString();

  document.cookie = `${key}=""; expires=${expired}`;
}

export function clearCookies() {
  const date = new Date();
  date.setTime(date.getTime() - 1);
  document.cookie.split(';').forEach((cookie) => {
    const key = cookie.split('=')[0].trim();
    removeCookie(key);
  });
}
