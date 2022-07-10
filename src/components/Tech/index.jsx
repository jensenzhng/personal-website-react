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
                        <SiNodeDotJs size={30}></SiNodeDotJs>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>JavaScript</span>
                </li>
                <li>
                    <span>
                        <SiFirebase size={30}></SiFirebase>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Firebase</span>
                </li>
                <li>
                    <span>
                        <SiGithub size={30}></SiGithub>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Github</span>
                </li>
                <li>
                    <span>
                        <SiJava size={30}></SiJava>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Java</span>
                </li>
                <li>
                    <span>
                        <SiGit size={30}></SiGit>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Git</span>
                </li>
                <li>
                    <span>
                        <SiReact size={30}></SiReact>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>React</span>
                </li>
                <li>
                    <span>
                        <SiMongodb size={30}></SiMongodb>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>MongoDB</span>
                </li>
                <li>
                    <span>
                        <SiPython size={30}></SiPython>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>Python</span>
                </li>
                <li>
                    <span>
                        <SiVisualstudiocode size={30}></SiVisualstudiocode>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>VS Code</span>
                </li>
                <li>
                    <span>
                        <SiIntellijidea size={30}></SiIntellijidea>
                    </span>
                    <span style={{'paddingLeft': '12px'}}>IntelliJ</span>
                </li>
                
            </ul>
        </>);
    }
}
 
export default Tech;