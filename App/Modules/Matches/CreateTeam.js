'use strict';

var React = require('react-native');


var {
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var CONSTANT = require('../Styles/CONSTANT');
var Styles = require('../Styles/index');

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var CreateTeam = React.createClass({
  getInitialState: function() {
    return {
      selectedImage: false,
      imageSource: false
    };
  },

  _createTeam: function() {

  },

  _selectImage: function() {
    var self = this;
    
    UIImagePickerManager.showImagePicker({
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从相册中选取',
      returnBase64Image: true
    }, function(type, response) {
      if (type !== 'cancel') {
        self.setState({
          selectedImage: true,
          imageSource: response
        });
      }
    });
  },

  render: function() {
    var imageSelector = null;

    if (this.state.selectedImage) {
      imageSelector = <Image source={{uri: 'data:images/jpeg:base64,' + this.state.imageSource}}/>
    } else {
      imageSelector = <Text style={thisStyle.imageSelectorText}>{'选择队标'}</Text>
    }

    return (
      <ScrollView style={[Styles.fullContainer, thisStyle.container]}>
        <View style={thisStyle.form}>
          <View style={thisStyle.formLine}>
            <View style={[thisStyle.circle, {marginTop: 5}]}></View>
            <View style={[thisStyle.line, {height: 67}]} />
            <View style={thisStyle.dot}></View>
            <View style={[thisStyle.line, {height: 76}]} />
            <View style={thisStyle.dot}></View>
            <View style={[thisStyle.line, {height: 45}]} />
            <View style={thisStyle.dot}></View>
            <View style={[thisStyle.line, {height: 55}]} />
            <View style={[thisStyle.circle]}></View>
            <View style={[thisStyle.line, {height: 40}]} />
            <View style={thisStyle.dot}></View>
            <View style={[thisStyle.line, {height: 45}]} />
            <View style={thisStyle.dot}></View>
          </View>
          <View style={thisStyle.formContent}>
            
            <Text style={thisStyle.formTitle}>{'球队信息'}</Text>
            <TouchableHighlight onPress={this._selectImage} underlayColor={CONSTANT.TAP} style={thisStyle.imageSelector}>
              {imageSelector}
            </TouchableHighlight>

            <TextInput style={thisStyle.formInput} placeholder={'请输入队名'}/>

            <TextInput style={thisStyle.formInput} placeholder={'我们的口号是...'}/>


            <Text style={[thisStyle.formTitle, {marginTop: 20}]}>{'队长信息'}</Text>

            <TextInput style={thisStyle.formInput} placeholder={'姓名'}/>

            <TextInput style={thisStyle.formInput} placeholder={'手机号'}/>

            <Text style={thisStyle.subInfo}>{'请输入正确的姓名和手机号，现场比赛时需要进行验证'}</Text>
          </View>
        </View>

        <TouchableHighlight onPress={this._createTeam} style={thisStyle.createButton} underlayColor={CONSTANT.DARK_BLUE}>
          <Text style={thisStyle.createButtonText}>{'完成'}</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
});

CreateTeam.TITLE = '创建球队';

var thisStyle = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },

  form: {
    flexDirection: 'row'
  },

  circle: {
    width: 6,
    height: 6,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: CONSTANT.DARK_BLUE,
    backgroundColor: CONSTANT.WHITE
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: CONSTANT.DARK_BLUE
  },
  line: {
    width: 0,
    borderRightWidth: 1,
    borderColor: CONSTANT.BLUE
  },

  formLine: {
    width: 10,
    alignItems: 'center'
  },

  formContent: {
    flex: 1,
    marginLeft: 15
  },

  formTitle: {
    fontSize: 15,
    color: CONSTANT.BLACK,
    marginBottom: 15
  },

  imageSelector: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: CONSTANT.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: CONSTANT.GRAY,
    marginBottom: 10
  },

  imageSelectorText: {
    fontSize: 14,
    color: CONSTANT.GRAY
  },

  formInput: {
    height: 40,
    fontSize: 14,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: CONSTANT.BORDER,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: CONSTANT.WHITE
  },
  subInfo: {
    fontSize: 11,
    color: CONSTANT.GRAY
  },

  createButton: {
    marginTop: 40,
    marginBottom: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CONSTANT.BLUE,
    borderRadius: 3
  },

  createButtonText: {
    fontSize: 15,
    color: '#fff'
  }
});



module.exports = CreateTeam;

