import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem } from "react-icons/all";
import '../App.scss'




export default function Sidebar() {
    return(
        <div className="sidebar">

                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Add Datasheet
                        <Link to="/"/></MenuItem>
                        <MenuItem icon={<FaGem/>}>Display test
                        <Link to="/page-1"/></MenuItem>
                        <MenuItem icon={<FaGem/>}>About
                            <Link to="/page-2"/></MenuItem>
                        <MenuItem icon={<FaGem/>}>AWS test
                            <Link to="/page-3"/></MenuItem>
                    </Menu>
                </ProSidebar>
        </div>

    );
}

