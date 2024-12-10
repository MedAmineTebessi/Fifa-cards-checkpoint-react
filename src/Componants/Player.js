import PlayerCard from "./PlayerCard";
const PlayerList = ({players}) => {

    return(
        <div style={{display:"flex",flexWrap:"wrap", justifyContent:"center" , backgroundColor:"black", height:"100%"}}>
        {players.map((el, index)=> <PlayerCard {...el} key={index}/> )}
        </div>
        
    )
}


export default PlayerList ;