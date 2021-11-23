import { hello, hi } from "./greetings/functions.js";
import qualquerCoisa from "./greetings/functions.js";

import { formatDate } from "./formatters.js";

import { sum } from "./helpers.js";

// const { hello } = require("./greetings/functions.js");

hello();
hi();
qualquerCoisa();

console.log(new Date());
console.log(formatDate(new Date()));
console.log(sum(2, 2));
