const SERVER_URL = process.env.SERVER_URL;


/**
 * Message that informs the user of the promotion and prompts
 * them to set their preferences.
 */
const buyTermInsurance = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'click to buy life term plan!',
      buttons: [{
        type: 'web_url',
        title: 'Buy Life Term Plan',
        url: 'https://www.fwd.com.sg/life-insurance/enhanced-term-life-insurance/',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }],
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
      }],
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


/**
 * Message that informs the user of the promotion and prompts
 * them to set their preferences.
 */
const helloRewardMessage = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'You are welcome to Excitement Bot!',
      buttons: [{
        type: 'web_url',
        title: 'Set Travel Preferences',
        url: 'https://www.google.com',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }],
    },
  },
};

/**
 * Quick Replies
 */
 const quickReplies = {
    text: 'Pls let us know your choice!',
    quick_replies: [
      {
        content_type: 'text',
        title: 'savings',
        payload: JSON.stringify({
            type: 'SAVING_PAYLOAD',
          }),
      },
      {
        content_type: 'text',
        title: 'travel',
        payload: JSON.stringify({
            type: 'TRAVEL_PAYLOAD',
          }),
      },
      {
        content_type: 'text',
        title: 'term',
        payload: JSON.stringify({
            type: 'TERM_PAYLOAD',
          }),
      },
      {
        content_type: 'text',
        title: 'investments',
        payload: JSON.stringify({
            type: 'INVESTMENT_PAYLOAD',
          }),
      },
      {
        content_type: 'text',
        title: 'personal accident',
        payload: JSON.stringify({
            type: 'ACCIDENT_PAYLOAD',
          }),
      },
      {
        content_type: 'text',
        title: 'car Insurance',
        payload: JSON.stringify({
            type: 'CAR_PAYLOAD',
          }),
      },
    ]
};


/**
 * The persistent menu for users to use.
 */
const persistentMenu = [
  {
    get_started: {
      payload: JSON.stringify({
          type: 'GET_STARTED',
        }),
    }
  },
  {
    greeting: [
    {
      locale: 'default',
      text: 'Hey {{user_first_name}}, Welcome to Excitement Bot! We’d help you pick a insurance. ',
    }
  ]
  },
  {
  persistent_menu: [
    {
      locale: 'default',
      composer_input_disabled: true,
      call_to_actions: [
        {
          title: 'Buy Insurance',
          type: 'nested',
          call_to_actions: [
              {
                title: 'Travel Insurance',
                type: 'postback',
                payload: JSON.stringify({
                  type: 'TRAVEL_PAYLOAD',
                }),
              },
              {
                title:'Term Insurance',
                type: 'postback',
                payload: JSON.stringify({
                  type: 'TERM_PAYLOAD',
                }),
              },
              {
                title:'Car Insurance',
                type: 'postback',
                payload: JSON.stringify({
                  type: 'CAR_PAYLOAD',
                }),
              },
              {
                title:'Investment Insurance',
                type: 'postback',
                payload: JSON.stringify({
                  type: 'INVESTMENT_PAYLOAD',
                }),
              }
          ]
        },
        {
          type: 'nested',
          title: '😇 Ask Human Experts',
          call_to_actions: [
              {
                title: 'Phone',
                type: 'postback',
                payload: JSON.stringify({
                  type: 'PHONE_PAYLOAD',
                }),
              },
              {
                title:'Email',
                type: 'postback',
                payload: JSON.stringify({
                  type: 'EMAIL_PAYLOAD',
                }),
              },
              {
                title:'Our Contact',
                type: 'postback',
                payload: JSON.stringify({
                  type: 'OURCONTACT_PAYLOAD',
                }),
              }
          ]
        },
        {
          type: 'postback',
          title: '😀 How to use?',
          payload: JSON.stringify({
            type: 'HOWTOUSE_PAYLOAD',
          })
        }
      ]
    }
  ]
}
]

/**
 * The Get Started button.
 */
const getStarted = [
  {
    get_started: {
      payload: 'GET_STARTED'
    }
  },
  {
    greeting: [
    {
      locale: 'default',
      text: 'Hey {{user_first_name}}, Welcome to Excitement Bot! We’d help you pick a insurance. ',
    }
  ]
  },
]

/**
 * The whitelisted_domains.
 */
const whitelisteddomains = {
    whitelisted_domains: [
      SERVER_URL,
      'https://www.google.com',
      'https://www.fwd.com.sg/life-insurance/enhanced-term-life-insurance/',
      'https://www.fwd.com.sg/travel-insurance/',
      'https://www.fwd.com.sg/savings-and-investments/endowment-insurance/',
      'https://www.aia.com.sg/en/our-products/investments.html',
      'https://www.aia.com.sg/en/our-products/accident-protection.html',
      'https://www.directasia.com/car-insurance/'
  ],
};

export default {
  helloRewardMessage,
  persistentMenu,
  getStarted,
  whitelisteddomains,
  quickReplies,
  buyTermInsurance,
  buyTravelInsurance,
  buySavingsInsurance,
  buyILPInsurance,
  buyCarInsurance,
  buyAccidentInsurance,
};
