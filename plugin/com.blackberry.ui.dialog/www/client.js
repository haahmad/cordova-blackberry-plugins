/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

var _self = {},
    _ID = "com.blackberry.ui.dialog";

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

_self.customAskAsync = function (message, buttons, callback, settings) {
    var args = { "eventId" : guid(), "message" : message, "buttons" : buttons, "callback" : callback};
    if (settings) {
        args.settings = settings;
    }
    
    window.webworks.event.once(_ID, args.eventId, callback);
    window.webworks.exec(function () {}, function () {}, _ID, "customAskAsync", args);
};

_self.standardAskAsync = function (message, type, callback, settings) {
    var args = { "eventId" : guid(), "message" : message, "type" : type, "callback" : callback };
    if (settings) {
        args.settings = settings;
    }

    window.webworks.event.once(_ID, args.eventId, callback);
    window.webworks.exec(function () {}, function () {}, _ID, "standardAskAsync", args);
};

window.webworks.defineReadOnlyField(_self, "D_OK", 0);
window.webworks.defineReadOnlyField(_self, "D_SAVE", 1);
window.webworks.defineReadOnlyField(_self, "D_DELETE", 2);
window.webworks.defineReadOnlyField(_self, "D_YES_NO", 3);
window.webworks.defineReadOnlyField(_self, "D_OK_CANCEL", 4);
window.webworks.defineReadOnlyField(_self, "D_PROMPT", 5);

module.exports = _self;
