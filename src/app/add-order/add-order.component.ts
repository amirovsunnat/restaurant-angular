import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent {
  @Output() orderAdded = new EventEmitter<any>();

  products = [
    { name: 'Pizza', price: 12 },
    { name: 'Burger', price: 8 },
    { name: 'Pasta', price: 10 },
    { name: 'Salad', price: 6 }
  ];

  selectedProduct = this.products[0];
  quantity: number = 1;

  addItem() {
    const total = this.selectedProduct.price * this.quantity;
    const newItem = {
      product: this.selectedProduct.name,
      price: this.selectedProduct.price,
      quantity: this.quantity,
      total
    };
    this.orderAdded.emit(newItem); // Emit the new item
    this.quantity = 1; // Reset quantity
  }
}
