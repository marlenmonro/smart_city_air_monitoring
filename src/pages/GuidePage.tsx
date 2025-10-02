// Guide Page Component
import React from 'react';

export const GuidePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Setup Guide
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Bluetooth Setup
          </h2>
          <ol className="list-none space-y-3">
            {[
              'Ensure your device is powered on and in pairing mode',
              'Open your mobile device\'s Bluetooth settings',
              'Search for "AirSense" or your device model name',
              'Select your device from the available list',
              'Enter the pairing code if prompted (usually "0000" or "1234")',
              'Download and open the AirQuality mobile app',
              'Follow the in-app setup wizard to complete configuration'
            ].map((step, index) => (
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
            Wi-Fi Setup
          </h2>
          <ol className="list-none space-y-3">
            {[
              'Connect your device to power and wait for the LED to blink',
              'Open your mobile device\'s Wi-Fi settings',
              'Connect to the "AirSense-Setup" network',
              'Open a web browser and go to http://192.168.4.1',
              'Select your home Wi-Fi network from the list',
              'Enter your Wi-Fi password',
              'Wait for the device to connect (LED will turn solid green)',
              'Return to your normal Wi-Fi network',
              'Open the AirQuality app to verify connection'
            ].map((step, index) => (
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
            Troubleshooting
          </h2>
          <ol className="list-none space-y-3">
            {[
              'If Bluetooth pairing fails, reset the device and try again',
              'For Wi-Fi issues, ensure your network supports 2.4GHz',
              'Check that your device is within range of your router',
              'Restart your device if connection problems persist',
              'Contact support if you continue experiencing issues'
            ].map((step, index) => (
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
