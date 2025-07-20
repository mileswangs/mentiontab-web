import Header from "@/components/Header";
import Markdown from "markdown-to-jsx";

const md = `
##  **Privacy Policy**

**Last updated: July 20, 2025**

### Data Collection & Usage

Mentiontab is a privacy-first browser extension. By default, we do **not** collect or store any personal data or browsing content.

We **only collect minimal anonymous usage data**, such as:

-   Clicks on the extension popup button
    
-   Feature usage frequency
    

This data is collected solely to understand general usage patterns and improve the product experience. All analytics are anonymized and do not include any personally identifiable information (PII). We do **not** collect:

-   Tab URLs or page content
    
-   User identity, email, or device fingerprint
    
-   IP addresses tied to individuals
    

We use privacy-respecting analytics tools such as [PostHog](https://posthog.com/) in anonymous mode, with no cookies and no persistent user identifiers.

* * *

### Data Sharing

Mentiontab does **not share** any data with third-party advertisers, data brokers, or external services outside of anonymous usage analytics for product improvement.

* * *

###  Data Deletion

Since we do not collect or store personal user data, there is no personal data to delete. You may disable or uninstall the extension at any time.

* * *

### Permissions Explanation

Mentiontab requests only the permissions needed to function:

-   activeTab: Used to let ChatGPT read the current tab **only when the user explicitly clicks to share**.
    
-   No background scripts or passive data collection.
    

We do **not** auto-inject scripts, scrape pages, or run in the background without user interaction.

* * *

### Consent

By using Mentiontab, you agree to the collection of anonymous click and usage statistics solely for improving the product.

If you have any questions or concerns, feel free to contact us at:  
📧 **wangshuosum@gmail.com**



`;

export default function Home() {
  return (
    <div className="min-h-screen pb-5 ">
      <Header />
      <div className="w-full flex flex-col relative mx-auto mt-20 md:mt-28 mb-16 gap-16">
        <Markdown className="prose mx-auto">{md}</Markdown>
      </div>
    </div>
  );
}
