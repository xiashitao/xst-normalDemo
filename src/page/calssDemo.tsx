import React from "react";

class ClassDemoComp extends React.Component<{ count: number }> {
  constructor(props: { count: number }) {
    super(props);
  }

  private getConfig = () => {};

  public componentDidMount(): void {
    console.log("进入了componentdidmount");
  }

  render() {
    return (
      <>
        <div style={{ width: 100, height: 100, background: "red" }}>
          {this.props?.count}
        </div>
      </>
    );
  }
}

export default ClassDemoComp;
