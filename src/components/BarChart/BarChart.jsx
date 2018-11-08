import React, { Component } from "react";
import VizG from "react-vizgrammar";
import Selector from "../Selector/Selector";

class BarChart extends Component {
  state = {
    x_axis: "",
    y_axis: "",
    chart_type: "bar",
    metadata: {},
    staticDataSet: []
  };

  //Comment this method to stop mounting dummy data
  componentWillMount() {
    this.state.metadata = {
      names: ["rpm", "torque", "horsepower", "EngineType"],
      types: ["linear", "linear", "linear", "ordinal"]
    };

    this.state.staticDataSet = [
      [10, 11, 12, "piston"],
      [11, 15, 12, "rotary"],
      [12, 14, 16, "piston"],
      [13, 24, 12, "rotary"],
      [15, 11, 11, "rotary"],
      [16, 15, 12, "piston"],
      [17, 14, 18, "rotary"],
      [17, 14, 12, "rotary"]
    ];
  }

  componentDidMount() {
    if (this.props.tableData.metadata != undefined) {
      const metaName_arr = [];
      const metaType_arr = [];
      this.props.tableData.metadata.names.map(el => {
        metaName_arr.push(el);
      });
      this.props.tableData.metadata.types.map(el => {
        metaType_arr.push(el.toLowerCase());
      });
      const metaVals = { ...this.state.metadata };
      metaVals.names = metaName_arr;
      metaVals.types = metaType_arr;

      this.setState({
        metadata: metaVals,
        staticDataSet: this.props.tableData.data
      });
    }
  }

  changeChartType = () => {
    if (this.state.chart_type === "line") {
      this.setState({
        chart_type: "bar"
      });
    } else {
      this.setState({
        chart_type: "line"
      });
    }
  };

  setAxisFields = (axis, field) => {
    if (axis === "x") {
      this.setState({ x_axis: field }, () => {
        console.log("x axis changed to", this.state.x_axis);
      });
    } else if (axis === "y") {
      this.setState(
        {
          y_axis: field
        },
        () => {
          console.log("y axis changed to", this.state.y_axis);
        }
      );
    }
  };

  changeChartType = type => {
    this.setState({
      chart_type: type
    });
  };

  renderTheChart = () => {
    if (this.state.x_axis != "" && this.state.y_axis != "")
      return (
        <div style={{ height: "650px", width: "100%" }}>
          <VizG
            config={{
              x: this.state.x_axis,
              charts: [
                {
                  type: this.state.chart_type,
                  y: this.state.y_axis,
                  fill: "#fe5200"
                }
              ],
              maxLength: 30,
              width: 800,
              height: 900,
              interactiveLegend: true,
              legend: true,
              style: {
                xAxisTickAngle: 90,
                axisColor: "#fe5200",
                axisLabelColor: "#fe5200",
                tickLabelColor: "#fe5200"
              }
            }}
            metadata={this.state.metadata}
            data={this.state.staticDataSet}
            theme={this.props.theme}
          />
        </div>
      );
  };

  render() {
    console.log("Vals", this.state);
    return (
      <div>
        <Selector
          metadata={this.state.metadata}
          setAxisFields={this.setAxisFields}
          changeChartType={this.changeChartType}
          theme={this.props.theme}
        />
        {this.renderTheChart()}
      </div>
    );
  }
}

export default BarChart;
