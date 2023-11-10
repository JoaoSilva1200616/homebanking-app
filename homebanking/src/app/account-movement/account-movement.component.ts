import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { UserData } from '../dto/user-data';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TransactionData } from '../dto/transaction-data';

@Component({
  selector: 'app-account-movement',
  templateUrl: './account-movement.component.html',
  styleUrls: ['./account-movement.component.css'],
})
export class AccountMovementComponent {
  // ViewChild decorators for accessing Angular Material components
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Input property to receive the user data from the parent component
  @Input() user: UserData | undefined;

  // Columns displayed in the table. Columns IDs can be added, removed, or reordered.
  displayedColumns: string[] = ['money', 'type', 'date'];

  // MatTableDataSource for handling the data source of the table
  dataSource: MatTableDataSource<TransactionData> = new MatTableDataSource(); // Create a MatTableDataSource

  // Constructor with dependency injection
  constructor(private authService: AuthService) {
    this.user = authService.getLoggedInUser();
  }

  ngAfterViewInit() {
    // Set the paginator and sort components for the data source after the view has been initialized
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    // Initialize the data source with the user's transactions
    this.dataSource.data = this.user?.transactions || [];
  }

}
