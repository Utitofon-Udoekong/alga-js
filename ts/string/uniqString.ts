export const uniqid = (lastId: number = 0): string => {
  let newId: string = ''
  const chars: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const times: string = String(Math.abs(new Date().valueOf()))
  
  if(Number(lastId) >= 1) {
    newId += String(Number(lastId) + 1)
  }
  
  for(let i = 0; i < times.length; i++) {
    newId += chars.charAt(Math.floor(Math.random() * chars.length))
    newId += times.charAt(i)
  }
    
  return newId
}
