(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dB9c:function(e,t,n){"use strict";n.r(t);var r,i=n("wj3C"),o=n.n(i),a=n("S+S0"),s=n("mrSG"),c=n("zVF4"),u=n("nbvr"),l=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),f=new c.ErrorFactory("installations","Installations",l);function d(e){return e instanceof c.FirebaseError&&e.code.includes("request-failed")}function p(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function h(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function b(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),[2,f.create("request-failed",{requestName:e,serverCode:(r=n.error).code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function g(e){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey})}function v(e,t){var n=t.refreshToken,r=g(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}(n)),r}function _(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function w(e,t){var n=t.fid;return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return t=p(e),r=g(e),i={method:"POST",headers:r,body:JSON.stringify({fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.8"})},[4,_((function(){return fetch(t,i)}))];case 1:return(o=s.sent()).ok?[4,o.json()]:[3,3];case 2:return[2,{fid:(a=s.sent()).fid||n,registrationStatus:2,refreshToken:a.refreshToken,authToken:h(a.authToken)}];case 3:return[4,b("Create Installation",o)];case 4:throw s.sent()}}))}))}function y(e){return new Promise((function(t){setTimeout(t,e)}))}var m=/^[cdef][\w-]{21}$/;function j(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return m.test(t)?t:""}catch(n){return""}}function O(e){return e.appName+"!"+e.appId}var k=new Map;function S(e,t){var n=O(e);I(n,t),function(e,t){var n=T();n&&n.postMessage({key:e,fid:t}),D()}(n,t)}function I(e,t){var n,r,i=k.get(e);if(i)try{for(var o=Object(s.__values)(i),a=o.next();!a.done;a=o.next())(0,a.value)(t)}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var C=null;function T(){return!C&&"BroadcastChannel"in self&&((C=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){I(e.data.key,e.data.fid)}),C}function D(){0===k.size&&C&&(C.close(),C=null)}var P,E,K="firebase-installations-store",x=null;function M(){return x||(x=Object(u.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(K)}}))),x}function N(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=O(e),[4,M()];case 1:return r=s.sent(),i=r.transaction(K,"readwrite"),[4,(o=i.objectStore(K)).get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||S(e,t.fid),[2,t]}}))}))}function A(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=O(e),[4,M()];case 1:return n=i.sent(),[4,(r=n.transaction(K,"readwrite")).objectStore(K).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function q(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=O(e),[4,M()];case 1:return r=s.sent(),i=r.transaction(K,"readwrite"),[4,(o=i.objectStore(K)).get(n)];case 2:return a=s.sent(),void 0!==(c=t(a))?[3,4]:[4,o.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,o.put(c,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!c||a&&a.fid===c.fid||S(e,c.fid),[2,c]}}))}))}function B(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,q(e,(function(n){var r=function(e){return L(e||{fid:j(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(f.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,w(e,t)];case 1:return n=i.sent(),[2,N(e,n)];case 2:return d(r=i.sent())&&409===r.serverCode?[4,A(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,N(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:R(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function R(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,V(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,y(100)];case 3:return o.sent(),[4,V(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,B(e)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function V(e){return q(e,(function(e){if(!e)throw f.create("installation-not-found");return L(e)}))}function L(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function F(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,i,o,a,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return e=function(e,t){var n=t.fid;return p(e)+"/"+n+"/authTokens:generate"}(n,t),i=v(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:"w:0.4.8"}})},[4,_((function(){return fetch(e,a)}))];case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3];case 2:return[2,h(s.sent())];case 3:return[4,b("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function W(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,q(e.appConfig,(function(r){if(!U(r))throw f.create("not-registered");var i,o=r.authToken;if(!t&&2===(i=o).requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===o.requestStatus)return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,H(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,y(100)];case 3:return i.sent(),[4,H(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,W(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw f.create("app-offline");var a=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(s.__assign)(Object(s.__assign)({},e),{authToken:t})}(r);return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,F(e,t)];case 1:return n=o.sent(),i=Object(s.__assign)(Object(s.__assign)({},t),{authToken:n}),[4,N(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return!d(r=o.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,A(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=Object(s.__assign)(Object(s.__assign)({},t),{authToken:{requestStatus:0}}),[4,N(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,a),a}))];case 1:return r=o.sent(),n?[4,n]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=r.authToken,o.label=4;case 4:return[2,i]}}))}))}function H(e){return q(e,(function(e){if(!U(e))throw f.create("not-registered");var t;return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object(s.__assign)(Object(s.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function U(e){return void 0!==e&&2===e.registrationStatus}function $(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,B(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function G(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid;return p(e)+"/"+n}(e,t),r=v(e,t),i={method:"DELETE",headers:r},[4,_((function(){return fetch(n,i)}))];case 1:return(o=a.sent()).ok?[3,3]:[4,b("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function J(e){return f.create("missing-app-config-values",{valueName:e})}(P=o.a).INTERNAL.registerComponent(new a.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");try{for(var r=Object(s.__values)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw J(o)}}catch(a){t={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,B(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):W(e).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,$(e.appConfig)];case 1:return n.sent(),[4,W(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,q(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw f.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw f.create("app-offline");case 3:return[4,G(t,n)];case 4:return r.sent(),[4,A(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return function(e,t){var n=e.appConfig;return function(e,t){T();var n=O(e),r=k.get(n);r||(r=new Set,k.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=O(e),r=k.get(n);r&&(r.delete(t),0===r.size&&k.delete(n),D())}(n,t)}}(n,e)}}}),"PUBLIC")),P.registerVersion("@firebase/installations","0.4.8");var z=((E={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',E["only-available-in-window"]="This method is available in a Window context.",E["only-available-in-sw"]="This method is available in a service worker context.",E["permission-default"]="The notification permission was not granted and dismissed instead.",E["permission-blocked"]="The notification permission was not granted and blocked instead.",E["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",E["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",E["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",E["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",E["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",E["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",E["token-update-no-token"]="FCM returned no token when updating the user to push.",E["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",E["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",E["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",E["invalid-vapid-key"]="The public VAPID key must be a string.",E["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",E),Q=new c.ErrorFactory("messaging","Messaging",z);function X(e){return Q.create("missing-app-config-values",{valueName:e})}function Y(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Z(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}function ee(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n=this;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(!r.sent().map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null];r.label=2;case 2:return t=null,[4,Object(u.openDb)("fcm_token_details_db",5,(function(r){return Object(s.__awaiter)(n,void 0,void 0,(function(){var n,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return r.oldVersion<2?[2]:r.objectStoreNames.contains("fcm_token_object_Store")?[4,(n=r.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2];case 1:return i=s.sent(),[4,n.clear()];case 2:if(s.sent(),!i)return[2];if(2===r.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2];t={token:o.fcmToken,createTime:null!==(a=o.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:Y(o.vapidKey)}}}else(3===r.oldVersion||4===r.oldVersion)&&(t={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:Y(o.auth),p256dh:Y(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:Y(o.vapidKey)}});return[2]}}))}))}))];case 3:return r.sent().close(),[4,Object(u.deleteDb)("fcm_token_details_db")];case 4:return r.sent(),[4,Object(u.deleteDb)("fcm_vapid_details_db")];case 5:return r.sent(),[4,Object(u.deleteDb)("undefined")];case 6:return r.sent(),[2,te(t)?t:null]}}))}))}function te(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var ne=null;function re(){return ne||(ne=Object(u.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore("firebase-messaging-store")}}))),ne}function ie(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=se(e),[4,re()];case 1:return[4,i.sent().transaction("firebase-messaging-store").objectStore("firebase-messaging-store").get(t)];case 2:return(n=i.sent())?[2,n]:[3,3];case 3:return[4,ee(e.appConfig.senderId)];case 4:return(r=i.sent())?[4,oe(e,r)]:[3,6];case 5:return i.sent(),[2,r];case 6:return[2]}}))}))}function oe(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return n=se(e),[4,re()];case 1:return r=o.sent(),[4,(i=r.transaction("firebase-messaging-store","readwrite")).objectStore("firebase-messaging-store").put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function ae(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=se(e),[4,re()];case 1:return n=i.sent(),[4,(r=n.transaction("firebase-messaging-store","readwrite")).objectStore("firebase-messaging-store").delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function se(e){return e.appConfig.appId}var ce="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";function ue(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,pe(e)];case 1:n=s.sent(),r=he(t),i={method:"POST",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(de(e.appConfig),i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),Q.create("token-subscribe-failed",{errorInfo:a});case 6:if(o.error)throw Q.create("token-subscribe-failed",{errorInfo:o.error.message});if(!o.token)throw Q.create("token-subscribe-no-token");return[2,o.token]}}))}))}function le(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,pe(e)];case 1:n=s.sent(),r=he(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(de(e.appConfig)+"/"+t.token,i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),Q.create("token-update-failed",{errorInfo:a});case 6:if(o.error)throw Q.create("token-update-failed",{errorInfo:o.error.message});if(!o.token)throw Q.create("token-update-no-token");return[2,o.token]}}))}))}function fe(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return[4,pe(e)];case 1:n=a.sent(),r={method:"DELETE",headers:n},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(de(e.appConfig)+"/"+t,r)];case 3:return[4,a.sent().json()];case 4:if((i=a.sent()).error)throw Q.create("token-unsubscribe-failed",{errorInfo:i.error.message});return[3,6];case 5:throw o=a.sent(),Q.create("token-unsubscribe-failed",{errorInfo:o});case 6:return[2]}}))}))}function de(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function pe(e){var t=e.appConfig,n=e.installations;return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function he(e){var t=e.vapidKey,n={web:{endpoint:e.endpoint,auth:e.auth,p256dh:e.p256dh}};return t!==ce&&(n.web.applicationPubKey=t),n}function be(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw Q.create("permission-blocked");return[4,we(t,n)];case 1:return r=s.sent(),[4,ie(e)];case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:Y(r.getKey("auth")),p256dh:Y(r.getKey("p256dh"))},i?[3,3]:[2,_e(e,o)];case 3:if(l=(u=o).endpoint===(c=i.subscriptionOptions).endpoint,u.vapidKey===c.vapidKey&&l&&u.auth===c.auth&&u.p256dh===c.p256dh)return[3,8];s.label=4;case 4:return s.trys.push([4,6,,7]),[4,fe(e,i.token)];case 5:return s.sent(),[3,7];case 6:return a=s.sent(),console.warn(a),[3,7];case 7:return[2,_e(e,o)];case 8:return Date.now()>=i.createTime+6048e5?[2,ve({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}var c,u,l}))}))}function ge(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,ie(e)];case 1:return(n=i.sent())?[4,fe(e,n.token)]:[3,4];case 2:return i.sent(),[4,ae(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function ve(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,le(t,e)];case 1:return r=a.sent(),i=Object(s.__assign)({token:r,createTime:Date.now()},e),[4,oe(t,i)];case 2:return a.sent(),[2,r];case 3:return o=a.sent(),[4,ge(t,n)];case 4:throw a.sent(),o;case 5:return[2]}}))}))}function _e(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,ue(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,oe(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function we(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Z(t)})]}}))}))}var ye=function(e){return e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e}({});function me(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}var je=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.getToken=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return this.vapidKey||(this.vapidKey=ce),[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:t.sent(),t.label=3;case 3:if("granted"!==Notification.permission)throw Q.create("permission-blocked");return[2,be(this.firebaseDependencies,e,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),[2,ge(this.firebaseDependencies,e)]}}))}))},e.prototype.requestPermission=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw Q.create("denied"===e?"permission-blocked":"permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Q.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Q.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw Q.create("invalid-sw-registration");if(this.swRegistration)throw Q.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback="function"==typeof e?e:e.next,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw Q.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.getServiceWorkerRegistration=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:if(this.swRegistration)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 2:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,4];case 3:throw t=n.sent(),Q.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 4:return[2,this.swRegistration]}}))}))},e.prototype.messageEventListener=function(e){var t;return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return(null===(t=e.data)||void 0===t?void 0:t.firebaseMessaging)?(r=(n=e.data.firebaseMessaging).type,i=n.payload,this.onMessageCallback&&r===ye.PUSH_RECEIVED&&this.onMessageCallback(i),me(o=i.data)&&"1"===o["google.c.a.e"]?[4,this.logEvent(r,o)]:[3,2]):[2];case 1:a.sent(),a.label=2;case 2:return[2]}}))}))},e.prototype.logEvent=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case ye.NOTIFICATION_CLICKED:return"notification_open";case ye.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}(),Oe=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw Q.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.getToken=function(){var e,t;return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,ie(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:ce,r.label=2;case 2:return[2,be(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return ge(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw Q.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Q.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Q.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw Q.create("only-available-in-window")},e.prototype.onMessage=function(){throw Q.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw Q.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(n){return null}}(e))?[4,Ie()]:[2];case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=i.sent())?[2,Se(n,t)]:(r=function(e){var t;if(e&&"object"==typeof e.notification){var n=Object(s.__assign)({},e.notification);return n.data=Object(s.__assign)(Object(s.__assign)({},e.notification.data),((t={}).FCM_MSG=e,t)),n}}(t))?[4,Te(r)]:[3,3];case 2:return i.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:i.sent(),i.label=5;case 5:return[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(s.__awaiter)(this,void 0,void 0,(function(){var r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return e.newSubscription?[3,2]:[4,ge(this.firebaseDependencies,self.registration)];case 1:return i.sent(),[2];case 2:return[4,ie(this.firebaseDependencies)];case 3:return r=i.sent(),[4,ge(this.firebaseDependencies,self.registration)];case 4:return i.sent(),[4,be(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:ce)];case 5:return i.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(i=function(e){var t,n,r;return(null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action)||(me(e.data)?self.location.origin:null)}(r))?[4,ke(i)]:[2]):[2];case 1:return(o=s.sent())?[3,4]:[4,self.clients.openWindow(i)];case 2:return o=s.sent(),[4,new Promise((function(e){setTimeout(e,3e3)}))];case 3:return s.sent(),[3,6];case 4:return[4,o.focus()];case 5:o=s.sent(),s.label=6;case 6:return o?(a=Ce(ye.NOTIFICATION_CLICKED,r),[2,o.postMessage(a)]):[2]}}))}))},e}();function ke(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i,o,a,c;return Object(s.__generator)(this,(function(u){switch(u.label){case 0:return t=new URL(e,self.location.href),[4,Ie()];case 1:n=u.sent();try{for(r=Object(s.__values)(n),i=r.next();!i.done;i=r.next())if(o=i.value,new URL(o.url,self.location.href).host===t.host)return[2,o]}catch(l){a={error:l}}finally{try{i&&!i.done&&(c=r.return)&&c.call(r)}finally{if(a)throw a.error}}return[2,null]}}))}))}function Se(e,t){var n,r,i=Ce(ye.PUSH_RECEIVED,t);try{for(var o=Object(s.__values)(e),a=o.next();!a.done;a=o.next())a.value.postMessage(i)}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function Ie(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Ce(e,t){return{firebaseMessaging:{type:e,payload:t}}}function Te(e){var t,n=null!==(t=e.title)&&void 0!==t?t:"",r=e.actions,i=Notification.maxActions;return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}var De={isSupported:Pe};function Pe(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}o.a.INTERNAL.registerComponent(new a.Component("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw X("App Configuration Object");if(!e.name)throw X("App Name");var r=e.options;try{for(var i=Object(s.__values)(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var a=o.value;if(!r[a])throw X(a)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!Pe())throw Q.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new Oe(n):new je(n)}),"PUBLIC").setServiceProps(De))},nbvr:function(e,t,n){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,a){n(i=e[t].apply(e,r)).then(o,a)}));return o.request=i,o}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function u(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function f(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function h(e){this._db=e}o(u,"_index",["name","keyPath","multiEntry","unique"]),a(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),a(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),f.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},o(f,"_store",["name","keyPath","indexNames","autoIncrement"]),a(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(f,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},o(d,"_tx",["objectStoreNames","mode"]),s(d,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),s(p,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[f,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[u,f].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=function(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request;return o&&(o.onupgradeneeded=function(e){n&&n(new p(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new h(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);