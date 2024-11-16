import React from "react";

const App = () => {
  const instructionsAndroid = (
    <ol className="list-decimal list-inside">
      <li>Download the APK file by clicking the button below.</li>
      <li>Go to your phone's "Settings" &gt; "Security" &gt; enable "Install from Unknown Sources".</li>
      <li>Open the downloaded APK file and follow the instructions to install.</li>
    </ol>
  );

  const instructionsIos = (
    <ol className="list-decimal list-inside">
      <li>Download the IPA file by clicking the button below.</li>
      <li>Ensure your device is linked to a developer account.</li>
      <li>
        Use a tool like <strong>Cydia Impactor</strong> or Xcode to sideload the app onto your device.
      </li>
      <li>Follow the on-screen instructions to install.</li>
    </ol>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Download Call Your Driver
      </h1>
      <img
        src="./logo.png"
        alt="Call Your Driver App Preview"
        className="w-72 h-auto mb-8 rounded-lg shadow-md"
      />
      <p className="text-gray-600 text-lg mb-8 text-center">
        Choose your platform and follow the instructions to install our app.
      </p>
      <div className="space-y-8">
        {/* Android Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            For Android Users
          </h2>
          {instructionsAndroid}
          <a
            href="/path/to/your.apk"
            className="mt-4 inline-block px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
            download
          >
            Download APK
          </a>
        </div>

        {/* iOS Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            For iOS Users
          </h2>
          {instructionsIos}
          <a
            href="/path/to/your.ipa"
            className="mt-4 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            download
          >
            Download IPA
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
