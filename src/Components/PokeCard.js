const PokeCard = ({ pokeData }) => {
    //  console.log('hello',{pokeData});
    return (
        <>
            <section className="main-card--cointainer">
                {pokeData.map((curEle, index) => {
                    const { images, name, attacks, types, hp } = curEle;
                    return (
                        <div className="card-container" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <img src={images.large} alt="images" className="card-media" />
                                    <div className="card-alng">
                                        <h2 className="card-title"> {name} </h2>
                                        <div className="hp-algn">HP: {hp}</div>
                                        <span className="card-author">Attacks:<br />  {attacks.map(attack => {
                                            return (<span className="card-author-detls">{attack.name} </span>)
                                        })}</span>
                                        <span className="card-author">Types:<br /> <span className="card-author-detls">{types}</span> </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </section>
        </>
    );
};

export default PokeCard;