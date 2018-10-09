
import ExampleComponent from "./ExampleComponent";
import { ATH } from "./types";

declare var window: any;

const athComponentRegister: ExampleComponent[] = [];

const bootstrap = (opts: ATH.BootstrapOpts) => {
    opts = opts || {};


    if (!opts.domID) {
        throw new Error("ATH Component: Missing 'domId' in initialization options.");
    }

    if (!opts.apiUrl) {
        throw new Error("ATH Component: Missing 'apiUrl' in initialization options.");
    }

    athComponentRegister.push(new ExampleComponent(opts.domID, opts.apiUrl));
};

window.athComponent = {
    bootstrap
};
