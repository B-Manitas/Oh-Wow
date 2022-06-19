import { Email } from "../Network/SMTP";

export default {
  /**
   * Create the body of the email concerning the verification of the email address.
   * @param {String} fisrtname The recipient's first name
   * @param {String} authcode The authentication code.
   * @returns the body of the mail.
   */
  bodyAuthMail(fisrtname, authcode) {
    return (
      <body
        style="
        margin: 0;
        padding: 50px 15px;
        font-family: 'Courier New', Courier, monospace;
      "
      >
        <div>
          <h1
            style="
            color: #383838;
            text-align: center;
            font-weight: bold;
            font-size: 4em;
            border-bottom: 5px solid #383838;
          "
          >
            Oh Wow !
          </h1>
        </div>

        <div>
          <p style="font-size: 1.1em; margin: 0px 10px">
            Hi
            <span style="font-weight: bold; text-decoration: underline">
              ${fisrtname}
            </span>
            !
          </p>
          <p style="font-size: 1.1em; margin: 0px 10px">
            To verify your address mail, enter this code in your Oh Wow
            application.
          </p>

          <div style="margin:auto; width: 90%">
            <div
              style="
              padding: 20px 0px;
              margin: 100px 20px;
              border: 3px solid #383838;
              text-align: center;
              border-radius: 2px;
              background-color: #f5f5f5;
            "
            >
              <p
                style="
                font-size: 1.1em;
                margin: 0px 10px;
                font-weight: bold;
                font-size: 3em;
                color: #383838;
              "
              >
                H-<span style="font-weight: normal">${authcode}</span>
              </p>
            </div>
          </div>

          <p style="text-align: center; font-size: 0.9em">
            If you didn't request a code, you can simply ignore this email.
          </p>
        </div>
      </body>
    );
  },

  /**
   * Create a random authentication code.
   * @returns authentication code.
   */
  getAuthcode() {
    let authcode = Math.floor(Math.random() * 100000);
    return (
      "0".repeat((n = 6 - authcode.toString().length) > 0 ? n : 0) + authcode
    );
  },

  /**
   * Send authentication mail.
   * @param {String} mail The recipient's address mail.
   * @param {String} name The recipient's firstname.
   * @param {String} code The authentication code.
   */
  sendAuthMail(mail, name, code) {
    Email.send({
      SecureToken: "baf60b67-c4f6-4ae6-8cee-67cf603dabe0",
      To: mail,
      From: "manitas.bhr@gmail.com",
      Subject: "Verify Your OhWow Email Address",
      Body: this.bodyMail(name, code),
    })
      .then(() => 200)
      .catch((e) => (400, e));
  },
};
