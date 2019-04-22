import React, { Component } from "react";
import Keycloak, { KeycloakInstance } from "keycloak-js";

interface Props {}

interface State {
  readonly keycloak: KeycloakInstance<Keycloak.KeycloakPromiseType> | undefined;
  readonly authenticated: boolean;
  readonly publicHello: string;
  readonly secureHello: string;
}

class Secured extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keycloak: undefined, authenticated: false, publicHello: "not fetched", secureHello: "not fetched" };
  }

  async componentDidMount() {
    const keycloak = Keycloak<Keycloak.KeycloakPromiseType>({
      realm: "MyDemo",
      url: "http://localhost:8080/auth",
      clientId: "my-react-client",
    });
    const authenticated = await keycloak.init({
      onLoad: "login-required",
      promiseType: "native",
      flow: "implicit",
    });
    // const userProfile = await keycloak.loadUserProfile();
    // console.log("userProfile", userProfile);
    // console.log("token", keycloak.token);
    this.setState({ keycloak: keycloak, authenticated: authenticated });
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <div>
            <p>
              This is a Keycloak-secured component of your application. You shouldn't be able to see this unless you've
              authenticated with Keycloak.
            </p>
            <button onClick={() => this.state.keycloak!.logout()}>Logout</button>
            <div>
              <div>
                <button
                  onClick={async () => {
                    const response = await fetch("/api/hello-public");
                    const responseText = await response.text();
                    console.log("responseText", responseText);
                    this.setState({ publicHello: responseText });
                  }}
                >
                  Fetch public hello:
                </button>
                <span>{this.state.publicHello}</span>
              </div>
              <div>
                <button
                  onClick={async () => {
                    const response = await fetch("/api/hello-secure", {
                      headers: { Authorization: `Bearer ${this.state.keycloak!.token}` },
                    });
                    const responseText = await response.text();
                    console.log("responseText", responseText);
                    this.setState({ secureHello: responseText });
                  }}
                >
                  Fetch secure hello:
                </button>
                <span>{this.state.secureHello}</span>
              </div>
            </div>
          </div>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}
export default Secured;
