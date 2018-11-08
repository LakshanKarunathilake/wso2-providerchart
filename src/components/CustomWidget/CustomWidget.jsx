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

import React from "react";
import Widget from "@wso2-dashboards/widget";
//Custom Components
import BarChart from "../BarChart/BarChart";
//Stylings
import "./../../../styles.css";
//Widget configuration source
import widgetConf from "../../resources/widgetConf.json";
import PreLoader from "../PreLoader/PreLoader";

export class CustomWidget extends Widget {
  state = {
    loading: false,
    values: {}
  };

  /**
   * ====================================================================================
   *   The following Code Line Handles the Siddhi Data Provider Connection to the widget
   * ====================================================================================
   *
   * Uncomment the code lines from #45 to #72 to enable provider
   */

  //>>>>>>>>>>>>>>>Comment Starts>>>>>>>>>>>>>>>>>>>>>>>>>

  // componentWillMount() {
  //   this.state.loading = true;
  //   this.handleGraphUpdate();
  // }

  // //Call back function to handle the data provided by the Siddhi Data Provider
  // handleStats = stats => {
  //   try {
  //     this.setState({ values: stats, loading: false });
  //   } catch (error) {
  //     console.log("Error caught in handling data");
  //   }
  // };

  // handleGraphUpdate = () => {
  //   const dataProviderConf = widgetConf.configs.providerConfig;
  //   if (this.props.id != undefined) {
  //     try {
  //       super
  //         .getWidgetChannelManager()
  //         .subscribeWidget(this.props.id, this.handleStats, dataProviderConf);
  //     } catch (error) {
  //       console.log("Error caught in super call");
  //     }
  //   } else {
  //     this.setState({ loading: false });
  //   }
  // };

  //>>>>>>>>>>>>>>>Comment Ends>>>>>>>>>>>>>>>>>>>>>>>>>

  renderEmptyRecordsMessage = () => {
    return <PreLoader />;
  };

  renderBarChart = () => {
    return (
      <BarChart theme={this.props.muiTheme} tableData={this.state.values} />
    );
  };

  render() {
    return (
      <div>
        {this.state.loading
          ? this.renderEmptyRecordsMessage()
          : this.renderBarChart()}
      </div>
    );
  }
}

export default CustomWidget;

//UnComment the below line to register widget in the Dashboard Portal
global.dashboard.registerWidget("ProviderChart", CustomWidget);
