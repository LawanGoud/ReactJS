const element = (
    <div className="congrats-card-container">
        <h1 className="heading">Congratulations</h1>
        <div className="card">
            <img
                src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
                className="profile-image"
            />
            <h1 className="card-title">Kiran V</h1>
            <p className="card-description">
                Vishu Institute of Computer Education and Technology, Bhimavaram
            </p>
            <img
                className="watch-image"
                src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            />
        </div>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
