import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnChanges {
  @Input() orders: { product: string; price: number; quantity: number; total: number }[] = [];
  @Input() taxRate: number = 0;

  @Input() subtotal: number = 0;
  @Input() tax: number = 0;
  @Input() overallTotal: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    // No need for calculations here anymore since totals are calculated in AppComponent
  }
}
