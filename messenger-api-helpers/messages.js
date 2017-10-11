const SERVER_URL = process.env.SERVER_URL;

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
        type: 'web_url',
        title: 'Set Travel Preferences',
        url: `${SERVER_URL}/`,
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      },
      {
        title: 'Insurance',
        type: 'nested',
        call_to_actions:[
            {
              title: 'Travel Insurance',
              type: 'postback',
              payload: 'PAYBILL_PAYLOAD'
            },
            {
              title:'Maid Insurance',
              type: 'postback',
              payload: 'HISTORY_PAYLOAD'
            },
            {
              title: 'Car Insurance',
              type: 'postback',
              payload: 'CONTACT_INFO_PAYLOAD'
            }
          ],
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
    whitelisted_domains: [SERVER_URL, 'https://www.google.com'],
};

export default {
  helloRewardMessage,
  persistentMenu,
  getStarted,
  whitelisteddomains,
};
