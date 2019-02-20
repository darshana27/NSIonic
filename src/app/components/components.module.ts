import { RatingComponent } from "../components/rating/rating.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, IonicModule.forRoot()],
  declarations: [RatingComponent],
  exports: [RatingComponent],
  entryComponents: []
})
export class ComponentsModule {}
