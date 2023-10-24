export const getIpDetails= async (ip)=>{
try {
    const res=await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_eZiXe1ngm5xzmPS0UZ7MMk2iWeYjZ&ipAddress=${ip}`)
    const data= await res.json();
    return data
} catch (error) {
    return error
}
}