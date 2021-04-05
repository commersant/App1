import React from 'react';

export class Post extends React.Component{
    constructor() {
        super();
        this.state = {
            post : {}
        };
    }
    componentDidMount(){
        const formData = new FormData();
        formData.append('id', 1);
        fetch('http://201.vozhzhaev.ru/php/getPost.php',{
            method : 'POST',
            body : formData
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    post : {
                        title : result.title,
                        text : result.text,
                        author : result.author,
                        date_added : result.date_added
                    }
                })
            });
    }
    render(){
        return (
            <>
                <h1 className="text-center">{this.state.post.title}</h1>
                <div className="mx-auto entry-text">
                    {this.state.post.text}
                </div>
                <div className="my-3 mx-auto col-md-8 entry-meta">
                    <p className="fa-user" aria-hidden="true"></p>Автор : {this.state.post.author}
                    <p className="fa-clock" aria-hidden="true"></p>Дата добавления : {this.state.post.date_added}
                </div>
            </>
        );
    }
}