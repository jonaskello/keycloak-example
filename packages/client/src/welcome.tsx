import React, { Component } from "react";

interface Props {}

interface State {
  readonly publicHello: string;
  readonly secureHello: string;
}

class Welcome extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { publicHello: "not fetched", secureHello: "not fetched" };
  }
  render() {
    return (
      <div>
        <div className="Welcome">
          <p>This is your public-facing component.</p>
        </div>
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
                const response = await fetch("/api/hello-secure");
                if (response.status === 403) {
                  this.setState({ secureHello: "Access denied (403)" });
                } else {
                  const responseText = await response.text();
                  console.log("responseText", responseText);
                  this.setState({ secureHello: responseText });
                }
              }}
            >
              Fetch secure hello:
            </button>
            <span>{this.state.secureHello}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
