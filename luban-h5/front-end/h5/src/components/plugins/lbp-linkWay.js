import commonProps from './common/props.js'

export default {
  name: 'lbp-linkWay',
  render () {
    const {
      color,
      textAlign,
      backgroundColor,
      fontSize,
      lineHeight,
      borderColor,
      borderRadius,
      borderWidth,
      text1,
      text2
    //   text
    } = this

    const style = {
      color,
      textAlign,
      backgroundColor,
      fontSize: fontSize,
      lineHeight: lineHeight + 'em',
      borderColor,
      borderRadius: borderRadius + 'px',
      borderWidth: borderWidth + 'px',
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      position: 'fixed',
      width: '100%',
      bottom: 0,
      left: 0
    }

    // const style1 = {
    //   width: '100% ',
    //   height: 30 + 'px ',
    //   position: 'fixed',
    //   bottom: '0px',
    //   left: '0px'
    // }
    return (
      <div style="width: 100%;height: 10%;position: fixed;bottom: 0px;left: 0px;"
      ><ul style={style}
        ><li ><i class="fa fa-wechat" aria-hidden="true"></i> <div>{text1}</div></li><li><i class="fa fa-phone" aria-hidden="true"></i><div>{text2}</div></li>
        </ul></div>)
  },
  props: {
    // text: commonProps.text(),
    text1: commonProps.text1(),
    text2: commonProps.text2(),
    vertical: commonProps.vertical,
    backgroundColor: commonProps.backgroundColor,
    color: commonProps.color,
    fontSize: commonProps.fontSize,
    lineHeight: commonProps.lineHeight,
    borderWidth: commonProps.borderWidth,
    borderRadius: commonProps.borderRadius,
    borderColor: commonProps.borderColor,
    textAlign: commonProps.textAlign()

  }
}
