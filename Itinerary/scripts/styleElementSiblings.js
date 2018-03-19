function styleElementSiblings(tag, theclass){
  if(!document.getElementByTagName) return false;
  var elems = document.getElementByTagName(tag);
  var elem;
  for(var i =0; i<elems.length;i++){
    elem = getNextElement(elems[i].nextSibling);
    addClass(elem, theclass);
  }
}
function getNextElement(node){
  if(node.nodeType ==1 ){
    return node;
  }
  if(node.nextSibling){
    return getNextElement(node.nextSibling);
  }
  return null;
}

addLoadEvent(function(){
  styleElementSiblings("h1","intro");
})
