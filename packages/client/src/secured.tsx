import React, { Component } from "react";
import Keycloak, { KeycloakInstance } from "keycloak-js";

interface Props {}
interface State {
  keycloak: KeycloakInstance<Keycloak.KeycloakPromiseType> | undefined;
  authenticated: boolean;
}

class Secured extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keycloak: undefined, authenticated: false };
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
    });
    const userProfile = await keycloak.loadUserProfile();
    console.log("userProfile", userProfile);
    console.log("token", keycloak.token);
    this.setState({ keycloak: keycloak, authenticated: authenticated });
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <div>
            {}
            <p>
              This is a Keycloak-secured component of your application. You shouldn't be able to see this unless you've
              authenticated with Keycloak.
            </p>
            <button onClick={() => this.state.keycloak!.logout()}>Logout</button>
          </div>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}
export default Secured;
