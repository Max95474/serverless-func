Start server:

```
npm install
node app.js
```
Server starts to listen on 3000 port

Use POST http://localhost:3000/action?type=<filetype> to upload a file.
File type can be either "js", "bin" or "tar" in case of archived docker container

Use http://localhost:3000/action/:actionId to invoke your function
passing passing function parameters in query

```func``` is a cli tool to upload your scripts or executables

Usage:

```
./func [type] [filename]
```

type: js | bin | tar

### **Important!**

Any deviation from usage instructions most likely will result in error.