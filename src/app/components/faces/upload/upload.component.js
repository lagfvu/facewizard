"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ngx_uploader_1 = require("ngx-uploader");
var UploadComponent = (function () {
    function UploadComponent(zone) {
        this.zone = zone;
        this.options = new ngx_uploader_1.NgUploaderOptions({
            url: 'node_modules/ngx-uploader/ngx-uploader.js'
        });
    }
    UploadComponent.prototype.handleUpload = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.zone.run(function () {
                _this.response = data;
                if (data && data.response) {
                    _this.response = JSON.parse(data.response);
                }
            });
        });
    };
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.ngOnInit = function () { };
    UploadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-upload',
            templateUrl: './upload.component.html',
            styleUrls: ['./upload.component.css']
        }),
        __param(0, core_1.Inject(core_1.NgZone)), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map