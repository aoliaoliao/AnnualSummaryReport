import { getUserInfo } from './webView.js'

function setUrl( url = '', param = {} ) {
  let paramStr = []
  let requestUrl = `${url}?`
  for ( const [ key, value ] of Object.entries( param ) ) {
    paramStr.push( `${encodeURIComponent( key )}=${encodeURIComponent( value )}` )
  }
  requestUrl += paramStr.join( '&' )
  return requestUrl

}

export const getApiBaseURL = () => {
  let apiBaseUrl = `${document.location.protocol}//${document.location.hostname}:8001`
  if ( apiBaseUrl.indexOf( 'http://localhost' ) != -1 || apiBaseUrl.indexOf( '192.168.' ) != -1 ) { apiBaseUrl = 'https://git.lctest.cn:8001' }
  return apiBaseUrl
}

export const ajax = ( url, param ) => new Promise( ( ( resolve, reject ) => {
  const xhr = new XMLHttpRequest()
  xhr.open( 'GET', setUrl( url, param ) )
  xhr.onreadystatechange = function() {
    if ( xhr.readyState === XMLHttpRequest.DONE ) {
      if ( xhr.status === 200 ) {
        resolve( xhr.response )
      } else {
        reject( xhr.response )
      }
    }
  }
  xhr.timeout = 10000
  xhr.ontimeout = function() {
    reject( '链接超时！' )
  }
  xhr.onerror = function() {
    reject( '网络错误！' )
  }
  xhr.onabort = function() {
    reject( '请求取消！' )
  }
  xhr.send()
} ) )

export const $post = ( url, param, data ) => new Promise( ( ( resolve, reject ) => {
  const xhr = new XMLHttpRequest()
  xhr.open( 'POST', setUrl( url, param ) )

  // 发送合适的请求头信息
  xhr.setRequestHeader( 'Content-type', 'application/json' )

  xhr.timeout = 10000

  xhr.onreadystatechange = function() {
    if ( xhr.readyState === XMLHttpRequest.DONE ) {
      if ( xhr.status === 200 ) {
        resolve( xhr.response )
      } else {
        reject( xhr.response )
      }
    }
  }

  xhr.ontimeout = function() {
    reject( '链接超时！' )
  }
  xhr.onerror = function() {
    reject( '网络错误！' )
  }
  xhr.onabort = function() {
    reject( '请求取消！' )
  }

  xhr.send( JSON.stringify( data ) )

} ) )

export const track = ( data ) => {
  const token = getUserInfo()
  const apiBaseUrl = getApiBaseURL()
  const url = `${apiBaseUrl}/api/admin2/doctor/user/sensorsTrack`
  $post( url, {
    token
  }, data )
}


export default {}
