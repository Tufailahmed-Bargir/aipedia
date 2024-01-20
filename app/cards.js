import data from './data'
function Cards(props) {
    return (
      <>
        <div className="container">
          <div className="row">
            {data.map((card) => (
              <div className="col-md-3" key={data.id}>
                <div className="card" style={{ width: '18rem', height: '16rem' /* Adjust height as needed */ }}>
                  
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{card.toolName}</h5> {/* Assuming card object has a 'title' property */}
                    <p className="card-text">{card.description}</p> {/* Assuming card object has a 'details' property */}
                    <a href="#" className="btn btn-primary mt-auto">Use this tool</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default Cards;
  