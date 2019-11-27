import Taro, { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { CounterContext } from '../context/theme.js'

interface PropsDefault{
    testProps:string
}

class Index extends PureComponent<PropsDefault>{

    static contextType = CounterContext
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
        const value = this.context
        console.log(CounterContext)
        return (
            <View>
                 哈市
                 {testProps}
                 {value}
            </View>
        );
    }
}
export default Index;