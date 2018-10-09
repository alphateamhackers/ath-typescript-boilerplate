
import ExampleComponentSDK from "./ExampleComponentSDK";
import { ATH } from "./types";

export default class ExampleComponent {
    constructor(private _domID: string, private _apiUrl: string) {
        this._el = document.getElementById(_domID);
        this._sdk = new ExampleComponentSDK(_apiUrl);

        this.init();
    }

    private _el: HTMLElement;
    private _sdk: ExampleComponentSDK;

    private init() {
        this.constructView();
    }

    private constructView() {
        const viewWrapper = document.createElement("div");

        const header = document.createElement("h1");

        header.innerText = "Hello World!";

        viewWrapper.appendChild(header);

        this._el.appendChild(viewWrapper);
    }
}
