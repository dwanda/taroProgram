import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

interface PropsDefault{
    testProps:string
}

class Index extends PureComponent<PropsDefault>{

    config = {
        navigationBarTitleText: '啥'
    }

    state = {}

    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    render() {
        const {testProps} = this.props

        return (
            <View>
                 哈市
                 {testProps}
            </View>
        );
    }
}
export default Index;