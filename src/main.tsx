import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import App from './App.tsx';
import './global.css';

Sentry.init({
  dsn: `${import.meta.env.VITE_SENTRY_DSN}`,
  integrations: [
    Sentry.browserTracingIntegration(),
    // Use the default strategy, an alias for `feedbackSyncIntegration`
    // https://docs.sentry.io/platforms/javascript/guides/react/user-feedback/configuration/#crash-report-modal
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: 'light',
      showName: true,
      showEmail: true,
      enableScreenshot: true,
      isNameRequired: true,
      isEmailRequired: true,
      triggerLabel: '不具合を報告',
      triggerAriaLabel: '不具合を報告',
      formTitle: '不具合報告フォーム',
      nameLabel: 'お名前',
      namePlaceholder: 'お名前を入力してください',
      emailLabel: 'メールアドレス',
      emailPlaceholder: 'メールアドレスを入力してください',
      messageLabel: '不具合の詳細',
      isRequiredLabel: '（必須）',
      messagePlaceholder: '不具合の詳細を入力してください',
      addScreenshotButtonLabel: 'スクリーンショットを追加',
      removeScreenshotButtonLabel: 'スクリーンショットを削除',
      submitButtonLabel: '送信',
      cancelButtonLabel: 'キャンセル',
      successMessageText: 'ご協力していただき、ありがとうございました！',
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
