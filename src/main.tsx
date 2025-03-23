import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import * as Sentry from '@sentry/react';
import App from './App.tsx';
import './global.css';

Sentry.init({
  dsn: `${import.meta.env.VITE_SENTRY_DSN}`,
  integrations: [
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
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
