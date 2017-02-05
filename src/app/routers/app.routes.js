"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("../components/home/home.component");
var faces_component_1 = require("../components/faces/faces.component");
var detect_component_1 = require("../components/faces/detect/detect.component");
var verify_component_1 = require("../components/faces/verify/verify.component");
var upload_component_1 = require("../components/faces/upload/upload.component");
var group_component_1 = require("../components/faces/group/group.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'faces',
        component: faces_component_1.FacesComponent,
        children: [
            {
                path: 'detect',
                component: detect_component_1.DetectComponent
            },
            {
                path: 'verify',
                component: verify_component_1.VerifyComponent
            },
            {
                path: 'upload',
                component: upload_component_1.UploadComponent
            },
            {
                path: 'group',
                component: group_component_1.GroupComponent
            },
            {
                path: '',
                redirectTo: 'upload',
                pathMatch: 'full'
            }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map