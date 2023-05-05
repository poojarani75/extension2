chrome.runtime.onInstalled.addListener(() =>{
  console.log("this is comimg from the background script");



chrome.contextMenus.create({
  id: "test",
  title: " hey this contextmenue",
  type: 'normal',
  context:['selection']
});


chrome.bookmarks.onCreated.addListener(function(){
  console.log("a bookmark is created")
});

});