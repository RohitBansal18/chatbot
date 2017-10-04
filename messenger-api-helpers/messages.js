const SERVER_URL = process.env.SERVER_URL;

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
      text: 'Hey {{user_first_name}}, Welcome! I am travel BOT ...',
    }
  },
]

export default {
  //helloRewardMessage,
  getStarted,
};
