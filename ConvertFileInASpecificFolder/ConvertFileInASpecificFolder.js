"use strict";
/*We have seen that whenever we compile or convert any ts file into the js file that file directly made above
on the file and this seems so unprofessional , so if we want that the converted files should be shown inside
a specific folder , so we can do this with the help of tsconfig.json which we can generate with the help of
tsc init , so after generating this file , scroll down and we will find option
"outdir"  so for the purpose we are talking above have to use "outdir" just mention the root of
the folder inside which we want to see our converted files and thats it.*/
/*Similarly there is also an option of "rootdir" which is used whenever we want to compile or
convert files of only specific folder so in this case just mention the root of that folder and thats it
only that folder files will be compiled or converted into js files.*/
/*If we use both of the above together then whatever will be the folder inside our "outdir" , the folder which
will be inside "rootdir" those compiled files will be shown inside "outdir" folder.*/ 
