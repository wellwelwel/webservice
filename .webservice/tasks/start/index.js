"use strict";

const { sh } = require('../../modules/sh');
const watchClose = require('../../modules/watch-close');
const now = require('../../modules/now');
const autoDeploy = require('./autoDeploy');

(async () => {

   await watchClose();
   
   console.clear();
   const success = await autoDeploy();

   if (!success) return;

   console.log(`${sh.reset}🧟  Watching${sh.reset} ${sh.cyan}YOU${sh.reset}${sh.dim} (since ${sh.dim}${now()})${sh.reset}${sh.cyan} ...${sh.reset}\n`);
})();