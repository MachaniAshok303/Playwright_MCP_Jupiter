import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ShopPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to shop page
   */
  async navigateToShop(): Promise<void> {
    await this.navigateTo('https://jupiter.cloud.planittesting.com/#/shop');
  }

  /**
   * Get all product names
   */
  async getAllProductNames(): Promise<string[]> {
    return await this.page.$$eval('h4', elements =>
      elements.map(el => el.textContent?.trim() || '')
    );
  }

  /**
   * Get all product prices
   */
  async getAllProductPrices(): Promise<string[]> {
    return await this.page.$$eval('p', elements =>
      elements
        .map(el => el.textContent?.trim() || '')
        .filter(text => text.startsWith('$'))
    );
  }

  /**
   * Get product by name
   */
  async getProductByName(productName: string): Promise<any> {
    const products = await this.page.$$eval('li', elements =>
      elements.map(el => ({
        name: el.querySelector('h4')?.textContent?.trim(),
        price: el.querySelector('p')?.textContent?.trim(),
        buyButton: el.querySelector('a')
      }))
    );
    return products.find(p => p.name === productName);
  }

  /**
   * Click Buy button for a specific product
   */
  async buyProduct(productName: string): Promise<void> {
    const buyButtons = await this.page.$$('a:has-text("Buy")');
    const productElements = await this.page.$$('li');

    for (let i = 0; i < productElements.length; i++) {
      const heading = await productElements[i].querySelector('h4');
      const headingText = await heading?.evaluate(el => el.textContent?.trim());

      if (headingText === productName) {
        await buyButtons[i].click();
        break;
      }
    }
  }

  /**
   * Get total number of products displayed
   */
  async getProductCount(): Promise<number> {
    return await this.page.$$('li').then(els => els.length);
  }

  /**
   * Get cart count from header
   */
  async getCartCount(): Promise<number> {
    const cartText = await this.page.textContent('a:has-text("Cart")');
    const match = cartText?.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  }
}
