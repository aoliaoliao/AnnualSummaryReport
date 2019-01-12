let androidBridge = null

let iosBridge = null

function osIsAndroid() {
  if ( navigator.userAgent.match( /(android|Android)/i ) ) {
    return true
  }
  return false
}

function osIsIOS() {
  if ( navigator.userAgent.match( /(iPhone|iPod|iPad);?/i ) ) {
    return true
  }
  return false
}

function isInWeixin() {
  if ( navigator.userAgent.match( /MicroMessenger/i ) == 'micromessenger' ) {
    return true
  }
  return false
}

function isInEkyApp() {
  // queryParam = getQueryParam()
  if ( window.iosBridge || window.androidBridge ) {
    return true
  }
  return false
}

function osIsPC() {
  let userAgentInfo = navigator.userAgent
  let Agents = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod' ]
  let flag = true
  for ( let v = 0; v < Agents.length; v += 1 ) {
    if ( userAgentInfo.indexOf( Agents[ v ] ) > 0 ) { flag = false; break }
  }
  return flag
}

function getHrefSearch() {
  const { search } = window.location
  let config = {}
  let allQuery = search.split( '?' )[ 1 ] || ''
  allQuery.split( '&' ).forEach( v => {
    const key = decodeURIComponent( v.split( '=' )[ 0 ] )
    const value = decodeURIComponent( v.split( '=' )[ 1 ] )
    config[ key ] = value
  } )
  return config
}

/**
 * 获取用户配置信息
 */
function callGetUserData() {
  try {
    window.userConfig = {
      Authorization: '',
    } // for code tip
    window.userConfig = null
    if ( osIsIOS() && iosBridge ) {
      // getUserData 是 app端提供给js 调用的函数
      iosBridge.callHandler( 'getUserData', ( responseData ) => {
        let userData = responseData
        if ( userData ) {
          window.userConfig = JSON.parse( userData )
        }
      } )
    } else if ( osIsAndroid() && androidBridge && androidBridge.getUserData ) {
      // getUserData 是 app端提供给js 调用的函数
      let userData = androidBridge.getUserData()
      if ( userData ) {
        window.userConfig = JSON.parse( userData )
      }
    } else if ( isInWeixin() ) {
      window.userConfig = getHrefSearch()
    }
  } catch ( e ) {
    console.log( e )
  }
}


/**
 * Android配置函数
 */
function setAndroidWebViewJavascriptBridge( callback ) {
  if ( window.jsbridge ) {
    androidBridge = window.jsbridge
    window.androidBridge = androidBridge
    callback()
  }
}


/**
 * iOS配置函数
 * @param  callback 异步回调
 */
function setupWebViewJavascriptBridge( callback ) {
  if ( window.WebViewJavascriptBridge ) {
    callback( window.WebViewJavascriptBridge )
  }
  if ( window.WVJBCallbacks ) {
    window.WVJBCallbacks.push( callback )
  }
  window.WVJBCallbacks = [ callback ]
  let WVJBIframe = document.createElement( 'iframe' )
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
  document.documentElement.appendChild( WVJBIframe )
  setTimeout( () => {
    document.documentElement.removeChild( WVJBIframe )
  }, 0 )
}

/**
 *  app  需要调用的js函数(示例)
 * @param val
 * @param price
 */
function callJsFunction() {

}


function getUserInfo() {
  return new Promise( ( resolve, reject ) => {
    function validate() {
      if ( window.userConfig ) {
        resolve( window.userConfig )
      } else {
        reject( '' )
      }
    }
    if ( osIsAndroid() ) {
      setAndroidWebViewJavascriptBridge( () => {
        callGetUserData()
        validate()
      } )
    } else if ( osIsIOS() ) {
      setupWebViewJavascriptBridge( ( bridge ) => {
        iosBridge = bridge
        window.iosBridge = iosBridge
        // app需要的调用js函数需要在此注册（only for iOS）
        bridge.registerHandler( 'callJsFunction', callJsFunction )
        callGetUserData()
        validate()
      } )
    } else {
      callGetUserData()
      validate()
    }
  } )
}

export {
  getUserInfo,
  isInWeixin,
  osIsPC,
  isInEkyApp
}
