"use strict";
/*Suppose we have 20 files and from that we want to compile or convert only 10 files.
So With the above statement we means that we only want to include 10 files from 20 files
Or we want to exclude 10 files from 20 files.*/
/* So for doing this generate tsconfig.json with the help of tsc -init command.

And Then inside our tsconfig.json file we gonna do the things we are discussing above.

For testing this we gonna make some smaple files.

We have made 3 sample files sample1.ts , sample2.ts and sample3.ts and now we want to compile and convert
only 2 files sample1.ts and sample2.ts , so for doing this go to tsconfig.json.

If we run tsc -w in our terminal then all our ts files will gonna be convert into js files , but here we
want to convert only 2 files so for that go to tsconfig.json.*/
// Inside tsconfig.json scroll to the botton and type "exclude " : ["Sample3"]
/*Now when we type tsc -w inside our terminal then only Sample1 and Sample2.ts will be compiled and coverted
and Sample3.ts will be completely ignored.

Similarly we can add more files if we want to just type the name of that file in to the array we made.

And if we want we can also add a folder name also so by this that folder will be ignored completely and
all the files inside of that folder will be ignored completely.

Suppose if we want to ignore a specific a file from a specific folder we can also do that just write the
name of folder then slash(/) and then the complete name of the file.
For ex - CompileMultipleFiles/Sample1.ts this is how we can ignore a specific file from a specific folder.

This is the benefit of using exclude */
/*Now similarly from so many files we just want to compile or convert  only 1 or 2 files so for doing this
we will again go to the tsconfig.json and where we made our exclude array , just below that make an
include error.

Suppose if we want to compile or convert only Sample1.ts so for doing this type "include" : ["Sample1.ts"]
and now when we type tsc -w only Sample1.ts file will be compiled or converted and rest of the files
will be completely ignored.
*/
