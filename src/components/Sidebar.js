import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem } from "react-icons/all";
import { FaHeart } from "react-icons/all";
import '../App.scss'




export default function Sidebar() {
    return(
        <div className="sidebar">

                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Home
                        <Link to="/"/></MenuItem>
                        <MenuItem icon={<FaHeart/>}>About
                        <Link to="/page-1"/></MenuItem>
                    </Menu>
                </ProSidebar>
        </div>

    );
}

