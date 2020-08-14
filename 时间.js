function getmax(arr){
  let map=new Map()
  let max=1
  let result=arr[0]
  for(let i in arr){
    if(map.has(arr[i])){      
      let num = map.get(arr[i])
      map.delete(arr[i])
      map.set(arr[i],++num)
      if(num>max){
        max=num
        result=arr[i]
      }
    }else{
      map.set(arr[i],1)
    }
  }
  console.log(result)
}

getmax([2,2,6,7,6,6,6,8,8,9,0])