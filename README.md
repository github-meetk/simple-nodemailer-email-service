# simple-nodemailer-email-service
It is a Package to simply send email with just few lines of codes.

## INSTALLING

    npm install simple-nodemailer-email-service
    
## What it is used for?

- It is used to simply write send email logic directly on your website.

## Benefits

-It is very easy to use and quickly get started.
-It uses SMTP server of gmail.

## EXAMPLE USAGE

```js
//First import this in your js file.

import { sendEmail } from "simple-nodemailer-email-service";

//Second, Create options object like given below:

const options = {
    from : 'Senders Email Address',
    password : 'Senders Email App password',  // you can get your App password from your google account
    to : 'Receivers Email Address',
    title : "Test",                           //Email Subject
    body : '<h1>Test successful...</h1>'      //Email message
}

//Third, Simply just call this function with "options" parameter

try{
  sendEmail(options).then(response => console.log(response));  //actually it is not neccessary to console log this response.
}catch(e){
  console.error(e);
}

```

## EXAMPLE USAGE - using async/await

```js
//First import this in your js file.

import { sendEmail } from "simple-nodemailer-email-service";

//Second, Create options object like given below:

const options = {
    from : 'Senders Email Address',
    password : 'Senders Email App password',  // you can get your App password from your google account
    to : 'Receivers Email Address',
    title : "Test",                           //Email Subject
    body : '<h1>Test successful...</h1>'      //Email message
}

//Third, Simply just call this function with "options" parameter

try {
	const response = await sendEmail(options);
	console.log(response);
} catch (err) {
	console.error(err);
}
```

## Author

Meet Kalathiya

## Contributions

issues and pull requests are welcome