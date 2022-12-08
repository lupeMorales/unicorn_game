import { LitElement, html, css } from "lit";

export class LmCloud extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        transform: scale(0.3);
        position: fixed;
      }

      .cloud-1 {
        animation: parallax 20s linear infinite reverse -15s;
        top: 10%;
      }
      @keyframes parallax {
        from {
          transform: translateX(-55em);
        }
        to {
          transform: translateX(4300px);
        }
      }

      .cloud-circle-1 {
        background: #fff;
        border-radius: 50%;
        height: 6em;
        width: 6em;
      }

      .cloud-circle-2 {
        background: #fff;
        border-radius: 50%;
        height: 10em;
        left: 3em;
        position: absolute;
        top: -5em;
        width: 10em;
      }

      .cloud-circle-3 {
        background: #fff;
        border-radius: 50%;
        height: 8em;
        left: 10em;
        position: absolute;
        top: -2em;
        width: 8em;
      }

      .cloud-circle-4 {
        background: #fff;
        height: 2em;
        left: 3.4em;
        position: absolute;
        top: 4em;
        width: 11em;
      }
    `,
  ];

  render() {
    return html` <div class="cloud-1">
      <div class="cloud-circle-1"></div>
      <div class="cloud-circle-2"></div>
      <div class="cloud-circle-3"></div>
      <div class="cloud-circle-4"></div>
    </div>`;
  }
}

customElements.define("lm-cloud", LmCloud);
