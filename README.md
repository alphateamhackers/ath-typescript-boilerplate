# Boilerplate for standalone & lightweight web component

## Intro
This repository contains a minimal set of code required to create your own web component. It does not depend on any frameworks.
One example can be found in /ExampleComponent.ts.

## Install
```
npm install
```

## Build proccess
This script will build the component:
```
npm run build
```

## Running
This script will build and run the server. 
```
npm run start
```

## Example Integration
```html
<html>
    <head>
    <title></title>
    </head>
    <body> 
        <div id="ath-component"></div>

        <script type="text/javascript" src="./ath-component.js">
            window.athComponent.bootstrap({
                domID: "ath-component",
                apiUrl: "https://alphateamhackers.com"
            })
        </script>
    </body>
</html>
```

## Developers
* [Alphateam Hackers GmbH](https://alphateamhackers.com)

contact@alphateamhackers.com

* [Adrian Barwicki](adrianbarwicki.com)


## Licence
MIT# ath-component-boilerplate
