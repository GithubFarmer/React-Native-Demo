import  React,{Component} from 'react';
import {Scene, Router, Stack,Tabs} from "react-native-router-flux";
import HelloReact from './HelloReactNative';
import ImageTest from './ImageTest';
import PageOne from './PageOne';
import Task from './Task';
import Me from  './Me';
import Info from './Info';

export  default  class  AppDemo extends Component{
    render() {
        return <Router>
            <Scene key="root" hideNavBar tabBarPosition={"bottom"}>
                <Tabs key={'tabbar'} showLabel={true} activeBackgroundColor={'white'} inactiveBackgroundColor={'white'}>
                    <Scene key={'Task'} component={PageOne} title={'任务'}/>
                    <Scene key={"HelloReact"} component={HelloReact} title={"HelloReact学习"} />
                    <Scene key={'Info'} component={Info} title={'信息'}></Scene>
                    <Scene key={'Me'} component={Me} title={'我的'}></Scene>
                </Tabs>
                <Scene key={'PageOne'} component={PageOne} title={'第一页'} />
                <Scene key={'PageTwo'} component={HelloReact} title={'fffff'} />
                <Scene key={"ImageTest"} component={ImageTest} title={"ImageTest学习"} />
            </Scene>
        </Router>
    }
}

/*
<Scene key={"one"} component={PageOne} title={"PageOne学习"} initial={true} />
<Scene key={"HelloReact"} component={HelloReact} title={"HelloReact学习"} />
<Scene key={"ImageTest"} component={ImageTest} title={"ImageTest学习"} />

*/