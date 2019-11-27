import Taro, { PureComponent } from '@tarojs/taro';
import { View, Button, Text, ScrollView } from '@tarojs/components';
import Test from './component'
import { CounterContext } from './context/theme.js'

import './index.scss'

class Index extends PureComponent {
    config = {
        navigationBarTitleText: '啥哟'
    }

    state = {}

    testFunction(a){
        console.log(a)
    }

    render() {
        const numbers:Array<number> = [...Array(100).keys()]

        return (
            <CounterContext.Provider value={'hahaho'}>
                <View>
                    可以了
                    <Test testProps={'haha'}/>
                    <Button onClick={this.testFunction.bind('haha')}>?</Button>
                    <ScrollView scrollY className='my_fans_container'>
                        {
                            numbers.map((number)=>{
                                return <Text
                                    key={String(number)}
                                    >
                                    我是第 {number + 1} 个数字
                                </Text>
                            })
                        }
                    </ScrollView>
                </View>
            </CounterContext.Provider>
        );
    }
}
export default Index;