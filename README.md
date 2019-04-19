# What is Apigee Edge
Apigee Edge is the Google Cloud API Management product.
Apigee is a platform for developing and managing API proxies. Main purpose of Apigee Edge is to expose backend REST services as APIs by being a proxy (a facade) to receive requests from API consumers (clients).
Apigee Edge provides value-added features like security, rate limiting, quotas, analytics, and more. The primary consumers of Edge API proxies are app developers who want to use your backend services.

# API Proxy
The API proxy isolates the app developer from your backend service. Therefore you are free to change the service implementation as long as the public API remains consistent. By creating an API proxy you let Edge handle the security and authorization tasks required to protect your services, as well as to analyze, monitor, and monetize those services.

Out of the box Apigee Edge can auto-generate API Proxy code from a file formatted according to the OpenAPI specification (Swagger). Apigee Edge also has an OpenAPI specification editor & store used to maintain OpenAPI specifications.

Because app developers make HTTP requests to an API proxy, rather than directly to your services, developers do not need to know anything about the implementation of your services. All the developer needs to know is:

* The URL of the API proxy endpoint.
* Any query parameters, headers, or body parameters passed in a request.
* Any required authentication and authorization credentials.
* The format of the response, including the response data format, such as XML or JSON.

# Get started with Apigee Edge
Get yourself a [trial account](https://login.apigee.com/sign__up)

Apigee Edge free trial limitations:
* 1 user only, 1 non-production environment
* 100 thousand API calls per month
* 30 days of analytics reports
* Community support only
* No runtime SLA
* No conversion to paid offerings

## Other requirements
* Terminal program, like MobaXterm (Windows), Iterm (MacOS) or other favorite
* Postman tool ( for testing API ‘s), or else curl command commandline Linux/OSX
* Editor, Intellij, Atom, VScode ( support XSL/XML, javascript, java, json, yaml)
* Exposed backend API (or use the internal Apigee Mock Service)
* Preferred a Git/Github Repo (to save your created Apigee config work) or save it locally

# Setup your own Apigee integration

* Create an API and API Specification (Swagger 2.0 & 3.0 are supported)
* Run and expose your API
* Test your backend API
* Create or upload your created Spec file in Apigee
* Create a simple API Proxy based on your Spec file
* Create an API proxy to secure the API with an app-key
* Generate API Product and Developer Account
* Create APP
* Test your API through Apigee
* Add rate limit to your API for traffic management purpose
* API Diagnostics with Trace tool

# Tutorial from Apigee
What is Learn Edge?
The Learn Edge series is a Git-based, hands-on, learn-by-doing experience for beginning Edge developers. Each example is designed to be quick and easy to do and teaches a core Apigee Edge concept or technique. Each Learn Edge example follows three basic steps:

1. Deploy it.
2. Run it.
3. Trace it.

The best way to learn Apigee Edge is by doing! You can find Learn Edge in the public [Apigee GitHub repository](https://github.com/apigee/api-platform-samples/tree/master/learn-edge)
Download or clone the repo and have fun with Learn Edge!

# Links
* [Apigee login](https://login.apigee.com/login)
* [Apigee docs](https://docs.apigee.com/api-platform/fundamentals/developing-apigee-edge)
* [Apigee get started](https://docs-new.apigee.com/get-started)
* [Apigee tool](https://www.npmjs.com/package/apigeetool)
* [Apigee samples](https://github.com/apigee/api-platform-samples/tree/master/learn-edge)
* [Apigee Community](https://community.apigee.com/index.html)
* [Apigee Management API's](https://apidocs.apigee.com/management/apis)
* [Apigee builtin polices](https://docs.apigee.com/api-platform/reference/policies/reference-overview-policy)
