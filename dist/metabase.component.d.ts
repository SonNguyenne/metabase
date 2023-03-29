import { Application, Binding, Component } from "@loopback/core";
export declare class MetabaseComponent implements Component {
    bindings: Binding<unknown>[];
    constructor(app: Application);
}
