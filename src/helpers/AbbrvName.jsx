
export const abbreviateNames=(name)=>{
    const nameParts = name.split(' ');
    const initials = nameParts.map((part)=>part[0].toUpperCase()).join("")
    return initials;
}