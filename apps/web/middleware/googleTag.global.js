export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    if (!window.gtag) {
      // Add the Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WVLPLJDSZ7';
      document.head.appendChild(script);

      // Add the inline script for configuration
      const inlineScript = document.createElement('script');
      inlineScript.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WVLPLJDSZ7');
      `;
      document.head.appendChild(inlineScript);
    }
  }
});
