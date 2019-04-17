# What is Apigee Edge
Apigee Edge is the Google API Management product.
Apigee is a platform for developing and managing API proxies. Think of a proxy as an abstraction layer that "fronts" for your backend service APIs and provides value-added features like security, rate limiting, quotas, analytics, and more. The primary consumers of Edge API proxies are app developers who want to use your backend services.

# API Proxy
Apigee Edge, which is built on Java, enables you to provide secure access to your services with a well-defined API that is consistent across all of your services, regardless of service implementation. A consistent API:

- Makes it easy for app developers to consume your services.
- Enables you to change the backend service implementation without affecting the public API.
- Enables you to take advantage of the analytics, monetization, developer portal, and other features built into Edge.

Rather than having app developers consume your services directly, they access an API proxy created on Edge. The API proxy functions as a mapping of a publicly available HTTP endpoint to your backend service. By creating an API proxy you let Edge handle the security and authorization tasks required to protect your services, as well as to analyze, monitor, and monetize those services.

Because app developers make HTTP requests to an API proxy, rather than directly to your services, developers do not need to know anything about the implementation of your services. All the developer needs to know is:

* The URL of the API proxy endpoint.
* Any query parameters, headers, or body parameters passed in a request.
* Any required authentication and authorization credentials.
* The format of the response, including the response data format, such as XML or JSON.

The API proxy isolates the app developer from your backend service. Therefore you are free to change the service implementation as long as the public API remains consistent.

# Create an API product
An API proxy is the HTTP endpoint on Apigee Edge that developers use to access your backend services. While it is possible, you typically do not make individual API proxies available. Instead, you group one or more API proxies into an API product.

An API product is a bundle of API proxies combined with a service plan. That service plan can set access limits on API proxies, provide security, allow monitoring and analytics, and provide additional features. API products are also the central mechanism that Edge uses for authorization and access control to your APIs.

You have a great deal of flexibility when creating API products. For example, multiple API products can share the same API proxy.

# Get started with Apigee Edge
Get yourself a [trial account](https://login.apigee.com/sign__up)

Apigee Edge free trial limitations:
* 1 user only, 1 non-production environment
* 100 thousand API calls per month
* 30 days of analytics reports
* Community support only
* No runtime SLA
* No conversion to paid offerings


## Develop your API
When developing an API, you also define your OpenAPI Specification.
An OpenAPI document that conforms to the OpenAPI Specification is itself a JSON object, which may be represented either in JSON or YAML format.
In Apigee GUI you can upload the spec as YAML or JSON file.

### Create HelloWorld API
To do this we create a simple Node.js server with a HelloWorld service.

#### Create javascript HelloWorld service
Create a file called helloworld_index.js
````
# vi helloworld_index.js
````
#### Copy the following code into the file:
```sh
var express = require('express');
var app = express();

app.get('/v1/hello', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('Hello World!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
```

#### HelloWorld Node.js API
The virtual disk image has Centos-76 installed with Node.js, npm and nvm.

**Check which version of Node.js is running with nvm**
````sh
[root@localhost ~]# nvm list
    v10.15.3
->    system
````
**Set the correct Node.js server version:**
````
[root@localhost ~]# nvm use v10.15.3
Now using node v10.15.3
````
**Start the Hello service**
````
[root@localhost ~]# node index.js
Example app listening on port 8080!
````

**Test that the service is up locally**
````
curl localhost:8080/v1/hello
````
The API returns: Hello World!

**For AWS Node.js server**
````
curl http://aws_server_public_DNS:8080/v1/hello
````

### Create an OpenAPI Specification
To create an OpenAPI Specification that models the API that calls the Node.js server.
Go to: apigee.com/edge

>Enter your login credentials and click Sign In.
Ensure that you are in the New Edge UI. If not, click Try New Edge in the Classic Edge navigation bar.
Select Develop > Specs in the side navigation bar.
The list of specifications is displayed.
>Select Spec > New Spec in the drop-down menu.

Copy the following YAML content:
````yaml
swagger: "2.0"
info:
  version: "0.0.2"
  title: Hello World API
host: 127.0.0.1:8080
basePath: /v1
schemes:
  - http
  - https
consumes:
 - application/json
produces:
  - application/json
paths:
  '/hello':
    get:
      description: Returns greetings to the caller
      operationId: hello
      responses:
        "200":
          description: Success
          schema:
            $ref: "#/definitions/HelloWorldResponse"
        default:
          description: Error
          schema:
            $ref: "#/definitions/ErrorResponse"
definitions:
  HelloWorldResponse:
    required:
      - message
    properties:
      message:
        type: string
      age:
        type: number
  ErrorResponse:
    required:
      - message
    properties:
      message:
        type: string
````
Paste the YAML content into the left pane of the editor (overwriting the current content), or Or import the file.
Click Save.

You are prompted to name the specification.
Enter a name for the specification, such as: helloworld-spec.

Click Continue.
The specification is saved.

Click Close to close the specification and navigate back to the specification list.
The new specification is displayed in the specification list.

## Create API Proxy
To create the API proxy from an OpenAPI Specification:

1. Ensure that you are viewing the spec list.
If not, select Develop > Specs in the side navigation menu.
2. Position your cursor over the specification in the spec list to display the actions menu and click Expand icon.
3. Click Generate API proxy....
 The Build a Proxy wizard is opened and the Details page is pre-populated using values from the OpenAPI Specification, as shown in the following figure.
4. Build proxy wizard

The following table describes the default values that are pre-populated using properties in the OpenAPI Specification. An excerpt of the OpenAPI Specification illustrating the properties used is shown following the table.

## Publish your API
no fill yet

# Learn Edge
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
