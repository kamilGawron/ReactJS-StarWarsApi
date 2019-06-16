export default function returnDiff(whatToCompare,compareWith){
    let result="";
    if (whatToCompare&&compareWith){
        for (let x in whatToCompare){
            if(whatToCompare[x]!=compareWith[x]){
                result+=whatToCompare[x];
            }
        }
    }

    return result;
}