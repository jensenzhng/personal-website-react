import React from 'react';
import './index.css';
import {
    SiFirebase,
	SiGit,
	SiGithub,
	SiJava,
	SiNodedotjs as SiNodeDotJs,
	SiReact,
	SiMongodb,
    SiPython,
    SiVisualstudiocode,
    SiIntellijidea
} from 'react-icons/si';


class Tech extends React.Component {
    render() { 
        return (<>
            <ul className='tech'>
                <li>
                    <span>
                        <SiNodeDotJs size={25} opacity={0.8}></SiNodeDotJs>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>JavaScript</span>
                </li>
                <li>
                    <span>
                        <SiFirebase size={25} opacity={0.8}></SiFirebase>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Firebase</span>
                </li>
                <li>
                    <span>
                        <SiGithub size={25} opacity={0.8}></SiGithub>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Github</span>
                </li>
                <li>
                    <span>
                        <SiJava size={25} opacity={0.8}></SiJava>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Java</span>
                </li>
                <li>
                    <span>
                        <SiIntellijidea size={25} opacity={0.8}></SiIntellijidea>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>IntelliJ</span>
                </li>
                <li>
                    <span>
                        <SiReact size={25} opacity={0.8}></SiReact>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>React</span>
                </li>
                <li>
                    <span>
                        <SiPython size={25} opacity={0.8}></SiPython>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Python</span>
                </li>
                <li>
                    <span>
                        <SiVisualstudiocode size={25} opacity={0.8}></SiVisualstudiocode>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>VS Code</span>
                </li>
                <li>
                    <span>
                        <SiGit size={25} opacity={0.8}></SiGit>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Git</span>
                </li>
                <li>
                    <span>
                        <SiMongodb size={25} opacity={0.8}></SiMongodb>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>MongoDB</span>
                </li>
                
            </ul>
        </>);
    }
}
 
export default Tech;