var _=function(r){"use strict";var e={random:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:255,e=Number(r)+1;return Math.floor(Math.random()*e)}},t={random:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e="",t="0123456789",n=0;n<r;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},n={random:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"basic",t="",n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";"hex"===e?n="0123456789abcdef":"password"===e&&(n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?");for(var o=0;o<r;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}},o={split:function(r){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];return"string"==typeof r&&(e>=1&&n.push(r.slice(0,e)),null!==t?(n.push(r.slice(e,t)),n.push(r.slice(t))):n.push(r.slice(e))),n}},capitalize:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"single";if("string"==typeof r){var t=r;return t="multiple"===e?t.toLowerCase().replace(/\w\S*/g,(function(r){return r.replace(/^\w/,(function(r){return r.toUpperCase()}))})):t.trimStart().replace(/^\w/,(function(r){return r.toUpperCase()}))}}};function a(r){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function i(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function u(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){o=!0,a=r}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}(r,e)||l(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(r){return function(r){if(Array.isArray(r))return c(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||l(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(r,e){if(r){if("string"==typeof r)return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(r,e):void 0}}function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function s(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=l(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return i=r.done,r},e:function(r){u=!0,a=r},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw a}}}}var v=function(){function r(e,t){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.valArr=e,this.toArr=t}var e,t,n;return e=r,(t=[{key:"first",value:function(){return[].concat(f(this.valArr),f(this.toArr))}},{key:"last",value:function(){return[].concat(f(this.toArr),f(this.valArr))}},{key:"before",value:function(r){var e=isNaN(r)?1:r;return this.toArr.splice(Number(e)-1,0,this.valArr),this.toArr.flat()}},{key:"after",value:function(r){var e=isNaN(r)?0:r;return this.toArr.splice(Number(e)+1,0,this.valArr),this.toArr.flat()}}])&&i(e.prototype,t),n&&i(e,n),r}(),h=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{key:"id",value:0},t=Array.from(r),n=-1;return"key"in e&&"value"in e?n=t.length>=1?t.findIndex((function(r){return r[e.key]===e.value})):-1:t.length>=1&&(n=t.findIndex((function(r){for(var t=0,n=Object.entries(e);t<n.length;t++){var o=u(n[t],2),a=o[0],i=o[1];if(a in r&&r[a]===i)return!0}}))),n},d=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){for(var n={},o=0,a=e;o<a.length;o++)for(var i=a[o],f=0,l=Object.entries(i);f<l.length;f++){var c=u(l[f],2),s=c[0],v=c[1];n[s]=v}return n}},y=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("object"===a(r)){var t=Array.from(r),n=[];if("string"==typeof e){var o,i=new Set,u=s(t);try{for(u.s();!(o=u.n()).done;){var l=o.value;i.has(l[e])||i.add(l[e])}}catch(r){u.e(r)}finally{u.f()}n=f(i)}else{var c,v=new Set,h=s(t);try{for(h.s();!(c=h.n()).done;){var d=c.value;v.has(d)||v.add(d)}}catch(r){h.e(r)}finally{h.f()}n=f(v)}return n}};var m={insert:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){var n=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("object"===a(r)){var o=Array.from(r),i=new v(e,o);return"first"===t?i=i.first():"last"===t?i=i.last():"before"===t?i=i.before(n):"after"===t&&(i=i.after(n)),i}};return n}},update:function(r){if("object"===a(r)||null===r)return function(e,t){if("object"===a(e)||"object"===a(t)){var n=Array.from(e),o=h(n,t);return n.map((function(e,t){var n=e;return t===o&&(n=d(e,r)),n}))}}},destroy:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r){if("object"===a(r)){var t,n=Array.from(r),o=[],i=s(e);try{var u=function(){var r=t.value;if("string"==typeof r&&"first"===r)n=n.map((function(r,e){return 0===e?null:r})),o=n;else if("string"==typeof r&&"last"===r)n=n.map((function(r,e){return e===n.length-1?null:r})),o=n;else if("number"==typeof r)n=n.map((function(e,t){return t===r?null:e})),o=n;else if("object"===a(r)&&null!==r){var e=h(n,r);n=n.map((function(r,t){return t===e?null:r})),o=n}};for(i.s();!(t=i.n()).done;)u()}catch(r){i.e(r)}finally{i.f()}return o.filter((function(r){return null!==r}))}}},select:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r){if("object"===a(r)){for(var t=Array.from(r),n=[],o=function(){var r=u[i],t={};e.forEach((function(e){e in r&&(t[e]=r[e])})),n.push(t)},i=0,u=t;i<u.length;i++)o();return n}}},hidden:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r){if("object"===a(r)){for(var t=Array.from(r),n=[],o=function(){var r=u[i],t=r;e.forEach((function(e){e in r&&delete t[e]})),n.push(t)},i=0,u=t;i<u.length;i++)o();return n}}},toggle:function(r){return function(e){var t=Array.from(e);if(t.includes(r)){var n=t.findIndex((function(e){return e===r}));t.splice(n,1)}else t.push(r);return t}},flatten:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n={};n.id=e.id||"id",n.parent=e.parent||"parent",n.children=e.children||"children";var o=function(){Array.from(r).forEach((function(r){if("object"===a(r)&&null!==r){var e=r;e[n.parent]="0","object"===a(e[n.children])&&Array.isArray(e[n.children])&&(i(e[n.children],r),delete e[n.children]),t.push(e)}}))},i=function r(e,o){e.length>=1&&Array.from(e).forEach((function(e){if("object"===a(e)&&null!==e){var i=e;i[n.parent]=o[n.id],"object"===a(i[n.children])&&Array.isArray(i[n.children])&&(r(i[n.children],e),delete i[n.children]),t.push(i)}}))};return o(),t},nested:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n=Array.from(r),o={};o.id=e.id||"id",o.parent=e.parent||"parent",o.children=e.children||"children";var i=function(r){r.forEach((function(r){if("object"===a(r)&&null!==r){var e=null;("string"==typeof r[o.parent]&&"0"===r[o.parent]||"number"==typeof r[o.parent]&&0===r[o.parent])&&(e=u(r)),null!==e&&t.push(e)}}))},u=function(r){var e=r;return void 0!==r[o.children]&&null!==r[o.children]||(e[o.children]=f(r[o.id]),e[o.children].length<=0&&delete e[o.children]),delete e[o.parent],e},f=function(r){var e=[];return l(r).length>=1&&l(r).forEach((function(r){e.push(u(r))})),e},l=function(r){return n.filter((function(e){return e.parent===r}))};return i(n),t},index:h,search:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r){if("object"===a(r)){var t=[];return e.forEach((function(e){var n=Array.from(r).filter((function(r){for(var t=0,n=Object.entries(r);t<n.length;t++){var o=u(n[t],2),a=o[0],i=o[1];if("NaN"!==Number(r[a])&&Number(i)===Number(e))return!0;if("string"==typeof r[a]&&-1!==i.toLowerCase().indexOf(e.toLowerCase()))return!0}return!1}));t=y(t.concat(n))})),t}}},searchBy:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r,t){if("object"===a(r)){var n=[];return e.forEach((function(e){var o=Array.from(r).filter((function(r){for(var n=0,o=Array.from(t);n<o.length;n++){var a=o[n];if(a in r){if("NaN"!==Number(r[a])&&Number(r[a])===Number(e))return!0;if("string"==typeof r[a]&&-1!==r[a].toLowerCase().indexOf(e.toLowerCase()))return!0}}return!1}));n=y(n.concat(o))})),n}}},filtered:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r,t){if("object"===a(r)){var n=Array.from(r);return e.forEach((function(r,e){var o=n.filter((function(n){if(void 0!==t[e]||null!==t[e]){var o=t[e];if(o in n){if("NaN"!==Number(n[o])&&Number(n[o])===Number(r))return!0;if("string"==typeof n[o]&&-1!==n[o].toLowerCase().indexOf(r.toLowerCase()))return!0}}return!1}));n=o})),n}}},sort:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";if("object"===a(r)&&"string"==typeof e){var t=Array.from(r);return"desc"===e?t.sort((function(r,e){if("number"==typeof r&&"number"==typeof e)return e-r;if("string"==typeof r&&"string"==typeof e){var t=r.toLowerCase(),n=e.toLowerCase(),o=0;return n<t?o=-1:n>t&&(o=1),o}})):t.sort((function(r,e){if("number"==typeof r&&"number"==typeof e)return r-e;if("string"==typeof r&&"string"==typeof e){var t=r.toLowerCase(),n=e.toLowerCase(),o=0;return t<n?o=-1:t>n&&(o=1),o}})),t}},sorted:function(r){if("object"===a(r))return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";if("string"==typeof e&&"string"==typeof t){var n=Array.from(r);return"desc"===t?n.sort((function(r,t){if(e in r&&e in t&&"number"==typeof r[e]&&"number"==typeof t[e])return t[e]-r[e];if(e in r&&e in t&&"string"==typeof r[e]&&"string"==typeof t[e]){var n=r[e].toLowerCase(),o=t[e].toLowerCase(),a=0;return o<n?a=-1:o>n&&(a=1),a}})):n.sort((function(r,t){if(e in r&&e in t&&"number"==typeof r[e]&&"number"==typeof t[e])return r[e]-t[e];if(e in r&&e in t&&"string"==typeof r[e]&&"string"==typeof t[e]){var n=r[e].toLowerCase(),o=t[e].toLowerCase(),a=0;return n<o?a=-1:n>o&&(a=1),a}})),n}}},paginate:function(r){if("object"===a(r))return function(e,t){if("number"==typeof e&&"number"==typeof t){var n=Array.from(r),o=Number(t)*Number(e)-(Number(t)-1),a=Number(t)*Number(e);return n.slice(o-1,a<=n.length?a:n.length)}}},pages:function(r,e){if("object"===a(r)&&"number"==typeof e){var t=Array.from(r).length/Number(e),n=t.toString().split("."),o=Number(n[1])>=5?0:1,i=0;return i=(i=Number.isInteger(t)?t:Number(Number.parseFloat(t).toFixed(0))+o)===Number(e)?1:i}},show:function(r){if("object"===a(r))return function(e,t){if("number"==typeof e&&"number"==typeof t){var n=Array.from(r),o=Number(t)*Number(e)-(Number(t)-1),a=Number(t)*Number(e);return{from:o,to:a<=n.length?a:n.length,of:n.length}}}},pagination:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("number"==typeof r){var n=[],o=Number(r)<Number(e)?Number(r):Number(e),a=Number(e)<1?1:Number(e),i=o+Number(t),u=a-Number(t);if(0===Number(t))for(var f=1;f<=Number(r);f++)n.push(f);else{if(a>1)for(var l=u;l<a;l++)n.push(l);for(var c=o;c<=i;c++)n.push(c)}var s=n.filter((function(r){return r>0})),v=s.filter((function(e){return e<=Number(r)}));return i<Number(r)&&0!==Number(t)&&v.push("..."),u>1&&0!==Number(t)&&v.unshift("..."),v}},sum:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("object"===a(r)){var t=Array.from(r),n=0;if("string"==typeof e){var o,i=[],u=s(t);try{for(u.s();!(o=u.n()).done;){var f=o.value;e in f&&i.push(f[e])}}catch(r){u.e(r)}finally{u.f()}for(var l=0,c=i;l<c.length;l++){var v=c[l];n+=Number(v)}}else{var h,d=s(t);try{for(d.s();!(h=d.n()).done;){var y=h.value;n+=Number(y)}}catch(r){d.e(r)}finally{d.f()}}return n}},unique:y,isArray:function(r){return!("object"!==a(r)||null===r||!Array.isArray(r))}},p={remove:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r){if("object"===a(r)&&null!==r){for(var t={},n=0,o=Object.entries(r);n<o.length;n++){var i=u(o[n],1)[0];t[i]=r[i]}var f,l=s(e);try{for(l.s();!(f=l.n()).done;){var c=f.value;c in t&&delete t[c]}}catch(r){l.e(r)}finally{l.f()}return t}}},removeBy:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e)return function(r){if("object"===a(r)&&null!==r){for(var t={},n=new Set(e),o=0,i=Object.entries(r);o<i.length;o++){var f=u(i[o],1)[0];n.has(r[f])||(t[f]=r[f])}return t}}},merge:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){for(var n={},o=new Map,a=0,i=e;a<i.length;a++)for(var f=i[a],l=0,c=Object.entries(f);l<c.length;l++){var s=u(c[l],2),v=s[0],h=s[1];o.has(v)||(o.set(v,h),n[v]=h)}return n}},replace:d},b="YYYY-MM-DDTHH:mm:ssZ",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],N=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if("string"==typeof r){var t="string"==typeof e?e:b;return t.replace(/Y{1,4}/g,"saya")}},A=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){for(var n=[28,29,30,31],o=new Date(e[0],e[1],0).getDate(),a=n.includes(o)?o:31,i={days:a,start:new Date([e[0],e[1],1]).getDay(),end:new Date([e[0],e[1],a]).getDay(),value:[]},u=1;u<=a;u++){var f=new Date([e[0],e[1],u]).getDate();i.value.push(e[0]+"-"+e[1]+"-"+f)}return i}},j=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){for(var n=[28,29,30,31],o=new Date(Date.UTC(e[0],e[1],0)).getUTCDate(),a=n.includes(o)?o:31,i={days:a,start:new Date(Date.UTC(e[0],Number(e[1])-1,1)).getUTCDay(),end:new Date(Date.UTC(e[0],Number(e[1])-1,a)).getUTCDay(),value:[]},u=1;u<=a;u++){var f=new Date(Date.UTC(e[0],Number(e[1])-1,u)).getUTCDate();i.value.push(e[0]+"-"+e[1]+"-"+f)}return i}},C={now:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=new Date;return"string"==typeof r&&(e=N(e.toString(),r)),e},parse:function(r){var e=new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(g);if(t){var n=t[2]-1||0,o=(t[7]||"0").substring(0,3);e=new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return"object"===a(r)&&Array.isArray(r)&&(e=new Date(Date.UTC.apply(Date,f(r)))),e},utc:function(){return new Date(Date.UTC.apply(Date,arguments))},daysInMonth:A,daysInUTCMonth:j,calendar:function(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(r&&e){var n=7===t.length?t:w,o=A(r,e),a=A(r,Number(Number(e)-1)),i=a.value.slice(Number("-"+o.start)),u=A(r,Number(Number(e)+1)),l=u.value.slice(0,6-Number(o.end));return[].concat(f(n),f(i),f(o.value),f(l))}},calendarUTC:function(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(r&&e){var n=7===t.length?t:w,o=j(r,e),a=j(r,Number(Number(e)-1)),i=a.value.slice(Number("-"+o.start)),u=j(r,Number(Number(e)+1)),l=u.value.slice(0,6-Number(o.end));return[].concat(f(n),f(i),f(o.value),f(l))}}},B={size:function(r,e){if(0===r)return"0 Bytes";var t=e||1,n=Math.floor(Math.log(r)/Math.log(1e3));return parseFloat((r/Math.pow(1e3,n)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},name:function(r){if("string"==typeof r)return r.indexOf("",41)>40?r.slice(0,41)+"...":r},type:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"type",t=r.split("/");return"format"==e?t.shift():t.pop(),t.join("")},image:function(r){if("name"in r&&"string"==typeof r.name)return URL.createObjectURL(r)},date:function(r){return new Date(r).toDateString()},loadImage:function(r){"name"in r&&"string"==typeof r.name&&URL.revokeObjectURL(r)},formatSize:function(r){for(var e=0,t=r,n=t.length,o=0;o<n;o++)e+=t[o].size;for(var a=e+" bytes",i=["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=0,f=e/1024;f>1;f/=1024,u++)a=f.toFixed(3)+" "+i[u]+" ("+e+" bytes)";return a},humanSize:function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e?1e3:1024;if(Math.abs(r)<n)return r+" B";var o=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1,i=Math.pow(10,t);do{r/=n,++a}while(Math.round(Math.abs(r)*i)/i>=n&&a<o.length-1);return r.toFixed(t)+" "+o[a]},exported:function(r,e){if("object"===a(r)&&"string"==typeof e){var t=Array.from(r),n="";if("json"===e.toLowerCase())n="data:application/json;charset=utf-8,"+JSON.stringify(t,null,2);else if("csv"===e.toLowerCase()){var o,i="",u=s(t);try{for(u.s();!(o=u.n()).done;){var f=o.value;for(var l in f)i+=f[l]+",";i=i.trim().substring(0,i.length-1),i+="\n"}}catch(r){u.e(r)}finally{u.f()}n="data:text/csv;charset=utf-8,"+(i=i.trim().substring(0,i.length-1))}else if("sql"===e.toLowerCase()){var c="INSERT INTO `export_table` (";for(var v in t[0])c+="`"+v+"`,";c=c.trim().substring(0,c.length-1),c+=") VALUES ";var h,d=s(t);try{for(d.s();!(h=d.n()).done;){var y=h.value;for(var m in c+="(",y)c+="`"+y[m]+"`,";c=c.trim().substring(0,c.length-1),c+="),"}}catch(r){d.e(r)}finally{d.f()}c=c.trim().substring(0,c.length-1),n="data:application/sql;charset=utf-8,"+(c+=";")}else if("xml"===e.toLowerCase()){var p='<?xml version="1.0" encoding="UTF-8"?>\n<data>';for(var b in t){for(var g in p+="\n  <entry>",b)p+="\n    <"+g+"`>"+b[g]+"</"+g+"`>";p+="\n  </entry>"}n="data:application/xml;charset=utf-8,"+(p+="\n</data>")}else if("ths"===e.toLowerCase()){var w,N='//visit official site: http://ths.glitch.me \n("data", [',A=s(t);try{for(A.s();!(w=A.n()).done;){var j=w.value;for(var C in N+='\n  ("entry", [',j)N+='\n    ("'+C+'", ',N+=j[C]+"),";N=N.trim().substring(0,N.length-1),N+="]),"}}catch(r){A.e(r)}finally{A.f()}N=N.trim().substring(0,N.length-1),n="data:application/ths;charset=utf-8,"+(N="])")}return n}},download:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"txt",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"export-to";if("string"==typeof r){var n=t+"."+e.toLowerCase(),o=encodeURI(r),a=document.createElement("a");a.href=o,a.download=n,document.body.appendChild(a),a.click(),document.body.removeChild(a)}},printed:function(r){if("object"===a(r)){var e=Array.from(r),t=document.createElement("table"),n=document.createElement("thead"),o=document.createElement("tbody");t.appendChild(n),t.appendChild(o);var i=document.createElement("tr");for(var u in e[0]){var f=document.createElement("th");f.textContent=u.replace(/^\w/,(function(r){return r.toUpperCase()})),i.appendChild(f)}n.appendChild(i);for(var l=0,c=e;l<c.length;l++){var s=c[l],v=document.createElement("tr");for(var h in s){var d=document.createElement("td");d.textContent=s[h],v.appendChild(d)}o.appendChild(v)}var y=window.open();y.document.body.appendChild(t),y.focus(),y.print()}}};return r.$array=m,r.$char=n,r.$date=C,r.$file=B,r.$int=e,r.$number=t,r.$object=p,r.$string=o,Object.defineProperty(r,"__esModule",{value:!0}),r}({});
