console.log("jjj")
let binarySearch=(arr,target,lowerBound,UpperBound)=>{
    let low=0
    let high=arr.length-1
    let result=-1
    while(low<=high){
        let mid=Math.floor(low + (high-low)/2)
        if(target===arr[mid]){
            result=mid
           if(lowerBound!=UpperBound){
            if(lowerBound==true){
                high=mid-1  
            }
            if(UpperBound==true){
                low=mid+1
            }
           }
        }else if(target>arr[mid]){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return result
}
let calculator=(arr,target)=>{

    let lowerIndex=binarySearch(arr,target,true,false)
    let upperIndex=binarySearch(arr,target,false,true)
    return (upperIndex-lowerIndex)+1
}
let element=calculator([1,1,2,2,4,5,5,6,6,6,6,9,10,11],11)
console.log(element)
