# streams
A practice react and redux application that is similar to a popular streaming site

Download OBS: https://obsproject.com/download
Go to OBS File -> Settings -> Stream

Follow the directions here under "From OBS"
https://github.com/illuspas/Node-Media-Server#from-obs
The STREAM_NAME will be the ID of the stream you create
(The URL when you click on your stream will show the id at the end, i.e. 'localhost:3000/streams/{id})

To get it working you need to run the command 'npm start' in your terminal in 3 locations:
in streams\client,
in streams\api,
in streams\rtmpserver

After that, start streaming in OBS and you can see it on the appropriate stream on the website.