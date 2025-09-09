type GameProps = {
    game:{
        id: string;
        name: string;
        image: string
    }
}

const GameCard = ({game} : GameProps) => {
  return (
    <div>GameCard</div>
  )
}
export default GameCard