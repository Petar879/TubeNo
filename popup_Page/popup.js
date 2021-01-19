document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

function save_options() {
    var preferesDarkMode = document.getElementById("darkMode").checked;
    chrome.storage.local.set(
      {
      darkModeEnabled: preferesDarkMode
      },
    );

    chrome.tabs.reload(function(){});
}
  
function restore_options() {
    chrome.storage.local.get({
      darkModeEnabled: false,
    }, function(items) {
      document.getElementById('darkMode').checked = items.darkModeEnabled;
      
    });
}