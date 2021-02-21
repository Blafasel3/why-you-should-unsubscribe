# WhyYouShouldUnsubscribe

This is a minimal showcase to emphasize why one should unsubscribe RxJS Subscriptions.

## How to use
Run ng serve, click the toggle button a couple of times and check the console. Even though the component is destroyed, it will keep calling the 'service' in the background and might have side effects and noticable performance impact on the application itself as well as on a possible backend. This is the reason why you should unsubscribe in any case. Fix is annotated with "FIXME" in the <not-unsubscribing> component.
There are several other ways out tthere to do this, especially if you require multiple subscriptions in a component.