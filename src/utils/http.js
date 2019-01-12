function setUrl( url = '', param = {} ) {
  let paramStr = []
  let requestUrl = `${url}?`
  for ( const [ key, value ] of Object.entries( param ) ) {
    paramStr.push( `${encodeURIComponent( key )}=${encodeURIComponent( value )}` )
  }
  requestUrl += paramStr.join( '&' )
  return requestUrl

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

export default {}
