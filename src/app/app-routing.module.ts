import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule)
  },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
