import React from "react";
import { Tab, TabContainer } from "../Feed/styles";
import {SearchIcon, SearchInput, SearchWrapper } from "../SideBar/styles";
import Tweet from "../Tweet";
import './styles.css';
export default function Explore(){
    return (
        <TabContainer>
        <Tab className="selected">For you</Tab>
        <Tab>Trending</Tab>
        <Tab>News</Tab>
        <Tab>Sports</Tab>
        <Tab> Entertainment</Tab>
        <Tab>COVID-19</Tab>
      </TabContainer>
    );
}