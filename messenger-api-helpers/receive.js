/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
import sendApi from './send';

// ===== STORES ================================================================
//import UserStore from '../stores/user-store';

// Updates a users preferred gift, then notifies them of the change.
//const handleNewGiftSelected = (senderId, giftId) => {
//  const user = UserStore.get(senderId);
//  user.setPreferedGift(giftId);
//  sendApi.sendGiftChangedMessage(senderId);
// };

/*
 * handleReceivePostback — Postback event handler triggered by a postback
 * action you, the developer, specify on a button in a template. Read more at:
 * developers.facebook.com/docs/messenger-platform/webhook-reference/postback
 */
const handleReceivePostback = (event) => {
  /**
   * The 'payload' parameter is a developer-defined field which is
   * set in a postbackbutton for Structured Messages.
   *
   * In this case we've defined our payload in our postback
   * actions to be a string that represents a JSON object
   * containing `type` and `data` properties. EG:
   */
  const {type, data} = JSON.parse(event.postback.payload);
  const senderId = event.sender.id;

  // perform an action based on the type of payload received
  switch (type) {
  case 'GET_STARTED':
    sendApi.sendHelloRewardMessage(senderId);
    break;
  case 'TERM_PAYLOAD':
    sendApi.handleTermQuickReply(senderId);
    break;
  case 'TRAVEL_PAYLOAD':
    sendApi.handleTravelQuickReply(senderId);
    break;
  case 'INVESTMENT_PAYLOAD':
    sendApi.handleILPQuickReply(senderId);
    break;
  case 'CAR_PAYLOAD':
    sendApi.handleCarQuickReply(senderId);
    break;
  case 'SAVING_PAYLOAD':
    sendApi.handleSavingsQuickReply(senderId);
    break;
  case 'ACCIDENT_PAYLOAD':
    sendApi.handleAccidentQuickReply(senderId);
    break;
  case 'HOWTOUSE_PAYLOAD':
    sendApi.sendHowtoUseMessage(senderId);
    break;
  default:
    console.error(`Unknown Postback called: ${type}`);
    break;
  }
};

/*
 * handleReceiveMessage - Message Event called when a message is sent to
 * your page. The 'message' object format can vary depending on the kind
 * of message that was received. Read more at: https://developers.facebook.com/
 * docs/messenger-platform/webhook-reference/message-received
 */
const handleReceiveMessage = (event) => {
  const message = event.message;
  const senderId = event.sender.id;

  // It's good practice to send the user a read receipt so they know
  // the bot has seen the message. This can prevent a user
  // spamming the bot if the requests take some time to return.
  sendApi.sendReadReceipt(senderId);

  const {type, data} = JSON.parse(event.message.quick_reply.payload);
  const msgsenderId = event.sender.id;

  // perform an action based on the type of payload received
  switch (type) {
  case 'TERM_PAYLOAD':
    sendApi.handleTermQuickReply(msgsenderId);
    break;
  case 'TRAVEL_PAYLOAD':
    sendApi.handleTravelQuickReply(msgsenderId);
    break;
  case 'SAVING_PAYLOAD':
    sendApi.handleSavingsQuickReply(msgsenderId);
    break;
  case 'INVESTMENT_PAYLOAD':
    sendApi.handleILPQuickReply(msgsenderId);
    break;
  case 'ACCIDENT_PAYLOAD':
    sendApi.handleAccidentQuickReply(msgsenderId);
    break;
  case 'CAR_PAYLOAD':
    sendApi.handleCarQuickReply(msgsenderId);
    break;
  case 'HOWTOUSE_PAYLOAD':
    sendApi.sendHowtoUseMessage(msgsenderId);
    break;
  default:
    console.error(`Unknown Message called: ${type}`);
    break;
  }
  //if (message.text) { sendApi.sendWelcomeMessage(senderId); }
};

export default {
  handleReceivePostback,
  handleReceiveMessage,
  //handleNewGiftSelected,
};
