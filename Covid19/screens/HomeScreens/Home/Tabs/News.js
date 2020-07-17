import React, {Component} from 'react';
import {Text} from 'native-base';
import {View, ScrollView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {NewsStyle} from '../../../../assets/styles/styles';
const title="Son dakika";
const text="Gelen bir son dakika haberine göre; Sağlık Bakanı Fahrettin Koca Türkiye'nin son 24 saatlik corona virüs tablosunu açıkladı. Türkiye'de son 24 saatte 933 kişiye yeni tip koronavirüs (Kovid-19) tanısı konuldu, 21 kişi hayatını kaybetti, toplam vaka sayısı 216 bin 873can kaybı 5 bin 440 oldu.Türkiye'de son 24 saatteyeni vaka sayılarını Sağlık Bakanlığı bölge bölge açıkladı. Öte yandan Bakan Koca'dan flaş tatil uyarısı geldi."
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={NewsStyle.news_moth_view}>
                <ImageBackground
                    style={NewsStyle.news_background}
                    source={require('../../../../images/home/backgroundone.png')}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity style={NewsStyle.news_touch}>
                            <View style={NewsStyle.news_image_view}>
                                <Image
                                    style={NewsStyle.news_image}
                                    source={require('../../../../images/home/corona.jpeg')}
                                />
                            </View>
                            <View style={NewsStyle.news_all_text_view}>
                                {
                                    title.length < 20?
                                        <Text style={NewsStyle.news_title}>{title}</Text>
                                        :
                                        <Text style={NewsStyle.news_title}>{title.substring(0,20)}...</Text>
                                }
                                {
                                    text.length < 169?
                                        <View style={NewsStyle.news_text_view}>
                                            <Text style={NewsStyle.news_text}>{text}</Text>
                                        </View>
                                        :
                                        <View style={NewsStyle.news_text_view}>
                                            <Text style={NewsStyle.news_text}>{text.substring(0,169)}...</Text>
                                        </View>

                                }
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

export default News;
