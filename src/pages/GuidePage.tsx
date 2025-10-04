// Guide Page Component
import React from 'react';
import { useTranslation } from 'react-i18next';

export const GuidePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {t('pages.guide.title')}
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {t('pages.guide.bluetoothSetup')}
          </h2>
          <ol className="list-none space-y-3">
            {(t('pages.guide.bluetoothSteps', { returnObjects: true }) as string[]).map((step, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {t('pages.guide.wifiSetup')}
          </h2>
          <ol className="list-none space-y-3">
            {(t('pages.guide.wifiSteps', { returnObjects: true }) as string[]).map((step, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {t('pages.guide.troubleshooting')}
          </h2>
          <ol className="list-none space-y-3">
            {(t('pages.guide.troubleshootingSteps', { returnObjects: true }) as string[]).map((step, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};