import dayjs from "dayjs";

export function toQueryString(objParams: {
  [key: string]: string | number | boolean;
}) {
  const str = [];
  for (const p in objParams) {
    if (
      Object.prototype.hasOwnProperty.call(objParams, p) &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      objParams[p]
    ) {
      str.push(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        decodeURIComponent(
          `${encodeURIComponent(p)}=${encodeURIComponent(objParams[p])}`
        )
      );
    }
  }

  return str.join("&");
}

export function toUrl(
  url: string,
  query: { [key: string]: string | number | boolean }
) {
  return `${url}?${toQueryString(query)}`;
}

export function getMessError(message: string | string[]) {
  if (typeof message === "string") {
    return message;
  }
  return message[0] || "Lỗi không xác định!";
}

export function getUniqueArray(originArray: (string | number)[]) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return [...new Set(originArray)];
}

export function formatDate(date?: string, format?: string) {
  return dayjs(date).format(format || "DD/MM/YYYY HH:mm");
}

export function formatDateNoTime(date?: string, format?: string) {
  return dayjs(date).format(format || "DD/MM/YYYY");
}

export function isValidURL(url: string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
}
