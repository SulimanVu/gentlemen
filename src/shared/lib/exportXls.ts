import { EExportType, ESseStatus } from '@/shared/types';

type TExportResponseProgress = {
  result: {
    percent: number;
  };
  status: ESseStatus.PROGRESS;
};

type TExportResponseSuccess = {
  result: string;
  status: ESseStatus.SUCCESS;
};

type TExportResponseService = {
  result: unknown;
  status: ESseStatus.FAILURE | ESseStatus.REVOKED | ESseStatus.PENDING;
};

type TExportResponse = TExportResponseProgress | TExportResponseSuccess | TExportResponseService;

const isSuccess = (data: TExportResponse): data is TExportResponseSuccess => {
  return data.status === ESseStatus.SUCCESS;
};

const isProgress = (data: TExportResponse): data is TExportResponseProgress => {
  return data.status === ESseStatus.PROGRESS;
};

export const exportXls = (
  evtSource: EventSource,
  onChangeExportStatus: React.Dispatch<React.SetStateAction<boolean>>,
  onchangeExportProgress: React.Dispatch<React.SetStateAction<number>>,
  exportType: EExportType = EExportType.DOWNLOAD,
) => {
  evtSource.addEventListener(
    'message',
    (message: MessageEvent<string>) => {
      const data: TExportResponse = JSON.parse(message.data);

      if (isProgress(data)) {
        onchangeExportProgress(data.result.percent ?? 0);
      }

      if (isSuccess(data)) {
        onchangeExportProgress(100);
        onChangeExportStatus(false);
        const a = document.createElement('a');
        exportType === EExportType.DOWNLOAD && a.setAttribute('download', '');
        a.setAttribute(
          'href',
          exportType === EExportType.DOWNLOAD ? data.result : `ms-excel:ofe|u|${data.result}`,
        );
        document.body.appendChild(a);
        a.click();
        a.remove();
      }

      if ([ESseStatus.FAILURE, ESseStatus.REVOKED].includes(data.status))
        onChangeExportStatus(false);
    },
    false,
  );

  evtSource.addEventListener(
    'error',
    () => {
      if (evtSource.readyState == EventSource.CLOSED) {
        onChangeExportStatus(false);
      }
    },
    false,
  );
};
