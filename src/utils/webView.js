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
 * Android配置函数
 */
function setAndroidWebViewJavascriptBridge( callback ) {
  if ( window.jsbridge ) {
    callback( window.jsbridge )
  } else {
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


function getUserInfo() {

  return new Promise( ( resolve, reject ) => {
    let userData = getHrefSearch()
    if ( userData.token ) {
      resolve( userData.token )
    } else {
      reject()
    }
  } )
}

function isInEkyApp() {
  return new Promise( ( resolve, reject ) => {
    if ( osIsAndroid() ) {
      setAndroidWebViewJavascriptBridge( ( bridge ) => {
        if ( bridge ) {
          window.androidBridge = bridge
          resolve()
        } else {
          reject()
        }
      } )
    } else if ( osIsIOS() ) {
      setupWebViewJavascriptBridge( ( bridge ) => {
        if ( bridge ) {
          window.iosBridge = bridge
          resolve()
        } else {
          reject()
        }
      } )
    } else {
      reject()
    }
  } )
}


export {
  getUserInfo,
  isInWeixin,
  osIsPC,
  isInEkyApp,
}
