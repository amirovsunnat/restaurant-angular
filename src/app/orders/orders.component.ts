import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() orders: { product: string; quantity: number; totalPrice: number }[] = [];
}
