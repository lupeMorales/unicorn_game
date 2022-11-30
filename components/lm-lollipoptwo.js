import { LitElement, html, css } from 'lit';

export class LmLollipopTwo extends LitElement {
  constructor() {
    super();
    this.positionRight = 0;
    this.positionBottom = 10;
  }

  static properties = {
    positionRight: { type: Number },
    positionBottom: { type: Number },
  };

  static styles = [
    css`
      :host {
        display: block;
        position: absolute;
        right: 20px;
        bottom: 15%;
      }
      .caramel {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: red;
        position: relative;
      }
      .lip {
        height: 5px;
        width: 55px;
        content: '';
        position: absolute;
        background-color: red;
        left: -2.5px;
        top: 45%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      .lip div {
        height: 5px;
        width: 55px;
        position: absolute;
        left: 6px;
        background: #ac0e62;
        opacity: 0.1;
      }
      .shadowCaramel {
        position: absolute;
        left: 6px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: #ac0e62;
        opacity: 0.1;
        z-index: 2;
      }

      .stick {
        width: 4px;
        height: 50px;
        background-color: white;
        position: relative;
        left: 50%;
      }
      .shadowStick {
        width: 5px;
        height: 50px;
        background-color: #ac0e62;
        position: relative;
        left: 1px;
        opacity: 0.1;
        z-index: 2;
      }
    `,
  ];

  firstupdated() {
    this.style.right = `${this.positionRight}`;
  }

  render() {
    return html`
      <div class="caramel">
        <div class="shadowCaramel"></div>
        <div class="lip">
          <div></div>
        </div>
      </div>
      <div class="stick">
        <div class="shadowStick"></div>
      </div>
    `;
  }
}
customElements.define('lm-lollipoptwo', LmLollipopTwo);
