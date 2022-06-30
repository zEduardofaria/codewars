function getSum( a,b )
{
   if (a === b) {
     return a
   }
  
   const ordered = [a, b].sort((a,b) => a - b)
   let result = 0
   
   for (let i = 0; i <= Math.abs(ordered[1] - ordered[0]); i++) {
     result += (i + ordered[0])
   }
  
   return result
}