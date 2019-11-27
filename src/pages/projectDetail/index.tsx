import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import SearchBar from '../../components/searchBar'

class Index extends Component {

    config = {
        navigationBarTitleText: '我的项目'
    }

    state = {
        value:''
    }

    onChange (value) {
        console.log(value)
    }

    render() {
        return (
            <View>
                <View className='topMenuBar'>
                    <View className='leftSearch'>
                        试试
                    </View>
                </View>

            </View>
        );
    }
}
export default Index;