import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddOrderComponent, OrderSummaryComponent, ConfirmationModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Restaurant Order System'; 
  orders: { product: string; price: number; quantity: number; total: number }[] = [];
  showModal: boolean = false; // Controls visibility of confirmation modal
  overallTotal: number = 0; // Total amount to show in modal
  subtotal: number = 0; // Subtotal for the order summary
  tax: number = 0; // Tax amount for the order summary
  taxRate: number = 5; // Tax rate percentage

  // Capture orders emitted from the AddOrderComponent
  addOrder(order: { product: string; price: number; quantity: number; total: number }) {
    this.orders.push(order); // Update the orders list with the new order
    this.calculateTotals(); // Recalculate totals whenever an order is added
  }

  // Show the confirmation modal when the place order button is clicked
  placeOrder() {
    if (this.orders.length > 0) {
      this.overallTotal = this.calculateTotal(); // Calculate total when placing order
      this.showModal = true;
    }
  }

  confirmOrder() {
    console.log('Order confirmed:', this.orders);
    this.orders = []; // Clear orders after confirmation
    this.showModal = false; // Hide modal after confirmation
    this.subtotal = 0; // Reset subtotal
    this.tax = 0; // Reset tax
    this.overallTotal = 0; // Reset overall total
  }

  cancelOrder() {
    this.showModal = false; // Hide modal on cancellation
  }

  private calculateTotals() {
    this.subtotal = this.orders.reduce((acc, order) => acc + order.total, 0);
    this.tax = (this.subtotal * this.taxRate) / 100;
    this.overallTotal = this.subtotal + this.tax;
  }

  private calculateTotal(): number {
    return this.orders.reduce((acc, order) => acc + order.total, 0);
  }
}
