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
            type: 'HOUSE_PAYLOAD',
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
    get_started:{
      payload: JSON.stringify({
          type: 'GET_STARTED',
        }),
    }
  },
  {
    locale: 'default',
    composer_input_disabled: true,
    call_to_actions: [
      {
        title: 'Insurance',
        type: 'nested',
        call_to_actions:[
            {
              title: 'Travel Insurance',
              type: 'postback',
              payload: JSON.stringify({
                  type: 'PAYBILL_PAYLOAD',
                }),
            },
            {
              title:'Maid Insurance',
              type: 'postback',
              payload: JSON.stringify({
                  type: 'HISTORY_PAYLOAD',
                }),
            },
            {
              title: 'Car Insurance',
              type: 'postback',
              payload: JSON.stringify({
                  type: 'CONTACT_INFO_PAYLOAD',
                }),
            }
          ],
      },
      {
        type: 'web_url',
        title: 'Set Travel Preferences',
        url: 'https://www.google.com',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      },
    ],
  }
]

/**
 * The Get Started button.
 */
const getStarted = [
  {
    get_started:{
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
]

/**
 * The whitelisted_domains.
 */
const whitelisteddomains = {
    whitelisted_domains: [
      SERVER_URL,
      'https://www.google.com',
      'https://www.fwd.com.sg/life-insurance/enhanced-term-life-insurance/',
      'https://www.fwd.com.sg/travel-insurance/'
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
};
