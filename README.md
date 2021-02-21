# WhyYouShouldUnsubscribe

This is a minimal showcase to emphasize why one should unsubscribe RxJS Subscriptions.

## How to use
Run ng serve, click the toggle button a couple of times and check the console. Even though the component is destroyed, it will keep calling the 'service' in the background and might have side effects and noticable performance impact on the application itself as well as on a possible backend. This is the reason why you should unsubscribe in any case. Fix is annotated with "FIXME" in the <not-unsubscribing> component.
There are several other ways out there to do unsubscribe correctly, especially if you require multiple subscriptions in a component (see next section).
  
## Further Reading
I found this article particularly helpful (except for the cover image which is way too big... ;) ):

  https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
  
