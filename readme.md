## Tech Used:

`express`, `nodemailer`, `node-schedule`, `mongodb`

## Steps to Configure:

### Step 1:

**Configure the `.env` file**

```
$: cat .env.example

mongooseUri=
contactEmail=
contactPassword=
contactHost=
```

- Create a `.env` files and add the above variables to it with their corresponding values.
- To get the mongoose uri you can follow [this](https://mongoosejs.com/docs/connections.html) guide
- Then to get SMTP mail, password and HOST you can follow [this](https://nodemailer.com/usage/why-smtp/) guide

### Step 2

- Configure the time at which emails has to be sent
- This can be done by editing the following line, by following [this](https://www.npmjs.com/package/node-schedule) guide
- Line **71** in `/scheduler/mailer.js`

```js
schedule.scheduleJob("*/10 * * * * *", async function ()
```

### Step 3

- Run the application by running these commands:

```
$: nodemon app.js
$: nodemon ./daemons/subscription.daemon.js
```
