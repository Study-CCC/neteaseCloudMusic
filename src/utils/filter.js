export const numFilter = (value)=>{
    if(value>100000000){
       let num = parseInt(value/100000000) 
       let decimal = parseInt((value%100000000)/10000000)
       return num + (decimal?('.'+decimal+'亿'):'亿')
    }else if(value>100000){
      let num = parseInt(value/10000)
      let decimal = parseInt((value%10000)/1000)
      return num + (decimal?('.'+decimal+'万'):'万')
    }else return value}

export const timeFilter = (value)=>{
    let time = ''
    if(value>1000){
      var minutes = parseInt((value % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = parseInt((value % (1000 * 60)) / 1000);
    }
    else return '00:00'
    time = (''+minutes).padStart(2, '0')+':'+(''+seconds).padStart(2, '0')
    return time
  }
export const createTimeFilter = value=>{
    let nowTime = new Date()
    let time = new Date(value)
    let nowYear = nowTime.getFullYear()
    let nowMonth = nowTime.getMonth()
    let nowDay = nowTime.getDate()
    let year = time.getFullYear()
    let month = time.getMonth()
    let day = time.getDate()
    if(nowDay==day&&nowYear==year&&nowMonth==month){
      let hour = time.getHours()
      let nowHour = nowTime.getHours()
      let minutes = time.getMinutes()
      let nowMinutes = nowTime.getMinutes()
      if(hour==nowHour) return (nowMinutes-minutes)+'分钟前'
      else return (hour+1+'').padStart(2, '0')+':'+(minutes+'').padStart(2, '0')
      }
    return year + '-' + (month+1+'').padStart(2, '0') + '-' + (day+'').padStart(2, '0')
  }