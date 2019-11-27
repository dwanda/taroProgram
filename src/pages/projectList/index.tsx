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
    
    componentWillMount(){
        console.log('2')
    }
    
    render() {
        return (
            <View className='projectMain' >
                <View className='topMenuBar'>
                    <View className='leftSearch'>
                        <SearchBar>

                        </SearchBar>
                    </View>
                </View>
                <View className='contentBox'>
                    2222333
                </View>
            </View>
        );
    }
}
export default Index;