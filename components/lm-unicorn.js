import { LitElement, html, css } from 'lit';

export class LmUnicorn extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        transform: scale(0.3);
        bottom: -20%;
        left: -220px;
        position: absolute;

        --white: #e9f1df;
        --hair: #b8e8fc;
        --background: #ff8dc7;
        --horn: #f5a606;
        --horn-secondary: #eb8700;
        --light-pink: #ffacc7;
        --dark-grey: #404258;
        --light-grey: #b2b2b2;
        --grass: #b1d7b4;
      }

      .unicorn__container {
        width: 700px;
        height: 700px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
      }
      /* HORN */
      .unicorn__horn {
        width: 0;
        height: 0;
        border-right: 12px solid transparent;
        border-top: 100px solid transparent;
        border-left: 12px solid transparent;
        border-bottom: 100px solid var(--horn);
        z-index: 99;
      }
      /* HEAD */
      .unicorn__head {
        width: 150px;
        height: 80px;
        background-color: var(--white);
        position: relative;
        border-radius: 0 30px 30px 0;
      }

      .unicorn__eye {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--dark-grey);
        position: absolute;
        left: 50px;
        top: 10px;
      }
      .unicorn__cheeks {
        width: 20px;
        height: 8px;
        border-radius: 50px;
        background-color: var(--light-pink);
        position: absolute;
        left: 50px;
        top: 40px;
      }
      .unicorn__nose {
        width: 8px;
        height: 5px;
        border-radius: 0 0 50px 50px;
        background-color: var(--light-grey);
        position: absolute;
        left: 120px;
        top: 25px;
      }
      .unicorn__nose::after {
        content: '';
        width: 8px;
        height: 5px;
        border-radius: 0 0 50px 50px;
        background-color: var(--light-grey);
        position: absolute;
        left: 12px;
      }
      .unicorn__mouth {
        width: 25px;
        height: 15px;
        background-color: var(--dark-grey);
        position: absolute;
        left: 110px;
        top: 45px;
        border-radius: 0 0 50px 50px;
      }
      .unicorn__mouth::after {
        content: '';
        width: 15px;
        height: 10px;
        background-color: var(--white);
        position: absolute;
        left: 5px;
        border-radius: 0 0 50px 50px;
      }
      .unicorn__ears {
        width: 25px;
        height: 40px;
        background-color: var(--white);
        border-radius: 50px 0 0 0;
        position: absolute;
        top: -40px;
      }
      .unicorn__ears::after {
        content: '';
        width: 25px;
        height: 40px;
        background-color: var(--light-grey);
        border-radius: 50px 0 0 0;
        position: absolute;
        left: 25px;
      }

      /* HAIR */
      .unicorn__hair {
        width: 40px;
        height: 170px;
        background-color: var(--hair);
        position: absolute;
        right: 150px;
        border-radius: 50px 0 0 0;
        top: -20px;
      }
      .unicorn__hair-end {
        width: 40px;
        height: 40px;
        background-color: var(--hair);
        position: absolute;
        right: 150px;
        border-radius: 0 0 0 50px;
        position: absolute;
        top: 135px;
        left: -20px;
        z-index: 999;
        /*  animation: hair 0.5s linear infinite; */
      }
      .unicorn__hair-end::after {
        content: '';
        width: 40px;
        height: 50px;
        background-color: var(--hair);
        position: absolute;
        right: 150px;
        border-radius: 0 0 50px 50px;
        position: absolute;
        top: 25px;
        left: 40px;
      }
      .unicorn__fringe {
        width: 20px;
        height: 20px;
        background-color: var(--hair);
        position: absolute;
        right: 150px;
        border-radius: 0 50px 0 0;
        position: absolute;
        left: 65px;
      }
      /* NECK */
      .unicorn__neck {
        width: 60px;
        height: 200px;
        background-color: var(--white);
        position: absolute;
        bottom: calc(50% - 240px);
        border-radius: 0 0 20px 0;
        z-index: 9;
      }
      /* BODY */
      .unicorn__body {
        width: 150px;
        height: 130px;
        background-color: var(--white);
        position: absolute;
        bottom: calc(50% - 240px);
        left: calc(50% - 200px);
        border-radius: 30px;
        z-index: 9;
      }

      /* TAIL */
      .unicorn__tail {
        width: 40px;
        height: 100px;
        background-color: var(--hair);
        position: absolute;
        right: 275px;
        border-radius: 50px 0 0 0;
        top: 175px;
        animation: hair 0.5s linear infinite;
      }
      .unicorn__tail::after {
        content: '';
        width: 20px;
        height: 90px;
        background-color: var(--background);
        position: absolute;

        border-radius: 50px 0 0 0;
        left: 20px;
        top: 10px;
        z-index: 999;
      }
      .unicorn__tail-end {
        width: 40px;
        height: 40px;
        background-color: var(--hair);
        position: absolute;
        right: 150px;
        border-radius: 5px 0 20px 50px;
        position: absolute;
        top: 100px;
        right: 20px;
        z-index: 999;
      }
      /* LEGS */
      .unicorn__legs {
        width: 20px;
        height: 80px;
        background-color: var(--light-grey);
        position: absolute;
        left: 10px;
        top: 280px;
        /*  animation: run 0.5s linear infinite; */
      }

      .unicorn__legs::after {
        content: '';
        width: 20px;
        height: 80px;
        background-color: var(--light-grey);
        position: absolute;
        right: 95px;
        z-index: 9;
      }

      .unicorn__legs-back {
        width: 20px;
        height: 80px;
        background-color: var(--white);
        position: absolute;
        left: 20px;
        top: 280px;
        /*   animation: run-back 0.5s linear infinite; */
      }

      .unicorn__legs-back::after {
        content: '';
        width: 20px;
        height: 80px;
        background-color: var(--white);
        position: absolute;
        right: 115px;
      }

      .unicorn__hoof {
        width: 25px;
        height: 20px;
        background: #8d72e1;
        border-radius: 0 10px 0 0;
        position: absolute;
        bottom: 0;
        z-index: 10;
      }
      .unicorn__hoof::after {
        content: '';
        width: 25px;
        height: 20px;
        background: #8d72e1;
        border-radius: 0 10px 0 0;
        position: absolute;
        left: -95px;
      }
      .unicorn__hoof-back {
        width: 25px;
        height: 20px;
        background: #b1affb;
        border-radius: 0 10px 0 0;
        position: absolute;
        bottom: 0;
      }

      .unicorn__hoof-back::after {
        content: '';
        width: 25px;
        height: 20px;
        background: #b1affb;
        border-radius: 0 10px 0 0;
        position: absolute;
        right: 115px;
        z-index: 9;
      }
    `,
  ];

  render() {
    return html`
      <div class="unicorn__container">
        <div class="unicorn__horn"></div>
        <div class="unicorn__head">
          <div class="unicorn__ears"></div>
          <div class="unicorn__eye"></div>
          <div class="unicorn__cheeks"></div>
          <div class="unicorn__nose"></div>
          <div class="unicorn__mouth"></div>
          <div class="unicorn__hair">
            <div class="unicorn__fringe"></div>
            <div class="unicorn__hair-end"></div>
          </div>
          <div class="unicorn__neck"></div>
          <div class="unicorn__body"></div>
          <div class="unicorn__tail">
            <div class="unicorn__tail-end"></div>
          </div>
          <div class="unicorn__legs"><div class="unicorn__hoof"></div></div>
          <div class="unicorn__legs-back">
            <div class="unicorn__hoof-back"></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('lm-unicorn', LmUnicorn);
