import React, { Component } from "react";
import Layout from "../layouts/Layout";

interface IProps {
  children: any;
}

interface IState {
  hasError: boolean;
}

class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false, info: "" } as IState;
  }

  static getDerivedStateFromError(error: IState) {
    //Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {}
  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <div>Something went wrong...</div>
        </Layout>
      );
    }
    return this.props.children;
  }
}

export default Index;
