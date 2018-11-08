/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    minWidth: 120
  }
};

class Selector extends Component {
  state = {
    yAxis: "",
    xAxis: "",
    chart_type: "bar"
  };

  handleXAxisChange = event => {
    this.setState(
      {
        xAxis: event.target.value
      },
      () => {
        this.props.setAxisFields("x", this.state.xAxis);
      }
    );
  };

  handleYAxisChange = event => {
    this.setState(
      {
        yAxis: event.target.value
      },
      () => {
        this.props.setAxisFields("y", this.state.yAxis);
      }
    );
  };

  handleChartChange = event => {
    this.setState({ chart_type: event.target.value });
    this.props.changeChartType(event.target.value);
  };

  y_axis_fields = () => {
    var fields = [];
    this.props.metadata.names.forEach((el, i) => {
      if (this.props.metadata.types[i] === "linear")
        fields.push(<MenuItem value={el}>{el}</MenuItem>);
    });
    return fields;
  };

  x_axis_fields = () => {
    var fields = [];
    this.props.metadata.names.forEach((el, i) => {
      if (this.props.metadata.types[i] === "ordinal")
        fields.push(<MenuItem value={el}>{el}</MenuItem>);
    });
    return fields;
  };

  render() {
    console.log("selector props", this.props);
    return (
      <div>
        <h4>Axis Configurations</h4>
        <form style={styles.root} autoComplete="off">
          <FormControl style={styles.formControl}>
            <InputLabel htmlFor="x-axis-helper">X-Axis</InputLabel>
            <Select
              value={this.state.xAxis}
              onChange={this.handleXAxisChange}
              input={<Input name="x" id="x-axis-helper" />}
            >
              {this.x_axis_fields()}
            </Select>
            <FormHelperText>Select the field for X</FormHelperText>
          </FormControl>

          <FormControl style={styles.formControl}>
            <InputLabel htmlFor="y-axis-helper">Y-Axis</InputLabel>
            <Select
              value={this.state.yAxis}
              onChange={this.handleYAxisChange}
              input={<Input name="y" id="y-axis-helper" />}
            >
              {this.y_axis_fields()}
            </Select>
            <FormHelperText>Select the field for Y</FormHelperText>
          </FormControl>

          <FormControl style={styles.formControl}>
            <InputLabel htmlFor="chart-selector">Chart Type</InputLabel>
            <Select
              value={this.state.chart_type}
              onChange={this.handleChartChange}
              input={<Input name="chart-selector" id="chart-selector" />}
            >
              <MenuItem id="line" value={"line"}>
                Line Chart
              </MenuItem>
              <MenuItem id="bar" value={"bar"}>
                Bar Chart
              </MenuItem>
            </Select>
            <FormHelperText>Select the chart Type</FormHelperText>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default Selector;
