# Flask + Angular CRUD Example

This example shows how to build a CRUD app with Python, Flask, and Angular. Please read [Build a CRUD App with Python, Flask, and Angular](https://developer.okta.com/blog/2019/03/25/build-crud-app-with-python-flask-angular) to see how it was created.

**Prerequisites:** 

* [Python 3](https://www.python.org/downloads/)
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [Node 12](https://nodejs.org/)+

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Help](#help)
* [Links](#links)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-python-angular-crud-example.git
cd okta-python-angular-crud-example
cd cd app/http/web-app
npm install
```

This will get a copy of the project locally. 

### Create a Free Okta Developer Account

If you don't have one, [create an Okta Developer account](https://developer.okta.com/signup/). After you've completed the setup process, log in to your account.

Create a new OIDC app by navigating to **Applications** > **Add Application** > select **Single-Page App**, and click **Next**. Fill in the following values:

* Name: `Flask + Angular`
* Base URI: `http://localhost:8080`
* Login redirect URI: `http://localhost:8080/callback`
* Logout redirect URI: `http://localhost:8080`

Click **Done** to create your app. 

Modify the `app/http/web-app/src/app/app-routing.module.ts` file and put your Okta app information in it. You can find the value for `<YOUR_ISSUER>` by navigating to **API** > **Authorization Servers**.

```ts
const oktaConfig = {
  issuer: '<YOUR_ISSUER>',
  clientId: '<YOUR_CLIENT_ID>',
  redirectUri: window.location.origin + '/callback',
  scope: 'openid profile email'
}
```
   
**NOTE**: Make sure to remove the `<...>` placeholders. Your issuer should look something like: `https://dev-123456.okta.com/oauth2/default`.

### Start the application

Now you can run both the Angular frontend and Python backend together to see the final result.

To start the Python REST API run:

```
FLASK_APP=$PWD/app/http/api/endpoints.py FLASK_ENV=development pipenv run python -m flask run --port 4433
```

Then start the Angular application:

```
cd app/http/web-app && ng serve --open --port 8080
````

As you might have noticed, your Python REST API is listening to the port 4433 while the Angular application is being served by a process on port 8080.

Log in to `http://localhost:8080` and enjoy your experience!

## Links

This example uses the following libraries provided by Okta:

* [OktaDev Angular SDK](https://github.com/okta/okta-angular#readme)

## Help

Please post any questions as comments on [the blog post](https://developer.okta.com/blog/2019/03/25/build-crud-app-with-python-flask-angular), as issues in this repo, or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).
