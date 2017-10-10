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
        url: 'www.google.com',
        webview_height_ratio: 'tall',
        messenger_extensions: true,
      }],
    },
  },
};

/**
 * Button for displaying the preferences menu inside a webview
 */
const setPreferencesButton = {
  type: 'web_url',
  title: 'Set Travel Preferences',
  url: `${SERVER_URL}/`,
  webview_height_ratio: 'tall',
  messenger_extensions: true,
};

/**
 * Button for displaying a postback button that triggers the change gift flow
 */
const myAccountButton = {
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
};

/**
 * The persistent menu for users to use.
 */
const persistentMenu = {
  //locale:"default",
  //composer_input_disabled: true,
  setting_type: 'call_to_actions',
  thread_state: 'existing_thread',
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
};

/**
 * The Get Started button.
 */
const getStarted =
[
  {
    setting_type: 'call_to_actions',
    thread_state: 'new_thread',
    call_to_actions: [
      {
        payload: JSON.stringify({
          type: 'GET_STARTED',
        }),
      },
    ],
  },
  {
    setting_type: 'greeting',
    greeting: {
      text: 'Hey {{user_first_name}}, Welcome to Excitement Bot! We’d help you pick a travel insurance. ',
    }
  },
]

export default {
  helloRewardMessage,
  persistentMenu,
  getStarted,
};
