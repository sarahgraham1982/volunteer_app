# Give&Get 

Give&Get is an online volunteering hub where charities can post activities and volunteers can apply to complete those activites. When users complete activities they are rewarded with points that can be redeemed for coupons with a range of corporate partners.

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
