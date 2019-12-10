function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function aeautomodelTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FAEAutoModel.pug":"include \u002Fincludes\u002FcompactLabel\n\nmain#model-development\n  #unstarted.stage\n    h3 \n      span Use \n      span.logo \n        include ..\u002Fassets\u002Fimages\u002Flogo-v2.svg \n      span to predict\n    +compactSelectLabel(\"Target feature\")(id=\"target-feature\" disabled=true) \n      option.contentValue.bind#dv(selected=true value=\"1\" data-value=\"Loading...\") dv\n    +compactSelectLabel(\"Select data to use\")(id=\"data-source\" disabled=true) \n      option.template(style=\"display: none;\" value=\"\" data-value=\"\") TEMPLATE\n    +compactSelectLabel(\"Select tuning parameters to optimize\")(id=\"tuning-params\" disabled=false) \n      option.template(value=\"\" data-value=\"\" style=\"display: none;\") TEMPLATE\n    h3.highlight Summary\n    dl.summary\n      dt Incidence Rate\n      dd#incidence-rate.bind.contentValue(data-value=\"0\") 0\n      dt Observations\n      dd#numOfRows.bind.contentValue(data-value=\"0\") 0\n      dt Features\n      dd#numOfCols.bind.contentValue(data-value=\"0\") 0\n    button#start-ae.button\n      include ..\u002Fassets\u002Fimages\u002Ficons\u002Fstart-button.svg\n    dl.progress.group\n      dt.dial.dt(data-value=\"0%\") Data Treatement\n      dd\n        span 0% \n        include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n      dt.dial.fe(data-value=\"0%\") Feature Engineering\n      dd\n        span 0%\n        include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n      dt.dial.md(data-value=\"0%\") Model Development\n      dd\n        span 0%\n        include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n      dt.dial.mc(data-value=\"0%\") Model Comparison\n      dd\n        span 0%\n        include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n  #started.stage\n    h3#runtime\n      span.logo \n        include ..\u002Fassets\u002Fimages\u002Flogo-v2.svg \n      span\n        has been running for:&nbsp;\n      span#time-running.bind.contentValue(data-value=\"0 minutes\") 0 minutes\n    #completed-panel-1.completed-panel\n      dl.progress.group.dt\n        dt.dial.dt.bind(data-value=\"0%\") Data Treatement\n        dd\n          span 0% \n          include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n    #big-progress-dial.bind(data-dt-value=\"0%\", data-dt-wt=\"25\", data-fe-value=\"0%\", data-fe-wt=\"25\", data-md-value=\"0%\", data-md-wt=\"25\")\n      #slices\n        - let sliceAngle = 2*Math.atan(0.05)*180\u002FMath.PI, gapAngle=sliceAngle\u002F5;\n        - let noSlices=37, totalAngle=sliceAngle*noSlices+gapAngle*(noSlices-1), startAngle=-90 - totalAngle\u002F2 + sliceAngle\u002F2; \n        - for (let i=0; i\u003CnoSlices; i++){\n          .slice(style=`--rotate-angle: ${startAngle+(sliceAngle+gapAngle)*i}deg;`)\n        - }\n      button#big-stop-button.button\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Fstop-button.svg\n      #progress-text 0%\n    #completed-panel-2.completed-panel\n      dl.progress.group.fe\n        dt.dial.fe.bind(data-value=\"0%\") Feature Engineering\n        dd\n          span 0%\n          include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n    #ongoing-panel\n      dl#stages.progress.group.dt\n        dt.dial.dt.bind(data-value=\"0%\") Data Treatement\n        dd\n          span 0% \n          include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n        dt.dial.fe.bind(data-value=\"0%\") Feature Engineering\n        dd\n          span 0%\n          include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n        dt.dial.md.bind(data-value=\"0%\") Model Development\n        dd\n          span 0%\n          include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n        dt.dial.mc.bind(data-value=\"0%\") Model Comparison\n        dd\n          span 0%\n          include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n      #collector-rule\n      #current-progress-dial(data-value=\"0%\").bind.dial\n        span 0%\n        include ..\u002Fassets\u002Fimages\u002Fprogress-circle.svg\n      #current-progress\n        \naside#processor-stats\n  h3 Power(%)\n  #power.chart\n  h3 GPU Temp(&deg;C)\n  #gpu-temp.chart\n  h3 GPU Usage(%)\n  #gpu-usage.chart\n  h3 CPU Temp(&deg;C)\n  #cpu-temp.chart\n  h3 CPU Usage(%)\n  #cpu-usage.chart\n\n","src\u002Fincludes\u002FcompactLabel.pug":"mixin compactInputLabel(labelText)\n  label.compact.input(for=\"input-\"+attributes.id id=attributes.id, class=attributes.cls)\n    input(class=`input-${attributes.cls}`, id=\"input-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, disabled=attributes.disabled, pattern=attributes.pattern)\n    span= labelText\n    span.errorMsg= attributes.errortext\n\nmixin compactTextareaLabel(labelText)\n  label.compact.textarea(for=\"textarea-\"+attributes.id id=attributes.id, class=attributes.cls)\n    - var rowCount=(attributes.rows?attributes.rows:\"3\");\n    textarea(class=`textarea-${attributes.cls}`, id=\"textarea-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, rows=attributes.rows, disabled=attributes.disabled)\n    span= labelText\n\nmixin compactSelectLabel(labelText)\n  label.compact.select(for=\"select-\"+attributes.id id=attributes.id, class=attributes.cls)\n    select(class=`select-${attributes.cls}`, id=\"select-\"+attributes.id, aria-label=labelText, disabled=attributes.disabled)\n      if block\n        block\n    span= labelText","src\u002Fassets\u002Fimages\u002Flogo-v2.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 64 64\"\u003E\u003Cg stroke-width=\".93069\" transform=\"matrix(1.0745 0 0 1.0745 -1.6501 -1.7269)\"\u003E\u003Cpath d=\"m45.667 51.459h-30.292c-3.1356 0-5.7579-0.64385-7.8482-1.941-2.0997-1.297-3.6207-2.837-4.5727-4.628-0.9424-1.801-1.4183-3.49-1.4183-5.077v-16.611c0-1.7917 0.60657-3.5275 1.829-5.2259 1.2225-1.6891 2.6783-3.0702 4.3767-4.1247s3.1168-1.5864 4.2648-1.5864h33.446v9.1827h-26.176c-0.97984 0-1.9598 0.2986-2.9396 0.90518-0.9705 0.59724-1.7731 1.3439-2.389 2.2397-0.62526 0.88662-0.93323 1.7265-0.93323 2.5103v9.1828c0 0.8679 0.23331 1.7264 0.70925 2.5662 0.47598 0.83988 1.1572 1.5304 2.053 2.0904 0.89595 0.5506 1.8758 0.83052 2.949 0.83052h26.942z\" fill=\"#1a91cd\"\u002F\u003E\u003Cpath d=\"m60.89 51.723h-11.254v-25.776h11.255z\" fill=\"#fff\"\u002F\u003E\u003Cpath d=\"m55.182 11.055c3.2683 0 5.9177 2.6495 5.9177 5.9177 0 3.2683-2.6495 5.9177-5.9177 5.9177s-5.9177-2.6494-5.9177-5.9177c0-3.2682 2.6495-5.9177 5.9177-5.9177\" fill-rule=\"evenodd\" fill=\"#fff\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\n","src\u002Fassets\u002Fimages\u002Ficons\u002Fstart-button.svg":"\u003Csvg id=\"svg4\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" viewBox=\"0 0 1792 1792\"\u003E\n \u003Cdefs id=\"defs8\"\u003E\n  \u003CradialGradient id=\"radialGradient9665\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"translate(-14.367 -23.216)\" r=\"44.78\"\u003E\n   \u003Cstop id=\"stop21861-5\" style=\"stop-color:#fff\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop21863-0\" style=\"stop-color:#fff;stop-opacity:0\" offset=\"1\"\u002F\u003E\n  \u003C\u002FradialGradient\u003E\n  \u003CclipPath id=\"clipPath9163\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Ccircle id=\"circle9165\" cx=\"1252.3\" cy=\"644.86\" r=\"44.78\" style=\"fill:url(#radialGradient9167)\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003Cfilter id=\"filter9758\" style=\"color-interpolation-filters:sRGB\" height=\"1.0932\" width=\"1.099\" y=\"-.046592\" x=\"-.049496\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur9760\" stdDeviation=\"1.5370313\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003ClinearGradient id=\"linearGradient10084\" y2=\"574.71\" xlink:href=\"#linearGradient10030\" gradientUnits=\"userSpaceOnUse\" x2=\"988.77\" gradientTransform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" y1=\"515.12\" x1=\"931.19\"\u002F\u003E\n  \u003ClinearGradient id=\"linearGradient10030\"\u003E\n   \u003Cstop id=\"stop10026\" style=\"stop-color:#8b9aaa\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10028\" style=\"stop-color:#617285\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003ClinearGradient id=\"linearGradient10044\" y2=\"573.21\" gradientUnits=\"userSpaceOnUse\" x2=\"987.88\" gradientTransform=\"matrix(.98746 0 0 .98746 11.659 6.3266)\" y1=\"516.33\" x1=\"931.74\"\u003E\n   \u003Cstop id=\"stop10038\" style=\"stop-color:#e1e5e9\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10040\" style=\"stop-color:#e1e5e9;stop-opacity:.66102\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CclipPath id=\"clipPath10064\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path10066\" style=\"color-rendering:auto;text-decoration-color:#000000;color:#000000;font-variant-numeric:normal;shape-rendering:auto;solid-color:#000000;text-decoration-line:none;fill:#a88baa;font-variant-position:normal;mix-blend-mode:normal;font-feature-settings:normal;shape-padding:0;font-variant-alternates:normal;text-indent:0;font-variant-ligatures:normal;dominant-baseline:auto;font-variant-caps:normal;image-rendering:auto;white-space:normal;text-decoration-style:solid;text-orientation:mixed;isolation:auto;text-transform:none\" d=\"m959.5 504.32c-21.945 0-39.766 17.821-39.766 39.766s17.821 39.766 39.766 39.766 39.766-17.821 39.766-39.766-17.821-39.766-39.766-39.766zm0 2.9536c20.348 0 36.812 16.464 36.812 36.812s-16.464 36.812-36.812 36.812-36.812-16.464-36.812-36.812 16.464-36.812 36.812-36.812z\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003Cfilter id=\"filter10046\" style=\"color-interpolation-filters:sRGB\" height=\"1.024\" width=\"1.024\" y=\"-.012\" x=\"-.012\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur10048\" stdDeviation=\"0.39014427\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003CradialGradient id=\"radialGradient4951\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" r=\"44.78\"\u003E\n   \u003Cstop id=\"stop12283\" style=\"stop-color:#0091da\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop5227\" style=\"stop-color:#005dc4\" offset=\".97433\"\u002F\u003E\n   \u003Cstop id=\"stop12285\" style=\"stop-color:#005dc4;stop-opacity:.49814\" offset=\"1\"\u002F\u003E\n  \u003C\u002FradialGradient\u003E\n  \u003Cfilter id=\"filter4968\" style=\"color-interpolation-filters:sRGB\" height=\"1.1444\" width=\"1.0288\" y=\"-.072191\" x=\"-.014392\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur4970\" stdDeviation=\"7.0013281\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003CclipPath id=\"clipPath5084\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path5086\" style=\"font-variant-numeric:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-feature-settings:normal;fill:#d1d6dd\" d=\"m2726.2 571.65c-20.619 0-38.195 3.3597-52.727 10.078-14.335 6.7184-25.135 15.93-32.4 27.633-7.2657 11.703-10.898 24.706-10.898 39.01 0 16.471 3.9264 29.583 11.781 39.336 7.8549 9.5358 17.086 16.47 27.69 20.805 10.604 4.1178 23.858 8.0188 39.764 11.703 12.371 2.8174 21.208 5.4188 26.51 7.8027 5.4984 2.384 8.2481 5.9586 8.2481 10.727 0 4.1178-2.0618 7.2605-6.1856 9.4277-4.1238 1.9505-10.997 2.9258-20.619 2.9258-11.193 0-22.878-1.8411-35.053-5.5254-12.175-3.901-23.172-8.9943-32.99-15.279l-22.385 55.914c10.408 7.1519 23.661 12.896 39.764 17.23 16.299 4.1178 32.992 6.1758 50.076 6.1758 20.619 0 38.095-3.3597 52.43-10.078 14.531-6.9352 25.43-16.146 32.695-27.633 7.2657-11.703 10.898-24.706 10.898-39.01 0-16.471-4.0249-29.474-12.076-39.01-7.8549-9.5358-17.182-16.363-27.982-20.48-10.8-4.3345-24.056-8.128-39.766-11.379-12.175-2.6007-20.913-4.9832-26.215-7.1504-5.3021-2.384-7.9532-5.8512-7.9532-10.402 0-9.5358 8.935-14.305 26.805-14.305 18.066 0 37.211 5.6347 57.438 16.904l20.914-55.59c-10.408-6.5017-22.484-11.378-36.23-14.629-13.55-3.4676-27.392-5.2012-41.531-5.2012zm126.8 5.2012v59.49h60.383v168.07h69.516v-168.07h60.385v-59.49zm304.02 0-90.135 227.56h70.693l13.844-39.66h78.352l13.844 39.66h71.873l-90.135-227.56zm208.14 0v227.56h69.514v-57.215h18.854l35.051 57.215h74.228l-43.299-70.219c12.568-7.1519 22.189-16.795 28.865-28.932 6.6766-12.137 10.016-26.334 10.016-42.588 0-17.338-3.8298-32.508-11.488-45.512-7.6584-13.003-18.557-22.973-32.695-29.908-14.139-6.9352-30.731-10.402-49.779-10.402zm238.99 0v59.49h60.385v168.07h69.516v-168.07h60.383v-59.49zm-169.48 59.166h25.332c9.4258 0 16.496 2.3844 21.209 7.1523 4.7129 4.5512 7.0684 11.052 7.0684 19.504 0 8.4522-2.3555 15.062-7.0684 19.83-4.7128 4.5512-11.783 6.8281-21.209 6.8281h-25.332zm-244.08 16.254 20.029 57.215h-40.059z\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CclipPath id=\"clipPath5090\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Ccircle id=\"circle5092\" style=\"fill:#fdfeff\" cy=\"-500.22\" transform=\"scale(-1)\" cx=\"-960\" r=\"44.78\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CclipPath id=\"clipPath5096\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Ccircle id=\"circle5098\" style=\"fill:#fdfeff\" cy=\"500.22\" cx=\"960\" r=\"44.78\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n \u003C\u002Fdefs\u003E\n \u003Cg id=\"g5383\"\u003E\n  \u003Ccircle id=\"circle4982\" style=\"fill:#fdfeff\" cy=\"896\" cx=\"896\" r=\"750\"\u002F\u003E\n  \u003Cpath id=\"circle4911\" d=\"m896-0.000003125a896 896 0 0 0 -896 896 896 896 0 0 0 896 896 896 896 0 0 0 896 -896 896 896 0 0 0 -896 -896zm-484.49 777.02c14.139 0 27.982 1.7336 41.531 5.2012 13.746 3.2509 25.823 8.1272 36.23 14.629l-20.912 55.59c-20.226-11.27-39.373-16.906-57.44-16.906-17.87 0-26.805 4.7688-26.805 14.305 0 4.5512 2.6511 8.0184 7.9531 10.402 5.302 2.1672 14.04 4.5517 26.215 7.1524 15.71 3.2508 28.965 7.0425 39.766 11.377 10.8 4.1178 20.128 10.945 27.982 20.48 8.0512 9.5358 12.078 22.541 12.078 39.012 0 14.304-3.6327 27.307-10.898 39.01-7.2658 11.486-18.166 20.698-32.697 27.633-14.335 6.7185-31.811 10.076-52.43 10.076-17.084 0-33.777-2.058-50.076-6.1758-16.102-4.3345-29.356-10.079-39.764-17.23l22.387-55.914c9.8185 6.285 20.815 11.378 32.99 15.279 12.175 3.6843 23.858 5.5274 35.051 5.5274 9.6222 0 16.495-0.97527 20.619-2.9258 4.1238-2.1672 6.1856-5.31 6.1856-9.4277 0-4.7679-2.7497-8.3446-8.2481-10.729-5.302-2.384-14.138-4.9853-26.51-7.8027-15.906-3.6843-29.16-7.5854-39.764-11.703-10.604-4.3345-19.835-11.269-27.69-20.805-7.8548-9.7526-11.781-22.865-11.781-39.336 0-14.304 3.6327-27.307 10.898-39.01 7.2658-11.703 18.065-20.914 32.4-27.633 14.532-6.7184 32.108-10.076 52.727-10.076zm126.8 5.2012h190.28v59.49h-60.38v168.09h-69.51v-168.09h-60.385zm304.02 0h68.336l90.135 227.56h-71.871l-13.846-39.66h-78.352l-13.844 39.66h-70.693zm208.14 0h99.266c19.048 0 35.641 3.4672 49.779 10.402 14.139 6.9352 25.037 16.905 32.695 29.908 7.6585 13.003 11.488 28.174 11.488 45.512 0 16.254-3.339 30.449-10.016 42.586-6.6767 12.137-16.298 21.78-28.865 28.932l43.299 70.219h-74.228l-35.051-57.215h-18.852v57.215h-69.516zm238.99 0h190.28v59.49h-60.383v168.07h-69.516v-168.09h-60.385zm-169.48 59.164v53.314h25.33c9.4258 0 16.496-2.275 21.209-6.8262 4.7132-4.7679 7.0704-11.378 7.0704-19.83 0-8.4522-2.3572-14.955-7.0704-19.506-4.7126-4.7679-11.783-7.1523-21.209-7.1523zm-244.08 16.256-20.029 57.215h40.061z\" style=\"fill:url(#radialGradient4951)\"\u002F\u003E\n  \u003Ccircle id=\"circle9583\" style=\"opacity:0.196;fill:url(#radialGradient9665)\" clip-path=\"url(#clipPath9163)\" transform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" cy=\"621.64\" cx=\"1237.9\" r=\"44.78\"\u002F\u003E\n  \u003Cpath id=\"circle9717\" style=\"filter:url(#filter9758);fill:#fff;fill-opacity:.62147\" d=\"m960 455.44a44.78 44.78 0 0 0 -44.781 44.779 44.78 44.78 0 0 0 16.123 34.395 44.78 44.78 0 0 1 -15.021 -33.402 44.78 44.78 0 0 1 44.781 -44.781 44.78 44.78 0 0 1 28.646 10.379 44.78 44.78 0 0 0 -29.75 -11.37z\" clip-path=\"url(#clipPath5096)\" transform=\"matrix(20.009 0 0 20.009 -18312 -9112.8)\"\u002F\u003E\n  \u003Cpath id=\"path9773\" style=\"filter:url(#filter9758);fill-opacity:.87006\" d=\"m960 455.44a44.78 44.78 0 0 0 -44.781 44.779 44.78 44.78 0 0 0 16.123 34.395 44.78 44.78 0 0 1 -15.021 -33.402 44.78 44.78 0 0 1 44.781 -44.781 44.78 44.78 0 0 1 28.646 10.379 44.78 44.78 0 0 0 -29.75 -11.37z\" clip-path=\"url(#clipPath5090)\" transform=\"matrix(-20.009 0 0 -20.009 20104 10905)\"\u002F\u003E\n  \u003Cpath id=\"text4957\" style=\"filter:url(#filter4968);font-variant-numeric:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-feature-settings:normal;fill:#1b1f24\" d=\"m2726.2 571.65c-20.619 0-38.195 3.3597-52.727 10.078-14.335 6.7184-25.135 15.93-32.4 27.633-7.2657 11.703-10.898 24.706-10.898 39.01 0 16.471 3.9264 29.583 11.781 39.336 2.9041 3.5256 5.9974 6.6912 9.2774 9.5059-0.4291-0.49634-0.8562-0.99457-1.2774-1.5059-7.8548-9.7526-11.781-22.865-11.781-39.336 0-14.304 3.6327-27.307 10.898-39.01 7.2657-11.703 18.065-20.914 32.4-27.633 14.531-6.7184 32.108-10.078 52.727-10.078 14.139 0 27.982 1.7336 41.531 5.2012 9.9104 2.3438 18.948 5.5387 27.123 9.5723l1.1074-2.9434c-10.408-6.5017-22.484-11.378-36.23-14.629-13.55-3.4676-27.392-5.2012-41.531-5.2012zm126.8 5.2012v59.49h8v-51.49h182.28v-8zm304.02 0-90.135 227.56h11.168l86.965-219.56h63.506l-3.168-8zm208.14 0v227.56h8v-219.56h99.266c19.048 0 35.641 3.4672 49.779 10.402 6.3016 3.091 11.954 6.7895 16.969 11.086-6.73-7.8533-15.048-14.22-24.969-19.086-14.139-6.9352-30.731-10.402-49.779-10.402zm238.99 0v59.49h8v-51.49h182.28v-8zm-690.77 67.49v160.07h8v-160.07zm751.16 0v160.07h8v-160.07zm-179.72 3.4629c2.3061 4.0036 3.4629 8.9567 3.4629 14.869 0 8.4522-2.3555 15.062-7.0684 19.83-4.7129 4.5512-11.783 6.8281-21.209 6.8281h-17.332v8h25.332c9.4258 0 16.496-2.2769 21.209-6.8281 4.7129-4.7679 7.0684-11.378 7.0684-19.83 0-8.4522-2.3555-14.953-7.0684-19.504-1.2868-1.3018-2.7563-2.4188-4.3945-3.3652zm-777.71 7.2031c0.8323 3.3235 3.3803 5.9461 7.6484 7.8652 5.3021 2.1672 14.04 4.5497 26.215 7.1504 15.71 3.2509 28.965 7.0444 39.766 11.379 6.9207 2.6386 13.234 6.3946 18.945 11.258-7.6356-8.8954-16.615-15.319-26.945-19.258-10.8-4.3345-24.056-8.1261-39.766-11.377-11.926-2.5475-20.532-4.886-25.863-7.0176zm491.49 5.2637-2.5996 7.4258 14.629 41.789h-29.258l-2.8008 8h40.059zm-549.28 70.021-22.385 55.914c2.7979 1.9226 5.8082 3.74 9.0176 5.459l21.367-53.373c9.8185 6.285 20.815 11.376 32.99 15.277 12.175 3.6843 23.86 5.5273 35.053 5.5273 9.6221 0 16.495-0.97527 20.619-2.9258 4.1238-2.1672 6.1856-5.31 6.1856-9.4277 0-4.7679-2.7497-8.3426-8.2481-10.727-0.031-0.0141-0.07-0.0289-0.1016-0.043 0.2294 0.87434 0.3497 1.7958 0.3497 2.7695 0 4.1178-2.0618 7.2605-6.1856 9.4277-4.1238 1.9505-10.997 2.9258-20.619 2.9258-11.193 0-22.878-1.8411-35.053-5.5254-12.175-3.901-23.172-8.9943-32.99-15.279zm809.11 24.904 30.152 49.215h3.0996l-30.152-49.215zm-225.86 17.555 11.051 31.66h5.2071l-11-31.65z\" clip-path=\"url(#clipPath5084)\" transform=\"translate(-2314.7 205.37)\"\u002F\u003E\n  \u003Ccircle id=\"path9948\" cx=\"896\" cy=\"896\" r=\"778.16\" style=\"stroke-linejoin:round;stroke:url(#linearGradient10084);stroke-linecap:round;stroke-width:60.026;fill:none\"\u002F\u003E\n  \u003Ccircle id=\"circle10034\" r=\"778.16\" style=\"stroke-linejoin:round;stroke:url(#linearGradient10084);stroke-linecap:round;stroke-width:60.026;fill:none\" cx=\"896\" cy=\"896\"\u002F\u003E\n  \u003Ccircle id=\"circle10036\" style=\"stroke-linejoin:round;filter:url(#filter10046);stroke:url(#linearGradient10044);stroke-linecap:round;stroke-width:0.75;fill:none\" clip-path=\"url(#clipPath10064)\" transform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" cy=\"544.08\" cx=\"959.62\" r=\"39.014\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n","src\u002Fassets\u002Fimages\u002Fprogress-circle.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n","src\u002Fassets\u002Fimages\u002Ficons\u002Fstop-button.svg":"\u003Csvg id=\"svg4\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 1792 1792\" version=\"1.1\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n \u003Cdefs id=\"defs8\"\u003E\n  \u003ClinearGradient id=\"linearGradient10030\"\u003E\n   \u003Cstop id=\"stop10026\" style=\"stop-color:#8b9aaa\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10028\" style=\"stop-color:#617285\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CradialGradient id=\"radialGradient14534\" xlink:href=\"#linearGradient12673\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" r=\"44.78\"\u002F\u003E\n  \u003ClinearGradient id=\"linearGradient12673\"\u003E\n   \u003Cstop id=\"stop12669\" style=\"stop-color:#da0000\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop4946\" style=\"stop-color:#c40000\" offset=\".97613\"\u002F\u003E\n   \u003Cstop id=\"stop12671\" style=\"stop-color:#c40000;stop-opacity:.71375\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CradialGradient id=\"radialGradient14536\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"translate(-14.367 -23.216)\" r=\"44.78\"\u003E\n   \u003Cstop id=\"stop21861-5-3\" style=\"stop-color:#fff\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop21863-0-6\" style=\"stop-color:#fff;stop-opacity:0\" offset=\"1\"\u002F\u003E\n  \u003C\u002FradialGradient\u003E\n  \u003Cfilter id=\"filter9758-9\" style=\"color-interpolation-filters:sRGB\" height=\"1.0932\" width=\"1.099\" y=\"-.046592\" x=\"-.049496\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur9760-2\" stdDeviation=\"1.5370313\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003ClinearGradient id=\"linearGradient14538\" y2=\"574.71\" xlink:href=\"#linearGradient10030\" gradientUnits=\"userSpaceOnUse\" x2=\"988.77\" gradientTransform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" y1=\"515.12\" x1=\"931.19\"\u002F\u003E\n  \u003ClinearGradient id=\"linearGradient14542\" y2=\"573.21\" gradientUnits=\"userSpaceOnUse\" x2=\"987.88\" gradientTransform=\"matrix(.98746 0 0 .98746 11.659 6.3266)\" y1=\"516.33\" x1=\"931.74\"\u003E\n   \u003Cstop id=\"stop10038-3\" style=\"stop-color:#e1e5e9\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10040-5\" style=\"stop-color:#e1e5e9;stop-opacity:.66102\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CclipPath id=\"clipPath10064-4\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path10066-7\" style=\"color-rendering:auto;text-decoration-color:#000000;color:#000000;font-variant-numeric:normal;shape-rendering:auto;solid-color:#000000;text-decoration-line:none;fill:#a88baa;font-variant-position:normal;mix-blend-mode:normal;font-feature-settings:normal;shape-padding:0;font-variant-alternates:normal;text-indent:0;font-variant-ligatures:normal;dominant-baseline:auto;font-variant-caps:normal;image-rendering:auto;white-space:normal;text-decoration-style:solid;text-orientation:mixed;isolation:auto;text-transform:none\" d=\"m959.5 504.32c-21.945 0-39.766 17.821-39.766 39.766s17.821 39.766 39.766 39.766 39.766-17.821 39.766-39.766-17.821-39.766-39.766-39.766zm0 2.9536c20.348 0 36.812 16.464 36.812 36.812s-16.464 36.812-36.812 36.812-36.812-16.464-36.812-36.812 16.464-36.812 36.812-36.812z\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003Cfilter id=\"filter10046-8\" style=\"color-interpolation-filters:sRGB\" height=\"1.024\" width=\"1.024\" y=\"-.012\" x=\"-.012\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur10048-4\" stdDeviation=\"0.39014427\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003CclipPath id=\"clipPath4964\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path4966\" d=\"m960 545a44.78 44.78 0 0 0 44.8 -44.78 44.78 44.78 0 0 0 -44.8 -44.78 44.78 44.78 0 0 0 -44.78 44.78 44.78 44.78 0 0 0 44.78 44.78zm18.804-38.834c-0.70663 0-1.3985-0.0867-2.0757-0.25994-0.687-0.16248-1.2906-0.40619-1.8107-0.73113l1.0452-2.7783c1.0109 0.56323 1.9678 0.84484 2.8707 0.84484 0.89309 0 1.3396-0.23824 1.3396-0.71482 0-0.22746-0.1325-0.40074-0.39749-0.51989-0.26498-0.10831-0.70178-0.22748-1.3103-0.35746-0.78514-0.16247-1.4475-0.35207-1.9873-0.5687-0.53978-0.2058-1.0059-0.54699-1.3985-1.0236-0.40239-0.47659-0.60364-1.1264-0.60364-1.9496 0-0.71488 0.18155-1.3647 0.54468-1.9496 0.36313-0.57407 0.9078-1.0344 1.634-1.381 0.71644-0.33578 1.5899-0.50369 2.6204-0.50369 0.85384 0 1.688 0.10296 2.5026 0.30875 0.80477 0.21663 1.4673 0.50361 1.9874 0.86105l-1.1188 2.7946c-0.49072-0.31411-1.0403-0.56867-1.6488-0.76363-0.60848-0.18414-1.1924-0.27625-1.7518-0.27625-0.4809 0-0.82441 0.0487-1.0305 0.14623-0.2061 0.10831-0.30914 0.26538-0.30914 0.47118 0 0.23829 0.13733 0.41704 0.41212 0.53619 0.26499 0.11915 0.70662 0.24906 1.3249 0.38987 0.79496 0.18413 1.4574 0.3791 1.9874 0.5849 0.52997 0.21663 0.9913 0.56329 1.3839 1.0399 0.39257 0.48741 0.5888 1.1426 0.5888 1.9658 0 0.71487-0.18155 1.3648-0.54468 1.9497s-0.90287 1.0452-1.6193 1.3809c-0.72626 0.33578-1.6047 0.50369-2.6352 0.50369zm-23.922 0c-1.109 0-2.1052-0.25456-2.9884-0.76363-0.88328-0.50908-1.5752-1.2185-2.0758-2.1284-0.50052-0.89901-0.75075-1.9171-0.75075-3.0544s0.25023-2.1609 0.75075-3.0707c0.50053-0.89902 1.1925-1.6031 2.0758-2.1122 0.88328-0.50907 1.8794-0.76363 2.9884-0.76363s2.1052 0.25456 2.9884 0.76363c0.88328 0.50908 1.5751 1.2132 2.0757 2.1122 0.50052 0.90983 0.75084 1.9334 0.75084 3.0707s-0.25032 2.1554-0.75084 3.0544c-0.50053 0.90984-1.1924 1.6193-2.0757 2.1284-0.88328 0.50907-1.8794 0.76363-2.9884 0.76363zm17.585-0.25994h-9.51v-2.9732h3.0179v-8.3998h3.4742v8.3998h3.0179zm-26.575 0h-4.9611c-0.95198 0-1.7812-0.17329-2.4879-0.5199-0.70663-0.3466-1.2513-0.84487-1.634-1.4948-0.38275-0.64989-0.57417-1.4081-0.57417-2.2746 0-0.86651 0.19142-1.6247 0.57417-2.2746 0.38276-0.64988 0.92742-1.1482 1.634-1.4948 0.70663-0.34661 1.5359-0.5199 2.4879-0.5199h1.4868v-2.7946h3.4743zm8.9896-2.8433c0.43183 0 0.82439-0.11907 1.1777-0.35736 0.3435-0.22746 0.61825-0.55781 0.82434-0.99107 0.2061-0.42243 0.30915-0.92069 0.30915-1.4948 0-0.57407-0.10305-1.0777-0.30915-1.511-0.20609-0.42243-0.48084-0.75288-0.82434-0.99117-0.35332-0.22746-0.74588-0.34116-1.1777-0.34116-0.43183 0-0.81947 0.1137-1.163 0.34116-0.35331 0.23829-0.63308 0.56874-0.83918 0.99117-0.2061 0.43326-0.30915 0.93689-0.30914 1.511 0 0.57407 0.10304 1.0723 0.30914 1.4948 0.2061 0.43326 0.48587 0.76361 0.83918 0.99107 0.3435 0.23829 0.73114 0.35736 1.163 0.35736zm-12.464-0.11372v-2.6645h-1.266c-0.47108 0-0.82444 0.1137-1.06 0.34116-0.23555 0.23829-0.35327 0.56865-0.35327 0.99107 0 0.42243 0.11772 0.74741 0.35327 0.97487 0.23554 0.23829 0.5889 0.35736 1.06 0.35736z\" style=\"fill:url(#radialGradient4968)\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CradialGradient id=\"radialGradient4968\" xlink:href=\"#linearGradient12673\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"rotate(180 1106.1 572.54)\" r=\"44.78\"\u002F\u003E\n  \u003CclipPath id=\"clipPath4979\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path4981\" d=\"m1252.3 600.08a44.78 44.78 0 0 0 -44.78 44.78 44.78 44.78 0 0 0 44.78 44.78 44.78 44.78 0 0 0 44.78 -44.78 44.78 44.78 0 0 0 -44.78 -44.78zm-18.804 38.834c0.7066 0 1.3985 0.0866 2.0757 0.25994 0.687 0.16248 1.2905 0.40619 1.8107 0.73113l-1.0452 2.7783c-1.0108-0.56323-1.9678-0.84484-2.8707-0.84484-0.8931 0-1.3396 0.23824-1.3396 0.71482 0 0.22746 0.1325 0.40074 0.3975 0.51989 0.2649 0.10831 0.7017 0.22748 1.3102 0.35746 0.7852 0.16247 1.4476 0.35207 1.9873 0.5687 0.5398 0.2058 1.006 0.54699 1.3986 1.0236 0.4023 0.47659 0.6036 1.1264 0.6036 1.9496 0 0.71488-0.1816 1.3647-0.5447 1.9496-0.3631 0.57407-0.9078 1.0344-1.634 1.381-0.7165 0.33578-1.59 0.50369-2.6205 0.50369-0.8538 0-1.688-0.10296-2.5026-0.30875-0.8048-0.21663-1.4673-0.50361-1.9874-0.86105l1.1188-2.7946c0.4908 0.31411 1.0403 0.56867 1.6488 0.76363 0.6085 0.18414 1.1924 0.27625 1.7518 0.27625 0.4809 0 0.8244-0.0487 1.0305-0.14623 0.2061-0.10831 0.3092-0.26538 0.3092-0.47118 0-0.23829-0.1374-0.41704-0.4122-0.53619-0.265-0.11915-0.7066-0.24906-1.3249-0.38987-0.7949-0.18414-1.4574-0.37911-1.9874-0.5849-0.53-0.21663-0.9913-0.56329-1.3839-1.0399-0.3925-0.48741-0.5888-1.1426-0.5888-1.9658 0-0.71488 0.1816-1.3648 0.5447-1.9497s0.9029-1.0452 1.6193-1.3809c0.7263-0.33578 1.6047-0.50369 2.6352-0.50369zm23.922 0c1.109 0 2.1051 0.25456 2.9884 0.76363 0.8833 0.50908 1.5753 1.2185 2.0758 2.1284 0.5005 0.89901 0.7507 1.9171 0.7507 3.0544s-0.2502 2.1609-0.7507 3.0707c-0.5005 0.89902-1.1925 1.6031-2.0758 2.1122-0.8833 0.50907-1.8794 0.76363-2.9884 0.76363s-2.1052-0.25456-2.9885-0.76363c-0.8832-0.50908-1.5751-1.2132-2.0756-2.1122-0.5005-0.90983-0.7509-1.9334-0.7509-3.0707s0.2504-2.1554 0.7509-3.0544c0.5005-0.90984 1.1924-1.6193 2.0756-2.1284 0.8833-0.50907 1.8795-0.76363 2.9885-0.76363zm-17.585 0.25994h9.51v2.9732h-3.0179v8.3998h-3.4742v-8.3998h-3.0179zm26.575 0h4.9611c0.952 0 1.7813 0.17329 2.4879 0.5199 0.7066 0.3466 1.2513 0.84487 1.6341 1.4948 0.3827 0.64989 0.5741 1.4081 0.5741 2.2746 0 0.86651-0.1914 1.6247-0.5741 2.2746-0.3828 0.64988-0.9275 1.1482-1.6341 1.4948-0.7066 0.34661-1.5359 0.5199-2.4879 0.5199h-1.4868v2.7946h-3.4743zm-8.9896 2.8433c-0.4318 0-0.8244 0.11906-1.1777 0.35736-0.3435 0.22746-0.6183 0.55781-0.8244 0.99107-0.2061 0.42243-0.3091 0.92069-0.3091 1.4948 0 0.57406 0.103 1.0777 0.3091 1.511 0.2061 0.42243 0.4809 0.75288 0.8244 0.99117 0.3533 0.22746 0.7459 0.34116 1.1777 0.34116s0.8195-0.1137 1.163-0.34116c0.3533-0.23829 0.633-0.56874 0.8391-0.99117 0.2061-0.43326 0.3092-0.9369 0.3092-1.511 0-0.57407-0.1031-1.0723-0.3092-1.4948-0.2061-0.43326-0.4858-0.76361-0.8391-0.99107-0.3435-0.2383-0.7312-0.35736-1.163-0.35736zm12.464 0.11372v2.6645h1.2659c0.4711 0 0.8245-0.1137 1.06-0.34116 0.2356-0.23829 0.3533-0.56865 0.3533-0.99107 0-0.42243-0.1177-0.74741-0.3533-0.97487-0.2355-0.23829-0.5889-0.35736-1.06-0.35736z\" style=\"fill:url(#radialGradient4983)\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CradialGradient id=\"radialGradient4983\" xlink:href=\"#linearGradient12673\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"translate(0 .000049978)\" r=\"44.78\"\u002F\u003E\n  \u003Cfilter id=\"filter4985\" style=\"color-interpolation-filters:sRGB\" height=\"1.1203\" width=\"1.03\" y=\"-.060157\" x=\"-.014990\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur4987\" stdDeviation=\"0.58453098\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n \u003C\u002Fdefs\u003E\n \u003Cellipse id=\"ellipse4935\" style=\"fill:#fff\" rx=\"857.97\" ry=\"857.97\" cy=\"896\" cx=\"896\"\u002F\u003E\n \u003Cpath id=\"path14261\" style=\"filter:url(#filter4985);font-variant-numeric:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-feature-settings:normal;fill:#060708\" d=\"m1013 428.63c-2.0658 0-3.8273 0.33663-5.2832 1.0098-1.4362 0.67314-2.5181 1.595-3.2461 2.7676-0.7279 1.1726-1.0918 2.4751-1.0918 3.9082 0 1.6503 0.3927 2.9643 1.1797 3.9414 0.3665 0.44487 0.7653 0.82828 1.1914 1.1602-0.7431-0.96799-1.1211-2.248-1.1211-3.8516 0-1.4331 0.3639-2.7356 1.0918-3.9082 0.728-1.1726 1.8099-2.0944 3.2461-2.7676 1.4559-0.67313 3.2174-1.0098 5.2832-1.0098 1.4166 0 2.8026 0.17406 4.1602 0.52148 0.7863 0.18597 1.5121 0.43051 2.1894 0.72266l0.1914-0.50781c-1.0427-0.65142-2.2536-1.1391-3.6308-1.4648-1.3576-0.34742-2.7436-0.52148-4.1602-0.52148zm47.957 0c-2.2233 0-4.2215 0.51069-5.9922 1.5312-1.7708 1.0206-3.1568 2.4416-4.1602 4.2656-1.0034 1.8023-1.5059 3.8431-1.5059 6.123 0 2.28 0.5025 4.3323 1.5059 6.1562 0.6643 1.1931 1.4995 2.212 2.5 3.0625-0.467-0.55255-0.8847-1.1563-1.25-1.8125-1.0034-1.824-1.5059-3.8763-1.5059-6.1562 0-2.28 0.5025-4.3208 1.5059-6.123 1.0034-1.824 2.3894-3.2451 4.1602-4.2656 1.7707-1.0206 3.7689-1.5312 5.9922-1.5312 2.2232 0 4.2195 0.51069 5.9902 1.5312 0.5924 0.34145 1.138 0.73072 1.6445 1.1621-0.812-0.96436-1.7768-1.7679-2.8945-2.4121-1.7707-1.0206-3.767-1.5312-5.9902-1.5312zm-35.254 0.52148v6.7952h1.25v-5.5452h17.814v-1.25zm52.753 0v23.74h1.25v-22.49h10.468c1.9085 0 3.5698 0.34617 4.9864 1.041 0.5457 0.26768 1.0291 0.59521 1.4785 0.95312-0.7117-0.91929-1.6172-1.658-2.7285-2.2031-1.4166-0.69485-3.0779-1.041-4.9864-1.041zm-46.702 7.209v16.949h1.25v-16.95zm59.356 0.21093c0.1328 0.33918 0.2051 0.72864 0.2051 1.1777 0 0.84684-0.2368 1.5086-0.709 1.9863-0.4722 0.45599-1.1806 0.68554-2.125 0.68554h-1.2871v1.25h2.5371c0.9444 0 1.6528-0.22955 2.125-0.68554 0.4722-0.47771 0.709-1.1395 0.709-1.9863 0-0.84684-0.2368-1.4971-0.709-1.9531-0.2024-0.20476-0.4569-0.35761-0.7461-0.47461zm-26.561 0.25586c0.1524 0.22537 0.2967 0.46329 0.4219 0.72657 0.4132 0.84684 0.6192 1.8452 0.6192 2.9961 0 1.1508-0.206 2.1607-0.6192 3.0293-0.4131 0.84684-0.9753 1.5086-1.6836 1.9863-0.6886 0.456-1.4644 0.68555-2.33 0.68555-0.8448 0-1.6138-0.22209-2.3086-0.65625 0.3386 0.48855 0.7339 0.89928 1.1972 1.2207 0.7083 0.456 1.4957 0.68555 2.3614 0.68555 0.8656 0 1.6414-0.22955 2.33-0.68555 0.7083-0.4777 1.2705-1.1395 1.6836-1.9863 0.4132-0.86856 0.6192-1.8785 0.6192-3.0293s-0.206-2.1492-0.6192-2.9961c-0.4107-0.86332-0.9696-1.5208-1.6719-1.9766zm-53.037 0.28907c-0.0008 0.0204-0.01 0.0378-0.01 0.0586 0 0.45599 0.2657 0.80412 0.7969 1.043 0.5312 0.21714 1.4071 0.45623 2.627 0.7168 1.5739 0.3257 2.9022 0.70439 3.9843 1.1387 0.5928 0.226 1.1364 0.54274 1.6407 0.93164-0.032-0.0406-0.055-0.0895-0.088-0.12891-0.787-0.95541-1.7207-1.6402-2.8028-2.0527-1.0821-0.43428-2.4104-0.81297-3.9843-1.1387-0.9539-0.20376-1.6333-0.39116-2.1661-0.56836zm-6.2148 7.1991-2.2441 5.8106c0.4247 0.29185 0.9103 0.55381 1.4296 0.79883l2.0645-5.3594c0.9837 0.6297 2.0849 1.1404 3.3047 1.5312 1.2198 0.36914 2.3902 0.55273 3.5117 0.55273 0.9641 0 1.6532-0.0975 2.0664-0.29297 0.4132-0.21713 0.6191-0.53274 0.6191-0.94531 0.0001-0.4777-0.2752-0.83536-0.8261-1.0742-0.1069-0.048-0.2922-0.10057-0.4278-0.15039-0.01 0.39937-0.2111 0.70753-0.6152 0.91992-0.4132 0.19543-1.1023 0.29297-2.0664 0.29297-1.1215 0-2.2919-0.18359-3.5117-0.55273-1.2198-0.39085-2.321-0.90155-3.3047-1.5312z\" transform=\"matrix(10.107 0 0 10.107 -9726.3 -3561)\"\u002F\u003E\n \u003Cpath id=\"circle14235\" style=\"fill:url(#radialGradient14534)\" d=\"m896 0a896 896 0 0 0 -896 896 896 896 0 0 0 896 896 896 896 0 0 0 896 -896 896 896 0 0 0 -896 -896zm-376.24 777.02c14.139 0 27.982 1.7336 41.531 5.2011 13.746 3.2509 25.823 8.1272 36.23 14.629l-20.912 55.59c-20.226-11.27-39.373-16.904-57.439-16.904-17.87 0-26.805 4.7669-26.805 14.303 0 4.5512 2.6511 8.0184 7.9531 10.402 5.302 2.1672 14.042 4.5516 26.217 7.1523 15.71 3.2509 28.963 7.0444 39.764 11.379 10.8 4.1178 20.128 10.945 27.982 20.48 8.0512 9.5358 12.078 22.539 12.078 39.01 0 14.304-3.6327 27.307-10.898 39.01-7.2657 11.486-18.164 20.698-32.695 27.633-14.335 6.7184-31.813 10.078-52.432 10.078-17.084 0-33.775-2.06-50.074-6.1777-16.102-4.3345-29.358-10.077-39.766-17.228l22.387-55.916c9.8185 6.285 20.815 11.378 32.99 15.279 12.175 3.6843 23.858 5.5273 35.051 5.5273 9.6222 0 16.495-0.9752 20.619-2.9257 4.1238-2.1673 6.1856-5.31 6.1856-9.4278 0-4.7679-2.7477-8.3445-8.2461-10.728-5.302-2.384-14.138-4.9834-26.51-7.8008-15.906-3.6843-29.162-7.5854-39.766-11.703-10.604-4.3345-19.835-11.271-27.689-20.807-7.8548-9.7526-11.781-22.863-11.781-39.334 0-14.304 3.6327-27.309 10.898-39.012 7.2657-11.703 18.065-20.912 32.4-27.631 14.531-6.7184 32.108-10.078 52.727-10.078zm478.65 0c22.19 0 42.122 5.0933 59.795 15.279s31.518 24.381 41.533 42.586c10.015 17.988 15.022 38.359 15.022 61.115s-5.0066 43.237-15.022 61.441c-10.015 17.988-23.86 32.076-41.533 42.262s-37.605 15.279-59.795 15.279-42.122-5.0933-59.795-15.279c-17.68-10.18-31.52-24.27-41.54-42.26-10.01-18.2-15.02-38.68-15.02-61.44 0-22.756 5.0085-43.127 15.023-61.115 10.015-18.205 23.858-32.4 41.531-42.586s37.605-15.279 59.795-15.279zm-351.85 5.2011h190.28v59.49h-60.38v168.07h-69.52v-168.09h-60.385zm531.72 0h99.266c19.048 0 35.641 3.4672 49.779 10.402 14.139 6.9351 25.037 16.905 32.695 29.908 7.6584 13.003 11.488 28.174 11.488 45.512s-3.8299 32.508-11.488 45.512c-7.6585 13.003-18.557 22.973-32.695 29.908-14.139 6.9352-30.731 10.402-49.779 10.402h-29.75v55.916h-69.516zm-179.87 56.891c-8.6403 0-16.495 2.3824-23.564 7.1504-6.873 4.5512-12.37 11.161-16.494 19.83-4.1238 8.4523-6.1855 18.422-6.1855 29.908s2.0618 21.564 6.1855 30.232c4.1238 8.4522 9.6212 15.064 16.494 19.832 7.0694 4.5512 14.924 6.8262 23.564 6.8262 8.6403 0 16.397-2.275 23.27-6.8262 7.0693-4.7679 12.667-11.38 16.791-19.832 4.1238-8.669 6.1856-18.746 6.1855-30.232 0-11.486-2.0617-21.456-6.1855-29.908-4.1238-8.6689-9.7217-15.279-16.791-19.83-6.873-4.768-14.629-7.1504-23.27-7.1504zm249.39 2.2754v53.312h25.33c9.4257 0 16.496-2.275 21.209-6.8262 4.7129-4.7679 7.0684-11.378 7.0684-19.83 0-8.4522-2.3555-14.955-7.0684-19.506-4.7129-4.7679-11.783-7.1503-21.209-7.1503z\"\u002F\u003E\n \u003Ccircle id=\"circle14237\" style=\"opacity:0.196;fill:url(#radialGradient14536)\" clip-path=\"url(#clipPath4979)\" transform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" cy=\"621.64\" cx=\"1237.9\" r=\"44.78\"\u002F\u003E\n \u003Cpath id=\"path14241\" style=\"filter:url(#filter9758-9);fill-opacity:.87006\" d=\"m960 455.44a44.78 44.78 0 0 0 -44.781 44.779 44.78 44.78 0 0 0 16.123 34.395 44.78 44.78 0 0 1 -15.021 -33.402 44.78 44.78 0 0 1 44.781 -44.781 44.78 44.78 0 0 1 28.646 10.379 44.78 44.78 0 0 0 -29.75 -11.37z\" clip-path=\"url(#clipPath4964)\" transform=\"matrix(-20.009 0 0 -20.009 20104 10905)\"\u002F\u003E\n \u003Cellipse id=\"circle14245\" style=\"stroke-linejoin:round;stroke:url(#linearGradient14538);stroke-linecap:round;stroke-width:60.026;fill:none\" rx=\"778.16\" ry=\"778.16\" cy=\"896\" cx=\"896\"\u002F\u003E\n \u003Cellipse id=\"circle14247\" style=\"stroke-linejoin:round;stroke:url(#linearGradient14538);stroke-linecap:round;stroke-width:60.026;fill:none\" rx=\"778.16\" ry=\"778.16\" cy=\"896\" cx=\"896\"\u002F\u003E\n \u003Ccircle id=\"circle14249\" style=\"stroke-linejoin:round;filter:url(#filter10046-8);stroke:url(#linearGradient14542);stroke-linecap:round;stroke-width:0.75;fill:none\" clip-path=\"url(#clipPath10064-4)\" transform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" cy=\"544.08\" cx=\"959.62\" r=\"39.014\"\u002F\u003E\n \u003Cellipse id=\"ellipse4933\" style=\"fill-opacity:0\" rx=\"896\" ry=\"896\" cy=\"896\" cx=\"896\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n"};
;var locals_for_with = (locals || {});(function (Math) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";















;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";













;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactSelectLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 14;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","select",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "select-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cselect" + (pug_attr("class", pug_classes([`select-${attributes.cls}`], [true]), false, false)+pug_attr("id", "select-"+attributes.id, true, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
if (block) {
;pug_debug_line = 17;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
block && block();
}
pug_html = pug_html + "\u003C\u002Fselect\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cmain id=\"model-development\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"stage\" id=\"unstarted\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Use \u003C\u002Fspan\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan class=\"logo\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + " \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 64 64\"\u003E\u003Cg stroke-width=\".93069\" transform=\"matrix(1.0745 0 0 1.0745 -1.6501 -1.7269)\"\u003E\u003Cpath d=\"m45.667 51.459h-30.292c-3.1356 0-5.7579-0.64385-7.8482-1.941-2.0997-1.297-3.6207-2.837-4.5727-4.628-0.9424-1.801-1.4183-3.49-1.4183-5.077v-16.611c0-1.7917 0.60657-3.5275 1.829-5.2259 1.2225-1.6891 2.6783-3.0702 4.3767-4.1247s3.1168-1.5864 4.2648-1.5864h33.446v9.1827h-26.176c-0.97984 0-1.9598 0.2986-2.9396 0.90518-0.9705 0.59724-1.7731 1.3439-2.389 2.2397-0.62526 0.88662-0.93323 1.7265-0.93323 2.5103v9.1828c0 0.8679 0.23331 1.7264 0.70925 2.5662 0.47598 0.83988 1.1572 1.5304 2.053 2.0904 0.89595 0.5506 1.8758 0.83052 2.949 0.83052h26.942z\" fill=\"#1a91cd\"\u002F\u003E\u003Cpath d=\"m60.89 51.723h-11.254v-25.776h11.255z\" fill=\"#fff\"\u002F\u003E\u003Cpath d=\"m55.182 11.055c3.2683 0 5.9177 2.6495 5.9177 5.9177 0 3.2683-2.6495 5.9177-5.9177 5.9177s-5.9177-2.6494-5.9177-5.9177c0-3.2682 2.6495-5.9177 5.9177-5.9177\" fill-rule=\"evenodd\" fill=\"#fff\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "to predict\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + " ";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Coption class=\"contentValue bind\" id=\"dv\" selected=\"selected\" value=\"1\" data-value=\"Loading...\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "dv\u003C\u002Foption\u003E";
},
attributes: {"id": "target-feature","disabled": true}
}, "Target feature");
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + " ";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Coption class=\"template\" style=\"display: none;\" value=\"\" data-value=\"\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "TEMPLATE\u003C\u002Foption\u003E";
},
attributes: {"id": "data-source","disabled": true}
}, "Select data to use");
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + " ";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Coption class=\"template\" value=\"\" data-value=\"\" style=\"display: none;\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "TEMPLATE\u003C\u002Foption\u003E";
},
attributes: {"id": "tuning-params","disabled": false}
}, "Select tuning parameters to optimize");
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3 class=\"highlight\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Summary\u003C\u002Fh3\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdl class=\"summary\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Incidence Rate\u003C\u002Fdt\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd class=\"bind contentValue\" id=\"incidence-rate\" data-value=\"0\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0\u003C\u002Fdd\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Observations\u003C\u002Fdt\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd class=\"bind contentValue\" id=\"numOfRows\" data-value=\"0\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0\u003C\u002Fdd\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Features\u003C\u002Fdt\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd class=\"bind contentValue\" id=\"numOfCols\" data-value=\"0\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0\u003C\u002Fdd\u003E\u003C\u002Fdl\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cbutton class=\"button\" id=\"start-ae\"\u003E\u003Csvg id=\"svg4\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" viewBox=\"0 0 1792 1792\"\u003E\n \u003Cdefs id=\"defs8\"\u003E\n  \u003CradialGradient id=\"radialGradient9665\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"translate(-14.367 -23.216)\" r=\"44.78\"\u003E\n   \u003Cstop id=\"stop21861-5\" style=\"stop-color:#fff\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop21863-0\" style=\"stop-color:#fff;stop-opacity:0\" offset=\"1\"\u002F\u003E\n  \u003C\u002FradialGradient\u003E\n  \u003CclipPath id=\"clipPath9163\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Ccircle id=\"circle9165\" cx=\"1252.3\" cy=\"644.86\" r=\"44.78\" style=\"fill:url(#radialGradient9167)\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003Cfilter id=\"filter9758\" style=\"color-interpolation-filters:sRGB\" height=\"1.0932\" width=\"1.099\" y=\"-.046592\" x=\"-.049496\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur9760\" stdDeviation=\"1.5370313\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003ClinearGradient id=\"linearGradient10084\" y2=\"574.71\" xlink:href=\"#linearGradient10030\" gradientUnits=\"userSpaceOnUse\" x2=\"988.77\" gradientTransform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" y1=\"515.12\" x1=\"931.19\"\u002F\u003E\n  \u003ClinearGradient id=\"linearGradient10030\"\u003E\n   \u003Cstop id=\"stop10026\" style=\"stop-color:#8b9aaa\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10028\" style=\"stop-color:#617285\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003ClinearGradient id=\"linearGradient10044\" y2=\"573.21\" gradientUnits=\"userSpaceOnUse\" x2=\"987.88\" gradientTransform=\"matrix(.98746 0 0 .98746 11.659 6.3266)\" y1=\"516.33\" x1=\"931.74\"\u003E\n   \u003Cstop id=\"stop10038\" style=\"stop-color:#e1e5e9\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10040\" style=\"stop-color:#e1e5e9;stop-opacity:.66102\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CclipPath id=\"clipPath10064\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path10066\" style=\"color-rendering:auto;text-decoration-color:#000000;color:#000000;font-variant-numeric:normal;shape-rendering:auto;solid-color:#000000;text-decoration-line:none;fill:#a88baa;font-variant-position:normal;mix-blend-mode:normal;font-feature-settings:normal;shape-padding:0;font-variant-alternates:normal;text-indent:0;font-variant-ligatures:normal;dominant-baseline:auto;font-variant-caps:normal;image-rendering:auto;white-space:normal;text-decoration-style:solid;text-orientation:mixed;isolation:auto;text-transform:none\" d=\"m959.5 504.32c-21.945 0-39.766 17.821-39.766 39.766s17.821 39.766 39.766 39.766 39.766-17.821 39.766-39.766-17.821-39.766-39.766-39.766zm0 2.9536c20.348 0 36.812 16.464 36.812 36.812s-16.464 36.812-36.812 36.812-36.812-16.464-36.812-36.812 16.464-36.812 36.812-36.812z\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003Cfilter id=\"filter10046\" style=\"color-interpolation-filters:sRGB\" height=\"1.024\" width=\"1.024\" y=\"-.012\" x=\"-.012\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur10048\" stdDeviation=\"0.39014427\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003CradialGradient id=\"radialGradient4951\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" r=\"44.78\"\u003E\n   \u003Cstop id=\"stop12283\" style=\"stop-color:#0091da\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop5227\" style=\"stop-color:#005dc4\" offset=\".97433\"\u002F\u003E\n   \u003Cstop id=\"stop12285\" style=\"stop-color:#005dc4;stop-opacity:.49814\" offset=\"1\"\u002F\u003E\n  \u003C\u002FradialGradient\u003E\n  \u003Cfilter id=\"filter4968\" style=\"color-interpolation-filters:sRGB\" height=\"1.1444\" width=\"1.0288\" y=\"-.072191\" x=\"-.014392\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur4970\" stdDeviation=\"7.0013281\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003CclipPath id=\"clipPath5084\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path5086\" style=\"font-variant-numeric:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-feature-settings:normal;fill:#d1d6dd\" d=\"m2726.2 571.65c-20.619 0-38.195 3.3597-52.727 10.078-14.335 6.7184-25.135 15.93-32.4 27.633-7.2657 11.703-10.898 24.706-10.898 39.01 0 16.471 3.9264 29.583 11.781 39.336 7.8549 9.5358 17.086 16.47 27.69 20.805 10.604 4.1178 23.858 8.0188 39.764 11.703 12.371 2.8174 21.208 5.4188 26.51 7.8027 5.4984 2.384 8.2481 5.9586 8.2481 10.727 0 4.1178-2.0618 7.2605-6.1856 9.4277-4.1238 1.9505-10.997 2.9258-20.619 2.9258-11.193 0-22.878-1.8411-35.053-5.5254-12.175-3.901-23.172-8.9943-32.99-15.279l-22.385 55.914c10.408 7.1519 23.661 12.896 39.764 17.23 16.299 4.1178 32.992 6.1758 50.076 6.1758 20.619 0 38.095-3.3597 52.43-10.078 14.531-6.9352 25.43-16.146 32.695-27.633 7.2657-11.703 10.898-24.706 10.898-39.01 0-16.471-4.0249-29.474-12.076-39.01-7.8549-9.5358-17.182-16.363-27.982-20.48-10.8-4.3345-24.056-8.128-39.766-11.379-12.175-2.6007-20.913-4.9832-26.215-7.1504-5.3021-2.384-7.9532-5.8512-7.9532-10.402 0-9.5358 8.935-14.305 26.805-14.305 18.066 0 37.211 5.6347 57.438 16.904l20.914-55.59c-10.408-6.5017-22.484-11.378-36.23-14.629-13.55-3.4676-27.392-5.2012-41.531-5.2012zm126.8 5.2012v59.49h60.383v168.07h69.516v-168.07h60.385v-59.49zm304.02 0-90.135 227.56h70.693l13.844-39.66h78.352l13.844 39.66h71.873l-90.135-227.56zm208.14 0v227.56h69.514v-57.215h18.854l35.051 57.215h74.228l-43.299-70.219c12.568-7.1519 22.189-16.795 28.865-28.932 6.6766-12.137 10.016-26.334 10.016-42.588 0-17.338-3.8298-32.508-11.488-45.512-7.6584-13.003-18.557-22.973-32.695-29.908-14.139-6.9352-30.731-10.402-49.779-10.402zm238.99 0v59.49h60.385v168.07h69.516v-168.07h60.383v-59.49zm-169.48 59.166h25.332c9.4258 0 16.496 2.3844 21.209 7.1523 4.7129 4.5512 7.0684 11.052 7.0684 19.504 0 8.4522-2.3555 15.062-7.0684 19.83-4.7128 4.5512-11.783 6.8281-21.209 6.8281h-25.332zm-244.08 16.254 20.029 57.215h-40.059z\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CclipPath id=\"clipPath5090\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Ccircle id=\"circle5092\" style=\"fill:#fdfeff\" cy=\"-500.22\" transform=\"scale(-1)\" cx=\"-960\" r=\"44.78\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CclipPath id=\"clipPath5096\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Ccircle id=\"circle5098\" style=\"fill:#fdfeff\" cy=\"500.22\" cx=\"960\" r=\"44.78\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n \u003C\u002Fdefs\u003E\n \u003Cg id=\"g5383\"\u003E\n  \u003Ccircle id=\"circle4982\" style=\"fill:#fdfeff\" cy=\"896\" cx=\"896\" r=\"750\"\u002F\u003E\n  \u003Cpath id=\"circle4911\" d=\"m896-0.000003125a896 896 0 0 0 -896 896 896 896 0 0 0 896 896 896 896 0 0 0 896 -896 896 896 0 0 0 -896 -896zm-484.49 777.02c14.139 0 27.982 1.7336 41.531 5.2012 13.746 3.2509 25.823 8.1272 36.23 14.629l-20.912 55.59c-20.226-11.27-39.373-16.906-57.44-16.906-17.87 0-26.805 4.7688-26.805 14.305 0 4.5512 2.6511 8.0184 7.9531 10.402 5.302 2.1672 14.04 4.5517 26.215 7.1524 15.71 3.2508 28.965 7.0425 39.766 11.377 10.8 4.1178 20.128 10.945 27.982 20.48 8.0512 9.5358 12.078 22.541 12.078 39.012 0 14.304-3.6327 27.307-10.898 39.01-7.2658 11.486-18.166 20.698-32.697 27.633-14.335 6.7185-31.811 10.076-52.43 10.076-17.084 0-33.777-2.058-50.076-6.1758-16.102-4.3345-29.356-10.079-39.764-17.23l22.387-55.914c9.8185 6.285 20.815 11.378 32.99 15.279 12.175 3.6843 23.858 5.5274 35.051 5.5274 9.6222 0 16.495-0.97527 20.619-2.9258 4.1238-2.1672 6.1856-5.31 6.1856-9.4277 0-4.7679-2.7497-8.3446-8.2481-10.729-5.302-2.384-14.138-4.9853-26.51-7.8027-15.906-3.6843-29.16-7.5854-39.764-11.703-10.604-4.3345-19.835-11.269-27.69-20.805-7.8548-9.7526-11.781-22.865-11.781-39.336 0-14.304 3.6327-27.307 10.898-39.01 7.2658-11.703 18.065-20.914 32.4-27.633 14.532-6.7184 32.108-10.076 52.727-10.076zm126.8 5.2012h190.28v59.49h-60.38v168.09h-69.51v-168.09h-60.385zm304.02 0h68.336l90.135 227.56h-71.871l-13.846-39.66h-78.352l-13.844 39.66h-70.693zm208.14 0h99.266c19.048 0 35.641 3.4672 49.779 10.402 14.139 6.9352 25.037 16.905 32.695 29.908 7.6585 13.003 11.488 28.174 11.488 45.512 0 16.254-3.339 30.449-10.016 42.586-6.6767 12.137-16.298 21.78-28.865 28.932l43.299 70.219h-74.228l-35.051-57.215h-18.852v57.215h-69.516zm238.99 0h190.28v59.49h-60.383v168.07h-69.516v-168.09h-60.385zm-169.48 59.164v53.314h25.33c9.4258 0 16.496-2.275 21.209-6.8262 4.7132-4.7679 7.0704-11.378 7.0704-19.83 0-8.4522-2.3572-14.955-7.0704-19.506-4.7126-4.7679-11.783-7.1523-21.209-7.1523zm-244.08 16.256-20.029 57.215h40.061z\" style=\"fill:url(#radialGradient4951)\"\u002F\u003E\n  \u003Ccircle id=\"circle9583\" style=\"opacity:0.196;fill:url(#radialGradient9665)\" clip-path=\"url(#clipPath9163)\" transform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" cy=\"621.64\" cx=\"1237.9\" r=\"44.78\"\u002F\u003E\n  \u003Cpath id=\"circle9717\" style=\"filter:url(#filter9758);fill:#fff;fill-opacity:.62147\" d=\"m960 455.44a44.78 44.78 0 0 0 -44.781 44.779 44.78 44.78 0 0 0 16.123 34.395 44.78 44.78 0 0 1 -15.021 -33.402 44.78 44.78 0 0 1 44.781 -44.781 44.78 44.78 0 0 1 28.646 10.379 44.78 44.78 0 0 0 -29.75 -11.37z\" clip-path=\"url(#clipPath5096)\" transform=\"matrix(20.009 0 0 20.009 -18312 -9112.8)\"\u002F\u003E\n  \u003Cpath id=\"path9773\" style=\"filter:url(#filter9758);fill-opacity:.87006\" d=\"m960 455.44a44.78 44.78 0 0 0 -44.781 44.779 44.78 44.78 0 0 0 16.123 34.395 44.78 44.78 0 0 1 -15.021 -33.402 44.78 44.78 0 0 1 44.781 -44.781 44.78 44.78 0 0 1 28.646 10.379 44.78 44.78 0 0 0 -29.75 -11.37z\" clip-path=\"url(#clipPath5090)\" transform=\"matrix(-20.009 0 0 -20.009 20104 10905)\"\u002F\u003E\n  \u003Cpath id=\"text4957\" style=\"filter:url(#filter4968);font-variant-numeric:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-feature-settings:normal;fill:#1b1f24\" d=\"m2726.2 571.65c-20.619 0-38.195 3.3597-52.727 10.078-14.335 6.7184-25.135 15.93-32.4 27.633-7.2657 11.703-10.898 24.706-10.898 39.01 0 16.471 3.9264 29.583 11.781 39.336 2.9041 3.5256 5.9974 6.6912 9.2774 9.5059-0.4291-0.49634-0.8562-0.99457-1.2774-1.5059-7.8548-9.7526-11.781-22.865-11.781-39.336 0-14.304 3.6327-27.307 10.898-39.01 7.2657-11.703 18.065-20.914 32.4-27.633 14.531-6.7184 32.108-10.078 52.727-10.078 14.139 0 27.982 1.7336 41.531 5.2012 9.9104 2.3438 18.948 5.5387 27.123 9.5723l1.1074-2.9434c-10.408-6.5017-22.484-11.378-36.23-14.629-13.55-3.4676-27.392-5.2012-41.531-5.2012zm126.8 5.2012v59.49h8v-51.49h182.28v-8zm304.02 0-90.135 227.56h11.168l86.965-219.56h63.506l-3.168-8zm208.14 0v227.56h8v-219.56h99.266c19.048 0 35.641 3.4672 49.779 10.402 6.3016 3.091 11.954 6.7895 16.969 11.086-6.73-7.8533-15.048-14.22-24.969-19.086-14.139-6.9352-30.731-10.402-49.779-10.402zm238.99 0v59.49h8v-51.49h182.28v-8zm-690.77 67.49v160.07h8v-160.07zm751.16 0v160.07h8v-160.07zm-179.72 3.4629c2.3061 4.0036 3.4629 8.9567 3.4629 14.869 0 8.4522-2.3555 15.062-7.0684 19.83-4.7129 4.5512-11.783 6.8281-21.209 6.8281h-17.332v8h25.332c9.4258 0 16.496-2.2769 21.209-6.8281 4.7129-4.7679 7.0684-11.378 7.0684-19.83 0-8.4522-2.3555-14.953-7.0684-19.504-1.2868-1.3018-2.7563-2.4188-4.3945-3.3652zm-777.71 7.2031c0.8323 3.3235 3.3803 5.9461 7.6484 7.8652 5.3021 2.1672 14.04 4.5497 26.215 7.1504 15.71 3.2509 28.965 7.0444 39.766 11.379 6.9207 2.6386 13.234 6.3946 18.945 11.258-7.6356-8.8954-16.615-15.319-26.945-19.258-10.8-4.3345-24.056-8.1261-39.766-11.377-11.926-2.5475-20.532-4.886-25.863-7.0176zm491.49 5.2637-2.5996 7.4258 14.629 41.789h-29.258l-2.8008 8h40.059zm-549.28 70.021-22.385 55.914c2.7979 1.9226 5.8082 3.74 9.0176 5.459l21.367-53.373c9.8185 6.285 20.815 11.376 32.99 15.277 12.175 3.6843 23.86 5.5273 35.053 5.5273 9.6221 0 16.495-0.97527 20.619-2.9258 4.1238-2.1672 6.1856-5.31 6.1856-9.4277 0-4.7679-2.7497-8.3426-8.2481-10.727-0.031-0.0141-0.07-0.0289-0.1016-0.043 0.2294 0.87434 0.3497 1.7958 0.3497 2.7695 0 4.1178-2.0618 7.2605-6.1856 9.4277-4.1238 1.9505-10.997 2.9258-20.619 2.9258-11.193 0-22.878-1.8411-35.053-5.5254-12.175-3.901-23.172-8.9943-32.99-15.279zm809.11 24.904 30.152 49.215h3.0996l-30.152-49.215zm-225.86 17.555 11.051 31.66h5.2071l-11-31.65z\" clip-path=\"url(#clipPath5084)\" transform=\"translate(-2314.7 205.37)\"\u002F\u003E\n  \u003Ccircle id=\"path9948\" cx=\"896\" cy=\"896\" r=\"778.16\" style=\"stroke-linejoin:round;stroke:url(#linearGradient10084);stroke-linecap:round;stroke-width:60.026;fill:none\"\u002F\u003E\n  \u003Ccircle id=\"circle10034\" r=\"778.16\" style=\"stroke-linejoin:round;stroke:url(#linearGradient10084);stroke-linecap:round;stroke-width:60.026;fill:none\" cx=\"896\" cy=\"896\"\u002F\u003E\n  \u003Ccircle id=\"circle10036\" style=\"stroke-linejoin:round;filter:url(#filter10046);stroke:url(#linearGradient10044);stroke-linecap:round;stroke-width:0.75;fill:none\" clip-path=\"url(#clipPath10064)\" transform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" cy=\"544.08\" cx=\"959.62\" r=\"39.014\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fbutton\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdl class=\"progress group\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial dt\" data-value=\"0%\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Data Treatement\u003C\u002Fdt\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0% \u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial fe\" data-value=\"0%\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Feature Engineering\u003C\u002Fdt\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial md\" data-value=\"0%\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Model Development\u003C\u002Fdt\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial mc\" data-value=\"0%\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Model Comparison\u003C\u002Fdt\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E\u003C\u002Fdl\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"stage\" id=\"started\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3 id=\"runtime\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan class=\"logo\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + " \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 64 64\"\u003E\u003Cg stroke-width=\".93069\" transform=\"matrix(1.0745 0 0 1.0745 -1.6501 -1.7269)\"\u003E\u003Cpath d=\"m45.667 51.459h-30.292c-3.1356 0-5.7579-0.64385-7.8482-1.941-2.0997-1.297-3.6207-2.837-4.5727-4.628-0.9424-1.801-1.4183-3.49-1.4183-5.077v-16.611c0-1.7917 0.60657-3.5275 1.829-5.2259 1.2225-1.6891 2.6783-3.0702 4.3767-4.1247s3.1168-1.5864 4.2648-1.5864h33.446v9.1827h-26.176c-0.97984 0-1.9598 0.2986-2.9396 0.90518-0.9705 0.59724-1.7731 1.3439-2.389 2.2397-0.62526 0.88662-0.93323 1.7265-0.93323 2.5103v9.1828c0 0.8679 0.23331 1.7264 0.70925 2.5662 0.47598 0.83988 1.1572 1.5304 2.053 2.0904 0.89595 0.5506 1.8758 0.83052 2.949 0.83052h26.942z\" fill=\"#1a91cd\"\u002F\u003E\u003Cpath d=\"m60.89 51.723h-11.254v-25.776h11.255z\" fill=\"#fff\"\u002F\u003E\u003Cpath d=\"m55.182 11.055c3.2683 0 5.9177 2.6495 5.9177 5.9177 0 3.2683-2.6495 5.9177-5.9177 5.9177s-5.9177-2.6494-5.9177-5.9177c0-3.2682 2.6495-5.9177 5.9177-5.9177\" fill-rule=\"evenodd\" fill=\"#fff\"\u002F\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fspan\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Chas\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "been running for:&nbsp;\u003C\u002Fhas\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan class=\"bind contentValue\" id=\"time-running\" data-value=\"0 minutes\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0 minutes\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"completed-panel\" id=\"completed-panel-1\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdl class=\"progress group dt\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial dt bind\" data-value=\"0%\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Data Treatement\u003C\u002Fdt\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0% \u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E\u003C\u002Fdl\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"bind\" id=\"big-progress-dial\" data-dt-value=\"0%\" data-dt-wt=\"25\" data-fe-value=\"0%\" data-fe-wt=\"25\" data-md-value=\"0%\" data-md-wt=\"25\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv id=\"slices\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
let sliceAngle = 2*Math.atan(0.05)*180/Math.PI, gapAngle=sliceAngle/5;
;pug_debug_line = 59;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
let noSlices=37, totalAngle=sliceAngle*noSlices+gapAngle*(noSlices-1), startAngle=-90 - totalAngle/2 + sliceAngle/2; 
;pug_debug_line = 60;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
for (let i=0; i<noSlices; i++){
{
;pug_debug_line = 61;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"slice\""+pug_attr("style", pug_style(`--rotate-angle: ${startAngle+(sliceAngle+gapAngle)*i}deg;`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 62;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cbutton class=\"button\" id=\"big-stop-button\"\u003E\u003Csvg id=\"svg4\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 1792 1792\" version=\"1.1\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n \u003Cdefs id=\"defs8\"\u003E\n  \u003ClinearGradient id=\"linearGradient10030\"\u003E\n   \u003Cstop id=\"stop10026\" style=\"stop-color:#8b9aaa\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10028\" style=\"stop-color:#617285\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CradialGradient id=\"radialGradient14534\" xlink:href=\"#linearGradient12673\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" r=\"44.78\"\u002F\u003E\n  \u003ClinearGradient id=\"linearGradient12673\"\u003E\n   \u003Cstop id=\"stop12669\" style=\"stop-color:#da0000\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop4946\" style=\"stop-color:#c40000\" offset=\".97613\"\u002F\u003E\n   \u003Cstop id=\"stop12671\" style=\"stop-color:#c40000;stop-opacity:.71375\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CradialGradient id=\"radialGradient14536\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"translate(-14.367 -23.216)\" r=\"44.78\"\u003E\n   \u003Cstop id=\"stop21861-5-3\" style=\"stop-color:#fff\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop21863-0-6\" style=\"stop-color:#fff;stop-opacity:0\" offset=\"1\"\u002F\u003E\n  \u003C\u002FradialGradient\u003E\n  \u003Cfilter id=\"filter9758-9\" style=\"color-interpolation-filters:sRGB\" height=\"1.0932\" width=\"1.099\" y=\"-.046592\" x=\"-.049496\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur9760-2\" stdDeviation=\"1.5370313\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003ClinearGradient id=\"linearGradient14538\" y2=\"574.71\" xlink:href=\"#linearGradient10030\" gradientUnits=\"userSpaceOnUse\" x2=\"988.77\" gradientTransform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" y1=\"515.12\" x1=\"931.19\"\u002F\u003E\n  \u003ClinearGradient id=\"linearGradient14542\" y2=\"573.21\" gradientUnits=\"userSpaceOnUse\" x2=\"987.88\" gradientTransform=\"matrix(.98746 0 0 .98746 11.659 6.3266)\" y1=\"516.33\" x1=\"931.74\"\u003E\n   \u003Cstop id=\"stop10038-3\" style=\"stop-color:#e1e5e9\" offset=\"0\"\u002F\u003E\n   \u003Cstop id=\"stop10040-5\" style=\"stop-color:#e1e5e9;stop-opacity:.66102\" offset=\"1\"\u002F\u003E\n  \u003C\u002FlinearGradient\u003E\n  \u003CclipPath id=\"clipPath10064-4\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path10066-7\" style=\"color-rendering:auto;text-decoration-color:#000000;color:#000000;font-variant-numeric:normal;shape-rendering:auto;solid-color:#000000;text-decoration-line:none;fill:#a88baa;font-variant-position:normal;mix-blend-mode:normal;font-feature-settings:normal;shape-padding:0;font-variant-alternates:normal;text-indent:0;font-variant-ligatures:normal;dominant-baseline:auto;font-variant-caps:normal;image-rendering:auto;white-space:normal;text-decoration-style:solid;text-orientation:mixed;isolation:auto;text-transform:none\" d=\"m959.5 504.32c-21.945 0-39.766 17.821-39.766 39.766s17.821 39.766 39.766 39.766 39.766-17.821 39.766-39.766-17.821-39.766-39.766-39.766zm0 2.9536c20.348 0 36.812 16.464 36.812 36.812s-16.464 36.812-36.812 36.812-36.812-16.464-36.812-36.812 16.464-36.812 36.812-36.812z\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003Cfilter id=\"filter10046-8\" style=\"color-interpolation-filters:sRGB\" height=\"1.024\" width=\"1.024\" y=\"-.012\" x=\"-.012\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur10048-4\" stdDeviation=\"0.39014427\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n  \u003CclipPath id=\"clipPath4964\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path4966\" d=\"m960 545a44.78 44.78 0 0 0 44.8 -44.78 44.78 44.78 0 0 0 -44.8 -44.78 44.78 44.78 0 0 0 -44.78 44.78 44.78 44.78 0 0 0 44.78 44.78zm18.804-38.834c-0.70663 0-1.3985-0.0867-2.0757-0.25994-0.687-0.16248-1.2906-0.40619-1.8107-0.73113l1.0452-2.7783c1.0109 0.56323 1.9678 0.84484 2.8707 0.84484 0.89309 0 1.3396-0.23824 1.3396-0.71482 0-0.22746-0.1325-0.40074-0.39749-0.51989-0.26498-0.10831-0.70178-0.22748-1.3103-0.35746-0.78514-0.16247-1.4475-0.35207-1.9873-0.5687-0.53978-0.2058-1.0059-0.54699-1.3985-1.0236-0.40239-0.47659-0.60364-1.1264-0.60364-1.9496 0-0.71488 0.18155-1.3647 0.54468-1.9496 0.36313-0.57407 0.9078-1.0344 1.634-1.381 0.71644-0.33578 1.5899-0.50369 2.6204-0.50369 0.85384 0 1.688 0.10296 2.5026 0.30875 0.80477 0.21663 1.4673 0.50361 1.9874 0.86105l-1.1188 2.7946c-0.49072-0.31411-1.0403-0.56867-1.6488-0.76363-0.60848-0.18414-1.1924-0.27625-1.7518-0.27625-0.4809 0-0.82441 0.0487-1.0305 0.14623-0.2061 0.10831-0.30914 0.26538-0.30914 0.47118 0 0.23829 0.13733 0.41704 0.41212 0.53619 0.26499 0.11915 0.70662 0.24906 1.3249 0.38987 0.79496 0.18413 1.4574 0.3791 1.9874 0.5849 0.52997 0.21663 0.9913 0.56329 1.3839 1.0399 0.39257 0.48741 0.5888 1.1426 0.5888 1.9658 0 0.71487-0.18155 1.3648-0.54468 1.9497s-0.90287 1.0452-1.6193 1.3809c-0.72626 0.33578-1.6047 0.50369-2.6352 0.50369zm-23.922 0c-1.109 0-2.1052-0.25456-2.9884-0.76363-0.88328-0.50908-1.5752-1.2185-2.0758-2.1284-0.50052-0.89901-0.75075-1.9171-0.75075-3.0544s0.25023-2.1609 0.75075-3.0707c0.50053-0.89902 1.1925-1.6031 2.0758-2.1122 0.88328-0.50907 1.8794-0.76363 2.9884-0.76363s2.1052 0.25456 2.9884 0.76363c0.88328 0.50908 1.5751 1.2132 2.0757 2.1122 0.50052 0.90983 0.75084 1.9334 0.75084 3.0707s-0.25032 2.1554-0.75084 3.0544c-0.50053 0.90984-1.1924 1.6193-2.0757 2.1284-0.88328 0.50907-1.8794 0.76363-2.9884 0.76363zm17.585-0.25994h-9.51v-2.9732h3.0179v-8.3998h3.4742v8.3998h3.0179zm-26.575 0h-4.9611c-0.95198 0-1.7812-0.17329-2.4879-0.5199-0.70663-0.3466-1.2513-0.84487-1.634-1.4948-0.38275-0.64989-0.57417-1.4081-0.57417-2.2746 0-0.86651 0.19142-1.6247 0.57417-2.2746 0.38276-0.64988 0.92742-1.1482 1.634-1.4948 0.70663-0.34661 1.5359-0.5199 2.4879-0.5199h1.4868v-2.7946h3.4743zm8.9896-2.8433c0.43183 0 0.82439-0.11907 1.1777-0.35736 0.3435-0.22746 0.61825-0.55781 0.82434-0.99107 0.2061-0.42243 0.30915-0.92069 0.30915-1.4948 0-0.57407-0.10305-1.0777-0.30915-1.511-0.20609-0.42243-0.48084-0.75288-0.82434-0.99117-0.35332-0.22746-0.74588-0.34116-1.1777-0.34116-0.43183 0-0.81947 0.1137-1.163 0.34116-0.35331 0.23829-0.63308 0.56874-0.83918 0.99117-0.2061 0.43326-0.30915 0.93689-0.30914 1.511 0 0.57407 0.10304 1.0723 0.30914 1.4948 0.2061 0.43326 0.48587 0.76361 0.83918 0.99107 0.3435 0.23829 0.73114 0.35736 1.163 0.35736zm-12.464-0.11372v-2.6645h-1.266c-0.47108 0-0.82444 0.1137-1.06 0.34116-0.23555 0.23829-0.35327 0.56865-0.35327 0.99107 0 0.42243 0.11772 0.74741 0.35327 0.97487 0.23554 0.23829 0.5889 0.35736 1.06 0.35736z\" style=\"fill:url(#radialGradient4968)\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CradialGradient id=\"radialGradient4968\" xlink:href=\"#linearGradient12673\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"rotate(180 1106.1 572.54)\" r=\"44.78\"\u002F\u003E\n  \u003CclipPath id=\"clipPath4979\" clipPathUnits=\"userSpaceOnUse\"\u003E\n   \u003Cpath id=\"path4981\" d=\"m1252.3 600.08a44.78 44.78 0 0 0 -44.78 44.78 44.78 44.78 0 0 0 44.78 44.78 44.78 44.78 0 0 0 44.78 -44.78 44.78 44.78 0 0 0 -44.78 -44.78zm-18.804 38.834c0.7066 0 1.3985 0.0866 2.0757 0.25994 0.687 0.16248 1.2905 0.40619 1.8107 0.73113l-1.0452 2.7783c-1.0108-0.56323-1.9678-0.84484-2.8707-0.84484-0.8931 0-1.3396 0.23824-1.3396 0.71482 0 0.22746 0.1325 0.40074 0.3975 0.51989 0.2649 0.10831 0.7017 0.22748 1.3102 0.35746 0.7852 0.16247 1.4476 0.35207 1.9873 0.5687 0.5398 0.2058 1.006 0.54699 1.3986 1.0236 0.4023 0.47659 0.6036 1.1264 0.6036 1.9496 0 0.71488-0.1816 1.3647-0.5447 1.9496-0.3631 0.57407-0.9078 1.0344-1.634 1.381-0.7165 0.33578-1.59 0.50369-2.6205 0.50369-0.8538 0-1.688-0.10296-2.5026-0.30875-0.8048-0.21663-1.4673-0.50361-1.9874-0.86105l1.1188-2.7946c0.4908 0.31411 1.0403 0.56867 1.6488 0.76363 0.6085 0.18414 1.1924 0.27625 1.7518 0.27625 0.4809 0 0.8244-0.0487 1.0305-0.14623 0.2061-0.10831 0.3092-0.26538 0.3092-0.47118 0-0.23829-0.1374-0.41704-0.4122-0.53619-0.265-0.11915-0.7066-0.24906-1.3249-0.38987-0.7949-0.18414-1.4574-0.37911-1.9874-0.5849-0.53-0.21663-0.9913-0.56329-1.3839-1.0399-0.3925-0.48741-0.5888-1.1426-0.5888-1.9658 0-0.71488 0.1816-1.3648 0.5447-1.9497s0.9029-1.0452 1.6193-1.3809c0.7263-0.33578 1.6047-0.50369 2.6352-0.50369zm23.922 0c1.109 0 2.1051 0.25456 2.9884 0.76363 0.8833 0.50908 1.5753 1.2185 2.0758 2.1284 0.5005 0.89901 0.7507 1.9171 0.7507 3.0544s-0.2502 2.1609-0.7507 3.0707c-0.5005 0.89902-1.1925 1.6031-2.0758 2.1122-0.8833 0.50907-1.8794 0.76363-2.9884 0.76363s-2.1052-0.25456-2.9885-0.76363c-0.8832-0.50908-1.5751-1.2132-2.0756-2.1122-0.5005-0.90983-0.7509-1.9334-0.7509-3.0707s0.2504-2.1554 0.7509-3.0544c0.5005-0.90984 1.1924-1.6193 2.0756-2.1284 0.8833-0.50907 1.8795-0.76363 2.9885-0.76363zm-17.585 0.25994h9.51v2.9732h-3.0179v8.3998h-3.4742v-8.3998h-3.0179zm26.575 0h4.9611c0.952 0 1.7813 0.17329 2.4879 0.5199 0.7066 0.3466 1.2513 0.84487 1.6341 1.4948 0.3827 0.64989 0.5741 1.4081 0.5741 2.2746 0 0.86651-0.1914 1.6247-0.5741 2.2746-0.3828 0.64988-0.9275 1.1482-1.6341 1.4948-0.7066 0.34661-1.5359 0.5199-2.4879 0.5199h-1.4868v2.7946h-3.4743zm-8.9896 2.8433c-0.4318 0-0.8244 0.11906-1.1777 0.35736-0.3435 0.22746-0.6183 0.55781-0.8244 0.99107-0.2061 0.42243-0.3091 0.92069-0.3091 1.4948 0 0.57406 0.103 1.0777 0.3091 1.511 0.2061 0.42243 0.4809 0.75288 0.8244 0.99117 0.3533 0.22746 0.7459 0.34116 1.1777 0.34116s0.8195-0.1137 1.163-0.34116c0.3533-0.23829 0.633-0.56874 0.8391-0.99117 0.2061-0.43326 0.3092-0.9369 0.3092-1.511 0-0.57407-0.1031-1.0723-0.3092-1.4948-0.2061-0.43326-0.4858-0.76361-0.8391-0.99107-0.3435-0.2383-0.7312-0.35736-1.163-0.35736zm12.464 0.11372v2.6645h1.2659c0.4711 0 0.8245-0.1137 1.06-0.34116 0.2356-0.23829 0.3533-0.56865 0.3533-0.99107 0-0.42243-0.1177-0.74741-0.3533-0.97487-0.2355-0.23829-0.5889-0.35736-1.06-0.35736z\" style=\"fill:url(#radialGradient4983)\"\u002F\u003E\n  \u003C\u002FclipPath\u003E\n  \u003CradialGradient id=\"radialGradient4983\" xlink:href=\"#linearGradient12673\" gradientUnits=\"userSpaceOnUse\" cy=\"644.86\" cx=\"1252.3\" gradientTransform=\"translate(0 .000049978)\" r=\"44.78\"\u002F\u003E\n  \u003Cfilter id=\"filter4985\" style=\"color-interpolation-filters:sRGB\" height=\"1.1203\" width=\"1.03\" y=\"-.060157\" x=\"-.014990\"\u003E\n   \u003CfeGaussianBlur id=\"feGaussianBlur4987\" stdDeviation=\"0.58453098\"\u002F\u003E\n  \u003C\u002Ffilter\u003E\n \u003C\u002Fdefs\u003E\n \u003Cellipse id=\"ellipse4935\" style=\"fill:#fff\" rx=\"857.97\" ry=\"857.97\" cy=\"896\" cx=\"896\"\u002F\u003E\n \u003Cpath id=\"path14261\" style=\"filter:url(#filter4985);font-variant-numeric:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-feature-settings:normal;fill:#060708\" d=\"m1013 428.63c-2.0658 0-3.8273 0.33663-5.2832 1.0098-1.4362 0.67314-2.5181 1.595-3.2461 2.7676-0.7279 1.1726-1.0918 2.4751-1.0918 3.9082 0 1.6503 0.3927 2.9643 1.1797 3.9414 0.3665 0.44487 0.7653 0.82828 1.1914 1.1602-0.7431-0.96799-1.1211-2.248-1.1211-3.8516 0-1.4331 0.3639-2.7356 1.0918-3.9082 0.728-1.1726 1.8099-2.0944 3.2461-2.7676 1.4559-0.67313 3.2174-1.0098 5.2832-1.0098 1.4166 0 2.8026 0.17406 4.1602 0.52148 0.7863 0.18597 1.5121 0.43051 2.1894 0.72266l0.1914-0.50781c-1.0427-0.65142-2.2536-1.1391-3.6308-1.4648-1.3576-0.34742-2.7436-0.52148-4.1602-0.52148zm47.957 0c-2.2233 0-4.2215 0.51069-5.9922 1.5312-1.7708 1.0206-3.1568 2.4416-4.1602 4.2656-1.0034 1.8023-1.5059 3.8431-1.5059 6.123 0 2.28 0.5025 4.3323 1.5059 6.1562 0.6643 1.1931 1.4995 2.212 2.5 3.0625-0.467-0.55255-0.8847-1.1563-1.25-1.8125-1.0034-1.824-1.5059-3.8763-1.5059-6.1562 0-2.28 0.5025-4.3208 1.5059-6.123 1.0034-1.824 2.3894-3.2451 4.1602-4.2656 1.7707-1.0206 3.7689-1.5312 5.9922-1.5312 2.2232 0 4.2195 0.51069 5.9902 1.5312 0.5924 0.34145 1.138 0.73072 1.6445 1.1621-0.812-0.96436-1.7768-1.7679-2.8945-2.4121-1.7707-1.0206-3.767-1.5312-5.9902-1.5312zm-35.254 0.52148v6.7952h1.25v-5.5452h17.814v-1.25zm52.753 0v23.74h1.25v-22.49h10.468c1.9085 0 3.5698 0.34617 4.9864 1.041 0.5457 0.26768 1.0291 0.59521 1.4785 0.95312-0.7117-0.91929-1.6172-1.658-2.7285-2.2031-1.4166-0.69485-3.0779-1.041-4.9864-1.041zm-46.702 7.209v16.949h1.25v-16.95zm59.356 0.21093c0.1328 0.33918 0.2051 0.72864 0.2051 1.1777 0 0.84684-0.2368 1.5086-0.709 1.9863-0.4722 0.45599-1.1806 0.68554-2.125 0.68554h-1.2871v1.25h2.5371c0.9444 0 1.6528-0.22955 2.125-0.68554 0.4722-0.47771 0.709-1.1395 0.709-1.9863 0-0.84684-0.2368-1.4971-0.709-1.9531-0.2024-0.20476-0.4569-0.35761-0.7461-0.47461zm-26.561 0.25586c0.1524 0.22537 0.2967 0.46329 0.4219 0.72657 0.4132 0.84684 0.6192 1.8452 0.6192 2.9961 0 1.1508-0.206 2.1607-0.6192 3.0293-0.4131 0.84684-0.9753 1.5086-1.6836 1.9863-0.6886 0.456-1.4644 0.68555-2.33 0.68555-0.8448 0-1.6138-0.22209-2.3086-0.65625 0.3386 0.48855 0.7339 0.89928 1.1972 1.2207 0.7083 0.456 1.4957 0.68555 2.3614 0.68555 0.8656 0 1.6414-0.22955 2.33-0.68555 0.7083-0.4777 1.2705-1.1395 1.6836-1.9863 0.4132-0.86856 0.6192-1.8785 0.6192-3.0293s-0.206-2.1492-0.6192-2.9961c-0.4107-0.86332-0.9696-1.5208-1.6719-1.9766zm-53.037 0.28907c-0.0008 0.0204-0.01 0.0378-0.01 0.0586 0 0.45599 0.2657 0.80412 0.7969 1.043 0.5312 0.21714 1.4071 0.45623 2.627 0.7168 1.5739 0.3257 2.9022 0.70439 3.9843 1.1387 0.5928 0.226 1.1364 0.54274 1.6407 0.93164-0.032-0.0406-0.055-0.0895-0.088-0.12891-0.787-0.95541-1.7207-1.6402-2.8028-2.0527-1.0821-0.43428-2.4104-0.81297-3.9843-1.1387-0.9539-0.20376-1.6333-0.39116-2.1661-0.56836zm-6.2148 7.1991-2.2441 5.8106c0.4247 0.29185 0.9103 0.55381 1.4296 0.79883l2.0645-5.3594c0.9837 0.6297 2.0849 1.1404 3.3047 1.5312 1.2198 0.36914 2.3902 0.55273 3.5117 0.55273 0.9641 0 1.6532-0.0975 2.0664-0.29297 0.4132-0.21713 0.6191-0.53274 0.6191-0.94531 0.0001-0.4777-0.2752-0.83536-0.8261-1.0742-0.1069-0.048-0.2922-0.10057-0.4278-0.15039-0.01 0.39937-0.2111 0.70753-0.6152 0.91992-0.4132 0.19543-1.1023 0.29297-2.0664 0.29297-1.1215 0-2.2919-0.18359-3.5117-0.55273-1.2198-0.39085-2.321-0.90155-3.3047-1.5312z\" transform=\"matrix(10.107 0 0 10.107 -9726.3 -3561)\"\u002F\u003E\n \u003Cpath id=\"circle14235\" style=\"fill:url(#radialGradient14534)\" d=\"m896 0a896 896 0 0 0 -896 896 896 896 0 0 0 896 896 896 896 0 0 0 896 -896 896 896 0 0 0 -896 -896zm-376.24 777.02c14.139 0 27.982 1.7336 41.531 5.2011 13.746 3.2509 25.823 8.1272 36.23 14.629l-20.912 55.59c-20.226-11.27-39.373-16.904-57.439-16.904-17.87 0-26.805 4.7669-26.805 14.303 0 4.5512 2.6511 8.0184 7.9531 10.402 5.302 2.1672 14.042 4.5516 26.217 7.1523 15.71 3.2509 28.963 7.0444 39.764 11.379 10.8 4.1178 20.128 10.945 27.982 20.48 8.0512 9.5358 12.078 22.539 12.078 39.01 0 14.304-3.6327 27.307-10.898 39.01-7.2657 11.486-18.164 20.698-32.695 27.633-14.335 6.7184-31.813 10.078-52.432 10.078-17.084 0-33.775-2.06-50.074-6.1777-16.102-4.3345-29.358-10.077-39.766-17.228l22.387-55.916c9.8185 6.285 20.815 11.378 32.99 15.279 12.175 3.6843 23.858 5.5273 35.051 5.5273 9.6222 0 16.495-0.9752 20.619-2.9257 4.1238-2.1673 6.1856-5.31 6.1856-9.4278 0-4.7679-2.7477-8.3445-8.2461-10.728-5.302-2.384-14.138-4.9834-26.51-7.8008-15.906-3.6843-29.162-7.5854-39.766-11.703-10.604-4.3345-19.835-11.271-27.689-20.807-7.8548-9.7526-11.781-22.863-11.781-39.334 0-14.304 3.6327-27.309 10.898-39.012 7.2657-11.703 18.065-20.912 32.4-27.631 14.531-6.7184 32.108-10.078 52.727-10.078zm478.65 0c22.19 0 42.122 5.0933 59.795 15.279s31.518 24.381 41.533 42.586c10.015 17.988 15.022 38.359 15.022 61.115s-5.0066 43.237-15.022 61.441c-10.015 17.988-23.86 32.076-41.533 42.262s-37.605 15.279-59.795 15.279-42.122-5.0933-59.795-15.279c-17.68-10.18-31.52-24.27-41.54-42.26-10.01-18.2-15.02-38.68-15.02-61.44 0-22.756 5.0085-43.127 15.023-61.115 10.015-18.205 23.858-32.4 41.531-42.586s37.605-15.279 59.795-15.279zm-351.85 5.2011h190.28v59.49h-60.38v168.07h-69.52v-168.09h-60.385zm531.72 0h99.266c19.048 0 35.641 3.4672 49.779 10.402 14.139 6.9351 25.037 16.905 32.695 29.908 7.6584 13.003 11.488 28.174 11.488 45.512s-3.8299 32.508-11.488 45.512c-7.6585 13.003-18.557 22.973-32.695 29.908-14.139 6.9352-30.731 10.402-49.779 10.402h-29.75v55.916h-69.516zm-179.87 56.891c-8.6403 0-16.495 2.3824-23.564 7.1504-6.873 4.5512-12.37 11.161-16.494 19.83-4.1238 8.4523-6.1855 18.422-6.1855 29.908s2.0618 21.564 6.1855 30.232c4.1238 8.4522 9.6212 15.064 16.494 19.832 7.0694 4.5512 14.924 6.8262 23.564 6.8262 8.6403 0 16.397-2.275 23.27-6.8262 7.0693-4.7679 12.667-11.38 16.791-19.832 4.1238-8.669 6.1856-18.746 6.1855-30.232 0-11.486-2.0617-21.456-6.1855-29.908-4.1238-8.6689-9.7217-15.279-16.791-19.83-6.873-4.768-14.629-7.1504-23.27-7.1504zm249.39 2.2754v53.312h25.33c9.4257 0 16.496-2.275 21.209-6.8262 4.7129-4.7679 7.0684-11.378 7.0684-19.83 0-8.4522-2.3555-14.955-7.0684-19.506-4.7129-4.7679-11.783-7.1503-21.209-7.1503z\"\u002F\u003E\n \u003Ccircle id=\"circle14237\" style=\"opacity:0.196;fill:url(#radialGradient14536)\" clip-path=\"url(#clipPath4979)\" transform=\"matrix(20.009 0 0 20.009 -24161 -12007)\" cy=\"621.64\" cx=\"1237.9\" r=\"44.78\"\u002F\u003E\n \u003Cpath id=\"path14241\" style=\"filter:url(#filter9758-9);fill-opacity:.87006\" d=\"m960 455.44a44.78 44.78 0 0 0 -44.781 44.779 44.78 44.78 0 0 0 16.123 34.395 44.78 44.78 0 0 1 -15.021 -33.402 44.78 44.78 0 0 1 44.781 -44.781 44.78 44.78 0 0 1 28.646 10.379 44.78 44.78 0 0 0 -29.75 -11.37z\" clip-path=\"url(#clipPath4964)\" transform=\"matrix(-20.009 0 0 -20.009 20104 10905)\"\u002F\u003E\n \u003Cellipse id=\"circle14245\" style=\"stroke-linejoin:round;stroke:url(#linearGradient14538);stroke-linecap:round;stroke-width:60.026;fill:none\" rx=\"778.16\" ry=\"778.16\" cy=\"896\" cx=\"896\"\u002F\u003E\n \u003Cellipse id=\"circle14247\" style=\"stroke-linejoin:round;stroke:url(#linearGradient14538);stroke-linecap:round;stroke-width:60.026;fill:none\" rx=\"778.16\" ry=\"778.16\" cy=\"896\" cx=\"896\"\u002F\u003E\n \u003Ccircle id=\"circle14249\" style=\"stroke-linejoin:round;filter:url(#filter10046-8);stroke:url(#linearGradient14542);stroke-linecap:round;stroke-width:0.75;fill:none\" clip-path=\"url(#clipPath10064-4)\" transform=\"matrix(20.009 0 0 20.009 -18312 -1e4)\" cy=\"544.08\" cx=\"959.62\" r=\"39.014\"\u002F\u003E\n \u003Cellipse id=\"ellipse4933\" style=\"fill-opacity:0\" rx=\"896\" ry=\"896\" cy=\"896\" cx=\"896\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fbutton\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv id=\"progress-text\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"completed-panel\" id=\"completed-panel-2\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdl class=\"progress group fe\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial fe bind\" data-value=\"0%\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Feature Engineering\u003C\u002Fdt\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E\u003C\u002Fdl\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv id=\"ongoing-panel\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdl class=\"progress group dt\" id=\"stages\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial dt bind\" data-value=\"0%\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Data Treatement\u003C\u002Fdt\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0% \u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial fe bind\" data-value=\"0%\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Feature Engineering\u003C\u002Fdt\u003E";
;pug_debug_line = 79;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial md bind\" data-value=\"0%\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Model Development\u003C\u002Fdt\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdt class=\"dial mc bind\" data-value=\"0%\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Model Comparison\u003C\u002Fdt\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdd\u003E\u003C\u002Fdl\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv id=\"collector-rule\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"bind dial\" id=\"current-progress-dial\" data-value=\"0%\"\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "0%\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" class=\"dial\" version=\"1.1\" viewBox=\"0 0 220 198\"\u003E\n \u003Cg transform=\"translate(0 2.4099)\"\u003E\n  \u003Cpath class=\"outline\" d=\"m37.157 178.45a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89\"\u002F\u003E\n  \u003Cpath d=\"m37.157 178.45c-1.0286-1.029-2.0306-2.077-3.0058-3.1433\" class=\"filler\"\u002F\u003E\n  \u003Cellipse rx=\"9.8912\" ry=\"9.9135\" cy=\"178.45\" cx=\"37.157\" class=\"blob\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv id=\"current-progress\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Caside id=\"processor-stats\"\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "Power(%)\u003C\u002Fh3\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"chart\" id=\"power\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "GPU Temp(&deg;C)\u003C\u002Fh3\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"chart\" id=\"gpu-temp\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "GPU Usage(%)\u003C\u002Fh3\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"chart\" id=\"gpu-usage\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "CPU Temp(&deg;C)\u003C\u002Fh3\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"chart\" id=\"cpu-temp\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 105;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 105;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "CPU Usage(%)\u003C\u002Fh3\u003E";
;pug_debug_line = 106;pug_debug_filename = "src\u002Ftemplates\u002FAEAutoModel.pug";
pug_html = pug_html + "\u003Cdiv class=\"chart\" id=\"cpu-usage\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Faside\u003E";}.call(this,"Math" in locals_for_with?locals_for_with.Math:typeof Math!=="undefined"?Math:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function mdautocodegeneratorTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FMDAutoCodeGenerator.pug":"main#auto-code-generator-main\n  section#md-outer-container\n    section.model-list.lhs\n      section.searchBar\n        label#md-data-source(for=\"md-sourceSelect\")\n          span Model\n          \u002F\u002F- select#md-sourceSelect(name=\"md-sourceSelect\")\n          \u002F\u002F-   optgroup(label=\"Auto API\")\n          \u002F\u002F-     option(value=\"test\") Validate\n          \u002F\u002F-     option(value=\"train\" default) Training\n          \u002F\u002F-   option(value=\"scoring\" disabled) Scoring\n          input#deploy-search-input.search(type=text data-search=\"name\")\n      section#md-table\n        .tableContainer\n          table(data-active-source=\"test\")\n            thead\n              tr\n                th.name Learning Algorithm Leaderboard\n                \u002F\u002F- th.auc AUC\n                \u002F\u002F- th.accu Accuracy\n                \u002F\u002F- th.ks KS\n                \u002F\u002F- th.gini Gini\n                \u002F\u002F- th.bs Brier Score\n                th.dPath Download Code\n            tbody.list\n              tr.template-row\n                td.name(data-platform=\"platform\", data-key=\"name\", data-source=\"source\")\n                \u002F\u002F- td.auc(data-key=\"auc\")\n                \u002F\u002F- td.accu(data-key=\"acc\")\n                \u002F\u002F- td.ks(data-key=\"ks\")\n                \u002F\u002F- td.gini(data-key=\"gini\")\n                \u002F\u002F- td.br_s(data-key=\"br_s\")\n                td.dPath(data-key=\"dPath\")\n                  a.dPath(href=\"javascript:APP.noop();\" data-key='dpath' title=\"Download model\" download=\"\")\n    .separator\n    section#api.api.rhs\n      .tabs-container\n        .tabsTriggersContainer\n          label.template.tab-trigger.selected#tab-label-id(for='tab-radio-id' name='api-tab-group') label\n        .tabs-content-container\n          input.template.tab-input#tab-radio-id(type='radio' name='api-tab-group' label-id=\"tab-label-id\")\n          section.template.tab-content#tab-content-id(name='api-tab-group')\n"};
;var locals_for_with = (locals || {});(function (text) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cmain id=\"auto-code-generator-main\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Csection id=\"md-outer-container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Csection class=\"model-list lhs\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Csection class=\"searchBar\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Clabel id=\"md-data-source\" for=\"md-sourceSelect\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "Model\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"search\""+" id=\"deploy-search-input\""+pug_attr("type", text, true, false)+" data-search=\"name\"") + "\u002F\u003E\u003C\u002Flabel\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Csection id=\"md-table\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cdiv class=\"tableContainer\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Ctable data-active-source=\"test\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cth class=\"name\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "Learning Algorithm Leaderboard\u003C\u002Fth\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cth class=\"dPath\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "Download Code\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Ctbody class=\"list\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Ctr class=\"template-row\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Ctd class=\"name\" data-platform=\"platform\" data-key=\"name\" data-source=\"source\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Ctd class=\"dPath\" data-key=\"dPath\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Ca class=\"dPath\" href=\"javascript:APP.noop();\" data-key=\"dpath\" title=\"Download model\" download=\"\"\u003E\u003C\u002Fa\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cdiv class=\"separator\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Csection class=\"api rhs\" id=\"api\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cdiv class=\"tabs-container\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cdiv class=\"tabsTriggersContainer\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Clabel class=\"template tab-trigger selected\" id=\"tab-label-id\" for=\"tab-radio-id\" name=\"api-tab-group\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "label\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cdiv class=\"tabs-content-container\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Cinput class=\"template tab-input\" id=\"tab-radio-id\" type=\"radio\" name=\"api-tab-group\" label-id=\"tab-label-id\"\u002F\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002FMDAutoCodeGenerator.pug";
pug_html = pug_html + "\u003Csection class=\"template tab-content\" id=\"tab-content-id\" name=\"api-tab-group\"\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fsection\u003E\u003C\u002Fmain\u003E";}.call(this,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function mdscoremodelsTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FMDScoreModels.pug":"include \u002Fincludes\u002FcompactLabel\ninclude \u002Fincludes\u002FsplitButton\n\nmain#score-models-main\n  section#md-sm-outer-container\n    section.searchBar.button-bar\n      +compactSelectLabel(\"Data Source\")(id=\"md-sm-data-source\" cls=\"light\")\n        option.no-data(value=\"none\" disabled) No data source available\n      +splitButton()(id=\"source-button\")\n        button.default#add-file-data-source Add file data source\n        button#add-db-data-source Add DB data source\n\n      +compactSelectLabel(\"Model name\")(id=\"md-sm-model-name\" cls=\"light\")\n        option.no-data(value=\"none\" disabled) No models available\n      button#start-scoring Start scoring\n    section#md-sm-table\n      h3 Download Predictive Scores\n      p Download predictive scores for offline use\n      .tableContainer\n        table\n          thead\n            tr\n              th.name Learning Algorithm Leaderboard\n              th.source Source\n              th.auc AUC\n              th.acc Accuracy\n              \u002F\u002F- th.ks KS\n              th.gini Gini\n              \u002F\u002F- th.bs Brier Score\n              th.dPath Download\n          tbody\n            tr.template-row\n              td.name(data-platform=\"platform\", data-key=\"name\", data-source=\"source\")\n              td.source(data-key=\"source\")\n              td.auc.number(data-key=\"auc\")\n              td.acc.number(data-key=\"acc\")\n              \u002F\u002F- td.ks.number(data-key=\"ks\")\n              td.gini.number(data-key=\"gini\")\n              \u002F\u002F- td.br_s(data-key=\"br_s\")\n              td.dPath(data-key=\"dPath\")\n                a.dPath(href=\"javascript:APP.noop();\" data-key='dpath' title=\"Download model\" download=\"\")\n              td.progress(colspan=\"4\", data-key=\"progress\", data-value=\"0\")\n                .progress-outer\n                  .progress-inner\n","src\u002Fincludes\u002FcompactLabel.pug":"mixin compactInputLabel(labelText)\n  label.compact.input(for=\"input-\"+attributes.id id=attributes.id, class=attributes.cls)\n    input(class=`input-${attributes.cls}`, id=\"input-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, disabled=attributes.disabled, pattern=attributes.pattern)\n    span= labelText\n    span.errorMsg= attributes.errortext\n\nmixin compactTextareaLabel(labelText)\n  label.compact.textarea(for=\"textarea-\"+attributes.id id=attributes.id, class=attributes.cls)\n    - var rowCount=(attributes.rows?attributes.rows:\"3\");\n    textarea(class=`textarea-${attributes.cls}`, id=\"textarea-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, rows=attributes.rows, disabled=attributes.disabled)\n    span= labelText\n\nmixin compactSelectLabel(labelText)\n  label.compact.select(for=\"select-\"+attributes.id id=attributes.id, class=attributes.cls)\n    select(class=`select-${attributes.cls}`, id=\"select-\"+attributes.id, aria-label=labelText, disabled=attributes.disabled)\n      if block\n        block\n    span= labelText","src\u002Fincludes\u002FsplitButton.pug":"mixin splitButton\n  .split-button(id=attributes.id)\n    input.dropdown-trigger-input(type=\"checkbox\", id=`dropdown-trigger-${attributes.id}`, name=`dropdown-trigger-${attributes.id}`)\n    .dropdown-content\n      if block\n        block\n    label.dropdown-trigger(for=`dropdown-trigger-${attributes.id}`)"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";















;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";













;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactSelectLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 14;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","select",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "select-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cselect" + (pug_attr("class", pug_classes([`select-${attributes.cls}`], [true]), false, false)+pug_attr("id", "select-"+attributes.id, true, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
if (block) {
;pug_debug_line = 17;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
block && block();
}
pug_html = pug_html + "\u003C\u002Fselect\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FsplitButton.pug";
pug_mixins["splitButton"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FsplitButton.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"split-button\""+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FsplitButton.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"dropdown-trigger-input\""+" type=\"checkbox\""+pug_attr("id", `dropdown-trigger-${attributes.id}`, true, false)+pug_attr("name", `dropdown-trigger-${attributes.id}`, true, false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FsplitButton.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-content\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FsplitButton.pug";
if (block) {
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002FsplitButton.pug";
block && block();
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FsplitButton.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"dropdown-trigger\""+pug_attr("for", `dropdown-trigger-${attributes.id}`, true, false)) + "\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cmain id=\"score-models-main\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Csection id=\"md-sm-outer-container\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Csection class=\"searchBar button-bar\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Coption" + (" class=\"no-data\""+" value=\"none\""+pug_attr("disabled", true, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "No data source available\u003C\u002Foption\u003E";
},
attributes: {"id": "md-sm-data-source","cls": "light"}
}, "Data Source");
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_mixins["splitButton"].call({
block: function(){
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cbutton class=\"default\" id=\"add-file-data-source\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Add file data source\u003C\u002Fbutton\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cbutton id=\"add-db-data-source\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Add DB data source\u003C\u002Fbutton\u003E";
},
attributes: {"id": "source-button"}
});
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Coption" + (" class=\"no-data\""+" value=\"none\""+pug_attr("disabled", true, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "No models available\u003C\u002Foption\u003E";
},
attributes: {"id": "md-sm-model-name","cls": "light"}
}, "Model name");
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cbutton id=\"start-scoring\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Start scoring\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Csection id=\"md-sm-table\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Download Predictive Scores\u003C\u002Fh3\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Download predictive scores for offline use\u003C\u002Fp\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cdiv class=\"tableContainer\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cth class=\"name\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Learning Algorithm Leaderboard\u003C\u002Fth\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cth class=\"source\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Source\u003C\u002Fth\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cth class=\"auc\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "AUC\u003C\u002Fth\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cth class=\"acc\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Accuracy\u003C\u002Fth\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cth class=\"gini\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Gini\u003C\u002Fth\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cth class=\"dPath\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "Download\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctr class=\"template-row\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctd class=\"name\" data-platform=\"platform\" data-key=\"name\" data-source=\"source\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctd class=\"source\" data-key=\"source\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctd class=\"auc number\" data-key=\"auc\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctd class=\"acc number\" data-key=\"acc\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctd class=\"gini number\" data-key=\"gini\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctd class=\"dPath\" data-key=\"dPath\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ca class=\"dPath\" href=\"javascript:APP.noop();\" data-key=\"dpath\" title=\"Download model\" download=\"\"\u003E\u003C\u002Fa\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Ctd class=\"progress\" colspan=\"4\" data-key=\"progress\" data-value=\"0\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cdiv class=\"progress-outer\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002FMDScoreModels.pug";
pug_html = pug_html + "\u003Cdiv class=\"progress-inner\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fsection\u003E\u003C\u002Fmain\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function mpmlleaderboardTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FMPMLLeaderboard.pug":"mixin graphContainer(gd)\n  .graph-outer-container&attributes(gd)\n    h4.title= gd.name\n    .graph-container\n      .graph\n\n-\u002F\u002Fml=machineLearning lb=leaderboard sec=section\nmixin mllbSec(sectionData)\n  section.lhs.selectionArea\n    .tableContainer\n      h4 Learning Algorithm Leaderboard\n      table\n        tbody\n          - for (let i=0; i\u003CsectionData.rows; i++){\n            tr\n              td&attributes(sectionData.rows[i])= sectionData.rows[i]['name']\n          - }\n\nmain#ml-leaderboard \n  - let discriminationData={rows: [ {class: \"templateRow, algoType\", name: \"algoName\"} ] };\n  section#ml-table-outer-container\n    section.searchBar\n      label#source(for=\"sourceSelect\")\n        span Data source\n        select#sourceSelect(name=\"sourceSelect\")\n          option(value=\"test\") Validate\n          option(value=\"train\" default) Training\n    +mllbSec(discriminationData)\n  .separator\n  section#graph-area\n    #discrimination.graphs-outer-area\n      - let graphs=[{id: \"rocCurve\", name: \"ROC Curve\", gdName: \"Roc\"}, {id: \"discrimSlope\", name: \"Discrimination Slope\", gdName: \"discrimSlope\"}, {id:\"ksGraph\", name: \"KS Graph\", gdName: \"KS\"}, {id:\"liftGraph\", name: \"Lift\", gdName: \"DecileLift\"}];\n      .graphs-area\n        -for (let i=0; i\u003Cgraphs.length; i++){\n          +graphContainer(graphs[i])\n        -}\n    #calibration.graphs-outer-area\n      - graphs=[{id: \"calibrationChart\", name: \"Calibration\", gdName: \"CalibrationInfo\"}];\n      .graphs-area\n        -for (let i=0; i\u003Cgraphs.length; i++){\n          +graphContainer(graphs[i])\n        -}\n    #fprAndPA.graphs-outer-area\n      .table-area#probLevels\n        h4.title Probability Levels\n        #probLevelsTableDiv\n      - graphs=[{id: \"precisionGraph\", name: \"Precision\", gdName: \"PrecisionInfo\"}, {id: \"confusionMatrix\", name: \"Confusion Matrix\", gdName: \"confusionMatrix\"}, {id:\"ogiveCurve\", name: \"Ogive Curve\", gdName: \"ogiveCurve\"}];\n      .graphs-area\n        -for (let i=0; i\u003Cgraphs.length; i++){\n          +graphContainer(graphs[i])\n        -}\n"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_mixins["graphContainer"] = pug_interp = function(gd){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "graph-outer-container"},gd]), false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Ch4 class=\"title\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = gd.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graph-container\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graph\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
//ml=machineLearning lb=leaderboard sec=section
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_mixins["mllbSec"] = pug_interp = function(sectionData){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Csection class=\"lhs selectionArea\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"tableContainer\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "Learning Algorithm Leaderboard\u003C\u002Fh4\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
for (let i=0; i<sectionData.rows; i++){
{
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attrs(sectionData.rows[i], false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = sectionData.rows[i]['name']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
};
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cmain id=\"ml-leaderboard\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + " ";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
let discriminationData={rows: [ {class: "templateRow, algoType", name: "algoName"} ] };
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Csection id=\"ml-table-outer-container\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Csection class=\"searchBar\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Clabel id=\"source\" for=\"sourceSelect\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "Data source\u003C\u002Fspan\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cselect id=\"sourceSelect\" name=\"sourceSelect\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Coption value=\"test\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "Validate\u003C\u002Foption\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Coption" + (" value=\"train\""+pug_attr("default", true, true, false)) + "\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "Training\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Flabel\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_mixins["mllbSec"](discriminationData);
pug_html = pug_html + "\u003C\u002Fsection\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"separator\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Csection id=\"graph-area\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graphs-outer-area\" id=\"discrimination\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
let graphs=[{id: "rocCurve", name: "ROC Curve", gdName: "Roc"}, {id: "discrimSlope", name: "Discrimination Slope", gdName: "discrimSlope"}, {id:"ksGraph", name: "KS Graph", gdName: "KS"}, {id:"liftGraph", name: "Lift", gdName: "DecileLift"}];
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graphs-area\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
for (let i=0; i<graphs.length; i++){
{
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_mixins["graphContainer"](graphs[i]);
}
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graphs-outer-area\" id=\"calibration\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
graphs=[{id: "calibrationChart", name: "Calibration", gdName: "CalibrationInfo"}];
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graphs-area\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
for (let i=0; i<graphs.length; i++){
{
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_mixins["graphContainer"](graphs[i]);
}
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graphs-outer-area\" id=\"fprAndPA\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"table-area\" id=\"probLevels\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Ch4 class=\"title\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "Probability Levels\u003C\u002Fh4\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv id=\"probLevelsTableDiv\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
graphs=[{id: "precisionGraph", name: "Precision", gdName: "PrecisionInfo"}, {id: "confusionMatrix", name: "Confusion Matrix", gdName: "confusionMatrix"}, {id:"ogiveCurve", name: "Ogive Curve", gdName: "ogiveCurve"}];
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"graphs-area\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
for (let i=0; i<graphs.length; i++){
{
;pug_debug_line = 50;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
pug_mixins["graphContainer"](graphs[i]);
}
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002FMPMLLeaderboard.pug";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fmain\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function mpmodelcomparisonTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FMPModelComparison.pug":"main#model-comparison-main\n  section#mc-outer-container\n    section.searchBar\n      label#mc-data-source(for=\"mc-sourceSelect\")\n        span Data source\n        select#mc-sourceSelect(name=\"mc-sourceSelect\")\n          option(value=\"test\") Validate\n          option(value=\"train\" default) Training\n    section#mc-table\n      .tableContainer\n        table(data-active-source=\"test\")\n          thead\n            tr\n              th.name Learning Algorithm Leaderboard\n              th.auc AUC\n              th.accu Accuracy\n              th.ks KS\n              th.gini Gini\n              th.bs Brier Score\n          tbody\n            tr.template-row\n              td.name(data-platform=\"platform\", data-key=\"name\", data-source=\"source\")\n              td.auc(data-key=\"auc\")\n              td.accu(data-key=\"acc\")\n              td.ks(data-key=\"ks\")\n              td.gini(data-key=\"gini\")\n              td.br_s(data-key=\"br_s\")\n"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cmain id=\"model-comparison-main\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Csection id=\"mc-outer-container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Csection class=\"searchBar\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Clabel id=\"mc-data-source\" for=\"mc-sourceSelect\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "Data source\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cselect id=\"mc-sourceSelect\" name=\"mc-sourceSelect\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Coption value=\"test\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "Validate\u003C\u002Foption\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Coption" + (" value=\"train\""+pug_attr("default", true, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "Training\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Flabel\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Csection id=\"mc-table\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cdiv class=\"tableContainer\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctable data-active-source=\"test\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cth class=\"name\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "Learning Algorithm Leaderboard\u003C\u002Fth\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cth class=\"auc\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "AUC\u003C\u002Fth\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cth class=\"accu\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "Accuracy\u003C\u002Fth\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cth class=\"ks\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "KS\u003C\u002Fth\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cth class=\"gini\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "Gini\u003C\u002Fth\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Cth class=\"bs\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "Brier Score\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctr class=\"template-row\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctd class=\"name\" data-platform=\"platform\" data-key=\"name\" data-source=\"source\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctd class=\"auc\" data-key=\"auc\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctd class=\"accu\" data-key=\"acc\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctd class=\"ks\" data-key=\"ks\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctd class=\"gini\" data-key=\"gini\"\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FMPModelComparison.pug";
pug_html = pug_html + "\u003Ctd class=\"br_s\" data-key=\"br_s\"\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fsection\u003E\u003C\u002Fmain\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function modeldevconfirmationdlgTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FModelDevConfirmationDLG.pug":"include ..\u002Fi18n\u002Fen\ninclude ..\u002Fincludes\u002Fdialog\n\n+dialog(\"Model Development Complete\")(id=\"model-dev-complete-dialog\")\n  p The model development is complete.\n  .button-bar(style=\"display: flex; justify-content: center;\")\n    button#next-button.iconAndText(title=\"Proceed to Model Performance\") Model Performance\n      include ..\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg\n","src\u002Fi18n\u002Fen.pug":"include i18n\n-i18n.en={};\n-i18n.en.APP={};\n-i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };\n-i18n.en.APP.TITLE=\"CyborgIntell\";\n-i18n.en.APP.NAME=\"Turing\";\n\n-i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD=\"Incorrect username or password\";\n-i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS=\"User not logged in. Cannot retrieve porjects.\";\n-i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL=\"Error in retrieving projects\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION={};\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN=\"User not logged in. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT=\"The following project properties are empty. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: \"Error in creating DB Connection\"};\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS=\"DB Connection created successfully\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT=\"The following DB connection properties are empty. Cannot create DB connection.\";\n-i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: \"Error in fetching report\"};\n-i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN=\"User notlogged in. Cannot fetch report. \";\n\n-i18n.en.APP.UI.INFO.PROJECT_CREATION={};\n-i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS=\"Project created successfully.\";\n-i18n.en.APP.UI.INFO.DB_CONNECTION={};\n-i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS=\"DB Connection is working correctly\";\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n-i18n.en.APP.UI.INFO.EXPLORE_DATA={};\n-i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE=\"Dashboard\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS=\"Number of models\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID=\"ID\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM=\"Platform\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON=\"Created on\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE=\"Type\";\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n\n-i18n.en.APP.UI.CONTENT.BREADCRUMB={};\n-i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD=\"Dashboard\";\n\n-i18n.en.APP.UI.CONTENT.TAGLINE={};\n-i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION=\"Classification\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION=\"Prediction\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION=\"Estimation\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION=\"Optimization\";\n\n-i18n.en.APP.UI.FOOTER.PROGRESS={};\n-i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS=\"Getting projects...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT=\"Creating new project...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= \"Logging in...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION=\"Creating new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION=\"Testing new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES=\"Fetching features list...\"\n\n-i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: \"Open navigation\"};\n-i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: \"Pin navigation\"};\n-i18n.en.APP.UI.BTN.LOGIN={TEXT:\"Login\", TITLE: \"Login\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:\"New project\", TITLE: \"New project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: \"Create\", TITLE: \"Create new project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: \"Cancel\", TITLE: \"Cancel\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB={};\n-i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE={};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: \"Browse...\", TITLE: \"Browse...\"};\n\n-i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: \"Username\", PLACEHOLDER:\"user@example.com\"};\n-i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: \"Password\", PLACEHOLDER:\"⬤⬤⬤⬤⬤⬤⬤⬤⬤\"};\n-i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: \"Remember me\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: \"Project name\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: \"Description\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB={};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: \"Existing connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: \"New connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: \"Connection name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: \"Database name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: \"Table name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: \"DB Server IP address\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: \"Port number\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: \"DB username\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: \"DB password\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE={};\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME=\"Name for conneciton\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE=\"File location on the server\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1=\"or drag & drop a file into this space to upload it.\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2=\"Browse\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE=\"File types supported: CSV, TSV, XML, XLSX\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON=\"Browse...\";\n\n\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: \"Project Type\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: \"Classification\", ML: \"ML\", PREDICTION: \"Prediction\", ESTIMATION: \"Estimation\", OPTIMIZATION: \"Optimization\"}\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: \"Platform\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: \"In-house\", CI_CLOUD: \"CI Cloud\"}\n-i18n.en.APP.UI.SELECT.CONNECT_DB={};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: \"Pick a named connection\"}\n\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: \"Database type\"};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: \"Oracle\", MYSQL: \"MySQL\", POSTGRESQL: \"PostgreSQL\", HIVE: \"Hive\"}\n\n-i18n.en.APP.UI.DIALOG.LOGIN={TITLE: \"Login\"};\n-i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: \"New Project\"};\n-i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: \"Connect to Database\"};\n-i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: \"Flat File Connection\"};\n\n-i18n.en.APP.UI.NAV.DASHBOARD={TEXT: \"Dashboard\"};","src\u002Fi18n\u002Fi18n.pug":"-var i18n={};","src\u002Fincludes\u002Fdialog.pug":"mixin dialog(title)\n  dialog.dialog(id=attributes.id)\n    .title\n      span.titleText= title\n      button.close\n    .content\n      if block\n        block\n      else\n        p No content provided\n\nmixin box(title)\n  .box&attributes(attributes)\n    .title\n      span.titleText= title\n    .content\n      if block\n        block\n      else\n        p No content provided\n      ","src\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg":"\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fi18n\u002Fi18n.pug";
var i18n={};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en={};
;pug_debug_line = 3;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP={};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };
;pug_debug_line = 5;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.TITLE="CyborgIntell";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.NAME="Turing";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD="Incorrect username or password";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS="User not logged in. Cannot retrieve porjects.";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL="Error in retrieving projects";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION={};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN="User not logged in. Cannot create porject.";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT="The following project properties are empty. Cannot create porject.";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: "Error in creating DB Connection"};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS="DB Connection created successfully";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT="The following DB connection properties are empty. Cannot create DB connection.";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 20;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 21;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: "Error in fetching report"};
;pug_debug_line = 22;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN="User notlogged in. Cannot fetch report. ";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION={};
;pug_debug_line = 25;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS="Project created successfully.";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION={};
;pug_debug_line = 27;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS="DB Connection is working correctly";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};
;pug_debug_line = 29;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA={};
;pug_debug_line = 31;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};
;pug_debug_line = 34;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE="Dashboard";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};
;pug_debug_line = 36;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS="Number of models";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID="ID";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM="Platform";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON="Created on";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE="Type";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};
;pug_debug_line = 42;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 43;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};
;pug_debug_line = 44;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 46;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB={};
;pug_debug_line = 47;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD="Dashboard";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE={};
;pug_debug_line = 50;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION="Classification";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION="Prediction";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION="Estimation";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION="Optimization";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS={};
;pug_debug_line = 56;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS="Getting projects...";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT="Creating new project...";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= "Logging in...";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION="Creating new connection..."
;pug_debug_line = 60;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION="Testing new connection..."
;pug_debug_line = 61;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES="Fetching features list..."
;pug_debug_line = 63;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: "Open navigation"};
;pug_debug_line = 64;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: "Pin navigation"};
;pug_debug_line = 65;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.LOGIN={TEXT:"Login", TITLE: "Login"};
;pug_debug_line = 66;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:"New project", TITLE: "New project"};
;pug_debug_line = 67;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};
;pug_debug_line = 68;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: "Create", TITLE: "Create new project"};
;pug_debug_line = 69;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: "Cancel", TITLE: "Cancel"};
;pug_debug_line = 70;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB={};
;pug_debug_line = 71;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 72;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 73;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE={};
;pug_debug_line = 74;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 75;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 76;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: "Browse...", TITLE: "Browse..."};
;pug_debug_line = 78;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: "Username", PLACEHOLDER:"user@example.com"};
;pug_debug_line = 79;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: "Password", PLACEHOLDER:"⬤⬤⬤⬤⬤⬤⬤⬤⬤"};
;pug_debug_line = 80;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: "Remember me"};
;pug_debug_line = 81;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};
;pug_debug_line = 82;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: "Project name"};
;pug_debug_line = 83;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: "Description"};
;pug_debug_line = 84;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB={};
;pug_debug_line = 85;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: "Existing connection"};
;pug_debug_line = 86;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: "New connection"};
;pug_debug_line = 87;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: "Connection name"};
;pug_debug_line = 88;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: "Database name"};
;pug_debug_line = 89;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: "Table name"};
;pug_debug_line = 90;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: "DB Server IP address"};
;pug_debug_line = 91;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: "Port number"};
;pug_debug_line = 92;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: "DB username"};
;pug_debug_line = 93;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: "DB password"};
;pug_debug_line = 94;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 95;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE={};
;pug_debug_line = 96;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME="Name for conneciton";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE="File location on the server";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1="or drag & drop a file into this space to upload it.";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2="Browse";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE="File types supported: CSV, TSV, XML, XLSX";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 102;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON="Browse...";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};
;pug_debug_line = 106;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: "Project Type"};
;pug_debug_line = 107;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: "Classification", ML: "ML", PREDICTION: "Prediction", ESTIMATION: "Estimation", OPTIMIZATION: "Optimization"}
;pug_debug_line = 108;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: "Platform"};
;pug_debug_line = 109;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: "In-house", CI_CLOUD: "CI Cloud"}
;pug_debug_line = 110;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB={};
;pug_debug_line = 111;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: "Pick a named connection"}
;pug_debug_line = 113;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: "Database type"};
;pug_debug_line = 114;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: "Oracle", MYSQL: "MySQL", POSTGRESQL: "PostgreSQL", HIVE: "Hive"}
;pug_debug_line = 116;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.LOGIN={TITLE: "Login"};
;pug_debug_line = 117;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: "New Project"};
;pug_debug_line = 118;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: "Connect to Database"};
;pug_debug_line = 119;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: "Flat File Connection"};
;pug_debug_line = 121;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.NAV.DASHBOARD={TEXT: "Dashboard"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_mixins["dialog"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdialog" + (" class=\"dialog\""+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cspan class=\"titleText\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\"\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
if (block) {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
block && block();
}
else {
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "No content provided\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdialog\u003E";
};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";

























;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FModelDevConfirmationDLG.pug";
pug_mixins["dialog"].call({
block: function(){
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FModelDevConfirmationDLG.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FModelDevConfirmationDLG.pug";
pug_html = pug_html + "The model development is complete.\u003C\u002Fp\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FModelDevConfirmationDLG.pug";
pug_html = pug_html + "\u003Cdiv class=\"button-bar\" style=\"display: flex; justify-content: center;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FModelDevConfirmationDLG.pug";
pug_html = pug_html + "\u003Cbutton class=\"iconAndText\" id=\"next-button\" title=\"Proceed to Model Performance\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FModelDevConfirmationDLG.pug";
pug_html = pug_html + "Model Performance\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"id": "model-dev-complete-dialog"}
}, "Model Development Complete");} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function confusionmatrixtableTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FconfusionMatrixTable.pug":"- let data=arguments[0].data\n- console.log(data);\ntable#confTable1\n  thead\n    tr\n      th.cf1(colspan=2) Confusion\n      th.predicted(colspan=3) Predicted\n    tr\n      th.cf2(colspan=2) Matrix\n      th.nonfraud1 Non-Event\n      th.fraud1 Event\n      th.total1 Total\n  tbody\n    tr\n      th.actual(rowspan=3) \n        span Actual\n      th.nonfraud Non-Event\n      td.nf-nf= data.confMatrix['nf_nf']\n      td.nf-f= data.confMatrix['nf_f']\n      td.nf-tot= data.confMatrix['nf_nf']+data.confMatrix['nf_f']\n    tr\n      th.fraud Event\n      td.f-nf= data.confMatrix['f_nf']\n      td.f-f= data.confMatrix['f_f']\n      td.f-tot= data.confMatrix['f_nf']+data.confMatrix['f_f']\n    tr\n      th.total Total\n      td.tot-nf= data.confMatrix['nf_nf']+data.confMatrix['f_nf']\n      td.tot-f= data.confMatrix['nf_f']+data.confMatrix['f_f']\n      td.tot-tot= data.confMatrix['nf_nf']+data.confMatrix['nf_f']+data.confMatrix['f_nf']+data.confMatrix['f_f']\ntable#confTable2\n  tbody\n    tr\n      th Sensitivity\n      td.sens(class=Number.isInteger(data.sens)?\"integer\":\"float\")= Number.isInteger(data.sens)?data.sens:data.sens.toFixed(2)\n    tr\n      th Specificity\n      td.spec(class=Number.isInteger(data.spec)?\"integer\":\"float\")= Number.isInteger(data.spec)?data.spec:data.spec.toFixed(2)\n    tr\n      th Accuracy\n      td.accu(class=Number.isInteger(data.accu)?\"integer\":\"float\")= Number.isInteger(data.accu)?data.accu:data.accu.toFixed(2)\n    tr\n      th Precision\n      td.prec(class=Number.isInteger(data.prec)?\"integer\":\"float\")= Number.isInteger(data.prec)?data.prec:data.prec.toFixed(2)\n"};
;var locals_for_with = (locals || {});(function (Number, arguments, console) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
let data=arguments[0].data
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
console.log(data);
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctable id=\"confTable1\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"cf1\" colspan=\"2\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Confusion\u003C\u002Fth\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"predicted\" colspan=\"3\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Predicted\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"cf2\" colspan=\"2\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Matrix\u003C\u002Fth\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"nonfraud1\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Non-Event\u003C\u002Fth\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"fraud1\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Event\u003C\u002Fth\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"total1\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Total\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"actual\" rowspan=\"3\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + " ";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Actual\u003C\u002Fspan\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"nonfraud\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Non-Event\u003C\u002Fth\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"nf-nf\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['nf_nf']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"nf-f\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['nf_f']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"nf-tot\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['nf_nf']+data.confMatrix['nf_f']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"fraud\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Event\u003C\u002Fth\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"f-nf\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['f_nf']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"f-f\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['f_f']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"f-tot\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['f_nf']+data.confMatrix['f_f']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth class=\"total\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Total\u003C\u002Fth\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"tot-nf\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['nf_nf']+data.confMatrix['f_nf']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"tot-f\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['nf_f']+data.confMatrix['f_f']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd class=\"tot-tot\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.confMatrix['nf_nf']+data.confMatrix['nf_f']+data.confMatrix['f_nf']+data.confMatrix['f_f']) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctable id=\"confTable2\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Sensitivity\u003C\u002Fth\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["sens",Number.isInteger(data.sens)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(data.sens)?data.sens:data.sens.toFixed(2)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Specificity\u003C\u002Fth\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["spec",Number.isInteger(data.spec)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(data.spec)?data.spec:data.spec.toFixed(2)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Accuracy\u003C\u002Fth\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["accu",Number.isInteger(data.accu)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(data.accu)?data.accu:data.accu.toFixed(2)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "Precision\u003C\u002Fth\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["prec",Number.isInteger(data.prec)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002FconfusionMatrixTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(data.prec)?data.prec:data.prec.toFixed(2)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function createprojectTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FcreateProject.pug":"include ..\u002Fi18n\u002Fen\ninclude ..\u002Fincludes\u002Fdialog\ninclude \u002Fincludes\u002FcompactLabel\ninclude \u002Fincludes\u002FstyledOnOff\n\n+dialog(i18n.en.APP.UI.DIALOG.CREATE_PROJECT.TITLE)(id=\"new-project-dialog\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME.LABEL)(id=\"pname\", type=\"text\")\n  +compactTextareaLabel(i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION.LABEL)(id=\"description\", rows=\"3\")\n  +compactSelectLabel(i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.LABEL)(id=\"ptype\")\n    option(value=\"classification\")= i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.CLASSIFICATION\n    option(value=\"prediction\")= i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.PREDICTION\n    option(value=\"estimation\")= i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.ESTIMATION\n    option(value=\"optimization\")= i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.OPTIMIZATION\n  +compactSelectLabel(i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.LABEL)(id=\"platform\")\n    option(value=\"inhouse\")= i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS.INHOUSE\n    option(value=\"ci-cloud\")= i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS.CI_CLOUD\n  .button-bar\n    button#create-button(title=i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE.TITLE)= i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE.TEXT\n    button#cancel-button(title=i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL.TITLE)= i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL.TEXT","src\u002Fi18n\u002Fen.pug":"include i18n\n-i18n.en={};\n-i18n.en.APP={};\n-i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };\n-i18n.en.APP.TITLE=\"CyborgIntell\";\n-i18n.en.APP.NAME=\"Turing\";\n\n-i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD=\"Incorrect username or password\";\n-i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS=\"User not logged in. Cannot retrieve porjects.\";\n-i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL=\"Error in retrieving projects\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION={};\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN=\"User not logged in. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT=\"The following project properties are empty. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: \"Error in creating DB Connection\"};\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS=\"DB Connection created successfully\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT=\"The following DB connection properties are empty. Cannot create DB connection.\";\n-i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: \"Error in fetching report\"};\n-i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN=\"User notlogged in. Cannot fetch report. \";\n\n-i18n.en.APP.UI.INFO.PROJECT_CREATION={};\n-i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS=\"Project created successfully.\";\n-i18n.en.APP.UI.INFO.DB_CONNECTION={};\n-i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS=\"DB Connection is working correctly\";\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n-i18n.en.APP.UI.INFO.EXPLORE_DATA={};\n-i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE=\"Dashboard\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS=\"Number of models\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID=\"ID\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM=\"Platform\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON=\"Created on\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE=\"Type\";\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n\n-i18n.en.APP.UI.CONTENT.BREADCRUMB={};\n-i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD=\"Dashboard\";\n\n-i18n.en.APP.UI.CONTENT.TAGLINE={};\n-i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION=\"Classification\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION=\"Prediction\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION=\"Estimation\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION=\"Optimization\";\n\n-i18n.en.APP.UI.FOOTER.PROGRESS={};\n-i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS=\"Getting projects...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT=\"Creating new project...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= \"Logging in...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION=\"Creating new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION=\"Testing new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES=\"Fetching features list...\"\n\n-i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: \"Open navigation\"};\n-i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: \"Pin navigation\"};\n-i18n.en.APP.UI.BTN.LOGIN={TEXT:\"Login\", TITLE: \"Login\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:\"New project\", TITLE: \"New project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: \"Create\", TITLE: \"Create new project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: \"Cancel\", TITLE: \"Cancel\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB={};\n-i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE={};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: \"Browse...\", TITLE: \"Browse...\"};\n\n-i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: \"Username\", PLACEHOLDER:\"user@example.com\"};\n-i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: \"Password\", PLACEHOLDER:\"⬤⬤⬤⬤⬤⬤⬤⬤⬤\"};\n-i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: \"Remember me\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: \"Project name\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: \"Description\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB={};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: \"Existing connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: \"New connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: \"Connection name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: \"Database name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: \"Table name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: \"DB Server IP address\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: \"Port number\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: \"DB username\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: \"DB password\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE={};\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME=\"Name for conneciton\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE=\"File location on the server\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1=\"or drag & drop a file into this space to upload it.\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2=\"Browse\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE=\"File types supported: CSV, TSV, XML, XLSX\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON=\"Browse...\";\n\n\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: \"Project Type\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: \"Classification\", ML: \"ML\", PREDICTION: \"Prediction\", ESTIMATION: \"Estimation\", OPTIMIZATION: \"Optimization\"}\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: \"Platform\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: \"In-house\", CI_CLOUD: \"CI Cloud\"}\n-i18n.en.APP.UI.SELECT.CONNECT_DB={};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: \"Pick a named connection\"}\n\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: \"Database type\"};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: \"Oracle\", MYSQL: \"MySQL\", POSTGRESQL: \"PostgreSQL\", HIVE: \"Hive\"}\n\n-i18n.en.APP.UI.DIALOG.LOGIN={TITLE: \"Login\"};\n-i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: \"New Project\"};\n-i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: \"Connect to Database\"};\n-i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: \"Flat File Connection\"};\n\n-i18n.en.APP.UI.NAV.DASHBOARD={TEXT: \"Dashboard\"};","src\u002Fi18n\u002Fi18n.pug":"-var i18n={};","src\u002Fincludes\u002Fdialog.pug":"mixin dialog(title)\n  dialog.dialog(id=attributes.id)\n    .title\n      span.titleText= title\n      button.close\n    .content\n      if block\n        block\n      else\n        p No content provided\n\nmixin box(title)\n  .box&attributes(attributes)\n    .title\n      span.titleText= title\n    .content\n      if block\n        block\n      else\n        p No content provided\n      ","src\u002Fincludes\u002FcompactLabel.pug":"mixin compactInputLabel(labelText)\n  label.compact.input(for=\"input-\"+attributes.id id=attributes.id, class=attributes.cls)\n    input(class=`input-${attributes.cls}`, id=\"input-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, disabled=attributes.disabled, pattern=attributes.pattern)\n    span= labelText\n    span.errorMsg= attributes.errortext\n\nmixin compactTextareaLabel(labelText)\n  label.compact.textarea(for=\"textarea-\"+attributes.id id=attributes.id, class=attributes.cls)\n    - var rowCount=(attributes.rows?attributes.rows:\"3\");\n    textarea(class=`textarea-${attributes.cls}`, id=\"textarea-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, rows=attributes.rows, disabled=attributes.disabled)\n    span= labelText\n\nmixin compactSelectLabel(labelText)\n  label.compact.select(for=\"select-\"+attributes.id id=attributes.id, class=attributes.cls)\n    select(class=`select-${attributes.cls}`, id=\"select-\"+attributes.id, aria-label=labelText, disabled=attributes.disabled)\n      if block\n        block\n    span= labelText","src\u002Fincludes\u002FstyledOnOff.pug":"mixin onOff(labelText)\n  label.on-off(for=attributes.id, class=(attributes.type==\"checkbox\"?\"has-checkbox\":\"has-radio\"))= labelText\n    input(id=attributes.id)&attributes(attributes)\n    span.indicator\n\nmixin toggleButton(labelText)\n  label.toggle-button(for=attributes.id)\n    input(id=attributes.id, type=\"radio\")&attributes(attributes)\n    span.buttonShape= labelText"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fi18n\u002Fi18n.pug";
var i18n={};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en={};
;pug_debug_line = 3;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP={};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };
;pug_debug_line = 5;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.TITLE="CyborgIntell";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.NAME="Turing";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD="Incorrect username or password";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS="User not logged in. Cannot retrieve porjects.";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL="Error in retrieving projects";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION={};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN="User not logged in. Cannot create porject.";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT="The following project properties are empty. Cannot create porject.";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: "Error in creating DB Connection"};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS="DB Connection created successfully";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT="The following DB connection properties are empty. Cannot create DB connection.";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 20;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 21;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: "Error in fetching report"};
;pug_debug_line = 22;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN="User notlogged in. Cannot fetch report. ";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION={};
;pug_debug_line = 25;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS="Project created successfully.";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION={};
;pug_debug_line = 27;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS="DB Connection is working correctly";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};
;pug_debug_line = 29;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA={};
;pug_debug_line = 31;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};
;pug_debug_line = 34;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE="Dashboard";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};
;pug_debug_line = 36;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS="Number of models";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID="ID";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM="Platform";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON="Created on";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE="Type";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};
;pug_debug_line = 42;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 43;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};
;pug_debug_line = 44;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 46;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB={};
;pug_debug_line = 47;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD="Dashboard";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE={};
;pug_debug_line = 50;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION="Classification";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION="Prediction";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION="Estimation";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION="Optimization";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS={};
;pug_debug_line = 56;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS="Getting projects...";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT="Creating new project...";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= "Logging in...";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION="Creating new connection..."
;pug_debug_line = 60;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION="Testing new connection..."
;pug_debug_line = 61;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES="Fetching features list..."
;pug_debug_line = 63;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: "Open navigation"};
;pug_debug_line = 64;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: "Pin navigation"};
;pug_debug_line = 65;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.LOGIN={TEXT:"Login", TITLE: "Login"};
;pug_debug_line = 66;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:"New project", TITLE: "New project"};
;pug_debug_line = 67;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};
;pug_debug_line = 68;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: "Create", TITLE: "Create new project"};
;pug_debug_line = 69;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: "Cancel", TITLE: "Cancel"};
;pug_debug_line = 70;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB={};
;pug_debug_line = 71;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 72;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 73;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE={};
;pug_debug_line = 74;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 75;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 76;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: "Browse...", TITLE: "Browse..."};
;pug_debug_line = 78;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: "Username", PLACEHOLDER:"user@example.com"};
;pug_debug_line = 79;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: "Password", PLACEHOLDER:"⬤⬤⬤⬤⬤⬤⬤⬤⬤"};
;pug_debug_line = 80;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: "Remember me"};
;pug_debug_line = 81;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};
;pug_debug_line = 82;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: "Project name"};
;pug_debug_line = 83;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: "Description"};
;pug_debug_line = 84;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB={};
;pug_debug_line = 85;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: "Existing connection"};
;pug_debug_line = 86;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: "New connection"};
;pug_debug_line = 87;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: "Connection name"};
;pug_debug_line = 88;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: "Database name"};
;pug_debug_line = 89;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: "Table name"};
;pug_debug_line = 90;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: "DB Server IP address"};
;pug_debug_line = 91;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: "Port number"};
;pug_debug_line = 92;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: "DB username"};
;pug_debug_line = 93;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: "DB password"};
;pug_debug_line = 94;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 95;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE={};
;pug_debug_line = 96;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME="Name for conneciton";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE="File location on the server";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1="or drag & drop a file into this space to upload it.";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2="Browse";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE="File types supported: CSV, TSV, XML, XLSX";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 102;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON="Browse...";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};
;pug_debug_line = 106;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: "Project Type"};
;pug_debug_line = 107;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: "Classification", ML: "ML", PREDICTION: "Prediction", ESTIMATION: "Estimation", OPTIMIZATION: "Optimization"}
;pug_debug_line = 108;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: "Platform"};
;pug_debug_line = 109;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: "In-house", CI_CLOUD: "CI Cloud"}
;pug_debug_line = 110;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB={};
;pug_debug_line = 111;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: "Pick a named connection"}
;pug_debug_line = 113;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: "Database type"};
;pug_debug_line = 114;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: "Oracle", MYSQL: "MySQL", POSTGRESQL: "PostgreSQL", HIVE: "Hive"}
;pug_debug_line = 116;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.LOGIN={TITLE: "Login"};
;pug_debug_line = 117;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: "New Project"};
;pug_debug_line = 118;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: "Connect to Database"};
;pug_debug_line = 119;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: "Flat File Connection"};
;pug_debug_line = 121;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.NAV.DASHBOARD={TEXT: "Dashboard"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_mixins["dialog"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdialog" + (" class=\"dialog\""+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cspan class=\"titleText\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\"\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
if (block) {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
block && block();
}
else {
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "No content provided\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdialog\u003E";
};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";

























;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactInputLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","input",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "input-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("class", pug_classes([`input-${attributes.cls}`], [true]), false, false)+pug_attr("id", "input-"+attributes.id, true, false)+pug_attr("type", attributes.type, true, false)+pug_attr("placeholder", attributes.placeholder, false, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)+pug_attr("pattern", attributes.pattern, true, false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan class=\"errorMsg\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attributes.errortext) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactTextareaLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","textarea",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "textarea-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
var rowCount=(attributes.rows?attributes.rows:"3");
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Ctextarea" + (pug_attr("class", pug_classes([`textarea-${attributes.cls}`], [true]), false, false)+pug_attr("id", "textarea-"+attributes.id, true, false)+pug_attr("type", attributes.type, true, false)+pug_attr("placeholder", attributes.placeholder, false, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("rows", attributes.rows, true, false)+pug_attr("disabled", attributes.disabled, true, false)) + "\u003E\u003C\u002Ftextarea\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactSelectLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 14;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","select",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "select-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cselect" + (pug_attr("class", pug_classes([`select-${attributes.cls}`], [true]), false, false)+pug_attr("id", "select-"+attributes.id, true, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
if (block) {
;pug_debug_line = 17;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
block && block();
}
pug_html = pug_html + "\u003C\u002Fselect\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_mixins["dialog"].call({
block: function(){
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "pname","type": "text"}
}, i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME.LABEL);
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_mixins["compactTextareaLabel"].call({
attributes: {"id": "description","rows": "3"}
}, i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION.LABEL);
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Coption value=\"classification\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.CLASSIFICATION) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Coption value=\"prediction\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.PREDICTION) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Coption value=\"estimation\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.ESTIMATION) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Coption value=\"optimization\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS.OPTIMIZATION) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
},
attributes: {"id": "ptype"}
}, i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.LABEL);
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Coption value=\"inhouse\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS.INHOUSE) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Coption value=\"ci-cloud\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS.CI_CLOUD) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
},
attributes: {"id": "platform"}
}, i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.LABEL);
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Cdiv class=\"button-bar\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Cbutton" + (" id=\"create-button\""+pug_attr("title", i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE.TITLE, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE.TEXT) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + "\u003Cbutton" + (" id=\"cancel-button\""+pug_attr("title", i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL.TITLE, true, false)) + "\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FcreateProject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL.TEXT) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"id": "new-project-dialog"}
}, i18n.en.APP.UI.DIALOG.CREATE_PROJECT.TITLE);} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function datatreatmentTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FdataTreatment.pug":"-let names={MissingImputation: \"Missing Imputation\", OutlierTreatment: \"Outlier Treatment\", AnomalyHandling: \"Anomaly Handling\", Transformation: \"Transformation\"}\n-let progress=arguments[0];\n-let i=0;\n.data-treatment.bars.current-progress-section.dt-stats\n  -for (name in names){\n    .bar.bind(data-value=progress[name].CompletionPerc class=name)\n      .title= names[name]\n      .value #{progress[name].CompletionPerc}%\n      .progress-container\n        .progress(style=`width: ${parseInt(progress[name].CompletionPerc)}%`)\n  -}\n"};
;var locals_for_with = (locals || {});(function (arguments, name, parseInt) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
let names={MissingImputation: "Missing Imputation", OutlierTreatment: "Outlier Treatment", AnomalyHandling: "Anomaly Handling", Transformation: "Transformation"}
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
let progress=arguments[0];
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
let i=0;
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + "\u003Cdiv class=\"data-treatment bars current-progress-section dt-stats\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
for (name in names){
{
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["bar","bind",name], [false,false,true]), false, false)+pug_attr("data-value", progress[name].CompletionPerc, true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = names[name]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + "\u003Cdiv class=\"value\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = progress[name].CompletionPerc) ? "" : pug_interp));
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + "%\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + "\u003Cdiv class=\"progress-container\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"progress\""+pug_attr("style", pug_style(`width: ${parseInt(progress[name].CompletionPerc)}%`), true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FdataTreatment.pug";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function dbconnectionTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FdbConnection.pug":"include ..\u002Fi18n\u002Fen\ninclude ..\u002Fincludes\u002Fdialog\ninclude \u002Fincludes\u002FcompactLabel\ninclude \u002Fincludes\u002FstyledOnOff\ninclude \u002Fincludes\u002Fswitch\n\n+dialog(i18n.en.APP.UI.DIALOG.CONNECT_DB.TITLE)(id=\"new-db-connection-dialog\")\n  +onOff(i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION.LABEL)(type=\"radio\", id=\"existing-db\" name=\"connection-type\" disabled)\n  +onOff(i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION.LABEL)(type=\"radio\", id=\"new-connection-db\" name=\"connection-type\" checked)\n  +compactSelectLabel(i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION.LABEL)(id=\"named-connection\" disabled) \n  +compactInputLabel(i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION.LABEL)(id=\"new-named-connection\", type=\"text\")\n  +compactSelectLabel(i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.LABEL)(id=\"db-type\", type=\"text\")\n    option(value=\"oracle\")= i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.ORACLE\n    option(value=\"mysql\")= i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.MYSQL\n    option(value=\"postgresql\")= i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.POSTGRESQL\n    option(value=\"hive\")= i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.HIVE\n  +compactInputLabel(i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME.LABEL)(id=\"db-name\", type=\"text\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME.LABEL)(id=\"table-name\", type=\"text\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME.LABEL)(id=\"db-server-name\", type=\"text\", pattern=\"^(([1-9]?\\\\d|1\\\\d\\\\d|2[0-5][0-5]|2[0-4]\\\\d)\\\\.){3}([1-9]?\\\\d|1\\\\d\\\\d|2[0-5][0-5]|2[0-4]\\\\d)$\", errortext=\"Invalid IP address\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER.LABEL)(id=\"port-number\", type=\"text\", pattern=\"^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$\", errortext=\"Invalid port number\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME.LABEL)(id=\"db-username\", type=\"text\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD.LABEL)(id=\"db-password\", type=\"password\")\n  label.main(for=\"dev-or-prod\")\n    label(for=\"dev-or-prod\")= i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD.LABEL_MAIN\n    label.left(for=\"dev-or-prod\")= i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD.LABEL_LEFT\n    +switch(true)(id=\"dev-or-prod\" disabled=true)\n    label.right(for=\"dev-or-prod\")= i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD.LABEL_RIGHT\n  .button-bar\n    button#test-button.iconAndText.untested(title=i18n.en.APP.UI.BTN.CONNECT_DB.TEST.TITLE)= i18n.en.APP.UI.BTN.CONNECT_DB.TEST.TEXT\n      include ..\u002Fassets\u002Fimages\u002Ficons\u002Ftest-connection.svg\n    button#next-button.iconAndText(disabled title=i18n.en.APP.UI.BTN.CONNECT_DB.NEXT.TITLE)= i18n.en.APP.UI.BTN.CONNECT_DB.NEXT.TEXT\n      include ..\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg","src\u002Fi18n\u002Fen.pug":"include i18n\n-i18n.en={};\n-i18n.en.APP={};\n-i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };\n-i18n.en.APP.TITLE=\"CyborgIntell\";\n-i18n.en.APP.NAME=\"Turing\";\n\n-i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD=\"Incorrect username or password\";\n-i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS=\"User not logged in. Cannot retrieve porjects.\";\n-i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL=\"Error in retrieving projects\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION={};\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN=\"User not logged in. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT=\"The following project properties are empty. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: \"Error in creating DB Connection\"};\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS=\"DB Connection created successfully\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT=\"The following DB connection properties are empty. Cannot create DB connection.\";\n-i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: \"Error in fetching report\"};\n-i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN=\"User notlogged in. Cannot fetch report. \";\n\n-i18n.en.APP.UI.INFO.PROJECT_CREATION={};\n-i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS=\"Project created successfully.\";\n-i18n.en.APP.UI.INFO.DB_CONNECTION={};\n-i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS=\"DB Connection is working correctly\";\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n-i18n.en.APP.UI.INFO.EXPLORE_DATA={};\n-i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE=\"Dashboard\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS=\"Number of models\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID=\"ID\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM=\"Platform\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON=\"Created on\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE=\"Type\";\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n\n-i18n.en.APP.UI.CONTENT.BREADCRUMB={};\n-i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD=\"Dashboard\";\n\n-i18n.en.APP.UI.CONTENT.TAGLINE={};\n-i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION=\"Classification\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION=\"Prediction\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION=\"Estimation\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION=\"Optimization\";\n\n-i18n.en.APP.UI.FOOTER.PROGRESS={};\n-i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS=\"Getting projects...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT=\"Creating new project...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= \"Logging in...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION=\"Creating new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION=\"Testing new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES=\"Fetching features list...\"\n\n-i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: \"Open navigation\"};\n-i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: \"Pin navigation\"};\n-i18n.en.APP.UI.BTN.LOGIN={TEXT:\"Login\", TITLE: \"Login\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:\"New project\", TITLE: \"New project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: \"Create\", TITLE: \"Create new project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: \"Cancel\", TITLE: \"Cancel\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB={};\n-i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE={};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: \"Browse...\", TITLE: \"Browse...\"};\n\n-i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: \"Username\", PLACEHOLDER:\"user@example.com\"};\n-i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: \"Password\", PLACEHOLDER:\"⬤⬤⬤⬤⬤⬤⬤⬤⬤\"};\n-i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: \"Remember me\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: \"Project name\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: \"Description\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB={};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: \"Existing connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: \"New connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: \"Connection name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: \"Database name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: \"Table name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: \"DB Server IP address\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: \"Port number\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: \"DB username\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: \"DB password\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE={};\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME=\"Name for conneciton\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE=\"File location on the server\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1=\"or drag & drop a file into this space to upload it.\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2=\"Browse\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE=\"File types supported: CSV, TSV, XML, XLSX\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON=\"Browse...\";\n\n\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: \"Project Type\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: \"Classification\", ML: \"ML\", PREDICTION: \"Prediction\", ESTIMATION: \"Estimation\", OPTIMIZATION: \"Optimization\"}\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: \"Platform\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: \"In-house\", CI_CLOUD: \"CI Cloud\"}\n-i18n.en.APP.UI.SELECT.CONNECT_DB={};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: \"Pick a named connection\"}\n\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: \"Database type\"};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: \"Oracle\", MYSQL: \"MySQL\", POSTGRESQL: \"PostgreSQL\", HIVE: \"Hive\"}\n\n-i18n.en.APP.UI.DIALOG.LOGIN={TITLE: \"Login\"};\n-i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: \"New Project\"};\n-i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: \"Connect to Database\"};\n-i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: \"Flat File Connection\"};\n\n-i18n.en.APP.UI.NAV.DASHBOARD={TEXT: \"Dashboard\"};","src\u002Fi18n\u002Fi18n.pug":"-var i18n={};","src\u002Fincludes\u002Fdialog.pug":"mixin dialog(title)\n  dialog.dialog(id=attributes.id)\n    .title\n      span.titleText= title\n      button.close\n    .content\n      if block\n        block\n      else\n        p No content provided\n\nmixin box(title)\n  .box&attributes(attributes)\n    .title\n      span.titleText= title\n    .content\n      if block\n        block\n      else\n        p No content provided\n      ","src\u002Fincludes\u002FcompactLabel.pug":"mixin compactInputLabel(labelText)\n  label.compact.input(for=\"input-\"+attributes.id id=attributes.id, class=attributes.cls)\n    input(class=`input-${attributes.cls}`, id=\"input-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, disabled=attributes.disabled, pattern=attributes.pattern)\n    span= labelText\n    span.errorMsg= attributes.errortext\n\nmixin compactTextareaLabel(labelText)\n  label.compact.textarea(for=\"textarea-\"+attributes.id id=attributes.id, class=attributes.cls)\n    - var rowCount=(attributes.rows?attributes.rows:\"3\");\n    textarea(class=`textarea-${attributes.cls}`, id=\"textarea-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, rows=attributes.rows, disabled=attributes.disabled)\n    span= labelText\n\nmixin compactSelectLabel(labelText)\n  label.compact.select(for=\"select-\"+attributes.id id=attributes.id, class=attributes.cls)\n    select(class=`select-${attributes.cls}`, id=\"select-\"+attributes.id, aria-label=labelText, disabled=attributes.disabled)\n      if block\n        block\n    span= labelText","src\u002Fincludes\u002FstyledOnOff.pug":"mixin onOff(labelText)\n  label.on-off(for=attributes.id, class=(attributes.type==\"checkbox\"?\"has-checkbox\":\"has-radio\"))= labelText\n    input(id=attributes.id)&attributes(attributes)\n    span.indicator\n\nmixin toggleButton(labelText)\n  label.toggle-button(for=attributes.id)\n    input(id=attributes.id, type=\"radio\")&attributes(attributes)\n    span.buttonShape= labelText","src\u002Fincludes\u002Fswitch.pug":"mixin switch(isRound)\n  label.switch(id=\"label-\"+attributes.id for=attributes.id)\n    input(type=\"checkbox\")&attributes(attributes)\n    if isRound \n      span.slider.round\n    else\n      span.slider","src\u002Fassets\u002Fimages\u002Ficons\u002Ftest-connection.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\n\u003Cpath class=\"connection\" d=\"m1755 453q37 38 37 90.5t-37 90.5l-401 400 150 150-160 160q-163 163-389.5 186.5t-411.5-100.5l-362 362h-181v-181l362-362q-124-185-100.5-411.5t186.5-389.5l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5l-400 401 234 234 401-400q38-37 91-37t90 37z\"\u002F\u003E\n\u003Cpath d=\"m1530.6 1182.6-302.18 302.22q-13.605 13.607-32.223 13.607t-32.223-13.607l-210.69-210.5q-13.605-13.607-13.605-32.228 0-18.62 13.605-32.227l73.038-73.048q13.605-13.607 32.223-13.607t32.223 13.607l105.26 105.28 196.92-196.95q13.605-13.607 32.223-13.607t32.223 13.607l73.038 73.048q13.605 13.607 13.605 32.228 0 18.62-13.605 32.228zm100.97 59.442q0-105.99-52.272-195.51t-141.78-141.8q-89.508-52.279-195.48-52.279-105.98 0-195.48 52.279-89.508 52.279-141.78 141.8-52.272 89.52-52.272 195.51t52.272 195.51 141.78 141.8q89.508 52.279 195.48 52.279 105.98 0 195.48-52.279 89.508-52.279 141.78-141.8 52.272-89.52 52.272-195.51zm160.39 0q0 149.68-73.754 276.07-73.754 126.4-200.15 200.17-126.6 73.8-276.2 73.8-149.66 0-276.04-73.764t-200.15-200.17q-73.692-126.5-73.692-276.11 0-149.68 73.754-276.07 73.754-126.4 200.15-200.17 126.49-73.701 276.07-73.701 149.66 0 276.04 73.764t200.15 200.17q73.692 126.5 73.692 276.11z\" class=\"success\" fill=\"#43a047\"\u002F\u003E\n\u003Cpath d=\"m1242 692.01c-99.771 0-191.79 24.587-276.04 73.764-84.257 49.176-150.97 115.9-200.15 200.17-49.18 84.23-73.692 176.32-73.692 276.11 0 99.785 24.587 191.81 73.756 276.07 49.169 84.268 115.88 150.99 200.15 200.17 84.219 49.187 176.29 73.702 276.07 73.702 99.771 0 191.79-24.587 276.04-73.763 84.257-49.176 150.97-115.9 200.15-200.17 49.18-84.23 73.692-176.32 73.692-276.11 0-99.785-24.584-191.81-73.753-276.07-49.169-84.268-115.88-150.99-200.15-200.17-84.219-49.187-176.29-73.701-276.07-73.701zm0 160.41c70.651 0 135.81 17.426 195.48 52.279 59.673 34.853 106.93 82.12 141.78 141.8 34.849 59.679 52.275 124.85 52.275 195.51 0 70.661-17.427 135.83-52.275 195.51-34.849 59.679-82.109 106.95-141.78 141.8-59.671 34.853-124.83 52.279-195.48 52.279-70.651 0-135.81-17.426-195.48-52.279-59.671-34.853-106.93-82.12-141.78-141.8-34.849-59.679-52.272-124.85-52.272-195.51 0-70.661 17.424-135.83 52.272-195.51 34.849-59.681 82.109-106.95 141.78-141.8 59.673-34.853 124.83-52.279 195.48-52.279zm-128.4 134.74c-14.769 0-29.538 5.6576-40.856 16.976l-68.579 68.591c-22.634 22.637-22.634 59.085 0 81.722l87.548 87.56-87.548 87.56c-22.634 22.637-22.634 59.085 0 81.722l68.579 68.591c22.634 22.637 59.074 22.637 81.708 0l87.552-87.563 87.548 87.563c22.634 22.637 59.077 22.637 81.711 0l68.579-68.591c22.634-22.637 22.634-59.085 0-81.722l-87.361-87.373 87.548-87.56c22.634-22.637 22.634-59.085 0-81.722l-68.579-68.591c-22.634-22.637-59.077-22.637-81.711 0l-87.548 87.563-87.552-87.563c-11.317-11.318-26.083-16.976-40.852-16.976z\" class=\"fail\" fill=\"#dd2c00\"\u002F\u003E\n\u003C\u002Fsvg\u003E","src\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg":"\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fi18n\u002Fi18n.pug";
var i18n={};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en={};
;pug_debug_line = 3;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP={};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };
;pug_debug_line = 5;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.TITLE="CyborgIntell";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.NAME="Turing";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD="Incorrect username or password";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS="User not logged in. Cannot retrieve porjects.";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL="Error in retrieving projects";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION={};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN="User not logged in. Cannot create porject.";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT="The following project properties are empty. Cannot create porject.";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: "Error in creating DB Connection"};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS="DB Connection created successfully";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT="The following DB connection properties are empty. Cannot create DB connection.";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 20;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 21;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: "Error in fetching report"};
;pug_debug_line = 22;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN="User notlogged in. Cannot fetch report. ";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION={};
;pug_debug_line = 25;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS="Project created successfully.";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION={};
;pug_debug_line = 27;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS="DB Connection is working correctly";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};
;pug_debug_line = 29;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA={};
;pug_debug_line = 31;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};
;pug_debug_line = 34;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE="Dashboard";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};
;pug_debug_line = 36;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS="Number of models";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID="ID";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM="Platform";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON="Created on";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE="Type";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};
;pug_debug_line = 42;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 43;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};
;pug_debug_line = 44;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 46;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB={};
;pug_debug_line = 47;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD="Dashboard";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE={};
;pug_debug_line = 50;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION="Classification";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION="Prediction";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION="Estimation";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION="Optimization";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS={};
;pug_debug_line = 56;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS="Getting projects...";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT="Creating new project...";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= "Logging in...";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION="Creating new connection..."
;pug_debug_line = 60;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION="Testing new connection..."
;pug_debug_line = 61;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES="Fetching features list..."
;pug_debug_line = 63;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: "Open navigation"};
;pug_debug_line = 64;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: "Pin navigation"};
;pug_debug_line = 65;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.LOGIN={TEXT:"Login", TITLE: "Login"};
;pug_debug_line = 66;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:"New project", TITLE: "New project"};
;pug_debug_line = 67;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};
;pug_debug_line = 68;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: "Create", TITLE: "Create new project"};
;pug_debug_line = 69;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: "Cancel", TITLE: "Cancel"};
;pug_debug_line = 70;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB={};
;pug_debug_line = 71;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 72;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 73;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE={};
;pug_debug_line = 74;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 75;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 76;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: "Browse...", TITLE: "Browse..."};
;pug_debug_line = 78;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: "Username", PLACEHOLDER:"user@example.com"};
;pug_debug_line = 79;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: "Password", PLACEHOLDER:"⬤⬤⬤⬤⬤⬤⬤⬤⬤"};
;pug_debug_line = 80;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: "Remember me"};
;pug_debug_line = 81;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};
;pug_debug_line = 82;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: "Project name"};
;pug_debug_line = 83;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: "Description"};
;pug_debug_line = 84;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB={};
;pug_debug_line = 85;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: "Existing connection"};
;pug_debug_line = 86;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: "New connection"};
;pug_debug_line = 87;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: "Connection name"};
;pug_debug_line = 88;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: "Database name"};
;pug_debug_line = 89;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: "Table name"};
;pug_debug_line = 90;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: "DB Server IP address"};
;pug_debug_line = 91;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: "Port number"};
;pug_debug_line = 92;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: "DB username"};
;pug_debug_line = 93;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: "DB password"};
;pug_debug_line = 94;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 95;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE={};
;pug_debug_line = 96;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME="Name for conneciton";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE="File location on the server";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1="or drag & drop a file into this space to upload it.";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2="Browse";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE="File types supported: CSV, TSV, XML, XLSX";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 102;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON="Browse...";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};
;pug_debug_line = 106;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: "Project Type"};
;pug_debug_line = 107;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: "Classification", ML: "ML", PREDICTION: "Prediction", ESTIMATION: "Estimation", OPTIMIZATION: "Optimization"}
;pug_debug_line = 108;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: "Platform"};
;pug_debug_line = 109;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: "In-house", CI_CLOUD: "CI Cloud"}
;pug_debug_line = 110;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB={};
;pug_debug_line = 111;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: "Pick a named connection"}
;pug_debug_line = 113;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: "Database type"};
;pug_debug_line = 114;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: "Oracle", MYSQL: "MySQL", POSTGRESQL: "PostgreSQL", HIVE: "Hive"}
;pug_debug_line = 116;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.LOGIN={TITLE: "Login"};
;pug_debug_line = 117;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: "New Project"};
;pug_debug_line = 118;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: "Connect to Database"};
;pug_debug_line = 119;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: "Flat File Connection"};
;pug_debug_line = 121;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.NAV.DASHBOARD={TEXT: "Dashboard"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_mixins["dialog"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdialog" + (" class=\"dialog\""+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cspan class=\"titleText\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\"\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
if (block) {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
block && block();
}
else {
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "No content provided\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdialog\u003E";
};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";

























;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactInputLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","input",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "input-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("class", pug_classes([`input-${attributes.cls}`], [true]), false, false)+pug_attr("id", "input-"+attributes.id, true, false)+pug_attr("type", attributes.type, true, false)+pug_attr("placeholder", attributes.placeholder, false, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)+pug_attr("pattern", attributes.pattern, true, false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan class=\"errorMsg\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attributes.errortext) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";













;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactSelectLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 14;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","select",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "select-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cselect" + (pug_attr("class", pug_classes([`select-${attributes.cls}`], [true]), false, false)+pug_attr("id", "select-"+attributes.id, true, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
if (block) {
;pug_debug_line = 17;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
block && block();
}
pug_html = pug_html + "\u003C\u002Fselect\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_mixins["onOff"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["on-off",(attributes.type=="checkbox"?"has-checkbox":"has-radio")], [false,true]), false, false)+pug_attr("for", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp));
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"id": pug_escape(attributes.id)},attributes]), false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cspan class=\"indicator\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_mixins["switch"] = pug_interp = function(isRound){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"switch\""+pug_attr("id", "label-"+attributes.id, true, false)+pug_attr("for", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox"},attributes]), false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
if (isRound) {
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Cspan class=\"slider round\"\u003E\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Cspan class=\"slider\"\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["dialog"].call({
block: function(){
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["onOff"].call({
attributes: {"type": "radio","id": "existing-db","name": "connection-type","disabled": pug_escape(true)}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION.LABEL);
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["onOff"].call({
attributes: {"type": "radio","id": "new-connection-db","name": "connection-type","checked": pug_escape(true)}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION.LABEL);
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + " ";
},
attributes: {"id": "named-connection","disabled": pug_escape(true)}
}, i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION.LABEL);
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "new-named-connection","type": "text"}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION.LABEL);
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactSelectLabel"].call({
block: function(){
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Coption value=\"oracle\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.ORACLE) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Coption value=\"mysql\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.MYSQL) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Coption value=\"postgresql\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.POSTGRESQL) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Coption value=\"hive\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS.HIVE) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
},
attributes: {"id": "db-type","type": "text"}
}, i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.LABEL);
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "db-name","type": "text"}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME.LABEL);
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "table-name","type": "text"}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME.LABEL);
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "db-server-name","type": "text","pattern": "^(([1-9]?\\d|1\\d\\d|2[0-5][0-5]|2[0-4]\\d)\\.){3}([1-9]?\\d|1\\d\\d|2[0-5][0-5]|2[0-4]\\d)$","errortext": "Invalid IP address"}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME.LABEL);
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "port-number","type": "text","pattern": "^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$","errortext": "Invalid port number"}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER.LABEL);
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "db-username","type": "text"}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME.LABEL);
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "db-password","type": "password"}
}, i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD.LABEL);
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Clabel class=\"main\" for=\"dev-or-prod\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Clabel for=\"dev-or-prod\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD.LABEL_MAIN) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Clabel class=\"left\" for=\"dev-or-prod\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD.LABEL_LEFT) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_mixins["switch"].call({
attributes: {"id": "dev-or-prod","disabled": true}
}, true);
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Clabel class=\"right\" for=\"dev-or-prod\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD.LABEL_RIGHT) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Cdiv class=\"button-bar\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"iconAndText untested\""+" id=\"test-button\""+pug_attr("title", i18n.en.APP.UI.BTN.CONNECT_DB.TEST.TITLE, true, false)) + "\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.BTN.CONNECT_DB.TEST.TEXT) ? "" : pug_interp)) + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\n\u003Cpath class=\"connection\" d=\"m1755 453q37 38 37 90.5t-37 90.5l-401 400 150 150-160 160q-163 163-389.5 186.5t-411.5-100.5l-362 362h-181v-181l362-362q-124-185-100.5-411.5t186.5-389.5l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5l-400 401 234 234 401-400q38-37 91-37t90 37z\"\u002F\u003E\n\u003Cpath d=\"m1530.6 1182.6-302.18 302.22q-13.605 13.607-32.223 13.607t-32.223-13.607l-210.69-210.5q-13.605-13.607-13.605-32.228 0-18.62 13.605-32.227l73.038-73.048q13.605-13.607 32.223-13.607t32.223 13.607l105.26 105.28 196.92-196.95q13.605-13.607 32.223-13.607t32.223 13.607l73.038 73.048q13.605 13.607 13.605 32.228 0 18.62-13.605 32.228zm100.97 59.442q0-105.99-52.272-195.51t-141.78-141.8q-89.508-52.279-195.48-52.279-105.98 0-195.48 52.279-89.508 52.279-141.78 141.8-52.272 89.52-52.272 195.51t52.272 195.51 141.78 141.8q89.508 52.279 195.48 52.279 105.98 0 195.48-52.279 89.508-52.279 141.78-141.8 52.272-89.52 52.272-195.51zm160.39 0q0 149.68-73.754 276.07-73.754 126.4-200.15 200.17-126.6 73.8-276.2 73.8-149.66 0-276.04-73.764t-200.15-200.17q-73.692-126.5-73.692-276.11 0-149.68 73.754-276.07 73.754-126.4 200.15-200.17 126.49-73.701 276.07-73.701 149.66 0 276.04 73.764t200.15 200.17q73.692 126.5 73.692 276.11z\" class=\"success\" fill=\"#43a047\"\u002F\u003E\n\u003Cpath d=\"m1242 692.01c-99.771 0-191.79 24.587-276.04 73.764-84.257 49.176-150.97 115.9-200.15 200.17-49.18 84.23-73.692 176.32-73.692 276.11 0 99.785 24.587 191.81 73.756 276.07 49.169 84.268 115.88 150.99 200.15 200.17 84.219 49.187 176.29 73.702 276.07 73.702 99.771 0 191.79-24.587 276.04-73.763 84.257-49.176 150.97-115.9 200.15-200.17 49.18-84.23 73.692-176.32 73.692-276.11 0-99.785-24.584-191.81-73.753-276.07-49.169-84.268-115.88-150.99-200.15-200.17-84.219-49.187-176.29-73.701-276.07-73.701zm0 160.41c70.651 0 135.81 17.426 195.48 52.279 59.673 34.853 106.93 82.12 141.78 141.8 34.849 59.679 52.275 124.85 52.275 195.51 0 70.661-17.427 135.83-52.275 195.51-34.849 59.679-82.109 106.95-141.78 141.8-59.671 34.853-124.83 52.279-195.48 52.279-70.651 0-135.81-17.426-195.48-52.279-59.671-34.853-106.93-82.12-141.78-141.8-34.849-59.679-52.272-124.85-52.272-195.51 0-70.661 17.424-135.83 52.272-195.51 34.849-59.681 82.109-106.95 141.78-141.8 59.673-34.853 124.83-52.279 195.48-52.279zm-128.4 134.74c-14.769 0-29.538 5.6576-40.856 16.976l-68.579 68.591c-22.634 22.637-22.634 59.085 0 81.722l87.548 87.56-87.548 87.56c-22.634 22.637-22.634 59.085 0 81.722l68.579 68.591c22.634 22.637 59.074 22.637 81.708 0l87.552-87.563 87.548 87.563c22.634 22.637 59.077 22.637 81.711 0l68.579-68.591c22.634-22.637 22.634-59.085 0-81.722l-87.361-87.373 87.548-87.56c22.634-22.637 22.634-59.085 0-81.722l-68.579-68.591c-22.634-22.637-59.077-22.637-81.711 0l-87.548 87.563-87.552-87.563c-11.317-11.318-26.083-16.976-40.852-16.976z\" class=\"fail\" fill=\"#dd2c00\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"iconAndText\""+" id=\"next-button\""+pug_attr("disabled", true, true, false)+pug_attr("title", i18n.en.APP.UI.BTN.CONNECT_DB.NEXT.TITLE, true, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FdbConnection.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.BTN.CONNECT_DB.NEXT.TEXT) ? "" : pug_interp)) + "\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"id": "new-db-connection-dialog"}
}, i18n.en.APP.UI.DIALOG.CONNECT_DB.TITLE);} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function featureengineeringTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FfeatureEngineering.pug":"mixin feRow(dataID, name, value, progress)\n  tr(id=dataID progress=(!!progress) class=dataID)\n    td.name(progress=(!!progress))= name\n    td.value.bind.contentValue.fe-value(data-value=value id=`${dataID}-value` class=`${dataID}-value`)= value\n    if (progress)\n      td.progress-bar.bind.fe-progress-bar(data-value=progress)\n        .channel\n          .progress(style=`--progress-value:${parseInt(progress)}%`)\n        .value= parseInt(progress)+\"%\"\n    else\n      td.progress\n\n-feData=arguments[0]\n.feStats.current-progress-section.fe-stats\n  h4.FeatureSelection.running Feature Selection\n  table\n    tbody\n      -for (let i in feData.fs){\n        -let row=feData.fs[i]\n        +feRow(row.id, row.name, row.value, (typeof row.progress !== \"undefined\" && row.progress !== false)?row.progress:\"\", false)\n      -}\n  h4.FeatureExtraction Feature Extraction\n  table\n    tbody\n      -for (let i in feData.fe){\n        -let row=feData.fe[i]\n        +feRow(row.id, row.name, row.value, (typeof row.progress !== \"undefined\" && row.progress !== false)?row.progress:\"\",false)\n      -}\n  h4.FeatureOptimization.show Feature Optimization\n  table\n    tbody\n      -for (let i in feData.fo){\n        -let row=feData.fo[i]\n        +feRow(row.id, row.name, row.value, (typeof row.progress !== \"undefined\" && row.progress !== false)?row.progress:\"\",false)\n      -}\n\n\u002F\u002F- {\n\u002F\u002F-   fs:[\n\u002F\u002F-     {id:\"TotalFeatures\", name: \"Total Features\", value:559},\n\u002F\u002F-     {id:\"IV\", name: \"Information Value\", value:79, progress: 100},\n\u002F\u002F-     {id:\"IV-FCDS\", name: \"Fast Correlation Dipstick Search Method\", value:23, progress: 93},\n\u002F\u002F-     {id:\"FS\", name: \"Fisher Score\", value:313, progress: 100},\n\u002F\u002F-     {id:\"FS-FCDS\", name: \"Fast Correlation Dipstick Search Method\", value:89, progress: 63},\n\u002F\u002F-     {id:\"FilteredFeatures\", name: \"Filtered Features\", value:112},\n\u002F\u002F-     {id:\"Bivariate\", name: \"Bivariate Analysis\", value:54, progress: 65},\n\u002F\u002F-     {id:\"RFE\", name: \"Recursive Feature Elimination\", value:25, progress: 78},\n\u002F\u002F-     {id:\"SelectedFeaturesCount\", name: \"Features Selected\", value:25},\n\u002F\u002F-   ],\n\u002F\u002F-   fe: [\n\u002F\u002F-     {id:\"OPCA\", name: \"Oblique Principal Component Analysis\", value:19, progress: 92},\n\u002F\u002F-     {id:\"FactorAnalysis\", name: \"Factor Analysis\", value:14, progress: 87},\n\u002F\u002F-     {id:\"ExtractedFeaturesCount\", name: \"Features Extracted\", value:33},\n\u002F\u002F-   ],\n\u002F\u002F-   fo: [\n\u002F\u002F-     {id:\"FeatureOptimization\", name: \"Feature optimization for model improvement\", value:7, progress: 87},\n\u002F\u002F-   ]\n\u002F\u002F- }"};
;var locals_for_with = (locals || {});(function (arguments, feData, parseInt) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_mixins["feRow"] = pug_interp = function(dataID, name, value, progress){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctr" + (pug_attr("class", pug_classes([dataID], [true]), false, false)+pug_attr("id", dataID, true, false)+pug_attr("progress", (!!progress), true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctd" + (" class=\"name\""+pug_attr("progress", (!!progress), true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["value","bind","contentValue","fe-value",`${dataID}-value`], [false,false,false,false,true]), false, false)+pug_attr("data-value", value, true, false)+pug_attr("id", `${dataID}-value`, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
if ((progress)) {
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctd" + (" class=\"progress-bar bind fe-progress-bar\""+pug_attr("data-value", progress, true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Cdiv class=\"channel\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"progress\""+pug_attr("style", pug_style(`--progress-value:${parseInt(progress)}%`), true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Cdiv class=\"value\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = parseInt(progress)+"%") ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
}
else {
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctd class=\"progress\"\u003E\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
};
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
feData=arguments[0]
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Cdiv class=\"feStats current-progress-section fe-stats\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ch4 class=\"FeatureSelection running\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "Feature Selection\u003C\u002Fh4\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
for (let i in feData.fs){
{
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
let row=feData.fs[i]
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_mixins["feRow"](row.id, row.name, row.value, (typeof row.progress !== "undefined" && row.progress !== false)?row.progress:"", false);
}
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ch4 class=\"FeatureExtraction\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "Feature Extraction\u003C\u002Fh4\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
for (let i in feData.fe){
{
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
let row=feData.fe[i]
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_mixins["feRow"](row.id, row.name, row.value, (typeof row.progress !== "undefined" && row.progress !== false)?row.progress:"",false);
}
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ch4 class=\"FeatureOptimization show\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "Feature Optimization\u003C\u002Fh4\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
for (let i in feData.fo){
{
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
let row=feData.fo[i]
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
pug_mixins["feRow"](row.id, row.name, row.value, (typeof row.progress !== "undefined" && row.progress !== false)?row.progress:"",false);
}
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FfeatureEngineering.pug";
}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E";}.call(this,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined,"feData" in locals_for_with?locals_for_with.feData:typeof feData!=="undefined"?feData:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function fileuploadTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FfileUpload.pug":"include ..\u002Fi18n\u002Fen\ninclude ..\u002Fincludes\u002Fdialog\ninclude \u002Fincludes\u002FcompactLabel\ninclude \u002Fincludes\u002FstyledOnOff\ninclude \u002Fincludes\u002Fswitch\n\n+dialog(i18n.en.APP.UI.DIALOG.UPLOAD_FILE.TITLE)(id=\"file-upload-dialog\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME)(id=\"file-connection-name\", type=\"text\")\n  +compactInputLabel(i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE)(id=\"loc-on-server\", type=\"text\")\n  form#drop-area\n    .spacer\n    include ..\u002Fassets\u002Fimages\u002Ficons\u002Fcloud-upload-white.svg\n    img.uploading(src=\"assets\u002Fimages\u002Ficons\u002Frotating-squares-loader.svg\")\n    p.uploading Uploading file...\n    p.dnd-message= i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1\n    label#file-browse-message(for=\"file-upload-input\")\n      span= i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2\n      input#file-upload-input(type=\"file\" accept=\".csv, .tsv, .xml, xlsx, mp4, mkv\")\n    .spacer\n    p.allowed-file-types= i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE\n    .status.success\n      span.generic File uploaded successfully:\n      span.name\n    .status.fail \n      span.generic File upload failed.\n      span.server-error\n      span.resolution\n    .status.uploading Uploading file...\n  label.main(for=\"file-dev-or-prod\")\n    label(for=\"file-dev-or-prod\")= i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD.LABEL_MAIN\n    label.left(for=\"file-dev-or-prod\")= i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD.LABEL_LEFT\n    +switch(true)(id=\"file-dev-or-prod\" disabled=true)\n    label.right(for=\"file-dev-or-prod\")= i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD.LABEL_RIGHT\n  .button-bar\n    button#file-test-button.iconAndText.untested(title=i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST.TITLE)= i18n.en.APP.UI.BTN.CONNECT_DB.TEST.TEXT\n      include ..\u002Fassets\u002Fimages\u002Ficons\u002Ftest-connection.svg\n    button#file-next-button.iconAndText(disabled title=i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT.TITLE)= i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT.TEXT\n      include ..\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg","src\u002Fi18n\u002Fen.pug":"include i18n\n-i18n.en={};\n-i18n.en.APP={};\n-i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };\n-i18n.en.APP.TITLE=\"CyborgIntell\";\n-i18n.en.APP.NAME=\"Turing\";\n\n-i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD=\"Incorrect username or password\";\n-i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS=\"User not logged in. Cannot retrieve porjects.\";\n-i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL=\"Error in retrieving projects\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION={};\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN=\"User not logged in. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT=\"The following project properties are empty. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: \"Error in creating DB Connection\"};\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS=\"DB Connection created successfully\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT=\"The following DB connection properties are empty. Cannot create DB connection.\";\n-i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: \"Error in fetching report\"};\n-i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN=\"User notlogged in. Cannot fetch report. \";\n\n-i18n.en.APP.UI.INFO.PROJECT_CREATION={};\n-i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS=\"Project created successfully.\";\n-i18n.en.APP.UI.INFO.DB_CONNECTION={};\n-i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS=\"DB Connection is working correctly\";\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n-i18n.en.APP.UI.INFO.EXPLORE_DATA={};\n-i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE=\"Dashboard\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS=\"Number of models\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID=\"ID\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM=\"Platform\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON=\"Created on\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE=\"Type\";\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n\n-i18n.en.APP.UI.CONTENT.BREADCRUMB={};\n-i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD=\"Dashboard\";\n\n-i18n.en.APP.UI.CONTENT.TAGLINE={};\n-i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION=\"Classification\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION=\"Prediction\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION=\"Estimation\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION=\"Optimization\";\n\n-i18n.en.APP.UI.FOOTER.PROGRESS={};\n-i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS=\"Getting projects...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT=\"Creating new project...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= \"Logging in...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION=\"Creating new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION=\"Testing new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES=\"Fetching features list...\"\n\n-i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: \"Open navigation\"};\n-i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: \"Pin navigation\"};\n-i18n.en.APP.UI.BTN.LOGIN={TEXT:\"Login\", TITLE: \"Login\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:\"New project\", TITLE: \"New project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: \"Create\", TITLE: \"Create new project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: \"Cancel\", TITLE: \"Cancel\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB={};\n-i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE={};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: \"Browse...\", TITLE: \"Browse...\"};\n\n-i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: \"Username\", PLACEHOLDER:\"user@example.com\"};\n-i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: \"Password\", PLACEHOLDER:\"⬤⬤⬤⬤⬤⬤⬤⬤⬤\"};\n-i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: \"Remember me\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: \"Project name\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: \"Description\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB={};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: \"Existing connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: \"New connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: \"Connection name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: \"Database name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: \"Table name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: \"DB Server IP address\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: \"Port number\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: \"DB username\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: \"DB password\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE={};\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME=\"Name for conneciton\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE=\"File location on the server\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1=\"or drag & drop a file into this space to upload it.\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2=\"Browse\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE=\"File types supported: CSV, TSV, XML, XLSX\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON=\"Browse...\";\n\n\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: \"Project Type\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: \"Classification\", ML: \"ML\", PREDICTION: \"Prediction\", ESTIMATION: \"Estimation\", OPTIMIZATION: \"Optimization\"}\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: \"Platform\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: \"In-house\", CI_CLOUD: \"CI Cloud\"}\n-i18n.en.APP.UI.SELECT.CONNECT_DB={};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: \"Pick a named connection\"}\n\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: \"Database type\"};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: \"Oracle\", MYSQL: \"MySQL\", POSTGRESQL: \"PostgreSQL\", HIVE: \"Hive\"}\n\n-i18n.en.APP.UI.DIALOG.LOGIN={TITLE: \"Login\"};\n-i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: \"New Project\"};\n-i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: \"Connect to Database\"};\n-i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: \"Flat File Connection\"};\n\n-i18n.en.APP.UI.NAV.DASHBOARD={TEXT: \"Dashboard\"};","src\u002Fi18n\u002Fi18n.pug":"-var i18n={};","src\u002Fincludes\u002Fdialog.pug":"mixin dialog(title)\n  dialog.dialog(id=attributes.id)\n    .title\n      span.titleText= title\n      button.close\n    .content\n      if block\n        block\n      else\n        p No content provided\n\nmixin box(title)\n  .box&attributes(attributes)\n    .title\n      span.titleText= title\n    .content\n      if block\n        block\n      else\n        p No content provided\n      ","src\u002Fincludes\u002FcompactLabel.pug":"mixin compactInputLabel(labelText)\n  label.compact.input(for=\"input-\"+attributes.id id=attributes.id, class=attributes.cls)\n    input(class=`input-${attributes.cls}`, id=\"input-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, disabled=attributes.disabled, pattern=attributes.pattern)\n    span= labelText\n    span.errorMsg= attributes.errortext\n\nmixin compactTextareaLabel(labelText)\n  label.compact.textarea(for=\"textarea-\"+attributes.id id=attributes.id, class=attributes.cls)\n    - var rowCount=(attributes.rows?attributes.rows:\"3\");\n    textarea(class=`textarea-${attributes.cls}`, id=\"textarea-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, rows=attributes.rows, disabled=attributes.disabled)\n    span= labelText\n\nmixin compactSelectLabel(labelText)\n  label.compact.select(for=\"select-\"+attributes.id id=attributes.id, class=attributes.cls)\n    select(class=`select-${attributes.cls}`, id=\"select-\"+attributes.id, aria-label=labelText, disabled=attributes.disabled)\n      if block\n        block\n    span= labelText","src\u002Fincludes\u002FstyledOnOff.pug":"mixin onOff(labelText)\n  label.on-off(for=attributes.id, class=(attributes.type==\"checkbox\"?\"has-checkbox\":\"has-radio\"))= labelText\n    input(id=attributes.id)&attributes(attributes)\n    span.indicator\n\nmixin toggleButton(labelText)\n  label.toggle-button(for=attributes.id)\n    input(id=attributes.id, type=\"radio\")&attributes(attributes)\n    span.buttonShape= labelText","src\u002Fincludes\u002Fswitch.pug":"mixin switch(isRound)\n  label.switch(id=\"label-\"+attributes.id for=attributes.id)\n    input(type=\"checkbox\")&attributes(attributes)\n    if isRound \n      span.slider.round\n    else\n      span.slider","src\u002Fassets\u002Fimages\u002Ficons\u002Fcloud-upload-white.svg":"\u003Csvg class=\"cloud-icon\" version=\"1.1\" viewBox=\"0 0 2048 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n \u003Cpath d=\"m1344 928q0-14-9-23l-352-352q-9-9-23-9t-23 9l-351 351q-10 12-10 24 0 14 9 23t23 9h224v352q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5v-352h224q13 0 22.5-9.5t9.5-22.5zm640 288q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240 70-110 188-165-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5 83.5 104.5 83.5 238.5z\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n","src\u002Fassets\u002Fimages\u002Ficons\u002Ftest-connection.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\n\u003Cpath class=\"connection\" d=\"m1755 453q37 38 37 90.5t-37 90.5l-401 400 150 150-160 160q-163 163-389.5 186.5t-411.5-100.5l-362 362h-181v-181l362-362q-124-185-100.5-411.5t186.5-389.5l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5l-400 401 234 234 401-400q38-37 91-37t90 37z\"\u002F\u003E\n\u003Cpath d=\"m1530.6 1182.6-302.18 302.22q-13.605 13.607-32.223 13.607t-32.223-13.607l-210.69-210.5q-13.605-13.607-13.605-32.228 0-18.62 13.605-32.227l73.038-73.048q13.605-13.607 32.223-13.607t32.223 13.607l105.26 105.28 196.92-196.95q13.605-13.607 32.223-13.607t32.223 13.607l73.038 73.048q13.605 13.607 13.605 32.228 0 18.62-13.605 32.228zm100.97 59.442q0-105.99-52.272-195.51t-141.78-141.8q-89.508-52.279-195.48-52.279-105.98 0-195.48 52.279-89.508 52.279-141.78 141.8-52.272 89.52-52.272 195.51t52.272 195.51 141.78 141.8q89.508 52.279 195.48 52.279 105.98 0 195.48-52.279 89.508-52.279 141.78-141.8 52.272-89.52 52.272-195.51zm160.39 0q0 149.68-73.754 276.07-73.754 126.4-200.15 200.17-126.6 73.8-276.2 73.8-149.66 0-276.04-73.764t-200.15-200.17q-73.692-126.5-73.692-276.11 0-149.68 73.754-276.07 73.754-126.4 200.15-200.17 126.49-73.701 276.07-73.701 149.66 0 276.04 73.764t200.15 200.17q73.692 126.5 73.692 276.11z\" class=\"success\" fill=\"#43a047\"\u002F\u003E\n\u003Cpath d=\"m1242 692.01c-99.771 0-191.79 24.587-276.04 73.764-84.257 49.176-150.97 115.9-200.15 200.17-49.18 84.23-73.692 176.32-73.692 276.11 0 99.785 24.587 191.81 73.756 276.07 49.169 84.268 115.88 150.99 200.15 200.17 84.219 49.187 176.29 73.702 276.07 73.702 99.771 0 191.79-24.587 276.04-73.763 84.257-49.176 150.97-115.9 200.15-200.17 49.18-84.23 73.692-176.32 73.692-276.11 0-99.785-24.584-191.81-73.753-276.07-49.169-84.268-115.88-150.99-200.15-200.17-84.219-49.187-176.29-73.701-276.07-73.701zm0 160.41c70.651 0 135.81 17.426 195.48 52.279 59.673 34.853 106.93 82.12 141.78 141.8 34.849 59.679 52.275 124.85 52.275 195.51 0 70.661-17.427 135.83-52.275 195.51-34.849 59.679-82.109 106.95-141.78 141.8-59.671 34.853-124.83 52.279-195.48 52.279-70.651 0-135.81-17.426-195.48-52.279-59.671-34.853-106.93-82.12-141.78-141.8-34.849-59.679-52.272-124.85-52.272-195.51 0-70.661 17.424-135.83 52.272-195.51 34.849-59.681 82.109-106.95 141.78-141.8 59.673-34.853 124.83-52.279 195.48-52.279zm-128.4 134.74c-14.769 0-29.538 5.6576-40.856 16.976l-68.579 68.591c-22.634 22.637-22.634 59.085 0 81.722l87.548 87.56-87.548 87.56c-22.634 22.637-22.634 59.085 0 81.722l68.579 68.591c22.634 22.637 59.074 22.637 81.708 0l87.552-87.563 87.548 87.563c22.634 22.637 59.077 22.637 81.711 0l68.579-68.591c22.634-22.637 22.634-59.085 0-81.722l-87.361-87.373 87.548-87.56c22.634-22.637 22.634-59.085 0-81.722l-68.579-68.591c-22.634-22.637-59.077-22.637-81.711 0l-87.548 87.563-87.552-87.563c-11.317-11.318-26.083-16.976-40.852-16.976z\" class=\"fail\" fill=\"#dd2c00\"\u002F\u003E\n\u003C\u002Fsvg\u003E","src\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg":"\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fi18n\u002Fi18n.pug";
var i18n={};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en={};
;pug_debug_line = 3;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP={};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };
;pug_debug_line = 5;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.TITLE="CyborgIntell";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.NAME="Turing";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD="Incorrect username or password";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS="User not logged in. Cannot retrieve porjects.";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL="Error in retrieving projects";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION={};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN="User not logged in. Cannot create porject.";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT="The following project properties are empty. Cannot create porject.";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: "Error in creating DB Connection"};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS="DB Connection created successfully";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT="The following DB connection properties are empty. Cannot create DB connection.";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 20;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 21;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: "Error in fetching report"};
;pug_debug_line = 22;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN="User notlogged in. Cannot fetch report. ";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION={};
;pug_debug_line = 25;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS="Project created successfully.";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION={};
;pug_debug_line = 27;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS="DB Connection is working correctly";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};
;pug_debug_line = 29;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA={};
;pug_debug_line = 31;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};
;pug_debug_line = 34;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE="Dashboard";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};
;pug_debug_line = 36;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS="Number of models";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID="ID";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM="Platform";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON="Created on";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE="Type";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};
;pug_debug_line = 42;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 43;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};
;pug_debug_line = 44;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 46;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB={};
;pug_debug_line = 47;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD="Dashboard";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE={};
;pug_debug_line = 50;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION="Classification";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION="Prediction";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION="Estimation";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION="Optimization";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS={};
;pug_debug_line = 56;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS="Getting projects...";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT="Creating new project...";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= "Logging in...";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION="Creating new connection..."
;pug_debug_line = 60;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION="Testing new connection..."
;pug_debug_line = 61;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES="Fetching features list..."
;pug_debug_line = 63;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: "Open navigation"};
;pug_debug_line = 64;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: "Pin navigation"};
;pug_debug_line = 65;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.LOGIN={TEXT:"Login", TITLE: "Login"};
;pug_debug_line = 66;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:"New project", TITLE: "New project"};
;pug_debug_line = 67;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};
;pug_debug_line = 68;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: "Create", TITLE: "Create new project"};
;pug_debug_line = 69;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: "Cancel", TITLE: "Cancel"};
;pug_debug_line = 70;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB={};
;pug_debug_line = 71;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 72;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 73;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE={};
;pug_debug_line = 74;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 75;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 76;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: "Browse...", TITLE: "Browse..."};
;pug_debug_line = 78;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: "Username", PLACEHOLDER:"user@example.com"};
;pug_debug_line = 79;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: "Password", PLACEHOLDER:"⬤⬤⬤⬤⬤⬤⬤⬤⬤"};
;pug_debug_line = 80;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: "Remember me"};
;pug_debug_line = 81;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};
;pug_debug_line = 82;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: "Project name"};
;pug_debug_line = 83;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: "Description"};
;pug_debug_line = 84;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB={};
;pug_debug_line = 85;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: "Existing connection"};
;pug_debug_line = 86;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: "New connection"};
;pug_debug_line = 87;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: "Connection name"};
;pug_debug_line = 88;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: "Database name"};
;pug_debug_line = 89;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: "Table name"};
;pug_debug_line = 90;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: "DB Server IP address"};
;pug_debug_line = 91;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: "Port number"};
;pug_debug_line = 92;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: "DB username"};
;pug_debug_line = 93;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: "DB password"};
;pug_debug_line = 94;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 95;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE={};
;pug_debug_line = 96;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME="Name for conneciton";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE="File location on the server";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1="or drag & drop a file into this space to upload it.";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2="Browse";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE="File types supported: CSV, TSV, XML, XLSX";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 102;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON="Browse...";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};
;pug_debug_line = 106;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: "Project Type"};
;pug_debug_line = 107;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: "Classification", ML: "ML", PREDICTION: "Prediction", ESTIMATION: "Estimation", OPTIMIZATION: "Optimization"}
;pug_debug_line = 108;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: "Platform"};
;pug_debug_line = 109;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: "In-house", CI_CLOUD: "CI Cloud"}
;pug_debug_line = 110;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB={};
;pug_debug_line = 111;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: "Pick a named connection"}
;pug_debug_line = 113;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: "Database type"};
;pug_debug_line = 114;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: "Oracle", MYSQL: "MySQL", POSTGRESQL: "PostgreSQL", HIVE: "Hive"}
;pug_debug_line = 116;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.LOGIN={TITLE: "Login"};
;pug_debug_line = 117;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: "New Project"};
;pug_debug_line = 118;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: "Connect to Database"};
;pug_debug_line = 119;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: "Flat File Connection"};
;pug_debug_line = 121;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.NAV.DASHBOARD={TEXT: "Dashboard"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_mixins["dialog"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdialog" + (" class=\"dialog\""+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cspan class=\"titleText\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\"\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
if (block) {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
block && block();
}
else {
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "No content provided\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdialog\u003E";
};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";

























;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactInputLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","input",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "input-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("class", pug_classes([`input-${attributes.cls}`], [true]), false, false)+pug_attr("id", "input-"+attributes.id, true, false)+pug_attr("type", attributes.type, true, false)+pug_attr("placeholder", attributes.placeholder, false, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)+pug_attr("pattern", attributes.pattern, true, false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan class=\"errorMsg\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attributes.errortext) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";













;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";

















;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_mixins["switch"] = pug_interp = function(isRound){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"switch\""+pug_attr("id", "label-"+attributes.id, true, false)+pug_attr("for", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"type": "checkbox"},attributes]), false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
if (isRound) {
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Cspan class=\"slider round\"\u003E\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002Fswitch.pug";
pug_html = pug_html + "\u003Cspan class=\"slider\"\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_mixins["dialog"].call({
block: function(){
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "file-connection-name","type": "text"}
}, i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME);
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "loc-on-server","type": "text"}
}, i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE);
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cform id=\"drop-area\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cdiv class=\"spacer\"\u003E\u003C\u002Fdiv\u003E\u003Csvg class=\"cloud-icon\" version=\"1.1\" viewBox=\"0 0 2048 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n \u003Cpath d=\"m1344 928q0-14-9-23l-352-352q-9-9-23-9t-23 9l-351 351q-10 12-10 24 0 14 9 23t23 9h224v352q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5v-352h224q13 0 22.5-9.5t9.5-22.5zm640 288q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240 70-110 188-165-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5 83.5 104.5 83.5 238.5z\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cimg class=\"uploading\" src=\"assets\u002Fimages\u002Ficons\u002Frotating-squares-loader.svg\"\u002F\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cp class=\"uploading\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "Uploading file...\u003C\u002Fp\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cp class=\"dnd-message\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Clabel id=\"file-browse-message\" for=\"file-upload-input\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cinput id=\"file-upload-input\" type=\"file\" accept=\".csv, .tsv, .xml, xlsx, mp4, mkv\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cdiv class=\"spacer\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cp class=\"allowed-file-types\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cdiv class=\"status success\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cspan class=\"generic\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "File uploaded successfully:\u003C\u002Fspan\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cspan class=\"name\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cdiv class=\"status fail\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + " ";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cspan class=\"generic\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "File upload failed.\u003C\u002Fspan\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cspan class=\"server-error\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cspan class=\"resolution\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cdiv class=\"status uploading\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "Uploading file...\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Clabel class=\"main\" for=\"file-dev-or-prod\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Clabel for=\"file-dev-or-prod\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD.LABEL_MAIN) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Clabel class=\"left\" for=\"file-dev-or-prod\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD.LABEL_LEFT) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_mixins["switch"].call({
attributes: {"id": "file-dev-or-prod","disabled": true}
}, true);
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Clabel class=\"right\" for=\"file-dev-or-prod\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD.LABEL_RIGHT) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cdiv class=\"button-bar\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"iconAndText untested\""+" id=\"file-test-button\""+pug_attr("title", i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST.TITLE, true, false)) + "\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.BTN.CONNECT_DB.TEST.TEXT) ? "" : pug_interp)) + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\n\u003Cpath class=\"connection\" d=\"m1755 453q37 38 37 90.5t-37 90.5l-401 400 150 150-160 160q-163 163-389.5 186.5t-411.5-100.5l-362 362h-181v-181l362-362q-124-185-100.5-411.5t186.5-389.5l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5l-400 401 234 234 401-400q38-37 91-37t90 37z\"\u002F\u003E\n\u003Cpath d=\"m1530.6 1182.6-302.18 302.22q-13.605 13.607-32.223 13.607t-32.223-13.607l-210.69-210.5q-13.605-13.607-13.605-32.228 0-18.62 13.605-32.227l73.038-73.048q13.605-13.607 32.223-13.607t32.223 13.607l105.26 105.28 196.92-196.95q13.605-13.607 32.223-13.607t32.223 13.607l73.038 73.048q13.605 13.607 13.605 32.228 0 18.62-13.605 32.228zm100.97 59.442q0-105.99-52.272-195.51t-141.78-141.8q-89.508-52.279-195.48-52.279-105.98 0-195.48 52.279-89.508 52.279-141.78 141.8-52.272 89.52-52.272 195.51t52.272 195.51 141.78 141.8q89.508 52.279 195.48 52.279 105.98 0 195.48-52.279 89.508-52.279 141.78-141.8 52.272-89.52 52.272-195.51zm160.39 0q0 149.68-73.754 276.07-73.754 126.4-200.15 200.17-126.6 73.8-276.2 73.8-149.66 0-276.04-73.764t-200.15-200.17q-73.692-126.5-73.692-276.11 0-149.68 73.754-276.07 73.754-126.4 200.15-200.17 126.49-73.701 276.07-73.701 149.66 0 276.04 73.764t200.15 200.17q73.692 126.5 73.692 276.11z\" class=\"success\" fill=\"#43a047\"\u002F\u003E\n\u003Cpath d=\"m1242 692.01c-99.771 0-191.79 24.587-276.04 73.764-84.257 49.176-150.97 115.9-200.15 200.17-49.18 84.23-73.692 176.32-73.692 276.11 0 99.785 24.587 191.81 73.756 276.07 49.169 84.268 115.88 150.99 200.15 200.17 84.219 49.187 176.29 73.702 276.07 73.702 99.771 0 191.79-24.587 276.04-73.763 84.257-49.176 150.97-115.9 200.15-200.17 49.18-84.23 73.692-176.32 73.692-276.11 0-99.785-24.584-191.81-73.753-276.07-49.169-84.268-115.88-150.99-200.15-200.17-84.219-49.187-176.29-73.701-276.07-73.701zm0 160.41c70.651 0 135.81 17.426 195.48 52.279 59.673 34.853 106.93 82.12 141.78 141.8 34.849 59.679 52.275 124.85 52.275 195.51 0 70.661-17.427 135.83-52.275 195.51-34.849 59.679-82.109 106.95-141.78 141.8-59.671 34.853-124.83 52.279-195.48 52.279-70.651 0-135.81-17.426-195.48-52.279-59.671-34.853-106.93-82.12-141.78-141.8-34.849-59.679-52.272-124.85-52.272-195.51 0-70.661 17.424-135.83 52.272-195.51 34.849-59.681 82.109-106.95 141.78-141.8 59.673-34.853 124.83-52.279 195.48-52.279zm-128.4 134.74c-14.769 0-29.538 5.6576-40.856 16.976l-68.579 68.591c-22.634 22.637-22.634 59.085 0 81.722l87.548 87.56-87.548 87.56c-22.634 22.637-22.634 59.085 0 81.722l68.579 68.591c22.634 22.637 59.074 22.637 81.708 0l87.552-87.563 87.548 87.563c22.634 22.637 59.077 22.637 81.711 0l68.579-68.591c22.634-22.637 22.634-59.085 0-81.722l-87.361-87.373 87.548-87.56c22.634-22.637 22.634-59.085 0-81.722l-68.579-68.591c-22.634-22.637-59.077-22.637-81.711 0l-87.548 87.563-87.552-87.563c-11.317-11.318-26.083-16.976-40.852-16.976z\" class=\"fail\" fill=\"#dd2c00\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"iconAndText\""+" id=\"file-next-button\""+pug_attr("disabled", true, true, false)+pug_attr("title", i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT.TITLE, true, false)) + "\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002FfileUpload.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT.TEXT) ? "" : pug_interp)) + "\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"id": "file-upload-dialog"}
}, i18n.en.APP.UI.DIALOG.UPLOAD_FILE.TITLE);} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function loginTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002Flogin.pug":"include \u002Fincludes\u002Fdialog\ninclude \u002Fincludes\u002FcompactLabel\ninclude \u002Fincludes\u002FstyledOnOff\ninclude \u002Fincludes\u002Flogin\n+loginDialog(arguments[0].errorMsg)","src\u002Fincludes\u002Fdialog.pug":"mixin dialog(title)\n  dialog.dialog(id=attributes.id)\n    .title\n      span.titleText= title\n      button.close\n    .content\n      if block\n        block\n      else\n        p No content provided\n\nmixin box(title)\n  .box&attributes(attributes)\n    .title\n      span.titleText= title\n    .content\n      if block\n        block\n      else\n        p No content provided\n      ","src\u002Fincludes\u002FcompactLabel.pug":"mixin compactInputLabel(labelText)\n  label.compact.input(for=\"input-\"+attributes.id id=attributes.id, class=attributes.cls)\n    input(class=`input-${attributes.cls}`, id=\"input-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, disabled=attributes.disabled, pattern=attributes.pattern)\n    span= labelText\n    span.errorMsg= attributes.errortext\n\nmixin compactTextareaLabel(labelText)\n  label.compact.textarea(for=\"textarea-\"+attributes.id id=attributes.id, class=attributes.cls)\n    - var rowCount=(attributes.rows?attributes.rows:\"3\");\n    textarea(class=`textarea-${attributes.cls}`, id=\"textarea-\"+attributes.id, type=attributes.type, placeholder!=attributes.placeholder, aria-label=labelText, rows=attributes.rows, disabled=attributes.disabled)\n    span= labelText\n\nmixin compactSelectLabel(labelText)\n  label.compact.select(for=\"select-\"+attributes.id id=attributes.id, class=attributes.cls)\n    select(class=`select-${attributes.cls}`, id=\"select-\"+attributes.id, aria-label=labelText, disabled=attributes.disabled)\n      if block\n        block\n    span= labelText","src\u002Fincludes\u002FstyledOnOff.pug":"mixin onOff(labelText)\n  label.on-off(for=attributes.id, class=(attributes.type==\"checkbox\"?\"has-checkbox\":\"has-radio\"))= labelText\n    input(id=attributes.id)&attributes(attributes)\n    span.indicator\n\nmixin toggleButton(labelText)\n  label.toggle-button(for=attributes.id)\n    input(id=attributes.id, type=\"radio\")&attributes(attributes)\n    span.buttonShape= labelText","src\u002Fincludes\u002Flogin.pug":"mixin loginDialog(errorMsg)\n  +box(i18n.en.APP.UI.DIALOG.LOGIN.TITLE)(id=\"login\")\n    +compactInputLabel(i18n.en.APP.UI.INPUT.LOGIN_USERNAME.LABEL)(id=\"username\", type=\"text\")\n    +compactInputLabel(i18n.en.APP.UI.INPUT.LOGIN_PASSWORD.LABEL)(id=\"password\", type=\"password\")\n    +onOff(i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME.LABEL)(type=\"checkbox\", id=\"remember-me\")\n    .errorBar(style=`${errorMsg?\"display:block;\":\"display:none;\"}`)= errorMsg?errorMsg:\"\"\n    .button-bar\n      button#login-button(title=i18n.en.APP.UI.BTN.LOGIN.TITLE)= i18n.en.APP.UI.BTN.LOGIN.TEXT"};
;var locals_for_with = (locals || {});(function (arguments, i18n) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";



























;pug_debug_line = 12;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_mixins["box"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "box"},attributes]), false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cspan class=\"titleText\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
if (block) {
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
block && block();
}
else {
;pug_debug_line = 20;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "No content provided\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_mixins["compactInputLabel"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["compact","input",attributes.cls], [false,false,true]), false, false)+pug_attr("for", "input-"+attributes.id, true, false)+pug_attr("id", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("class", pug_classes([`input-${attributes.cls}`], [true]), false, false)+pug_attr("id", "input-"+attributes.id, true, false)+pug_attr("type", attributes.type, true, false)+pug_attr("placeholder", attributes.placeholder, false, false)+pug_attr("aria-label", labelText, true, false)+pug_attr("disabled", attributes.disabled, true, false)+pug_attr("pattern", attributes.pattern, true, false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + "\u003Cspan class=\"errorMsg\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = attributes.errortext) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";













;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002FcompactLabel.pug";

















;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_mixins["onOff"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["on-off",(attributes.type=="checkbox"?"has-checkbox":"has-radio")], [false,true]), false, false)+pug_attr("for", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp));
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"id": pug_escape(attributes.id)},attributes]), false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cspan class=\"indicator\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_mixins["loginDialog"] = pug_interp = function(errorMsg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_mixins["box"].call({
block: function(){
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "username","type": "text"}
}, i18n.en.APP.UI.INPUT.LOGIN_USERNAME.LABEL);
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_mixins["compactInputLabel"].call({
attributes: {"id": "password","type": "password"}
}, i18n.en.APP.UI.INPUT.LOGIN_PASSWORD.LABEL);
;pug_debug_line = 5;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_mixins["onOff"].call({
attributes: {"type": "checkbox","id": "remember-me"}
}, i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME.LABEL);
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"errorBar\""+pug_attr("style", pug_style(`${errorMsg?"display:block;":"display:none;"}`), true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = errorMsg?errorMsg:"") ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv class=\"button-bar\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_html = pug_html + "\u003Cbutton" + (" id=\"login-button\""+pug_attr("title", i18n.en.APP.UI.BTN.LOGIN.TITLE, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002Flogin.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i18n.en.APP.UI.BTN.LOGIN.TEXT) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"id": "login"}
}, i18n.en.APP.UI.DIALOG.LOGIN.TITLE);
};
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_mixins["loginDialog"](arguments[0].errorMsg);}.call(this,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined,"i18n" in locals_for_with?locals_for_with.i18n:typeof i18n!=="undefined"?i18n:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function modeldevelopmentTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FmodelDevelopment.pug":"#md-stats.md-stats.current-progress-section\n  #md-summary\n    #progress-boxes\n      #RF.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Random Forest\") Random Forest\n      #GBM.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Stochastic Gradient Boosting\") Stochastic Gradient Boosting\n      #XG.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"XGBoost\") XGBoost\n      #ANN.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Deep Learning\") Deep Learning\n      #LRM.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Logistic Regression\") Logistic Regression\n      #ANNLBGFS.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"ANN LBGFS\") ANN LBGFS\n      #ANNSGD.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"ANN SGD\") ANN SGD\n      #ANNADAM1.model.md-model.bind(data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"ANN ADAM1\") ANN ADAM1\n  #md-details\n    #tiny-boxes\n      -for (let i=0; i\u003C9; i++){\n        -for (let j=0; j\u003C15; j++){\n          .tiny-box\n        -}\n      -}\n  #md-legend\n    .state.ready.legend\n    .legend.text Model Ready\n    .state.running.legend\n    .legend.text Model Development in Progress\n    .state.not-started.legend\n    .legend.text Not Started\n  #md-subtext\n    .label.running Models Running:\n    .text.running.bind.contentValue(data-value=0) 0\n    .separator |\n    .label.total Total Models:\n    .text.total.bind.contentValue(data-value=0) 0\n"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"md-stats current-progress-section\" id=\"md-stats\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv id=\"md-summary\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv id=\"progress-boxes\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"RF\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Random Forest\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Random Forest\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"GBM\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Stochastic Gradient Boosting\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Stochastic Gradient Boosting\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"XG\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"XGBoost\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "XGBoost\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"ANN\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Deep Learning\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Deep Learning\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"LRM\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"Logistic Regression\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Logistic Regression\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"ANNLBGFS\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"ANN LBGFS\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "ANN LBGFS\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"ANNSGD\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"ANN SGD\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "ANN SGD\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"model md-model bind\" id=\"ANNADAM1\" data-value=\"0%\" style=\"--progress-value: 0%;\" title=\"ANN ADAM1\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "ANN ADAM1\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv id=\"md-details\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv id=\"tiny-boxes\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
for (let i=0; i<9; i++){
{
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
for (let j=0; j<15; j++){
{
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"tiny-box\"\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
}
}
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv id=\"md-legend\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"state ready legend\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"legend text\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Model Ready\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"state running legend\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"legend text\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Model Development in Progress\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"state not-started legend\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"legend text\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Not Started\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv id=\"md-subtext\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"label running\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Models Running:\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"text running bind contentValue\" data-value=\"0\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "0\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"separator\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "|\u003C\u002Fdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"label total\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "Total Models:\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "\u003Cdiv class=\"text total bind contentValue\" data-value=\"0\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FmodelDevelopment.pug";
pug_html = pug_html + "0\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function problevelstableTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FprobLevelsTable.pug":"- let probData=arguments[0].data;\n- if (probData.length\u003E0){\n  table&attributes(arguments[0].attributes)\n    thead\n      tr\n        th.probLevel(class=Number.isInteger(probData[0].probLevel)?\"integer\":\"float\") Probability Level\n        th.tpr(class=Number.isInteger(probData[0].tpr)?\"integer\":\"float\") True Positive\n        th.tnr(class=Number.isInteger(probData[0].tnr)?\"integer\":\"float\") True Negative\n        th.fpr(class=Number.isInteger(probData[0].fpr)?\"integer\":\"float\") False Positive\n        th.fnr(class=Number.isInteger(probData[0].fnr)?\"integer\":\"float\") False Negative\n    tbody\n      - for(let i=0; i\u003CprobData.length; i++){\n        tr(data-rowIndex=probData[i].rowIndex)\n          td.probLevel(class=Number.isInteger(probData[i].probLevel)?\"integer\":\"float\")= Number.isInteger(probData[i].probLevel)?probData[i].probLevel:probData[i].probLevel.toFixed(3)\n          td.tpr(class=Number.isInteger(probData[i].tpr)?\"integer\":\"float\")= Number.isInteger(probData[i].tpr)?probData[i].tpr:probData[i].tpr.toFixed(3)\n          td.tnr(class=Number.isInteger(probData[i].tnr)?\"integer\":\"float\")= Number.isInteger(probData[i].tnr)?probData[i].tnr:probData[i].tnr.toFixed(3)\n          td.fpr(class=Number.isInteger(probData[i].fpr)?\"integer\":\"float\")= Number.isInteger(probData[i].fpr)?probData[i].fpr:probData[i].fpr.toFixed(3)\n          td.fnr(class=Number.isInteger(probData[i].fnr)?\"integer\":\"float\")= Number.isInteger(probData[i].fnr)?probData[i].fnr:probData[i].fnr.toFixed(3)\n      - }\n- } else {\n  table&attributes(arguments[0].attributes)\n    thead\n      tr\n        th.probLevel.integer Probability Level\n        th.tpr.integer True Positive\n        th.tnr.integer True Negative\n        th.fpr.integer False Positive\n        th.fnr.integer False Negative\n    tbody\n      tr(data-rowIndex=-1)\n        td.probLevel.integer &nbsp;\n        td.tpr.integer &nbsp;\n        td.tnr.integer &nbsp;\n        td.fpr.integer &nbsp;\n        td.fnr.integer &nbsp;\n- }\n"};
;var locals_for_with = (locals || {});(function (Number, arguments) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
let probData=arguments[0].data;
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
if (probData.length>0){
{
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctable" + (pug_attrs(arguments[0].attributes, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth" + (pug_attr("class", pug_classes(["probLevel",Number.isInteger(probData[0].probLevel)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "Probability Level\u003C\u002Fth\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth" + (pug_attr("class", pug_classes(["tpr",Number.isInteger(probData[0].tpr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "True Positive\u003C\u002Fth\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth" + (pug_attr("class", pug_classes(["tnr",Number.isInteger(probData[0].tnr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "True Negative\u003C\u002Fth\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth" + (pug_attr("class", pug_classes(["fpr",Number.isInteger(probData[0].fpr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "False Positive\u003C\u002Fth\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth" + (pug_attr("class", pug_classes(["fnr",Number.isInteger(probData[0].fnr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "False Negative\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
for(let i=0; i<probData.length; i++){
{
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctr" + (pug_attr("data-rowIndex", probData[i].rowIndex, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["probLevel",Number.isInteger(probData[i].probLevel)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(probData[i].probLevel)?probData[i].probLevel:probData[i].probLevel.toFixed(3)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["tpr",Number.isInteger(probData[i].tpr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(probData[i].tpr)?probData[i].tpr:probData[i].tpr.toFixed(3)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["tnr",Number.isInteger(probData[i].tnr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(probData[i].tnr)?probData[i].tnr:probData[i].tnr.toFixed(3)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["fpr",Number.isInteger(probData[i].fpr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(probData[i].fpr)?probData[i].fpr:probData[i].fpr.toFixed(3)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["fnr",Number.isInteger(probData[i].fnr)?"integer":"float"], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Number.isInteger(probData[i].fnr)?probData[i].fnr:probData[i].fnr.toFixed(3)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
}
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
} else {
{
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctable" + (pug_attrs(arguments[0].attributes, false)) + "\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth class=\"probLevel integer\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "Probability Level\u003C\u002Fth\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth class=\"tpr integer\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "True Positive\u003C\u002Fth\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth class=\"tnr integer\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "True Negative\u003C\u002Fth\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth class=\"fpr integer\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "False Positive\u003C\u002Fth\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Cth class=\"fnr integer\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "False Negative\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctr data-rowIndex=\"-1\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd class=\"probLevel integer\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "&nbsp;\u003C\u002Ftd\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd class=\"tpr integer\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "&nbsp;\u003C\u002Ftd\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd class=\"tnr integer\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "&nbsp;\u003C\u002Ftd\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd class=\"fpr integer\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "&nbsp;\u003C\u002Ftd\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "\u003Ctd class=\"fnr integer\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
pug_html = pug_html + "&nbsp;\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
}
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002FprobLevelsTable.pug";
}}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function projectTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002Fproject.pug":"include ..\u002Fi18n\u002Fen\ninclude ..\u002Fincludes\u002Fdialog\n- var project=arguments[0];\n+box(project.pname)(class=\"project-box\" id=\"project-box-\"+project.projectkey)\n  dl\n    div\n      dt(aria-label=i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID)\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Finfo.svg\n      dd\n        span.id #{project.projectkey}\n    div\n      dt(aria-label=i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS)\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Fhashtag.svg\n      dd\n        span.no-of-models #{project.NoModels}\n    \u002F\u002F- div\n    \u002F\u002F-   dt(aria-label=i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON)\n    \u002F\u002F-     include ..\u002Fassets\u002Fimages\u002Ficons\u002Fcalendar.svg\n    \u002F\u002F-   dd\n    \u002F\u002F-     span.created-on #{project.createdOn}\n    div\n      dt(aria-label=i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM)\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Flayers.svg\n      dd\n        span.platform #{project.platform}\n    div\n      dt(aria-label=i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE)\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Ffolder.svg\n      dd\n        span.type #{project.ptype}\n  p.description #{project.description}\n  .button-bar\n    button.project-box-menu-trigger.only-icon\n      include ..\u002Fassets\u002Fimages\u002Ficons\u002Fdots-menu.svg\n    .project-actions-menu\n      button.edit-project.only-icon\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Fpencil.svg\n      button.delete-project.only-icon\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Ftrash.svg\n    .spacer\n    - let target='\u002Fvalidate-features';\n    - if (state==1) {target = '\u002Fdb-connection';}\n    - if (state==2) {target = '\u002Fworkflow-start';}\n    - if (state==3) {target = '\u002Fae-automodel';}\n    - if (state==4) {target = '\u002Fmp\u002Fmll\u002Fdiscrimination';}\n    -else if (state\u003E4) {target = \"\u002F\"; throw new Error(\"Page doesn't exist.\");}\n    if (project.projectkey)\n      -target=target+\"\u002F\"+project.projectkey;  \n      button.exploreProject.iconAndText(target=target) Explore\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg\n    else\n      button.exploreProject.iconAndText Explore\n        include ..\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg\n    \n      \n","src\u002Fi18n\u002Fen.pug":"include i18n\n-i18n.en={};\n-i18n.en.APP={};\n-i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };\n-i18n.en.APP.TITLE=\"CyborgIntell\";\n-i18n.en.APP.NAME=\"Turing\";\n\n-i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD=\"Incorrect username or password\";\n-i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS=\"User not logged in. Cannot retrieve porjects.\";\n-i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL=\"Error in retrieving projects\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION={};\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN=\"User not logged in. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT=\"The following project properties are empty. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: \"Error in creating DB Connection\"};\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS=\"DB Connection created successfully\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT=\"The following DB connection properties are empty. Cannot create DB connection.\";\n-i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: \"Error in fetching report\"};\n-i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN=\"User notlogged in. Cannot fetch report. \";\n\n-i18n.en.APP.UI.INFO.PROJECT_CREATION={};\n-i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS=\"Project created successfully.\";\n-i18n.en.APP.UI.INFO.DB_CONNECTION={};\n-i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS=\"DB Connection is working correctly\";\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n-i18n.en.APP.UI.INFO.EXPLORE_DATA={};\n-i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE=\"Dashboard\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS=\"Number of models\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID=\"ID\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM=\"Platform\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON=\"Created on\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE=\"Type\";\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n\n-i18n.en.APP.UI.CONTENT.BREADCRUMB={};\n-i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD=\"Dashboard\";\n\n-i18n.en.APP.UI.CONTENT.TAGLINE={};\n-i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION=\"Classification\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION=\"Prediction\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION=\"Estimation\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION=\"Optimization\";\n\n-i18n.en.APP.UI.FOOTER.PROGRESS={};\n-i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS=\"Getting projects...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT=\"Creating new project...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= \"Logging in...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION=\"Creating new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION=\"Testing new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES=\"Fetching features list...\"\n\n-i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: \"Open navigation\"};\n-i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: \"Pin navigation\"};\n-i18n.en.APP.UI.BTN.LOGIN={TEXT:\"Login\", TITLE: \"Login\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:\"New project\", TITLE: \"New project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: \"Create\", TITLE: \"Create new project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: \"Cancel\", TITLE: \"Cancel\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB={};\n-i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE={};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: \"Browse...\", TITLE: \"Browse...\"};\n\n-i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: \"Username\", PLACEHOLDER:\"user@example.com\"};\n-i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: \"Password\", PLACEHOLDER:\"⬤⬤⬤⬤⬤⬤⬤⬤⬤\"};\n-i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: \"Remember me\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: \"Project name\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: \"Description\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB={};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: \"Existing connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: \"New connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: \"Connection name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: \"Database name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: \"Table name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: \"DB Server IP address\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: \"Port number\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: \"DB username\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: \"DB password\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE={};\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME=\"Name for conneciton\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE=\"File location on the server\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1=\"or drag & drop a file into this space to upload it.\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2=\"Browse\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE=\"File types supported: CSV, TSV, XML, XLSX\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON=\"Browse...\";\n\n\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: \"Project Type\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: \"Classification\", ML: \"ML\", PREDICTION: \"Prediction\", ESTIMATION: \"Estimation\", OPTIMIZATION: \"Optimization\"}\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: \"Platform\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: \"In-house\", CI_CLOUD: \"CI Cloud\"}\n-i18n.en.APP.UI.SELECT.CONNECT_DB={};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: \"Pick a named connection\"}\n\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: \"Database type\"};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: \"Oracle\", MYSQL: \"MySQL\", POSTGRESQL: \"PostgreSQL\", HIVE: \"Hive\"}\n\n-i18n.en.APP.UI.DIALOG.LOGIN={TITLE: \"Login\"};\n-i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: \"New Project\"};\n-i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: \"Connect to Database\"};\n-i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: \"Flat File Connection\"};\n\n-i18n.en.APP.UI.NAV.DASHBOARD={TEXT: \"Dashboard\"};","src\u002Fi18n\u002Fi18n.pug":"-var i18n={};","src\u002Fincludes\u002Fdialog.pug":"mixin dialog(title)\n  dialog.dialog(id=attributes.id)\n    .title\n      span.titleText= title\n      button.close\n    .content\n      if block\n        block\n      else\n        p No content provided\n\nmixin box(title)\n  .box&attributes(attributes)\n    .title\n      span.titleText= title\n    .content\n      if block\n        block\n      else\n        p No content provided\n      ","src\u002Fassets\u002Fimages\u002Ficons\u002Finfo.svg":"\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z\"\u002F\u003E\u003C\u002Fsvg\u003E","src\u002Fassets\u002Fimages\u002Ficons\u002Fhashtag.svg":"\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M991 1024l64-256h-254l-64 256h254zm768-504l-56 224q-7 24-31 24h-327l-64 256h311q15 0 25 12 10 14 6 28l-56 224q-5 24-31 24h-327l-81 328q-7 24-31 24h-224q-16 0-26-12-9-12-6-28l78-312h-254l-81 328q-7 24-31 24h-225q-15 0-25-12-9-12-6-28l78-312h-311q-15 0-25-12-9-12-6-28l56-224q7-24 31-24h327l64-256h-311q-15 0-25-12-10-14-6-28l56-224q5-24 31-24h327l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h254l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h311q15 0 25 12 9 12 6 28z\"\u002F\u003E\u003C\u002Fsvg\u003E","src\u002Fassets\u002Fimages\u002Ficons\u002Flayers.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m896 200.98-896 311.23 896 311.23 896-311.23zm-580.19 585.31-315.81 109.58 896 311.23 896-311.23-315.8-109.58-580.2 201.38zm0 383.92l-315.81 109.6 896 311.2 896-311.2-315.8-109.6-580.2 201.4z\"\u002F\u003E\u003C\u002Fsvg\u003E","src\u002Fassets\u002Fimages\u002Ficons\u002Ffolder.svg":"\u003Csvg viewBox=\"0 0 2048 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1845 931q0-35-53-35h-1088q-40 0-85.5 21.5t-71.5 52.5l-294 363q-18 24-18 40 0 35 53 35h1088q40 0 86-22t71-53l294-363q18-22 18-39zm-1141-163h768v-160q0-40-28-68t-68-28h-576q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v853l256-315q44-53 116-87.5t140-34.5zm1269 163q0 62-46 120l-295 363q-43 53-116 87.5t-140 34.5h-1088q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158v160h192q54 0 99 24.5t67 70.5q15 32 15 68z\"\u002F\u003E\u003C\u002Fsvg\u003E","src\u002Fassets\u002Fimages\u002Ficons\u002Fdots-menu.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m896 0c-495.09 0-896 400.91-896 896 0 495.1 400.91 896 896 896 495.1 0 896-400.9 896-896 0-495.09-400.9-896-896-896zm0 150c414.6 0 746 331.42 746 746 0 414.6-331.4 746-746 746-414.58 0-746-331.4-746-746 0-414.58 331.42-746 746-746zm-453 653v186h186v-186h-186zm360 0v186h186v-186h-186zm360 0v186h186v-186h-186z\"\u002F\u003E\u003C\u002Fsvg\u003E\n","src\u002Fassets\u002Fimages\u002Ficons\u002Fpencil.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m1717.9 340.78-266.72-265.73c-28.761-28.763-63.143-43.052-103.26-43.052-40.871 0-74.904 14.393-102.15 43.144l-188.55 187.35 472.22 472.26 188.46-188.47c28-27.99 42.1-62.02 42.1-102.14 0-39.355-14.137-73.842-42.134-103.36zm-350.81-176.02 260.09 260.11c13.801 13.79 13.801 35.994 0 49.785l-110 109.96-309.9-309.87 110-109.99c13.79-13.79 35.992-13.779 49.77 0zm-382.57 170.4-944.53 944.64v472.2h472.22l944.55-944.6zm4.0558 201.4 266.82 266.84-803.36 803.4-121.52-0.069v-145.3h-145.29v-121.43z\" stroke-width=\".0097973\"\u002F\u003E\u003C\u002Fsvg\u003E\n","src\u002Fassets\u002Fimages\u002Ficons\u002Ftrash.svg":"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m684.64 719.96v633.75q0 15.404-9.9077 25.306-9.9077 9.9024-25.32 9.9024h-70.455q-15.412 0-25.32-9.9024-9.9077-9.9023-9.9077-25.306v-633.74q0-15.404 9.9077-25.306 9.9077-9.9023 25.32-9.9023h70.455q15.412 0 25.32 9.9023 9.9077 9.9023 9.9077 25.306zm281.82 0v633.75q0 15.404-9.9077 25.306-9.9077 9.9024-25.32 9.9024h-70.455q-15.412 0-25.32-9.9024-9.9077-9.9023-9.9077-25.306v-633.74q0-15.404 9.9077-25.306 9.9077-9.9023 25.32-9.9023h70.455q15.412 0 25.32 9.9023 9.9077 9.9023 9.9077 25.306zm281.82 0v633.75q0 15.404-9.9077 25.306-9.9077 9.9024-25.32 9.9024h-70.454q-15.412 0-25.32-9.9024-9.9077-9.9023-9.9077-25.306v-633.74q0-15.404 9.9077-25.306 9.9078-9.9023 25.32-9.9023h70.454q15.412 0 25.32 9.9023 9.9077 9.9023 9.9077 25.306zm140.91 796.59v-1043.1h-986.38v1043q0 24.206 7.706 44.561t15.962 29.707q8.2564 9.3523 11.559 9.3523h915.91q3.3025 0 11.559-9.3523 8.2563-9.3522 15.962-29.707 7.7059-20.355 7.7059-44.561zm-739.79-1183.9h493.19l-52.841-128.73q-7.706-9.9024-18.714-12.103h-349.03q-11.009 2.2005-18.714 12.103zm1021.6 35.21v70.417q0 15.404-9.9077 25.306-9.9076 9.9023-25.32 9.9023h-105.7v1043q0 91.322-51.74 157.89-51.8 66.6-124.4 66.6h-915.95q-72.656 0-124.4-64.365-51.74-64.3-51.74-155.7v-1047.4h-105.68q-15.412 0-25.32-9.9023-9.9077-9.9024-9.9077-25.306v-70.41q0-15.404 9.9077-25.306 9.9077-9.9023 25.32-9.9023h340.16l77.06-183.75q16.51-40.71 59.45-69.313 42.93-28.607 86.96-28.607h352.27q44.034 0 86.967 28.607t59.446 69.316l77.06 183.74h340.16q15.412 0 25.32 9.9023 9.9 9.91 9.9 25.32z\"\u002F\u003E\u003C\u002Fsvg\u003E\n","src\u002Fassets\u002Fimages\u002Ficons\u002Farrow-circle-o-right.svg":"\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E"};
;var locals_for_with = (locals || {});(function (Error, arguments, state) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fi18n\u002Fi18n.pug";
var i18n={};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en={};
;pug_debug_line = 3;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP={};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };
;pug_debug_line = 5;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.TITLE="CyborgIntell";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.NAME="Turing";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD="Incorrect username or password";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS="User not logged in. Cannot retrieve porjects.";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL="Error in retrieving projects";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION={};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN="User not logged in. Cannot create porject.";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT="The following project properties are empty. Cannot create porject.";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: "Error in creating DB Connection"};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS="DB Connection created successfully";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT="The following DB connection properties are empty. Cannot create DB connection.";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 20;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 21;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: "Error in fetching report"};
;pug_debug_line = 22;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN="User notlogged in. Cannot fetch report. ";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION={};
;pug_debug_line = 25;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS="Project created successfully.";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION={};
;pug_debug_line = 27;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS="DB Connection is working correctly";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};
;pug_debug_line = 29;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA={};
;pug_debug_line = 31;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};
;pug_debug_line = 34;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE="Dashboard";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};
;pug_debug_line = 36;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS="Number of models";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID="ID";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM="Platform";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON="Created on";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE="Type";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};
;pug_debug_line = 42;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 43;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};
;pug_debug_line = 44;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 46;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB={};
;pug_debug_line = 47;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD="Dashboard";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE={};
;pug_debug_line = 50;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION="Classification";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION="Prediction";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION="Estimation";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION="Optimization";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS={};
;pug_debug_line = 56;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS="Getting projects...";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT="Creating new project...";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= "Logging in...";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION="Creating new connection..."
;pug_debug_line = 60;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION="Testing new connection..."
;pug_debug_line = 61;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES="Fetching features list..."
;pug_debug_line = 63;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: "Open navigation"};
;pug_debug_line = 64;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: "Pin navigation"};
;pug_debug_line = 65;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.LOGIN={TEXT:"Login", TITLE: "Login"};
;pug_debug_line = 66;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:"New project", TITLE: "New project"};
;pug_debug_line = 67;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};
;pug_debug_line = 68;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: "Create", TITLE: "Create new project"};
;pug_debug_line = 69;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: "Cancel", TITLE: "Cancel"};
;pug_debug_line = 70;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB={};
;pug_debug_line = 71;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 72;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 73;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE={};
;pug_debug_line = 74;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 75;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 76;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: "Browse...", TITLE: "Browse..."};
;pug_debug_line = 78;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: "Username", PLACEHOLDER:"user@example.com"};
;pug_debug_line = 79;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: "Password", PLACEHOLDER:"⬤⬤⬤⬤⬤⬤⬤⬤⬤"};
;pug_debug_line = 80;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: "Remember me"};
;pug_debug_line = 81;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};
;pug_debug_line = 82;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: "Project name"};
;pug_debug_line = 83;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: "Description"};
;pug_debug_line = 84;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB={};
;pug_debug_line = 85;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: "Existing connection"};
;pug_debug_line = 86;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: "New connection"};
;pug_debug_line = 87;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: "Connection name"};
;pug_debug_line = 88;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: "Database name"};
;pug_debug_line = 89;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: "Table name"};
;pug_debug_line = 90;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: "DB Server IP address"};
;pug_debug_line = 91;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: "Port number"};
;pug_debug_line = 92;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: "DB username"};
;pug_debug_line = 93;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: "DB password"};
;pug_debug_line = 94;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 95;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE={};
;pug_debug_line = 96;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME="Name for conneciton";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE="File location on the server";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1="or drag & drop a file into this space to upload it.";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2="Browse";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE="File types supported: CSV, TSV, XML, XLSX";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 102;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON="Browse...";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};
;pug_debug_line = 106;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: "Project Type"};
;pug_debug_line = 107;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: "Classification", ML: "ML", PREDICTION: "Prediction", ESTIMATION: "Estimation", OPTIMIZATION: "Optimization"}
;pug_debug_line = 108;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: "Platform"};
;pug_debug_line = 109;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: "In-house", CI_CLOUD: "CI Cloud"}
;pug_debug_line = 110;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB={};
;pug_debug_line = 111;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: "Pick a named connection"}
;pug_debug_line = 113;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: "Database type"};
;pug_debug_line = 114;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: "Oracle", MYSQL: "MySQL", POSTGRESQL: "PostgreSQL", HIVE: "Hive"}
;pug_debug_line = 116;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.LOGIN={TITLE: "Login"};
;pug_debug_line = 117;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: "New Project"};
;pug_debug_line = 118;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: "Connect to Database"};
;pug_debug_line = 119;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: "Flat File Connection"};
;pug_debug_line = 121;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.NAV.DASHBOARD={TEXT: "Dashboard"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";



























;pug_debug_line = 12;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_mixins["box"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 13;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "box"},attributes]), false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cspan class=\"titleText\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
if (block) {
;pug_debug_line = 18;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
block && block();
}
else {
;pug_debug_line = 20;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fincludes\u002Fdialog.pug";
pug_html = pug_html + "No content provided\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
var project=arguments[0];
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_mixins["box"].call({
block: function(){
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdl\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdt" + (pug_attr("aria-label", i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID, true, false)) + "\u003E\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdt\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cspan class=\"id\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = project.projectkey) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdd\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdt" + (pug_attr("aria-label", i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS, true, false)) + "\u003E\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M991 1024l64-256h-254l-64 256h254zm768-504l-56 224q-7 24-31 24h-327l-64 256h311q15 0 25 12 10 14 6 28l-56 224q-5 24-31 24h-327l-81 328q-7 24-31 24h-224q-16 0-26-12-9-12-6-28l78-312h-254l-81 328q-7 24-31 24h-225q-15 0-25-12-9-12-6-28l78-312h-311q-15 0-25-12-9-12-6-28l56-224q7-24 31-24h327l64-256h-311q-15 0-25-12-10-14-6-28l56-224q5-24 31-24h327l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h254l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h311q15 0 25 12 9 12 6 28z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdt\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cspan class=\"no-of-models\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = project.NoModels) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdd\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdt" + (pug_attr("aria-label", i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM, true, false)) + "\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m896 200.98-896 311.23 896 311.23 896-311.23zm-580.19 585.31-315.81 109.58 896 311.23 896-311.23-315.8-109.58-580.2 201.38zm0 383.92l-315.81 109.6 896 311.2 896-311.2-315.8-109.6-580.2 201.4z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdt\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cspan class=\"platform\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = project.platform) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdd\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdt" + (pug_attr("aria-label", i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE, true, false)) + "\u003E\u003Csvg viewBox=\"0 0 2048 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1845 931q0-35-53-35h-1088q-40 0-85.5 21.5t-71.5 52.5l-294 363q-18 24-18 40 0 35 53 35h1088q40 0 86-22t71-53l294-363q18-22 18-39zm-1141-163h768v-160q0-40-28-68t-68-28h-576q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v853l256-315q44-53 116-87.5t140-34.5zm1269 163q0 62-46 120l-295 363q-43 53-116 87.5t-140 34.5h-1088q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158v160h192q54 0 99 24.5t67 70.5q15 32 15 68z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdt\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdd\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cspan class=\"type\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = project.ptype) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdd\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdl\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cp class=\"description\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = project.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdiv class=\"button-bar\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cbutton class=\"project-box-menu-trigger only-icon\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m896 0c-495.09 0-896 400.91-896 896 0 495.1 400.91 896 896 896 495.1 0 896-400.9 896-896 0-495.09-400.9-896-896-896zm0 150c414.6 0 746 331.42 746 746 0 414.6-331.4 746-746 746-414.58 0-746-331.4-746-746 0-414.58 331.42-746 746-746zm-453 653v186h186v-186h-186zm360 0v186h186v-186h-186zm360 0v186h186v-186h-186z\"\u002F\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fbutton\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdiv class=\"project-actions-menu\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cbutton class=\"edit-project only-icon\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m1717.9 340.78-266.72-265.73c-28.761-28.763-63.143-43.052-103.26-43.052-40.871 0-74.904 14.393-102.15 43.144l-188.55 187.35 472.22 472.26 188.46-188.47c28-27.99 42.1-62.02 42.1-102.14 0-39.355-14.137-73.842-42.134-103.36zm-350.81-176.02 260.09 260.11c13.801 13.79 13.801 35.994 0 49.785l-110 109.96-309.9-309.87 110-109.99c13.79-13.79 35.992-13.779 49.77 0zm-382.57 170.4-944.53 944.64v472.2h472.22l944.55-944.6zm4.0558 201.4 266.82 266.84-803.36 803.4-121.52-0.069v-145.3h-145.29v-121.43z\" stroke-width=\".0097973\"\u002F\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fbutton\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cbutton class=\"delete-project only-icon\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\" viewBox=\"0 0 1792 1792\"\u003E\u003Cpath d=\"m684.64 719.96v633.75q0 15.404-9.9077 25.306-9.9077 9.9024-25.32 9.9024h-70.455q-15.412 0-25.32-9.9024-9.9077-9.9023-9.9077-25.306v-633.74q0-15.404 9.9077-25.306 9.9077-9.9023 25.32-9.9023h70.455q15.412 0 25.32 9.9023 9.9077 9.9023 9.9077 25.306zm281.82 0v633.75q0 15.404-9.9077 25.306-9.9077 9.9024-25.32 9.9024h-70.455q-15.412 0-25.32-9.9024-9.9077-9.9023-9.9077-25.306v-633.74q0-15.404 9.9077-25.306 9.9077-9.9023 25.32-9.9023h70.455q15.412 0 25.32 9.9023 9.9077 9.9023 9.9077 25.306zm281.82 0v633.75q0 15.404-9.9077 25.306-9.9077 9.9024-25.32 9.9024h-70.454q-15.412 0-25.32-9.9024-9.9077-9.9023-9.9077-25.306v-633.74q0-15.404 9.9077-25.306 9.9078-9.9023 25.32-9.9023h70.454q15.412 0 25.32 9.9023 9.9077 9.9023 9.9077 25.306zm140.91 796.59v-1043.1h-986.38v1043q0 24.206 7.706 44.561t15.962 29.707q8.2564 9.3523 11.559 9.3523h915.91q3.3025 0 11.559-9.3523 8.2563-9.3522 15.962-29.707 7.7059-20.355 7.7059-44.561zm-739.79-1183.9h493.19l-52.841-128.73q-7.706-9.9024-18.714-12.103h-349.03q-11.009 2.2005-18.714 12.103zm1021.6 35.21v70.417q0 15.404-9.9077 25.306-9.9076 9.9023-25.32 9.9023h-105.7v1043q0 91.322-51.74 157.89-51.8 66.6-124.4 66.6h-915.95q-72.656 0-124.4-64.365-51.74-64.3-51.74-155.7v-1047.4h-105.68q-15.412 0-25.32-9.9023-9.9077-9.9024-9.9077-25.306v-70.41q0-15.404 9.9077-25.306 9.9077-9.9023 25.32-9.9023h340.16l77.06-183.75q16.51-40.71 59.45-69.313 42.93-28.607 86.96-28.607h352.27q44.034 0 86.967 28.607t59.446 69.316l77.06 183.74h340.16q15.412 0 25.32 9.9023 9.9 9.91 9.9 25.32z\"\u002F\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cdiv class=\"spacer\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
let target='/validate-features';
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
if (state==1) {target = '/db-connection';}
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
if (state==2) {target = '/workflow-start';}
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
if (state==3) {target = '/ae-automodel';}
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
if (state==4) {target = '/mp/mll/discrimination';}
else if (state>4) {target = "/"; throw new Error("Page doesn't exist.");}
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
if ((project.projectkey)) {
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
target=target+"/"+project.projectkey;  
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"exploreProject iconAndText\""+pug_attr("target", target, true, false)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "Explore\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
}
else {
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "\u003Cbutton class=\"exploreProject iconAndText\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Fproject.pug";
pug_html = pug_html + "Explore\u003Csvg viewBox=\"0 0 1792 1792\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
},
attributes: {"class": "project-box","id": pug_escape("project-box-"+project.projectkey)}
}, project.pname);}.call(this,"Error" in locals_for_with?locals_for_with.Error:typeof Error!=="undefined"?Error:undefined,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function tableTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002Ftable.pug":"include ..\u002Fi18n\u002Fen\ninclude ..\u002Fincludes\u002FstyledOnOff\n\n- var data=arguments[0].data; \n- var headerText=arguments[0].headerText?arguments[0].headerText:null; \n- var hasSelectionCol=arguments[0].hasSelectionCol?arguments[0].hasSelectionCol:false;\n- var hasSelectAll=arguments[0].hasSelectAll?arguments[0].hasSelectAll:false;\n- var hasActionsColumn=arguments[0].hasActionsColumn?arguments[0].hasActionsColumn:false;\n- var actions=arguments[0].actions && typeof arguments[0].actions == \"function\"?arguments[0].actions : function(){return \"\";};\n- var tableAttributes=arguments[0].tableAttributes;\n- var headerKeys=arguments[0].headerKeys;\n- var headerText=arguments[0].headerText;\n- var applyTDStyle=arguments[0].applyTDStyle;\n\ntable&attributes(tableAttributes)(style=`--row-count: ${data.length}; --col-count: ${headerKeys.length}`)\n  if headerText\n  thead\n    tr.headerRow\n      - let startCol=0;\n      if (hasSelectionCol && !hasSelectAll)\n        - startCol=1;\n        th(colspan=\"2\")= headerText[0]\n      else if (hasSelectionCol && hasSelectAll)\n        th.select\n          div\n            +onOff(\"\")(type=\"checkbox\", class=\"selectAll\")\n      - for (let i=startCol; i\u003CheaderText.length; i++){\n        th.sort(class=headerKeys[i], data-sort=headerKeys[i], data-key=headerKeys[i])= headerText[i]\n      - }\n  tbody.list\n    for row, rowIndex in data\n      - let rowLength = Object.keys(row).length;\n      tr\n        if hasSelectionCol\n          td.select\n            div\n              +onOff(\"\")(type=\"checkbox\", id=\"onOff-\"+rowIndex)\n        - let index=0;\n        for key, index in headerKeys\n          - let item=row[key];\n          if (hasActionsColumn && index == rowLength - 1)\n            - let actionsHTML=\"\"+actions(rowIndex);\n            td.actions!= actionsHTML\n          else\n            - let isNumber=false;\n            - let attr=key.replace(\u002F\\s+\u002Fg, \"_\");\n            - if (!isNaN(item)){\n            -   item=parseFloat(\"\"+item).toFixed(2);\n            -   if (item == \"NaN\"){item = \"\";}\n            -   isNumber=true;\n            - }\n            td(data-key=attr, class=attr, class=(isNumber?\"number\":\"nan\"), data-val=item, style=(isNumber&&applyTDStyles?\"text-align: right;justify-content:flex-end; padding-right: 3px;\":\"\"))= item","src\u002Fi18n\u002Fen.pug":"include i18n\n-i18n.en={};\n-i18n.en.APP={};\n-i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };\n-i18n.en.APP.TITLE=\"CyborgIntell\";\n-i18n.en.APP.NAME=\"Turing\";\n\n-i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD=\"Incorrect username or password\";\n-i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS=\"User not logged in. Cannot retrieve porjects.\";\n-i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL=\"Error in retrieving projects\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION={};\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN=\"User not logged in. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT=\"The following project properties are empty. Cannot create porject.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC=\"Error in project creation.\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: \"Error in creating DB Connection\"};\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS=\"DB Connection created successfully\";\n-i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT=\"The following DB connection properties are empty. Cannot create DB connection.\";\n-i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: \"Error in fetching features for connection: \"};\n-i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: \"Error in fetching report\"};\n-i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN=\"User notlogged in. Cannot fetch report. \";\n\n-i18n.en.APP.UI.INFO.PROJECT_CREATION={};\n-i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS=\"Project created successfully.\";\n-i18n.en.APP.UI.INFO.DB_CONNECTION={};\n-i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS=\"DB Connection is working correctly\";\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n-i18n.en.APP.UI.INFO.EXPLORE_DATA={};\n-i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT=\"Select a project to continue\";\n\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE=\"Dashboard\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS=\"Number of models\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID=\"ID\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM=\"Platform\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON=\"Created on\";\n-i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE=\"Type\";\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};\n-i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};\n-i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: \"Update role for selected features to \"}\n\n-i18n.en.APP.UI.CONTENT.BREADCRUMB={};\n-i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD=\"Dashboard\";\n\n-i18n.en.APP.UI.CONTENT.TAGLINE={};\n-i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION=\"Classification\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION=\"Prediction\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION=\"Estimation\";\n-i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION=\"Optimization\";\n\n-i18n.en.APP.UI.FOOTER.PROGRESS={};\n-i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS=\"Getting projects...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT=\"Creating new project...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= \"Logging in...\";\n-i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION=\"Creating new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION=\"Testing new connection...\"\n-i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES=\"Fetching features list...\"\n\n-i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: \"Open navigation\"};\n-i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: \"Pin navigation\"};\n-i18n.en.APP.UI.BTN.LOGIN={TEXT:\"Login\", TITLE: \"Login\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:\"New project\", TITLE: \"New project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: \"Create\", TITLE: \"Create new project\"};\n-i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: \"Cancel\", TITLE: \"Cancel\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB={};\n-i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE={};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: \"Test\", TITLE: \"Test\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: \"Next\", TITLE: \"Next\"};\n-i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: \"Browse...\", TITLE: \"Browse...\"};\n\n-i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: \"Username\", PLACEHOLDER:\"user@example.com\"};\n-i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: \"Password\", PLACEHOLDER:\"⬤⬤⬤⬤⬤⬤⬤⬤⬤\"};\n-i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: \"Remember me\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: \"Project name\"};\n-i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: \"Description\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB={};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: \"Existing connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: \"New connection\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: \"Connection name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: \"Database name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: \"Table name\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: \"DB Server IP address\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: \"Port number\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: \"DB username\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: \"DB password\"};\n-i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE={};\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME=\"Name for conneciton\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE=\"File location on the server\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1=\"or drag & drop a file into this space to upload it.\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2=\"Browse\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE=\"File types supported: CSV, TSV, XML, XLSX\";\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: \"Use this dataset for\", LABEL_LEFT: \"Development\", LABEL_RIGHT: \"Production\" };\n-i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON=\"Browse...\";\n\n\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: \"Project Type\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: \"Classification\", ML: \"ML\", PREDICTION: \"Prediction\", ESTIMATION: \"Estimation\", OPTIMIZATION: \"Optimization\"}\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: \"Platform\"};\n-i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: \"In-house\", CI_CLOUD: \"CI Cloud\"}\n-i18n.en.APP.UI.SELECT.CONNECT_DB={};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: \"Pick a named connection\"}\n\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: \"Database type\"};\n-i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: \"Oracle\", MYSQL: \"MySQL\", POSTGRESQL: \"PostgreSQL\", HIVE: \"Hive\"}\n\n-i18n.en.APP.UI.DIALOG.LOGIN={TITLE: \"Login\"};\n-i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: \"New Project\"};\n-i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: \"Connect to Database\"};\n-i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: \"Flat File Connection\"};\n\n-i18n.en.APP.UI.NAV.DASHBOARD={TEXT: \"Dashboard\"};","src\u002Fi18n\u002Fi18n.pug":"-var i18n={};","src\u002Fincludes\u002FstyledOnOff.pug":"mixin onOff(labelText)\n  label.on-off(for=attributes.id, class=(attributes.type==\"checkbox\"?\"has-checkbox\":\"has-radio\"))= labelText\n    input(id=attributes.id)&attributes(attributes)\n    span.indicator\n\nmixin toggleButton(labelText)\n  label.toggle-button(for=attributes.id)\n    input(id=attributes.id, type=\"radio\")&attributes(attributes)\n    span.buttonShape= labelText"};
;var locals_for_with = (locals || {});(function (Object, applyTDStyles, arguments, isNaN, parseFloat) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fi18n\u002Fi18n.pug";
var i18n={};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en={};
;pug_debug_line = 3;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP={};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI={INFO: {}, WARNING: {}, ERROR: {}, CONTENT: {}, FOOTER: {}, BTN: {}, LABEL: {}, INPUT: {}, SELECT: {}, DIALOG: {}, NAV: {} };
;pug_debug_line = 5;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.TITLE="CyborgIntell";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.NAME="Turing";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD="Incorrect username or password";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS="User not logged in. Cannot retrieve porjects.";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL="Error in retrieving projects";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION={};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN="User not logged in. Cannot create porject.";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT="The following project properties are empty. Cannot create porject.";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC="Error in project creation.";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION={GENERIC: "Error in creating DB Connection"};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC_SUCCESS="DB Connection created successfully";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT="The following DB connection properties are empty. Cannot create DB connection.";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.VALIDATE_FEATURES={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 20;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.EXPLORE_DATA={GENERIC: "Error in fetching features for connection: "};
;pug_debug_line = 21;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG={GENERIC: "Error in fetching report"};
;pug_debug_line = 22;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN="User notlogged in. Cannot fetch report. ";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION={};
;pug_debug_line = 25;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS="Project created successfully.";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION={};
;pug_debug_line = 27;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.DB_CONNECTION.TEST_SUCCESS="DB Connection is working correctly";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES={};
;pug_debug_line = 29;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA={};
;pug_debug_line = 31;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT="Select a project to continue";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD={};
;pug_debug_line = 34;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.TITLE="Dashboard";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT={TEXT: {}};
;pug_debug_line = 36;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.NO_OF_MODELS="Number of models";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.ID="ID";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.PLATFORM="Platform";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.CREATED_ON="Created on";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.PAGE_DASHBOARD.PROJECT.TEXT.TYPE="Type";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES={};
;pug_debug_line = 42;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.VALIDATE_FEATURES.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 43;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA={};
;pug_debug_line = 44;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.EXPLORE_DATA.BULK_UPDATE={TEXT: "Update role for selected features to "}
;pug_debug_line = 46;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB={};
;pug_debug_line = 47;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.BREADCRUMB.DASHBOARD="Dashboard";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE={};
;pug_debug_line = 50;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.CLASSIFICATION="Classification";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.PREDICTION="Prediction";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.ESTIMATION="Estimation";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.CONTENT.TAGLINE.OPTIMIZATION="Optimization";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS={};
;pug_debug_line = 56;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS="Getting projects...";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT="Creating new project...";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN= "Logging in...";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION="Creating new connection..."
;pug_debug_line = 60;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION="Testing new connection..."
;pug_debug_line = 61;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES="Fetching features list..."
;pug_debug_line = 63;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.OPEN_NAVIGATION={TITLE: "Open navigation"};
;pug_debug_line = 64;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.PIN_NAVIGATION={TITLE: "Pin navigation"};
;pug_debug_line = 65;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.LOGIN={TEXT:"Login", TITLE: "Login"};
;pug_debug_line = 66;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT={TEXT:"New project", TITLE: "New project"};
;pug_debug_line = 67;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG={};
;pug_debug_line = 68;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CREATE={TEXT: "Create", TITLE: "Create new project"};
;pug_debug_line = 69;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CREATE_PROJECT_DLG.CANCEL={TEXT: "Cancel", TITLE: "Cancel"};
;pug_debug_line = 70;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB={};
;pug_debug_line = 71;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 72;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.CONNECT_DB.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 73;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE={};
;pug_debug_line = 74;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.TEST={TEXT: "Test", TITLE: "Test"};
;pug_debug_line = 75;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.NEXT={TEXT: "Next", TITLE: "Next"};
;pug_debug_line = 76;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.BTN.UPLOAD_FILE.BROWSE={TEXT: "Browse...", TITLE: "Browse..."};
;pug_debug_line = 78;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_USERNAME={LABEL: "Username", PLACEHOLDER:"user@example.com"};
;pug_debug_line = 79;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_PASSWORD={LABEL: "Password", PLACEHOLDER:"⬤⬤⬤⬤⬤⬤⬤⬤⬤"};
;pug_debug_line = 80;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.LOGIN_REMEMBER_ME={LABEL: "Remember me"};
;pug_debug_line = 81;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG={};
;pug_debug_line = 82;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.PROJECT_NAME={LABEL: "Project name"};
;pug_debug_line = 83;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CREATE_PROJECT_DLG.DESCRIPTION={LABEL: "Description"};
;pug_debug_line = 84;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB={};
;pug_debug_line = 85;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.EXISTING_CONNECTION={LABEL: "Existing connection"};
;pug_debug_line = 86;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_CONNECTION={LABEL: "New connection"};
;pug_debug_line = 87;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.NEW_NAMED_CONNECTION={LABEL: "Connection name"};
;pug_debug_line = 88;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_NAME={LABEL: "Database name"};
;pug_debug_line = 89;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.TABLE_NAME={LABEL: "Table name"};
;pug_debug_line = 90;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DB_SERVER_NAME={LABEL: "DB Server IP address"};
;pug_debug_line = 91;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PORT_NUMBER={LABEL: "Port number"};
;pug_debug_line = 92;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.USERNAME={LABEL: "DB username"};
;pug_debug_line = 93;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.PASSWORD={LABEL: "DB password"};
;pug_debug_line = 94;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.CONNECT_DB.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 95;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE={};
;pug_debug_line = 96;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.CONNECTION_NAME="Name for conneciton";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.SPECIFY_MESSAGE="File location on the server";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE1="or drag & drop a file into this space to upload it.";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DND_MESSAGE2="Browse";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.ALLOWED_FILES_MESSAGE="File types supported: CSV, TSV, XML, XLSX";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.DEV_OR_PROD={LABEL_MAIN: "Use this dataset for", LABEL_LEFT: "Development", LABEL_RIGHT: "Production" };
;pug_debug_line = 102;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.INPUT.UPLOAD_FILE.BROWSE_BUTTON="Browse...";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG={};
;pug_debug_line = 106;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE={LABEL: "Project Type"};
;pug_debug_line = 107;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PROJECT_TYPE.OPTIONS={CLASSIFICATION: "Classification", ML: "ML", PREDICTION: "Prediction", ESTIMATION: "Estimation", OPTIMIZATION: "Optimization"}
;pug_debug_line = 108;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM={LABEL: "Platform"};
;pug_debug_line = 109;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CREATE_PROJECT_DLG.PLATFORM.OPTIONS={INHOUSE: "In-house", CI_CLOUD: "CI Cloud"}
;pug_debug_line = 110;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB={};
;pug_debug_line = 111;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.NAMED_CONNECTION={LABEL: "Pick a named connection"}
;pug_debug_line = 113;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE={LABEL: "Database type"};
;pug_debug_line = 114;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.SELECT.CONNECT_DB.DB_TYPE.OPTIONS={ORACLE: "Oracle", MYSQL: "MySQL", POSTGRESQL: "PostgreSQL", HIVE: "Hive"}
;pug_debug_line = 116;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.LOGIN={TITLE: "Login"};
;pug_debug_line = 117;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CREATE_PROJECT={TITLE: "New Project"};
;pug_debug_line = 118;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.CONNECT_DB={TITLE: "Connect to Database"};
;pug_debug_line = 119;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.DIALOG.UPLOAD_FILE={TITLE: "Flat File Connection"};
;pug_debug_line = 121;pug_debug_filename = "src\u002Fi18n\u002Fen.pug";
i18n.en.APP.UI.NAV.DASHBOARD={TEXT: "Dashboard"};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_mixins["onOff"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("class", pug_classes(["on-off",(attributes.type=="checkbox"?"has-checkbox":"has-radio")], [false,true]), false, false)+pug_attr("for", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp));
;pug_debug_line = 3;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"id": pug_escape(attributes.id)},attributes]), false)) + "\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cspan class=\"indicator\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var data=arguments[0].data; 
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var headerText=arguments[0].headerText?arguments[0].headerText:null; 
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var hasSelectionCol=arguments[0].hasSelectionCol?arguments[0].hasSelectionCol:false;
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var hasSelectAll=arguments[0].hasSelectAll?arguments[0].hasSelectAll:false;
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var hasActionsColumn=arguments[0].hasActionsColumn?arguments[0].hasActionsColumn:false;
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var actions=arguments[0].actions && typeof arguments[0].actions == "function"?arguments[0].actions : function(){return "";};
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var tableAttributes=arguments[0].tableAttributes;
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var headerKeys=arguments[0].headerKeys;
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var headerText=arguments[0].headerText;
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
var applyTDStyle=arguments[0].applyTDStyle;
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctable" + (pug_attrs(pug_merge([{"style": pug_escape(pug_style(`--row-count: ${data.length}; --col-count: ${headerKeys.length}`))},tableAttributes]), false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (headerText) {
}
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctr class=\"headerRow\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let startCol=0;
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if ((hasSelectionCol && !hasSelectAll)) {
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
startCol=1;
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Cth colspan=\"2\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = headerText[0]) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
else
if ((hasSelectionCol && hasSelectAll)) {
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Cth class=\"select\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_mixins["onOff"].call({
attributes: {"class": "selectAll","type": "checkbox"}
}, "");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E";
}
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
for (let i=startCol; i<headerText.length; i++){
{
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Cth" + (pug_attr("class", pug_classes(["sort",headerKeys[i]], [false,true]), false, false)+pug_attr("data-sort", headerKeys[i], true, false)+pug_attr("data-key", headerKeys[i], true, false)) + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = headerText[i]) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctbody class=\"list\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {
      for (var rowIndex = 0, $$l = $$obj.length; rowIndex < $$l; rowIndex++) {
        var row = $$obj[rowIndex];
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let rowLength = Object.keys(row).length;
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (hasSelectionCol) {
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd class=\"select\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_mixins["onOff"].call({
attributes: {"type": "checkbox","id": pug_escape("onOff-"+rowIndex)}
}, "");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
}
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let index=0;
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
// iterate headerKeys
;(function(){
  var $$obj = headerKeys;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var key = $$obj[index];
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let item=row[key];
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if ((hasActionsColumn && index == rowLength - 1)) {
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let actionsHTML=""+actions(rowIndex);
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd class=\"actions\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (null == (pug_interp = actionsHTML) ? "" : pug_interp) + "\u003C\u002Ftd\u003E";
}
else {
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let isNumber=false;
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let attr=key.replace(/\s+/g, "_");
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (!isNaN(item)){
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
item=parseFloat(""+item).toFixed(2);
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (item == "NaN"){item = "";}
;pug_debug_line = 50;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
isNumber=true;
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
}
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([attr,(isNumber?"number":"nan")], [true,true]), false, false)+pug_attr("data-key", attr, true, false)+pug_attr("data-val", item, true, false)+pug_attr("style", pug_style((isNumber&&applyTDStyles?"text-align: right;justify-content:flex-end; padding-right: 3px;":"")), true, false)) + "\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var key = $$obj[index];
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let item=row[key];
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if ((hasActionsColumn && index == rowLength - 1)) {
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let actionsHTML=""+actions(rowIndex);
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd class=\"actions\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (null == (pug_interp = actionsHTML) ? "" : pug_interp) + "\u003C\u002Ftd\u003E";
}
else {
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let isNumber=false;
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let attr=key.replace(/\s+/g, "_");
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (!isNaN(item)){
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
item=parseFloat(""+item).toFixed(2);
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (item == "NaN"){item = "";}
;pug_debug_line = 50;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
isNumber=true;
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
}
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([attr,(isNumber?"number":"nan")], [true,true]), false, false)+pug_attr("data-key", attr, true, false)+pug_attr("data-val", item, true, false)+pug_attr("style", pug_style((isNumber&&applyTDStyles?"text-align: right;justify-content:flex-end; padding-right: 3px;":"")), true, false)) + "\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var rowIndex in $$obj) {
      $$l++;
      var row = $$obj[rowIndex];
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let rowLength = Object.keys(row).length;
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (hasSelectionCol) {
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd class=\"select\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_mixins["onOff"].call({
attributes: {"type": "checkbox","id": pug_escape("onOff-"+rowIndex)}
}, "");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
}
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let index=0;
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
// iterate headerKeys
;(function(){
  var $$obj = headerKeys;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var key = $$obj[index];
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let item=row[key];
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if ((hasActionsColumn && index == rowLength - 1)) {
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let actionsHTML=""+actions(rowIndex);
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd class=\"actions\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (null == (pug_interp = actionsHTML) ? "" : pug_interp) + "\u003C\u002Ftd\u003E";
}
else {
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let isNumber=false;
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let attr=key.replace(/\s+/g, "_");
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (!isNaN(item)){
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
item=parseFloat(""+item).toFixed(2);
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (item == "NaN"){item = "";}
;pug_debug_line = 50;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
isNumber=true;
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
}
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([attr,(isNumber?"number":"nan")], [true,true]), false, false)+pug_attr("data-key", attr, true, false)+pug_attr("data-val", item, true, false)+pug_attr("style", pug_style((isNumber&&applyTDStyles?"text-align: right;justify-content:flex-end; padding-right: 3px;":"")), true, false)) + "\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var key = $$obj[index];
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let item=row[key];
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if ((hasActionsColumn && index == rowLength - 1)) {
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let actionsHTML=""+actions(rowIndex);
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd class=\"actions\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (null == (pug_interp = actionsHTML) ? "" : pug_interp) + "\u003C\u002Ftd\u003E";
}
else {
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let isNumber=false;
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
let attr=key.replace(/\s+/g, "_");
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (!isNaN(item)){
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
item=parseFloat(""+item).toFixed(2);
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
if (item == "NaN"){item = "";}
;pug_debug_line = 50;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
isNumber=true;
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
}
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([attr,(isNumber?"number":"nan")], [true,true]), false, false)+pug_attr("data-key", attr, true, false)+pug_attr("data-val", item, true, false)+pug_attr("style", pug_style((isNumber&&applyTDStyles?"text-align: right;justify-content:flex-end; padding-right: 3px;":"")), true, false)) + "\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Ftable.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";}.call(this,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"applyTDStyles" in locals_for_with?locals_for_with.applyTDStyles:typeof applyTDStyles!=="undefined"?applyTDStyles:undefined,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined,"isNaN" in locals_for_with?locals_for_with.isNaN:typeof isNaN!=="undefined"?isNaN:undefined,"parseFloat" in locals_for_with?locals_for_with.parseFloat:typeof parseFloat!=="undefined"?parseFloat:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function togglebuttonTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002FtoggleButton.pug":"include ..\u002Fincludes\u002FstyledOnOff\n\n+toggleButton(arguments[0].text)(id=arguments[0].id, name=arguments[0].name, class=arguments[0].class, checked=arguments[0].checked?\"checked\":false, extra=arguments[0].extra?arguments[0].extra:false)","src\u002Fincludes\u002FstyledOnOff.pug":"mixin onOff(labelText)\n  label.on-off(for=attributes.id, class=(attributes.type==\"checkbox\"?\"has-checkbox\":\"has-radio\"))= labelText\n    input(id=attributes.id)&attributes(attributes)\n    span.indicator\n\nmixin toggleButton(labelText)\n  label.toggle-button(for=attributes.id)\n    input(id=attributes.id, type=\"radio\")&attributes(attributes)\n    span.buttonShape= labelText"};
;var locals_for_with = (locals || {});(function (arguments) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";











;pug_debug_line = 6;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_mixins["toggleButton"] = pug_interp = function(labelText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 7;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-button\""+pug_attr("for", attributes.id, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"id": pug_escape(attributes.id),"type": "radio"},attributes]), false)) + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + "\u003Cspan class=\"buttonShape\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fincludes\u002FstyledOnOff.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = labelText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002FtoggleButton.pug";
pug_mixins["toggleButton"].call({
attributes: {"class": pug_classes([arguments[0].class], [true]),"id": pug_escape(arguments[0].id),"name": pug_escape(arguments[0].name),"checked": pug_escape(arguments[0].checked?"checked":false),"extra": pug_escape(arguments[0].extra?arguments[0].extra:false)}
}, arguments[0].text);}.call(this,"arguments" in locals_for_with?locals_for_with.arguments:typeof arguments!=="undefined"?arguments:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}