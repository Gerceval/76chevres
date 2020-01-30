import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

class TopTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event, newValue) {
    this.setState({ value: newValue })
  };

  render() {
    const { value } = this.state;
    const { getTopQuotes, getRecentQuotes } = this.props;
    return (
      <Paper square>
        <Tabs
          value={value}
          onChange={this.handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab onClick={getTopQuotes} icon={<TrendingUpIcon />} aria-label="phone" />
          <Tab onClick={getRecentQuotes} icon={<AccessTimeIcon />} aria-label="favorite" />
        </Tabs>
      </Paper>
    );
  }
}

export default TopTab;