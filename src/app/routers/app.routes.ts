import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {FacesComponent} from "../components/faces/faces.component";
import {DetectComponent} from "../components/faces/detect/detect.component";
import {VerifyComponent} from "../components/faces/verify/verify.component";
import {UploadComponent} from "../components/faces/upload/upload.component";
import {GroupComponent} from "../components/faces/group/group.component";
import {SimilarityComponent} from "../components/faces/similarity/similarity.component";
import {TrainComponent} from "../components/faces/train/train.component";
import {IdentifyComponent} from "../components/faces/identify/identify.component";


const appRoutes: Routes =
  [
    {path:'home',component: HomeComponent},
    {
      path:'faces',
      component:FacesComponent,
      children:
        [
          {
            path: 'detect',
            component:DetectComponent
          },
          {
            path: 'verify',
            component: VerifyComponent
          },
          {
            path: 'upload',
            component: UploadComponent
          },
          {
            path: 'group',
            component: GroupComponent
          },
          {
            path: 'similarity',
            component: SimilarityComponent
          },
          {
            path: 'train',
            component: TrainComponent
          },
          {
            path: 'identify',
            component: IdentifyComponent
          },
          {
            path:'',
            redirectTo:'upload',
            pathMatch:'full'
          }
        ]
    },
    { path: '', redirectTo: 'home',pathMatch:'full' },
    { path: '**', redirectTo: 'home',pathMatch:'full' }
  ];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
