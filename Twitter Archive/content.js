///this application lets you right click a twitter image and save it as native resolution, because twitter compresses their images by default.

// log debug creation statement
function onCreated() {
    console.log("Context menu item created successfully");
}

// create the context menu item
const archiveMenuItem = "Download Tweet";

// function to handle archive button click
async function handleArchiveButtonClick(info) {
    console.log("Archive button clicked");
    doLogic(info, "Download Tweet");
}

// install the menu item
browser.runtime.onInstalled.addListener(async () => {
    await browser.menus.create({
        id: archiveMenuItem,
        title: archiveMenuItem,
        contexts: ["all"],
    }, onCreated);
    console.log("Archive menu item installed");
});

// function to handle the logic when an item is clicked
async function doLogic(info, string) {
    //log the click
    console.log("clicked " + string + " button!");

    // Replace "small" with "large" in the URL
    //const newUrl = info.srcUrl.replace("small", "large");

    //get the index of the name part of the url
    const nameIndex = info.srcUrl.indexOf("&name=");

    //remove everything past the name= part of the url and replace it with "&name=4096x4096"
    const newUrl = info.srcUrl.substring(0, nameIndex) + "&name=4096x4096";

    console.log("new url: " + newUrl);

    //open a new tab with the image (on the new link)
    let newTab = await browser.tabs.create({url: newUrl, active: false});

    //take the tab and turn it into a string so we can get the format type
    var tab = newUrl.toString();
    console.log("new tab: " + tab);

    //get the format type
    var format = tab.indexOf("?format=") + "?format=".length;
    var after = tab.indexOf("&name=");
    var type = tab.substring(format, after);

    console.log("format: " + type);

    //save the image
    browser.downloads.download({
        url: newUrl,
        filename: "image." + type,
        saveAs: true
    })

    //click the back arrow to go back to the original tab
    await browser.tabs.remove(newTab.id);
}

// add logic to the browser menu item click
browser.menus.onClicked.addListener((info, string) => {
    if (info.menuItemId === archiveMenuItem) {
        handleArchiveButtonClick(info, string);
    }
});
