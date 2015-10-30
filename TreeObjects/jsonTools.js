;(function(){
  function jsonTools(){}
    /*Return tree structure to html view*/
    function readTree(treeObj){
      for(t in treeObj){
        if(treeObj[t] instanceof Object){
          readTree(treeObj[t]);
          continue;
        }
        document.writeln(t + ' => ' + treeObj[t]+'<br>');
      }
    }
    function writeToTree(treeObj,nodeName,nodeValue){
      treeObj[nodeName]=nodeValue;
    }
    //assign funcs
    jsonTools.readTree=readTree;
    jsonTools.writeToTree=writeToTree;

    window._jsonTools=jsonTools;

}());
