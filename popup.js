
const btn = document.querySelector('#saveapi');
const apikey = document.querySelector('#apikey');

btn.addEventListener('click', async () =>{



chrome.storage.local.set({ 'apikey': apikey.value }).then(() => {
    console.log('Value is set to ' + apikey.value);
  });

});



  
  chrome.storage.local.get(["apikey"]).then((result) => {
    
    console.log("Value currently is " + result.apikey);

  
  document.getElementById("localkey").textContent = result.apikey;

  


})


  