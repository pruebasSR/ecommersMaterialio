import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatIcon } from '@angular/material/icon';
 import { MatBadgeModule } from '@angular/material/badge';
 import { MatCardModule } from '@angular/material/card';
 import { MatInputModule } from '@angular/material/input';
 import { MatSelectModule } from '@angular/material/select';
 import { MatRadioModule } from '@angular/material/radio';
//  import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    // MatIcon
    // MatBadge
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    // ReactiveFormsModule 
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    // MatIcon
    // MatBadge
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    // ReactiveFormsModule
  ]
})
export class MaterialModule { }
