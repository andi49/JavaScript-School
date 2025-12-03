import { textWork } from "./addelement.js";
import { displayRes } from "./displayresult.js";
import { MultiPly, AddeTion } from "./calculator.js";

import { createIMG } from "./display.js";
import { getArgu } from "./dogapi.js";

textWork()
displayRes(MultiPly(2,5))

getArgu('husky').then(data => {
   createIMG(data)
}) 


