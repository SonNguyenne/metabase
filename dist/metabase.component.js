"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetabaseComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const keys_1 = require("./keys");
const metabase_service_1 = require("./services/metabase.service");
let MetabaseComponent = class MetabaseComponent {
    constructor(app) {
        this.bindings = [
            core_1.Binding.bind(keys_1.MetabaseServiceBindings.METABASE).toClass(metabase_service_1.MetabaseService)
        ];
    }
};
MetabaseComponent = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__metadata("design:paramtypes", [core_1.Application])
], MetabaseComponent);
exports.MetabaseComponent = MetabaseComponent;
//# sourceMappingURL=metabase.component.js.map