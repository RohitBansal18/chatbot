const SERVER_URL = process.env.SERVER_URL;


/**
 * Message that informs the user of the promotion and prompts
 * them to set their preferences.
 */
const buyTermInsurance = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements: [
        {
          title: 'click to buy life term plan!',
          subtitle: 'We got the right term plan for everyone.',
          default_action: {
              type: 'web_url',
              url: 'https://www.fwd.com.sg/life-insurance/enhanced-term-life-insurance/',
              messenger_extensions: true,
              webview_height_ratio: 'tall',
              fallback_url: 'https://www.fwd.com.sg/life-insurance/enhanced-term-life-insurance/'
            },
          buttons: [
            {
              type: 'web_url',
              title: 'Buy Life Term Plan',
              url: 'https://www.fwd.com.sg/life-insurance/enhanced-term-life-insurance/',
              webview_height_ratio: 'tall',
              messenger_extensions: true,
            }
          ],
        },
        {
          title: 'click term plan news !',
          subtitle: 'all term insurance hecks',
          default_action: {
              type: 'web_url',
              url: 'https://www.policybazaar.com/life-insurance/term-insurance/news/',
              messenger_extensions: true,
              webview_height_ratio: 'tall',
              fallback_url: 'https://www.policybazaar.com/life-insurance/term-insurance/news/'
            },
          buttons: [
            {
              type: 'web_url',
              title: 'Term Insurance News',
              url: 'https://www.policybazaar.com/life-insurance/term-insurance/news/',
              webview_height_ratio: 'tall',
              messenger_extensions: true,
            }
          ],
        }
      ],
    },
  },
};

const buyTravelInsurance = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'click to buy travel plan!',
      buttons: [{
        type: 'web_url',
        title: 'Buy Travel Plan',
        url: 'https://www.fwd.com.sg/travel-insurance/',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      },
      {
        type: 'web_url',
        title: 'Travel Insurance News',
        url: 'https://www.straitstimes.com/lifestyle/travel',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }
    ],
    },
  },
};

const buySavingsInsurance = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'click to buy endowment plan!',
      buttons: [{
        type: 'web_url',
        title: 'Buy Endowment Plan',
        url: 'https://www.fwd.com.sg/savings-and-investments/endowment-insurance/',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }],
    },
  },
};

const buyILPInsurance = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'click to buy ILP!',
      buttons: [{
        type: 'web_url',
        title: 'Buy ILP Plan',
        url: 'https://www.aia.com.sg/en/our-products/investments.html',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }],
    },
  },
};

const buyAccidentInsurance = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'click to buy personal accident plan!',
      buttons: [{
        type: 'web_url',
        title: 'Buy personal plan',
        url: 'https://www.aia.com.sg/en/our-products/accident-protection.html',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }],
    },
  },
};

const buyCarInsurance = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'click to buy Car Insurance!',
      buttons: [{
        type: 'web_url',
        title: 'Buy Car Plan',
        url: 'https://www.directasia.com/car-insurance/',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }],
    },
  },
};


/