import React, { useEffect } from 'react';

const AnalyticsScript = () => {
    useEffect(() => {
        const scriptContent = `
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://analytics.with-code-examples.online/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '7']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    `;

        const scriptElement = document.createElement('script');
        scriptElement.innerHTML = scriptContent;
        document.body.appendChild(scriptElement);

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(scriptElement);
        };
    }, []);

    return null; // This component does not render anything
};

export default AnalyticsScript;
