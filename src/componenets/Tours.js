import Card from "./Card";

function Tours({tours, removeHandler}) {
    return (
        <div className="container">
            <div className="title">
                <h2>Plan With Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card {...tour} removeHandler={removeHandler} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours;