import Taro, { PureComponent } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import Test from './component'
class Index extends PureComponent {
    config = {
        navigationBarTitleText: '啥哟'
    }

    state = {}

    testFunction(a){
        console.log(a)
    }

    render() {
        let isLoggedIn:boolean = true 

        let status:JSX.Element
        if (isLoggedIn) {
          status = <Text>已登录</Text>
        } else {
          status = <Text>未登录</Text>
        }
    
        return (
            <View>
                可以了
                <Test testProps={'haha'}/>
                <Button onClick={this.testFunction.bind('haha')}>?</Button>
                {isLoggedIn
                    ? <Text>已登录</Text>
                    : <Text>未登录</Text>
                }
                {
                    status
                }
            </View>
        );
    }
}
export default Index;