# Give & Get 

Give & Get is a mobile volunteering hub where charities can post activities and volunteers can apply to complete those activites. When users complete activities they are rewarded with points that can be redeemed for coupons with our wide range of corporate partners. So next time you give, why not get a little too!
_________________________________

<img width="716" alt="Screenshot 2021-08-11 at 23 26 36" src="https://user-images.githubusercontent.com/78811642/129111768-061ff06c-6091-473d-955d-81d79f163a7d.png">


As a user of Give & Get, you can easily search for volunteering opportunities in your area or with your favorite charity!
_________________________________
<img width="718" alt="Screenshot 2021-08-11 at 23 29 19" src="https://user-images.githubusercontent.com/78811642/129112142-e125344d-06f1-4560-b4c0-ce5b417fb3b2.png">

Complete an activity, and you can score some seriously sweet rewards!
_________________________________
<img width="714" alt="Screenshot 2021-08-11 at 23 32 29" src="https://user-images.githubusercontent.com/78811642/129112309-a5602a39-6392-4f26-b0a3-c0ea38978ebf.png">


## Getting Started:

### Server

Install server dependencies:

```
cd server
npm install
```

Seed the database:

```
npm run seeds
```

Run express:

```
npm run server:dev
```

### Client

The application has a volunteer-side client and a charity-side client, so there are effectively two seperate interfaces for the two parties, both of which access information from the one server.

Volunteer Client:

```
cd ../client
npm install
npm start
```

Charity Client:

```
cd ../charity_client
npm install 
npm start
