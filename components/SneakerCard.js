


const SneakerCard = ({sneakers}) => {
    return (
        <div>
            {
        sneakers.map((sneaker) => <h3>{`${sneaker.brand} ${sneaker.name}`}</h3>)
      }
        </div>
    )
}

export default SneakerCard
