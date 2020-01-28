import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedMaterialcComponent } from "./shared-materialc/shared-materialc.component";

@NgModule({
  declarations: [SharedMaterialcComponent],
  exports: [SharedMaterialcComponent],
  imports: [CommonModule]
})
export class SharedmaterialModule {}
