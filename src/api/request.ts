import { message } from "antd";
import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import * as _ from "lodash";

import { redirectToLogin } from "@/shared/lib";

export interface IObjectWithAnyKeys {
  [key: string]: any;
}

const availableMessages = ["post", "POST", "put", "PUT", "patch", "PATCH"];

export interface IRequestOptions
  extends Omit<AxiosRequestConfig, "method" | "url"> {
  disableAllMessages?: boolean;
  disableSuccessMessages?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

const request = async (
  method: Method,
  url: string,
  options: IRequestOptions = {}
) => {
  const {
    disableAllMessages,
    disableSuccessMessages,
    successMessage,
    errorMessage,
    ...restOptions
  } = options;

  try {
    const { data } = await axios({ method, url, ...restOptions });
    !disableAllMessages &&
      !disableSuccessMessages &&
      availableMessages.includes(method) &&
      message.success(successMessage || "Успешно");
    return data || {};
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError<{ [errorType: string]: string[] | string }>;
      const { status, data } = error.response || {};

      if ([401, 403].includes(status!)) {
        redirectToLogin();
        return;
      }

      if (!disableAllMessages) {
        const messageText = _.isObject(data)
          ? Object.values(data)
              .map((errText) =>
                Array.isArray(errText) ? errText.join("\n") : errText
              )
              .join("\n")
          : errorMessage ||
            `Произошла ошибка при обращении к серверу: ${status}`;

        message.error({
          content: messageText,
          style: { whiteSpace: "pre-line" },
        });
      }
    }

    throw e;
  }
};

export const sseRequest = (url: string, stopStatuses: string[]) => {
  const evtSource = new EventSource(url);

  evtSource.addEventListener(
    "message",
    (msg) => {
      const { status } = JSON.parse(msg.data.replace(/[b']/g, ""));
      stopStatuses.includes(status) && evtSource.close();
    },
    false
  );

  return evtSource;
};

const clearEmptyParams = (params: IObjectWithAnyKeys) => {
  const cleared: IObjectWithAnyKeys = {};

  Object.keys(params).forEach((key: string) => {
    if (params[key] || params[key] === 0) cleared[key] = params[key];
  });

  return cleared;
};

export const get = (
  url: string,
  params?: AxiosRequestConfig["params"],
  config?: IRequestOptions
) =>
  request("get", url, {
    ...config,
    params: params ? clearEmptyParams(params) : undefined,
  });

export const post = (
  url: string,
  data?: AxiosRequestConfig["data"],
  config?: IRequestOptions
) => request("post", url, { ...config, data });

export const put = (
  url: string,
  data?: AxiosRequestConfig["data"],
  config?: IRequestOptions
) => request("put", url, { ...config, data });

export const patch = (
  url: string,
  data?: AxiosRequestConfig["data"],
  config?: IRequestOptions
) => request("patch", url, { ...config, data });

export const del = (
  url: string,
  data?: AxiosRequestConfig["data"],
  config?: IRequestOptions
) => request("delete", url, { ...config, data });

export default request;
