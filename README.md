# Minimal JS Logger

### Description

There is minimal and lightweight logger to log and save **events** or **data** or etc .

For example you want to save the **req.body** into your logs as **notice**.

Or you want to log the **errors** in the try catch as **error**.

Or you want to log the **failure database** as **critical**.

### Usage

To use this logger, you must import the library and create an instance (for example `loggerInstance` ).

Then pass the directory to save and log the file.

```javascript
const logger = require('./logger')

const loggerInstance = new logger({ path: "/path/to/log_directory" })
```

Then by using the instance, you can write sample logs with the `write` function.

In the **write** function you can pass **two argument** like :

  1. `message` : text ( might contain a message or warning message or failure to cause ) that you want to log to the file 
  2. `severity` : a piece of information telling how important a given log message is . 

```javascript
loggerInstance.write('logger started !', 'notice')
```

### Result

After you run the steps above, you can fine the directory in the path argument that you pass in the step create instance. (for example `./logs`)

Then you can find several log files that are separated by **(month + day)**.


It helps you that find events and logs per date (month and day). 