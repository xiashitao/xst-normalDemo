import React from "react";
import styles from "./index.less";

type Props = {
  count: number;
  list: any[];
  handleClick: (left: "left" | "right") => void;
};

class ClassDemoComp extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  private divRef = React.createRef<HTMLDivElement>();

  public scrollTo = (left: "left" | "right") => {
    if (this.divRef.current) {
      const { scrollLeft, children } = this.divRef.current;
      let nextIndex = 0;
      Array.from(children).some((item, index) => {
        if ((item as HTMLDivElement).offsetLeft >= scrollLeft) {
          nextIndex = index;
          return true;
        }
      });
      nextIndex =
        left === "right"
          ? Math.min(nextIndex + 1, children.length - 1)
          : Math.max(nextIndex - 1, 0);

      this.divRef.current.scrollTo({
        left: (children[nextIndex] as HTMLDivElement).offsetLeft,
        behavior: "smooth",
      });
    }
  };

  private getConfig = () => {};

  public componentDidMount(): void {}

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div
          onClick={() => this.props.handleClick("left")}
          hidden={this.props.list.length < 3}
          className={styles.left}
        ></div>
        <div
          onClick={() => this.props.handleClick("right")}
          hidden={this.props.list.length < 3}
          className={styles.right}
        ></div>
        <div className={styles.wrapper} ref={this.divRef}>
          {this.props.list.map((item) => (
            <div key={item.toString()} className={styles.card}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ClassDemoComp;
