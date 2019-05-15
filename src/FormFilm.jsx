import React, { Component } from 'react';

class FormFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

        fetch(url, config)
            .then(res => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Movie ID ${res} added!`);
                } 
            }).catch((e) => {
                console.error(e);
                alert("Error submitting movie!");
            });
    }

    render() {
        return (
            <div className="form">
                <h1>Film Form</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="name">Film Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Poster URL</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Submit" />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default FormFilm;
