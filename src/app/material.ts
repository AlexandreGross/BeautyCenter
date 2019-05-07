import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatTableModule, MatTabsModule, MatPaginatorModule,
    MatInputModule, MatDialogModule, MatCardModule, MatButtonToggleModule, MatListModule, MatExpansionModule],
    exports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatTableModule, MatTabsModule, MatPaginatorModule,
        MatInputModule, MatDialogModule, MatCardModule, MatButtonToggleModule, MatListModule, MatExpansionModule],
    })

export class MaterialModule { }