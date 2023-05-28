import{_ as o,o as r,c as a,a as e,b as n,e as i,d as t,r as l}from"./app.d5586ec4.js";const d={},_=i('<h1 id="system-design-\u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E" tabindex="-1"><a class="header-anchor" href="#system-design-\u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E" aria-hidden="true">#</a> System Design \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E</h1><h2 id="system-design" tabindex="-1"><a class="header-anchor" href="#system-design" aria-hidden="true">#</a> System Design</h2><p>\u041D\u0430 \u044D\u0442\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u043D\u0443\u0436\u043D\u043E \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0433\u0438\u043F\u043E\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u0411\u0435\u0437 \u043E\u043F\u044B\u0442\u0430 \u043E\u0447\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E \u0438\u043B\u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E.</p><h3 id="\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430" tabindex="-1"><a class="header-anchor" href="#\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430" aria-hidden="true">#</a> \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430</h3>',4),c={href:"https://vas3k.club/post/15768/#Whiteboard-algoritmy",target:"_blank",rel:"noopener noreferrer"},h=t("\u0415\u0433\u043E\u0440 \u0411\u0438\u0440\u044E\u043A\u043E\u0432 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442"),m=t(" \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0443\u043C\u0435\u043D\u0438\u044F:"),p=i("<ul><li>\u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443</li><li>\u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0449\u0438\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0441\u043A\u043E\u0443\u043F \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F</li><li>\u043D\u0430\u0431\u0440\u043E\u0441\u0430\u0442\u044C \u043E\u0442 \u0440\u0443\u043A\u0438 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C</li><li>\u043D\u0430\u0431\u0440\u043E\u0441\u0430\u0442\u044C \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u044B\u0441\u043E\u043A\u043E\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443, \u043D\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0430\u044F\u0441\u044C \u0432 \u0434\u0435\u0442\u0430\u043B\u0438</li><li>\u043F\u043E\u043D\u044F\u0442\u044C, \u0433\u0434\u0435 \u043D\u0430\u0441 \u043E\u0436\u0438\u0434\u0430\u0435\u0442 \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F</li><li>(\u0441\u0430\u043C\u043E\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435) \u0432\u0441\u043B\u0443\u0445, \u0433\u0440\u043E\u043C\u043A\u043E \u0438 \u0447\u0435\u0442\u043A\u043E \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u043E \u0442\u0440\u0435\u0439\u0434-\u043E\u0444\u0444\u0430\u0445.</li></ul><p>\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0432\u0430\u0436\u043D\u043E:</p><ul><li>\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0432\u043C\u0435\u0449\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0432 45-55 \u043C\u0438\u043D\u0443\u0442</li><li>\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A</li><li>\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u043E\u0442\u0434\u0435\u043B\u044F\u0442\u044C \u0432\u0430\u0436\u043D\u043E\u0435 \u043E\u0442 \u043D\u0435\u0432\u0430\u0436\u043D\u043E\u0433\u043E</li><li>\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0431\u0440\u0430\u0442\u044C \u043D\u0430 \u0441\u0435\u0431\u044F \u0438 \u043F\u0440\u043E\u044F\u0432\u043B\u044F\u0442\u044C \u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0443</li></ul><p>\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0442\u0430\u043A:</p>",4),u=t("\u0418\u0437\u0443\u0447\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0443 "),g={href:"https://www.amazon.com/Understanding-Distributed-Systems-distributed-applications/dp/1838430202",target:"_blank",rel:"noopener noreferrer"},f=t("Understanding Distributed Systems"),b=t("\u0418\u0437\u0443\u0447\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0443 "),y={href:"https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321",target:"_blank",rel:"noopener noreferrer"},w=t("\u041A\u0430\u0431\u0430\u043D - Designing Data-Intensive Applications"),D=t(" - \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E"),k=t("\u041F\u0440\u043E\u0439\u0442\u0438 \u043A\u0443\u0440\u0441 "),S={href:"https://www.educative.io/courses/grokking-the-system-design-interview",target:"_blank",rel:"noopener noreferrer"},v=t("Grokking the System Design Interview"),x=t("\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043D\u0438\u0433\u0443 "),I={href:"https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF/ref=sr_1_2?crid=18KSHJQDMFKMT",target:"_blank",rel:"noopener noreferrer"},B=t("System Design Interview \u2013 An insider's guide"),C=e("li",null,"\u041F\u0440\u043E\u0439\u0442\u0438 \u043C\u043E\u043A-\u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E \u043D\u0430 \u043D\u0443\u0436\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435 (\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",-1),M=i('<p>\u041F\u043B\u0430\u043D \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E \u0441 \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u043C:</p><ul><li>\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \u0437\u0430\u0434\u0430\u0447\u0430, \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438, \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438 \u0442.\u0434. \u2014 <em>5-10 \u043C\u0438\u043D\u0443\u0442</em></li><li>Estimations: storage, \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0430 \u0441\u0435\u0442\u044C \u0438 \u0442.\u0434. \u2014 <em>5 \u043C\u0438\u043D\u0443\u0442</em> -\xA0\u0412\u044B\u0441\u043E\u043A\u043E\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D: \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u044B \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438. \u0426\u0435\u043B\u0438, \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0443\u0437\u043A\u0438\u0435 \u043C\u0435\u0441\u0442\u0430, \u0442\u0440\u0435\u0439\u0434-\u043E\u0444\u0444\u044B \u2014 <em>10 \u043C\u0438\u043D\u0443\u0442</em></li><li>\u0413\u043B\u0443\u0431\u043E\u043A\u043E\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435: \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0447\u0430\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u2014 <em>20 \u043C\u0438\u043D\u0443\u0442</em></li><li>\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435: \u0447\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C, \u043A\u0430\u043A \u0440\u0430\u0441\u0442\u0438, \u043A\u0430\u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u2014 <em>5-10 \u043C\u0438\u043D\u0443\u0442</em></li></ul><div class="custom-container tip"><p class="custom-container-title">\u0421\u041E\u0412\u0415\u0422</p><p>\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \xAB\u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435\xBB: \u043C\u0438\u043D\u0443\u0441\u044B, \u0442\u0440\u0435\u0439\u0434\u043E\u0444\u044B, \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439. \u041C\u0438\u043D\u0438\u043C\u0443\u043C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439, \u043C\u043E\u0436\u043D\u043E \u0443\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044C \u043E\u043F\u044B\u0442.</p></div><h2 id="\u0441\u0441\u044B\u043B\u043A\u0438" tabindex="-1"><a class="header-anchor" href="#\u0441\u0441\u044B\u043B\u043A\u0438" aria-hidden="true">#</a> \u0421\u0441\u044B\u043B\u043A\u0438</h2>',4),E={href:"https://github.com/donnemartin/system-design-primer",target:"_blank",rel:"noopener noreferrer"},N=t("System Design Primer"),T=t(" \u2014 GitHub"),z={href:"https://leetcode.com/discuss/career/229177/My-System-Design-Template",target:"_blank",rel:"noopener noreferrer"},A=t("My System Design Template"),G=t(" \u2014 topcat, LeetCode (2019)"),L={href:"https://www.youtube.com/c/SystemDesignInterview",target:"_blank",rel:"noopener noreferrer"},V=t("System Design Interview"),F=t(" \u2014 YouTube Channel (2020)"),K={href:"https://docs.google.com/document/d/1sA1Pz_vYBEaN0IQUuBLDGi3mSrKBt8tuDOqulGPwuCo/edit",target:"_blank",rel:"noopener noreferrer"},P=t("System Design CheatSheet"),Q=t(" \u2014 \u041D\u0438\u043A\u0438\u0442\u0430 \u0421\u0443\u0431\u0431\u043E\u0442\u0438\u043D");function U(H,Y){const s=l("ExternalLinkIcon");return r(),a("div",null,[_,e("p",null,[e("a",c,[h,n(s)]),m]),p,e("ul",null,[e("li",null,[u,e("a",g,[f,n(s)])]),e("li",null,[b,e("a",y,[w,n(s)]),D]),e("li",null,[k,e("a",S,[v,n(s)])]),e("li",null,[x,e("a",I,[B,n(s)])]),C]),M,e("ul",null,[e("li",null,[e("a",E,[N,n(s)]),T]),e("li",null,[e("a",z,[A,n(s)]),G]),e("li",null,[e("a",L,[V,n(s)]),F]),e("li",null,[e("a",K,[P,n(s)]),Q])])])}var J=o(d,[["render",U],["__file","system-design.html.vue"]]);export{J as default};
