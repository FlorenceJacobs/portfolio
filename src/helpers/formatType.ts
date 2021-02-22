const formatType = (techno:string) : string => {
    let color : string ;
    switch (techno) {
        case 'Html':
            color = 'indigo lighten-5'
            break;
        default :
            color = 'indigo lighten-5';
            break;
    }
    return `chip ${color}`;
}
export default formatType;