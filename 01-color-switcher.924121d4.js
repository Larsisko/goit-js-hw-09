!function(){var t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),e=null;t.addEventListener("click",(function(){e=setInterval((function(){var o="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=o,console.log("jazda"),t.disabled=!0}),1e3)})),o.addEventListener("click",(function(){clearInterval(e),t.disabled=!1,console.log("finito")}))}();
//# sourceMappingURL=01-color-switcher.924121d4.js.map