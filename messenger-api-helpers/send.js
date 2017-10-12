/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== LODASH ================================================================
import castArray from 'lodash/castArray';

// ===== MESSENGER =============================================================
import api from './api';
import messages from './messages';

// Turns typing indicator on.
const typingOn = (recipientId) => {
  return {
    recipient: {
      id: recipientId,
    },
    sender_action: 'typing_on', // eslint-disable-line camelcase
  };
};

// Turns typing indicator off.
const typingOff = (recipientId) => {
  return {
    recipient: {
      id: recipientId,
    },
    sender_action: 'typing_off', // eslint-disable-line camelcase
  };
};

// Wraps a message JSON object with recipient information.
const messageToJSON = (recipientId, messagePayload) => {
  return {
    recipient: {
      id: recipientId,
    },
    message: messagePayload,
  };
};

// Send one or more messages using the Send API.
const sendMessage = (recipientId, messagePayloads) => {
  const messagePayloadArray = castArray(messagePayloads)
    .map((messagePayload) => messageToJSON(recipientId, messagePayload));

  api.callMessagesAPI([
    typingOn(recipientId),
   ...messagePayloadArray,
    typingOff(recipientId),
  ]);
};

// Send a read receipt to indicate the message has been read
const sendReadReceipt = (recipientId) => {
  const messageData = {
    recipient: {
      id: recipientId,
    },
    sender_action: 'mark_seen', // eslint-disable-line camelcase
  };

  api.callMessagesAPI(messageData);
};


// Send the initial message telling the user about the promotion.
const sendHelloRewardMessage = (recipientId) => {
//  sendMessage(recipientId, messages.helloRewardMessage);
  sendMessage(recipientId, messages.quickReplies);
}

// Send the How to Use telling the user about the what user can do.
const sendHowtoUseMessage = (recipientId) => {
//  sendMessage(recipientId, messages.helloRewardMessage);
  sendMessage(recipientId, messages.quickRepliesHowtoUse);
}

// Send Term Webview.
const handleTermQuickReply = (recipientId) => {
  sendMessage(recipientId, messages.buyTermInsurance);
}

// Send Travel Webview.
const handleTravelQuickReply = (recipientId) => {
  sendMessage(recipientId, messages.buyTravelInsurance);
}

// Send Savings Webview.
const handleSavingsQuickReply = (recipientId) => {
  sendMessage(recipientId, messages.buySavingsInsurance);
}

// Send ILP Webview.
const handleILPQuickReply = (recipientId) => {
  sendMessage(recipientId, messages.buyILPInsurance);
}

// Send Car Webview.
const handleCarQuickReply = (recipientId) => {
  sendMessage(recipientId, messages.buyCarInsurance);
}

// Send personal accident Webview.
const handleAccidentQuickReply = (recipientId) => {
  sendMessage(recipientId, messages.buyAccidentInsurance);
}

export default {
  sendMessage,
  sendReadReceipt,
  sendHelloRewardMessage,
  sendHowtoUseMessage,
  handleTermQuickReply,
  handleTravelQuickReply,
  handleSavingsQuickReply,
  handleILPQuickReply,
  handleCarQuickReply,
  handleAccidentQuickReply,
};
