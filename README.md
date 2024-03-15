# Firefox-Tweet-Downloader
 An addon for firefox that lets you download tweets at their native resolutions.

# Addon Use
This addon will create a download button on your Right-Click menu <br />
![image](https://github.com/DiamondBullet54/Firefox-Tweet-Downloader/assets/93168049/b71c180c-10cc-46cf-b3f8-8389bc8a916e)<br />
<br />
Simply right click an image and it will let you download it as the native file type <br />
![image](https://github.com/DiamondBullet54/Firefox-Tweet-Downloader/assets/93168049/351379b7-2dc5-4e0b-a56b-06d8149f2a32)<br />
<br />
This also works with the media tab on an account <br />
![image](https://github.com/DiamondBullet54/Firefox-Tweet-Downloader/assets/93168049/40c89d66-864c-4e3a-b289-c59f8f894346)


# How it works
This addon works by opening up a new background tab based on the image link provided. <br />
Twitter compresses images and has multiple links based on the size of the image you want. <br />
The largest image size possible is 4096x4096, so we replace the default "small" in the link with 4096x4096. <br />
We then can save the image in native resolution without compression automatically!
