import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to cart page
   */
  async navigateToCart(): Promise<void> {
    await this.navigateTo('https://jupiter.cloud.planittesting.com/#/cart');
  }

  /**
   * Get all items in cart
   */
  async getCartItems(): Promise<any[]> {
    return await this.page.$$eval('tr', rows =>
      rows.map(row => ({
        name: row.querySelector('td:nth-child(1)')?.textContent?.trim(),
        price: row.querySelector('td:nth-child(2)')?.textContent?.trim(),
        quantity: row.querySelector('input[type="number"]')?.getAttribute('value'),
        subtotal: row.querySelector('td:nth-child(4)')?.textContent?.trim()
      }))
    );
  }

  /**
   * Get cart total
   */
  async getCartTotal(): Promise<string> {
    return await this.page.textContent('strong') || '';
  }

  /**
   * Update product quantity in cart
   */
  async updateQuantity(productName: string, quantity: number): Promise<void> {
    const rows = await this.page.$$('tr');
    for (const row of rows) {
      const name = await row.$eval('td:nth-child(1)', el => el.textContent?.trim());
      if (name === productName) {
        const input = await row.$('input[type="number"]');
        if (input) {
          await input.fill(quantity.toString());
        }
        break;
      }
    }
  }

  /**
   * Remove product from cart
   */
  async removeProduct(productName: string): Promise<void> {
    const rows = await this.page.$$('tr');
    for (const row of rows) {
      const name = await row.$eval('td:nth-child(1)', el => el.textContent?.trim());
      if (name === productName) {
        const removeBtn = await row.$('a:has-text("Remove")');
        if (removeBtn) {
          await removeBtn.click();
        }
        break;
      }
    }
  }

  /**
   * Proceed to checkout
   */
  async proceedToCheckout(): Promise<void> {
    await this.clickElement('a:has-text("Proceed")');
  }

  /**
   * Check if cart is empty
   */
  async isCartEmpty(): Promise<boolean> {
    const emptyMessage = await this.page.textContent('body');
    return emptyMessage?.includes('cart is empty') || false;
  }

  /**
   * Get number of items in cart
   */
  async getItemCount(): Promise<number> {
    const rows = await this.page.$$('tr:has(td)');
    return rows.length;
  }
}
