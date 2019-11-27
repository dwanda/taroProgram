import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import './index.scss'

interface stateType{
    isSearching:boolean
    value:string
}

class Index extends Component<{},stateType> {

    state = {
        isSearching:false,
        value:''
    }

    onChange (value) {
        this.setState({
            value: value
        })
    }

    openSearch(){
        // Taro.navigateTo({
        //     url: `/pages/projectDetail/index`
        // })
        this.setState({
            isSearching:true
        })
    }

    render() {
        const SearchElement:JSX.Element = <View className='topMenuBar'></View>

        return (
            <View>
                {
                    this.state.isSearching?SearchElement:null
                }
                <AtIcon value='clock' size='25' color='#c4c4c4' onClick={this.openSearch.bind(this)}></AtIcon>
            </View>
        );
    }
}
export default Index;