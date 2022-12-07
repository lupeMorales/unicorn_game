import { LitElement, html, css } from 'lit';

export class LmLollipop extends LitElement {
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
        right: 200px;
        bottom: 15%;
      }
      .caramel {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: red;
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
      .lip {
        position: relative;
        left: 5%;
        top: 5%;
        width: 90%;
        height: 90%;
        background-color: plum;
        border-radius: 50%;
      }
      .lip2 {
        position: relative;
        left: 2.5%;
        top: 2.5%;
        width: 95%;
        height: 95%;
        background-color: red;
        border-radius: 50%;
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
          <div class="lip2">
            <div class="lip">
              <div class="lip2">
                <div class="lip">
                  <div class="lip2">
                    <div class="lip">
                      <div class="lip2">
                        <div class="lip">
                          <div class="lip2">
                            <div class="lip">
                              <div class="lip2">
                                <div class="lip">
                                  <div class="lip2">
                                    <div class="lip">
                                      <div class="lip2">
                                        <div class="lip">
                                          <div class="lip2"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="stick">
        <div class="shadowStick"></div>
      </div>
    `;
  }
}
customElements.define('lm-lollipop', LmLollipop);
