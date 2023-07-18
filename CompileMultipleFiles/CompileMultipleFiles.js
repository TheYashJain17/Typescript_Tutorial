"use strict";
/*Suppose we have made so many typescript files and now we want to convert them all at once or in a single go
into the javascript files or we have made some changes in many ts files and now we want to compile all of them
together or in a single go.

So for doing the above thing we first have to generate a tsconfig.json file which we can generate by writing
tsc -init inside our terminal.

And now for compiling all ts files together type
tsc --watch or tsc -w inside our terminal

Above command will compile all the ts files as well as also convert them into js files.*/
/*And Also if there would be any error inside our any ts files we will get that error in our terminal
and whenever we will solve that error and will save that file our error will be gone and our file will be
recompiled and changes will be shown inside js files.*/ 
