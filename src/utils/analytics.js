export function trackEvent(eventName, eventDetails = {}) {
  console.log(`[Analytics Event Tracked]: ${eventName}`, eventDetails);
  // Future tracking implementations (e.g. Google Analytics or Facebook Pixel) can wire in here.
}
