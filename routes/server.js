// This is your test secret API key.
var express = require('express');
var router = express.Router();
const stripe = require('stripe')('sk_test_51MaMZPFN3Jbl1Rkt3eDbnaCiBZ4WNQ6MyEy6s15pTkoCrGYxYnh5bUUyiabTokISFYX46ZgIquJU4SquXxWM8Vmo004yzB6ywx');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});

// app.listen(4242, () => console.log('Running on port 4242'));


module.exports = router;