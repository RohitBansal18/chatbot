const SERVER_URL = process.env.SERVER_URL;

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
  type: 'nested',
  title: 'My Account',
  "call_to_actions":[
          {
            "title":"Pay Bill",
            "type":"postback",
            "payload":"PAYBILL_PAYLOAD"
          },
          {
            "title":"History",
            "type":"postback",
            "payload":"HISTORY_PAYLOAD"
          },
          {
            "title":"Contact Info",
            "type":"postback",
            "payload":"CONTACT_INFO_PAYLOAD"
          }
        ]
};

/**
 * The persistent menu for users to use.
 */
const persistentMenu = {
  locale:"default",
  composer_input_disabled: true,
  setting_type: 'call_to_actions',
  thread_state: 'existing_thread',
  call_to_actions: [
    setPreferencesButton,
    myAccountButton,
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
  //helloRewardMessage,
  persistentMenu,
  getStarted,
};
